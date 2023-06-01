/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [1.0, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "gateway_cl/listteas"], "isController": false}, {"data": [1.0, 500, 1500, "gateway_cl/listteas-0"], "isController": false}, {"data": [1.0, 500, 1500, "gateway_0/helloauth"], "isController": false}, {"data": [1.0, 500, 1500, "gateway_cl/helloauth-2"], "isController": false}, {"data": [1.0, 500, 1500, "gateway_cl/helloauth-0"], "isController": false}, {"data": [1.0, 500, 1500, "gateway_cl/helloauth-1"], "isController": false}, {"data": [1.0, 500, 1500, "teas_rs/teas/hello/tea"], "isController": false}, {"data": [1.0, 500, 1500, "gateway_rs/helloauth"], "isController": false}, {"data": [1.0, 500, 1500, "gateway_cl/helloauth"], "isController": false}, {"data": [1.0, 500, 1500, "gateway_cl/listteas-1"], "isController": false}, {"data": [1.0, 500, 1500, "gateway_cl/listteas-2"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 24, 0, 0.0, 26.791666666666664, 3, 81, 21.5, 63.0, 80.75, 81.0, 220.1834862385321, 429.4366399082569, 135.2852637614679], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["gateway_cl/listteas", 2, 0, 0.0, 80.5, 80, 81, 80.5, 81.0, 81.0, 81.0, 24.691358024691358, 144.24189814814815, 17.9639274691358], "isController": false}, {"data": ["gateway_cl/listteas-0", 2, 0, 0.0, 42.5, 42, 43, 42.5, 43.0, 43.0, 43.0, 46.51162790697674, 18.259447674418606, 8.085029069767442], "isController": false}, {"data": ["gateway_0/helloauth", 2, 0, 0.0, 46.0, 46, 46, 46.0, 46.0, 46.0, 46.0, 43.47826086956522, 4.118546195652174, 5.307404891304348], "isController": false}, {"data": ["gateway_cl/helloauth-2", 2, 0, 0.0, 16.0, 16, 16, 16.0, 16.0, 16.0, 16.0, 125.0, 570.80078125, 148.8037109375], "isController": false}, {"data": ["gateway_cl/helloauth-0", 2, 0, 0.0, 3.0, 3, 3, 3.0, 3.0, 3.0, 3.0, 666.6666666666666, 194.01041666666666, 116.53645833333333], "isController": false}, {"data": ["gateway_cl/helloauth-1", 2, 0, 0.0, 3.0, 3, 3, 3.0, 3.0, 3.0, 3.0, 666.6666666666666, 368.4895833333333, 139.32291666666666], "isController": false}, {"data": ["teas_rs/teas/hello/tea", 4, 0, 0.0, 28.0, 10, 46, 28.0, 46.0, 46.0, 46.0, 66.66666666666667, 17.1875, 46.321614583333336], "isController": false}, {"data": ["gateway_rs/helloauth", 2, 0, 0.0, 18.5, 18, 19, 18.5, 19.0, 19.0, 19.0, 105.26315789473684, 30.53042763157895, 132.4013157894737], "isController": false}, {"data": ["gateway_cl/helloauth", 2, 0, 0.0, 24.0, 24, 24, 24.0, 24.0, 24.0, 24.0, 83.33333333333333, 450.8463541666667, 131.18489583333334], "isController": false}, {"data": ["gateway_cl/listteas-1", 2, 0, 0.0, 5.0, 5, 5, 5.0, 5.0, 5.0, 5.0, 400.0, 256.25, 62.5], "isController": false}, {"data": ["gateway_cl/listteas-2", 2, 0, 0.0, 27.0, 27, 27, 27.0, 27.0, 27.0, 27.0, 74.07407407407408, 356.1921296296296, 29.441550925925927], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 24, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
