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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 32.0, "minX": 0.0, "maxY": 408.0, "series": [{"data": [[0.0, 32.0], [0.1, 37.0], [0.2, 41.0], [0.3, 45.0], [0.4, 46.0], [0.5, 49.0], [0.6, 50.0], [0.7, 51.0], [0.8, 53.0], [0.9, 54.0], [1.0, 55.0], [1.1, 55.0], [1.2, 57.0], [1.3, 58.0], [1.4, 59.0], [1.5, 59.0], [1.6, 60.0], [1.7, 61.0], [1.8, 61.0], [1.9, 62.0], [2.0, 63.0], [2.1, 64.0], [2.2, 64.0], [2.3, 65.0], [2.4, 65.0], [2.5, 66.0], [2.6, 67.0], [2.7, 67.0], [2.8, 67.0], [2.9, 68.0], [3.0, 68.0], [3.1, 68.0], [3.2, 68.0], [3.3, 69.0], [3.4, 69.0], [3.5, 70.0], [3.6, 70.0], [3.7, 70.0], [3.8, 70.0], [3.9, 70.0], [4.0, 71.0], [4.1, 71.0], [4.2, 71.0], [4.3, 72.0], [4.4, 72.0], [4.5, 73.0], [4.6, 73.0], [4.7, 73.0], [4.8, 73.0], [4.9, 74.0], [5.0, 74.0], [5.1, 74.0], [5.2, 75.0], [5.3, 75.0], [5.4, 75.0], [5.5, 76.0], [5.6, 76.0], [5.7, 76.0], [5.8, 76.0], [5.9, 76.0], [6.0, 77.0], [6.1, 77.0], [6.2, 77.0], [6.3, 77.0], [6.4, 77.0], [6.5, 78.0], [6.6, 78.0], [6.7, 78.0], [6.8, 78.0], [6.9, 79.0], [7.0, 79.0], [7.1, 79.0], [7.2, 79.0], [7.3, 79.0], [7.4, 80.0], [7.5, 80.0], [7.6, 80.0], [7.7, 80.0], [7.8, 81.0], [7.9, 81.0], [8.0, 81.0], [8.1, 81.0], [8.2, 81.0], [8.3, 81.0], [8.4, 82.0], [8.5, 82.0], [8.6, 82.0], [8.7, 82.0], [8.8, 82.0], [8.9, 82.0], [9.0, 83.0], [9.1, 83.0], [9.2, 83.0], [9.3, 83.0], [9.4, 83.0], [9.5, 83.0], [9.6, 84.0], [9.7, 84.0], [9.8, 84.0], [9.9, 84.0], [10.0, 84.0], [10.1, 84.0], [10.2, 84.0], [10.3, 85.0], [10.4, 85.0], [10.5, 85.0], [10.6, 85.0], [10.7, 85.0], [10.8, 86.0], [10.9, 86.0], [11.0, 86.0], [11.1, 86.0], [11.2, 86.0], [11.3, 86.0], [11.4, 86.0], [11.5, 87.0], [11.6, 87.0], [11.7, 87.0], [11.8, 87.0], [11.9, 87.0], [12.0, 87.0], [12.1, 87.0], [12.2, 87.0], [12.3, 87.0], [12.4, 88.0], [12.5, 88.0], [12.6, 88.0], [12.7, 88.0], [12.8, 88.0], [12.9, 88.0], [13.0, 88.0], [13.1, 89.0], [13.2, 89.0], [13.3, 89.0], [13.4, 89.0], [13.5, 89.0], [13.6, 89.0], [13.7, 89.0], [13.8, 89.0], [13.9, 90.0], [14.0, 90.0], [14.1, 90.0], [14.2, 90.0], [14.3, 90.0], [14.4, 90.0], [14.5, 90.0], [14.6, 90.0], [14.7, 91.0], [14.8, 91.0], [14.9, 91.0], [15.0, 91.0], [15.1, 91.0], [15.2, 91.0], [15.3, 91.0], [15.4, 91.0], [15.5, 91.0], [15.6, 92.0], [15.7, 92.0], [15.8, 92.0], [15.9, 92.0], [16.0, 92.0], [16.1, 92.0], [16.2, 92.0], [16.3, 92.0], [16.4, 92.0], [16.5, 93.0], [16.6, 93.0], [16.7, 93.0], [16.8, 93.0], [16.9, 93.0], [17.0, 93.0], [17.1, 94.0], [17.2, 94.0], [17.3, 94.0], [17.4, 94.0], [17.5, 94.0], [17.6, 94.0], [17.7, 94.0], [17.8, 94.0], [17.9, 95.0], [18.0, 95.0], [18.1, 95.0], [18.2, 95.0], [18.3, 95.0], [18.4, 95.0], [18.5, 95.0], [18.6, 95.0], [18.7, 95.0], [18.8, 96.0], [18.9, 96.0], [19.0, 96.0], [19.1, 96.0], [19.2, 96.0], [19.3, 96.0], [19.4, 96.0], [19.5, 97.0], [19.6, 97.0], [19.7, 97.0], [19.8, 97.0], [19.9, 97.0], [20.0, 97.0], [20.1, 97.0], [20.2, 97.0], [20.3, 98.0], [20.4, 98.0], [20.5, 98.0], [20.6, 98.0], [20.7, 98.0], [20.8, 98.0], [20.9, 98.0], [21.0, 98.0], [21.1, 99.0], [21.2, 99.0], [21.3, 99.0], [21.4, 99.0], [21.5, 99.0], [21.6, 99.0], [21.7, 99.0], [21.8, 99.0], [21.9, 100.0], [22.0, 100.0], [22.1, 100.0], [22.2, 100.0], [22.3, 100.0], [22.4, 100.0], [22.5, 100.0], [22.6, 100.0], [22.7, 100.0], [22.8, 100.0], [22.9, 101.0], [23.0, 101.0], [23.1, 101.0], [23.2, 101.0], [23.3, 101.0], [23.4, 101.0], [23.5, 101.0], [23.6, 101.0], [23.7, 101.0], [23.8, 102.0], [23.9, 102.0], [24.0, 102.0], [24.1, 102.0], [24.2, 102.0], [24.3, 102.0], [24.4, 102.0], [24.5, 102.0], [24.6, 103.0], [24.7, 103.0], [24.8, 103.0], [24.9, 103.0], [25.0, 103.0], [25.1, 103.0], [25.2, 103.0], [25.3, 103.0], [25.4, 103.0], [25.5, 104.0], [25.6, 104.0], [25.7, 104.0], [25.8, 104.0], [25.9, 104.0], [26.0, 104.0], [26.1, 104.0], [26.2, 104.0], [26.3, 104.0], [26.4, 104.0], [26.5, 105.0], [26.6, 105.0], [26.7, 105.0], [26.8, 105.0], [26.9, 105.0], [27.0, 105.0], [27.1, 105.0], [27.2, 105.0], [27.3, 106.0], [27.4, 106.0], [27.5, 106.0], [27.6, 106.0], [27.7, 106.0], [27.8, 106.0], [27.9, 106.0], [28.0, 106.0], [28.1, 107.0], [28.2, 107.0], [28.3, 107.0], [28.4, 107.0], [28.5, 107.0], [28.6, 107.0], [28.7, 107.0], [28.8, 107.0], [28.9, 108.0], [29.0, 108.0], [29.1, 108.0], [29.2, 108.0], [29.3, 108.0], [29.4, 108.0], [29.5, 108.0], [29.6, 108.0], [29.7, 108.0], [29.8, 108.0], [29.9, 108.0], [30.0, 109.0], [30.1, 109.0], [30.2, 109.0], [30.3, 109.0], [30.4, 109.0], [30.5, 109.0], [30.6, 109.0], [30.7, 109.0], [30.8, 109.0], [30.9, 109.0], [31.0, 110.0], [31.1, 110.0], [31.2, 110.0], [31.3, 110.0], [31.4, 110.0], [31.5, 110.0], [31.6, 110.0], [31.7, 110.0], [31.8, 110.0], [31.9, 111.0], [32.0, 111.0], [32.1, 111.0], [32.2, 111.0], [32.3, 111.0], [32.4, 111.0], [32.5, 111.0], [32.6, 111.0], [32.7, 111.0], [32.8, 112.0], [32.9, 112.0], [33.0, 112.0], [33.1, 112.0], [33.2, 112.0], [33.3, 112.0], [33.4, 112.0], [33.5, 112.0], [33.6, 112.0], [33.7, 112.0], [33.8, 113.0], [33.9, 113.0], [34.0, 113.0], [34.1, 113.0], [34.2, 113.0], [34.3, 113.0], [34.4, 113.0], [34.5, 113.0], [34.6, 113.0], [34.7, 113.0], [34.8, 113.0], [34.9, 113.0], [35.0, 114.0], [35.1, 114.0], [35.2, 114.0], [35.3, 114.0], [35.4, 114.0], [35.5, 114.0], [35.6, 114.0], [35.7, 114.0], [35.8, 114.0], [35.9, 115.0], [36.0, 115.0], [36.1, 115.0], [36.2, 115.0], [36.3, 115.0], [36.4, 115.0], [36.5, 115.0], [36.6, 115.0], [36.7, 115.0], [36.8, 116.0], [36.9, 116.0], [37.0, 116.0], [37.1, 116.0], [37.2, 116.0], [37.3, 116.0], [37.4, 116.0], [37.5, 116.0], [37.6, 117.0], [37.7, 117.0], [37.8, 117.0], [37.9, 117.0], [38.0, 117.0], [38.1, 117.0], [38.2, 117.0], [38.3, 117.0], [38.4, 118.0], [38.5, 118.0], [38.6, 118.0], [38.7, 118.0], [38.8, 118.0], [38.9, 118.0], [39.0, 118.0], [39.1, 118.0], [39.2, 118.0], [39.3, 118.0], [39.4, 119.0], [39.5, 119.0], [39.6, 119.0], [39.7, 119.0], [39.8, 119.0], [39.9, 119.0], [40.0, 119.0], [40.1, 119.0], [40.2, 120.0], [40.3, 120.0], [40.4, 120.0], [40.5, 120.0], [40.6, 120.0], [40.7, 120.0], [40.8, 120.0], [40.9, 120.0], [41.0, 121.0], [41.1, 121.0], [41.2, 121.0], [41.3, 121.0], [41.4, 121.0], [41.5, 121.0], [41.6, 121.0], [41.7, 121.0], [41.8, 121.0], [41.9, 121.0], [42.0, 122.0], [42.1, 122.0], [42.2, 122.0], [42.3, 122.0], [42.4, 122.0], [42.5, 122.0], [42.6, 122.0], [42.7, 122.0], [42.8, 122.0], [42.9, 122.0], [43.0, 122.0], [43.1, 122.0], [43.2, 123.0], [43.3, 123.0], [43.4, 123.0], [43.5, 123.0], [43.6, 123.0], [43.7, 123.0], [43.8, 123.0], [43.9, 123.0], [44.0, 123.0], [44.1, 123.0], [44.2, 124.0], [44.3, 124.0], [44.4, 124.0], [44.5, 124.0], [44.6, 124.0], [44.7, 124.0], [44.8, 124.0], [44.9, 124.0], [45.0, 124.0], [45.1, 124.0], [45.2, 125.0], [45.3, 125.0], [45.4, 125.0], [45.5, 125.0], [45.6, 125.0], [45.7, 125.0], [45.8, 125.0], [45.9, 125.0], [46.0, 125.0], [46.1, 126.0], [46.2, 126.0], [46.3, 126.0], [46.4, 126.0], [46.5, 126.0], [46.6, 126.0], [46.7, 126.0], [46.8, 126.0], [46.9, 126.0], [47.0, 127.0], [47.1, 127.0], [47.2, 127.0], [47.3, 127.0], [47.4, 127.0], [47.5, 127.0], [47.6, 127.0], [47.7, 127.0], [47.8, 128.0], [47.9, 128.0], [48.0, 128.0], [48.1, 128.0], [48.2, 128.0], [48.3, 128.0], [48.4, 128.0], [48.5, 128.0], [48.6, 128.0], [48.7, 128.0], [48.8, 129.0], [48.9, 129.0], [49.0, 129.0], [49.1, 129.0], [49.2, 129.0], [49.3, 129.0], [49.4, 129.0], [49.5, 129.0], [49.6, 129.0], [49.7, 130.0], [49.8, 130.0], [49.9, 130.0], [50.0, 130.0], [50.1, 130.0], [50.2, 130.0], [50.3, 130.0], [50.4, 130.0], [50.5, 130.0], [50.6, 131.0], [50.7, 131.0], [50.8, 131.0], [50.9, 131.0], [51.0, 131.0], [51.1, 131.0], [51.2, 131.0], [51.3, 131.0], [51.4, 131.0], [51.5, 132.0], [51.6, 132.0], [51.7, 132.0], [51.8, 132.0], [51.9, 132.0], [52.0, 132.0], [52.1, 132.0], [52.2, 132.0], [52.3, 132.0], [52.4, 133.0], [52.5, 133.0], [52.6, 133.0], [52.7, 133.0], [52.8, 133.0], [52.9, 133.0], [53.0, 133.0], [53.1, 133.0], [53.2, 133.0], [53.3, 134.0], [53.4, 134.0], [53.5, 134.0], [53.6, 134.0], [53.7, 134.0], [53.8, 134.0], [53.9, 134.0], [54.0, 134.0], [54.1, 134.0], [54.2, 134.0], [54.3, 135.0], [54.4, 135.0], [54.5, 135.0], [54.6, 135.0], [54.7, 135.0], [54.8, 135.0], [54.9, 135.0], [55.0, 136.0], [55.1, 136.0], [55.2, 136.0], [55.3, 136.0], [55.4, 136.0], [55.5, 136.0], [55.6, 136.0], [55.7, 136.0], [55.8, 137.0], [55.9, 137.0], [56.0, 137.0], [56.1, 137.0], [56.2, 137.0], [56.3, 137.0], [56.4, 137.0], [56.5, 137.0], [56.6, 137.0], [56.7, 138.0], [56.8, 138.0], [56.9, 138.0], [57.0, 138.0], [57.1, 138.0], [57.2, 138.0], [57.3, 138.0], [57.4, 138.0], [57.5, 139.0], [57.6, 139.0], [57.7, 139.0], [57.8, 139.0], [57.9, 139.0], [58.0, 139.0], [58.1, 139.0], [58.2, 139.0], [58.3, 140.0], [58.4, 140.0], [58.5, 140.0], [58.6, 140.0], [58.7, 140.0], [58.8, 140.0], [58.9, 140.0], [59.0, 140.0], [59.1, 140.0], [59.2, 141.0], [59.3, 141.0], [59.4, 141.0], [59.5, 141.0], [59.6, 141.0], [59.7, 141.0], [59.8, 141.0], [59.9, 141.0], [60.0, 141.0], [60.1, 142.0], [60.2, 142.0], [60.3, 142.0], [60.4, 142.0], [60.5, 142.0], [60.6, 142.0], [60.7, 142.0], [60.8, 142.0], [60.9, 143.0], [61.0, 143.0], [61.1, 143.0], [61.2, 143.0], [61.3, 143.0], [61.4, 143.0], [61.5, 143.0], [61.6, 143.0], [61.7, 143.0], [61.8, 144.0], [61.9, 144.0], [62.0, 144.0], [62.1, 144.0], [62.2, 144.0], [62.3, 144.0], [62.4, 144.0], [62.5, 145.0], [62.6, 145.0], [62.7, 145.0], [62.8, 145.0], [62.9, 145.0], [63.0, 145.0], [63.1, 145.0], [63.2, 146.0], [63.3, 146.0], [63.4, 146.0], [63.5, 146.0], [63.6, 146.0], [63.7, 146.0], [63.8, 146.0], [63.9, 146.0], [64.0, 147.0], [64.1, 147.0], [64.2, 147.0], [64.3, 147.0], [64.4, 147.0], [64.5, 147.0], [64.6, 147.0], [64.7, 148.0], [64.8, 148.0], [64.9, 148.0], [65.0, 148.0], [65.1, 148.0], [65.2, 148.0], [65.3, 149.0], [65.4, 149.0], [65.5, 149.0], [65.6, 149.0], [65.7, 149.0], [65.8, 149.0], [65.9, 150.0], [66.0, 150.0], [66.1, 150.0], [66.2, 150.0], [66.3, 150.0], [66.4, 151.0], [66.5, 151.0], [66.6, 151.0], [66.7, 151.0], [66.8, 151.0], [66.9, 151.0], [67.0, 151.0], [67.1, 152.0], [67.2, 152.0], [67.3, 152.0], [67.4, 152.0], [67.5, 152.0], [67.6, 152.0], [67.7, 152.0], [67.8, 153.0], [67.9, 153.0], [68.0, 153.0], [68.1, 153.0], [68.2, 153.0], [68.3, 153.0], [68.4, 153.0], [68.5, 153.0], [68.6, 154.0], [68.7, 154.0], [68.8, 154.0], [68.9, 154.0], [69.0, 154.0], [69.1, 154.0], [69.2, 155.0], [69.3, 155.0], [69.4, 155.0], [69.5, 155.0], [69.6, 155.0], [69.7, 155.0], [69.8, 155.0], [69.9, 156.0], [70.0, 156.0], [70.1, 156.0], [70.2, 156.0], [70.3, 156.0], [70.4, 156.0], [70.5, 157.0], [70.6, 157.0], [70.7, 157.0], [70.8, 157.0], [70.9, 157.0], [71.0, 157.0], [71.1, 157.0], [71.2, 158.0], [71.3, 158.0], [71.4, 158.0], [71.5, 158.0], [71.6, 158.0], [71.7, 159.0], [71.8, 159.0], [71.9, 159.0], [72.0, 159.0], [72.1, 159.0], [72.2, 159.0], [72.3, 159.0], [72.4, 160.0], [72.5, 160.0], [72.6, 160.0], [72.7, 160.0], [72.8, 160.0], [72.9, 160.0], [73.0, 161.0], [73.1, 161.0], [73.2, 161.0], [73.3, 161.0], [73.4, 161.0], [73.5, 162.0], [73.6, 162.0], [73.7, 162.0], [73.8, 162.0], [73.9, 162.0], [74.0, 162.0], [74.1, 162.0], [74.2, 163.0], [74.3, 163.0], [74.4, 163.0], [74.5, 163.0], [74.6, 163.0], [74.7, 164.0], [74.8, 164.0], [74.9, 164.0], [75.0, 164.0], [75.1, 164.0], [75.2, 164.0], [75.3, 165.0], [75.4, 165.0], [75.5, 165.0], [75.6, 165.0], [75.7, 165.0], [75.8, 166.0], [75.9, 166.0], [76.0, 166.0], [76.1, 166.0], [76.2, 166.0], [76.3, 166.0], [76.4, 167.0], [76.5, 167.0], [76.6, 167.0], [76.7, 167.0], [76.8, 168.0], [76.9, 168.0], [77.0, 168.0], [77.1, 168.0], [77.2, 169.0], [77.3, 169.0], [77.4, 169.0], [77.5, 169.0], [77.6, 169.0], [77.7, 170.0], [77.8, 170.0], [77.9, 170.0], [78.0, 170.0], [78.1, 170.0], [78.2, 170.0], [78.3, 171.0], [78.4, 171.0], [78.5, 171.0], [78.6, 171.0], [78.7, 171.0], [78.8, 172.0], [78.9, 172.0], [79.0, 172.0], [79.1, 172.0], [79.2, 172.0], [79.3, 173.0], [79.4, 173.0], [79.5, 173.0], [79.6, 173.0], [79.7, 174.0], [79.8, 174.0], [79.9, 174.0], [80.0, 174.0], [80.1, 174.0], [80.2, 175.0], [80.3, 175.0], [80.4, 175.0], [80.5, 175.0], [80.6, 176.0], [80.7, 176.0], [80.8, 176.0], [80.9, 176.0], [81.0, 177.0], [81.1, 177.0], [81.2, 177.0], [81.3, 177.0], [81.4, 178.0], [81.5, 178.0], [81.6, 178.0], [81.7, 179.0], [81.8, 179.0], [81.9, 179.0], [82.0, 179.0], [82.1, 180.0], [82.2, 180.0], [82.3, 180.0], [82.4, 181.0], [82.5, 181.0], [82.6, 181.0], [82.7, 182.0], [82.8, 182.0], [82.9, 182.0], [83.0, 182.0], [83.1, 183.0], [83.2, 183.0], [83.3, 183.0], [83.4, 183.0], [83.5, 184.0], [83.6, 184.0], [83.7, 184.0], [83.8, 185.0], [83.9, 185.0], [84.0, 185.0], [84.1, 186.0], [84.2, 186.0], [84.3, 186.0], [84.4, 187.0], [84.5, 187.0], [84.6, 187.0], [84.7, 187.0], [84.8, 188.0], [84.9, 188.0], [85.0, 188.0], [85.1, 188.0], [85.2, 189.0], [85.3, 189.0], [85.4, 190.0], [85.5, 190.0], [85.6, 190.0], [85.7, 191.0], [85.8, 191.0], [85.9, 191.0], [86.0, 192.0], [86.1, 192.0], [86.2, 193.0], [86.3, 193.0], [86.4, 194.0], [86.5, 194.0], [86.6, 194.0], [86.7, 195.0], [86.8, 196.0], [86.9, 196.0], [87.0, 196.0], [87.1, 197.0], [87.2, 197.0], [87.3, 198.0], [87.4, 198.0], [87.5, 198.0], [87.6, 199.0], [87.7, 199.0], [87.8, 199.0], [87.9, 199.0], [88.0, 200.0], [88.1, 200.0], [88.2, 200.0], [88.3, 201.0], [88.4, 201.0], [88.5, 202.0], [88.6, 202.0], [88.7, 202.0], [88.8, 203.0], [88.9, 203.0], [89.0, 204.0], [89.1, 204.0], [89.2, 205.0], [89.3, 205.0], [89.4, 206.0], [89.5, 206.0], [89.6, 207.0], [89.7, 207.0], [89.8, 208.0], [89.9, 208.0], [90.0, 208.0], [90.1, 208.0], [90.2, 209.0], [90.3, 209.0], [90.4, 210.0], [90.5, 210.0], [90.6, 211.0], [90.7, 211.0], [90.8, 211.0], [90.9, 212.0], [91.0, 212.0], [91.1, 212.0], [91.2, 213.0], [91.3, 213.0], [91.4, 214.0], [91.5, 214.0], [91.6, 215.0], [91.7, 215.0], [91.8, 215.0], [91.9, 215.0], [92.0, 216.0], [92.1, 216.0], [92.2, 217.0], [92.3, 217.0], [92.4, 218.0], [92.5, 218.0], [92.6, 219.0], [92.7, 219.0], [92.8, 220.0], [92.9, 220.0], [93.0, 221.0], [93.1, 221.0], [93.2, 222.0], [93.3, 223.0], [93.4, 223.0], [93.5, 224.0], [93.6, 225.0], [93.7, 225.0], [93.8, 226.0], [93.9, 226.0], [94.0, 227.0], [94.1, 228.0], [94.2, 228.0], [94.3, 229.0], [94.4, 230.0], [94.5, 230.0], [94.6, 230.0], [94.7, 232.0], [94.8, 232.0], [94.9, 232.0], [95.0, 233.0], [95.1, 233.0], [95.2, 234.0], [95.3, 235.0], [95.4, 236.0], [95.5, 236.0], [95.6, 237.0], [95.7, 239.0], [95.8, 240.0], [95.9, 241.0], [96.0, 242.0], [96.1, 243.0], [96.2, 245.0], [96.3, 245.0], [96.4, 246.0], [96.5, 248.0], [96.6, 249.0], [96.7, 251.0], [96.8, 252.0], [96.9, 254.0], [97.0, 255.0], [97.1, 257.0], [97.2, 258.0], [97.3, 259.0], [97.4, 261.0], [97.5, 263.0], [97.6, 263.0], [97.7, 265.0], [97.8, 266.0], [97.9, 268.0], [98.0, 270.0], [98.1, 271.0], [98.2, 271.0], [98.3, 273.0], [98.4, 275.0], [98.5, 277.0], [98.6, 279.0], [98.7, 283.0], [98.8, 285.0], [98.9, 288.0], [99.0, 292.0], [99.1, 295.0], [99.2, 303.0], [99.3, 307.0], [99.4, 312.0], [99.5, 321.0], [99.6, 324.0], [99.7, 330.0], [99.8, 339.0], [99.9, 344.0], [100.0, 408.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4226.0, "series": [{"data": [[0.0, 1397.0], [300.0, 53.0], [200.0, 713.0], [100.0, 4226.0], [400.0, 1.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 6390.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 6390.0, "series": [{"data": [[0.0, 6390.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 99.24866979655705, "minX": 1.685745E12, "maxY": 99.24866979655705, "series": [{"data": [[1.685745E12, 99.24866979655705]], "isOverall": false, "label": "Session cookie", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.685745E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 54.0, "minX": 2.0, "maxY": 220.0, "series": [{"data": [[2.0, 103.5], [35.0, 148.5], [39.0, 145.75], [45.0, 220.0], [3.0, 94.0], [51.0, 133.66666666666666], [53.0, 132.0], [55.0, 115.5], [57.0, 191.0], [58.0, 88.5], [61.0, 54.0], [60.0, 164.0], [66.0, 75.0], [65.0, 107.5], [71.0, 80.5], [69.0, 73.66666666666667], [75.0, 68.0], [72.0, 69.0], [79.0, 82.0], [78.0, 126.0], [83.0, 69.5], [81.0, 83.0], [80.0, 100.0], [86.0, 77.33333333333333], [89.0, 203.5], [88.0, 175.0], [95.0, 92.77777777777777], [99.0, 155.8], [6.0, 107.33333333333333], [100.0, 138.90081197261588], [7.0, 87.0], [8.0, 119.0], [9.0, 116.0], [10.0, 88.0], [12.0, 105.5], [14.0, 96.0], [16.0, 85.5], [17.0, 110.0], [18.0, 109.0], [20.0, 140.5], [25.0, 134.0], [27.0, 76.0], [28.0, 110.0], [29.0, 100.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}, {"data": [[99.24866979655705, 138.54647887323952]], "isOverall": false, "label": "gateway_cl/hellotea/tea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 19383.0, "minX": 1.685745E12, "maxY": 35464.5, "series": [{"data": [[1.685745E12, 35464.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.685745E12, 19383.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.685745E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 138.54647887323952, "minX": 1.685745E12, "maxY": 138.54647887323952, "series": [{"data": [[1.685745E12, 138.54647887323952]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.685745E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 138.53114241001543, "minX": 1.685745E12, "maxY": 138.53114241001543, "series": [{"data": [[1.685745E12, 138.53114241001543]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.685745E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 2.7924882629108017, "minX": 1.685745E12, "maxY": 2.7924882629108017, "series": [{"data": [[1.685745E12, 2.7924882629108017]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.685745E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 32.0, "minX": 1.685745E12, "maxY": 408.0, "series": [{"data": [[1.685745E12, 408.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.685745E12, 32.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.685745E12, 208.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.685745E12, 292.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.685745E12, 130.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.685745E12, 233.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.685745E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 117.0, "minX": 215.0, "maxY": 202.0, "series": [{"data": [[299.0, 202.0], [624.0, 155.0], [672.0, 133.0], [756.0, 126.0], [743.0, 128.0], [739.0, 127.0], [751.0, 129.0], [796.0, 117.0], [795.0, 119.0], [215.0, 133.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 796.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 117.0, "minX": 215.0, "maxY": 202.0, "series": [{"data": [[299.0, 202.0], [624.0, 155.0], [672.0, 133.0], [756.0, 126.0], [743.0, 128.0], [739.0, 127.0], [751.0, 129.0], [796.0, 117.0], [795.0, 119.0], [215.0, 133.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 796.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 106.5, "minX": 1.685745E12, "maxY": 106.5, "series": [{"data": [[1.685745E12, 106.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.685745E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 106.5, "minX": 1.685745E12, "maxY": 106.5, "series": [{"data": [[1.685745E12, 106.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.685745E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 106.5, "minX": 1.685745E12, "maxY": 106.5, "series": [{"data": [[1.685745E12, 106.5]], "isOverall": false, "label": "gateway_cl/hellotea/tea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.685745E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 106.5, "minX": 1.685745E12, "maxY": 106.5, "series": [{"data": [[1.685745E12, 106.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.685745E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

