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
        data: {"result": {"minY": 45.0, "minX": 0.0, "maxY": 753.0, "series": [{"data": [[0.0, 45.0], [0.1, 57.0], [0.2, 69.0], [0.3, 74.0], [0.4, 77.0], [0.5, 80.0], [0.6, 84.0], [0.7, 88.0], [0.8, 89.0], [0.9, 91.0], [1.0, 93.0], [1.1, 95.0], [1.2, 97.0], [1.3, 98.0], [1.4, 99.0], [1.5, 100.0], [1.6, 101.0], [1.7, 102.0], [1.8, 103.0], [1.9, 103.0], [2.0, 104.0], [2.1, 105.0], [2.2, 106.0], [2.3, 106.0], [2.4, 107.0], [2.5, 108.0], [2.6, 110.0], [2.7, 111.0], [2.8, 112.0], [2.9, 113.0], [3.0, 114.0], [3.1, 114.0], [3.2, 115.0], [3.3, 116.0], [3.4, 116.0], [3.5, 117.0], [3.6, 118.0], [3.7, 118.0], [3.8, 119.0], [3.9, 119.0], [4.0, 120.0], [4.1, 120.0], [4.2, 121.0], [4.3, 122.0], [4.4, 122.0], [4.5, 123.0], [4.6, 123.0], [4.7, 124.0], [4.8, 124.0], [4.9, 126.0], [5.0, 126.0], [5.1, 126.0], [5.2, 127.0], [5.3, 127.0], [5.4, 127.0], [5.5, 128.0], [5.6, 128.0], [5.7, 128.0], [5.8, 129.0], [5.9, 129.0], [6.0, 129.0], [6.1, 130.0], [6.2, 130.0], [6.3, 131.0], [6.4, 131.0], [6.5, 132.0], [6.6, 132.0], [6.7, 132.0], [6.8, 133.0], [6.9, 133.0], [7.0, 134.0], [7.1, 134.0], [7.2, 134.0], [7.3, 135.0], [7.4, 135.0], [7.5, 135.0], [7.6, 136.0], [7.7, 136.0], [7.8, 137.0], [7.9, 137.0], [8.0, 137.0], [8.1, 137.0], [8.2, 138.0], [8.3, 138.0], [8.4, 139.0], [8.5, 139.0], [8.6, 140.0], [8.7, 140.0], [8.8, 140.0], [8.9, 141.0], [9.0, 141.0], [9.1, 141.0], [9.2, 142.0], [9.3, 142.0], [9.4, 142.0], [9.5, 143.0], [9.6, 143.0], [9.7, 143.0], [9.8, 144.0], [9.9, 144.0], [10.0, 144.0], [10.1, 144.0], [10.2, 144.0], [10.3, 144.0], [10.4, 145.0], [10.5, 145.0], [10.6, 146.0], [10.7, 146.0], [10.8, 146.0], [10.9, 147.0], [11.0, 147.0], [11.1, 147.0], [11.2, 148.0], [11.3, 148.0], [11.4, 148.0], [11.5, 149.0], [11.6, 149.0], [11.7, 149.0], [11.8, 149.0], [11.9, 150.0], [12.0, 150.0], [12.1, 150.0], [12.2, 150.0], [12.3, 151.0], [12.4, 151.0], [12.5, 151.0], [12.6, 152.0], [12.7, 152.0], [12.8, 152.0], [12.9, 152.0], [13.0, 153.0], [13.1, 153.0], [13.2, 153.0], [13.3, 153.0], [13.4, 154.0], [13.5, 154.0], [13.6, 154.0], [13.7, 154.0], [13.8, 155.0], [13.9, 155.0], [14.0, 155.0], [14.1, 156.0], [14.2, 156.0], [14.3, 156.0], [14.4, 156.0], [14.5, 157.0], [14.6, 157.0], [14.7, 157.0], [14.8, 157.0], [14.9, 158.0], [15.0, 158.0], [15.1, 158.0], [15.2, 159.0], [15.3, 159.0], [15.4, 159.0], [15.5, 159.0], [15.6, 159.0], [15.7, 160.0], [15.8, 160.0], [15.9, 160.0], [16.0, 160.0], [16.1, 161.0], [16.2, 161.0], [16.3, 161.0], [16.4, 162.0], [16.5, 162.0], [16.6, 162.0], [16.7, 162.0], [16.8, 163.0], [16.9, 163.0], [17.0, 163.0], [17.1, 163.0], [17.2, 164.0], [17.3, 164.0], [17.4, 164.0], [17.5, 164.0], [17.6, 165.0], [17.7, 165.0], [17.8, 165.0], [17.9, 165.0], [18.0, 165.0], [18.1, 166.0], [18.2, 166.0], [18.3, 166.0], [18.4, 166.0], [18.5, 166.0], [18.6, 167.0], [18.7, 167.0], [18.8, 167.0], [18.9, 167.0], [19.0, 168.0], [19.1, 168.0], [19.2, 168.0], [19.3, 168.0], [19.4, 168.0], [19.5, 169.0], [19.6, 169.0], [19.7, 169.0], [19.8, 169.0], [19.9, 170.0], [20.0, 170.0], [20.1, 170.0], [20.2, 170.0], [20.3, 170.0], [20.4, 170.0], [20.5, 171.0], [20.6, 171.0], [20.7, 171.0], [20.8, 171.0], [20.9, 172.0], [21.0, 172.0], [21.1, 172.0], [21.2, 172.0], [21.3, 172.0], [21.4, 173.0], [21.5, 173.0], [21.6, 173.0], [21.7, 173.0], [21.8, 173.0], [21.9, 174.0], [22.0, 174.0], [22.1, 174.0], [22.2, 174.0], [22.3, 174.0], [22.4, 174.0], [22.5, 175.0], [22.6, 175.0], [22.7, 175.0], [22.8, 175.0], [22.9, 175.0], [23.0, 176.0], [23.1, 176.0], [23.2, 176.0], [23.3, 177.0], [23.4, 177.0], [23.5, 177.0], [23.6, 177.0], [23.7, 177.0], [23.8, 177.0], [23.9, 178.0], [24.0, 178.0], [24.1, 178.0], [24.2, 178.0], [24.3, 179.0], [24.4, 179.0], [24.5, 179.0], [24.6, 179.0], [24.7, 179.0], [24.8, 179.0], [24.9, 180.0], [25.0, 180.0], [25.1, 180.0], [25.2, 181.0], [25.3, 181.0], [25.4, 181.0], [25.5, 181.0], [25.6, 182.0], [25.7, 182.0], [25.8, 182.0], [25.9, 182.0], [26.0, 182.0], [26.1, 183.0], [26.2, 183.0], [26.3, 183.0], [26.4, 183.0], [26.5, 183.0], [26.6, 184.0], [26.7, 184.0], [26.8, 184.0], [26.9, 184.0], [27.0, 184.0], [27.1, 184.0], [27.2, 185.0], [27.3, 185.0], [27.4, 185.0], [27.5, 185.0], [27.6, 185.0], [27.7, 186.0], [27.8, 186.0], [27.9, 186.0], [28.0, 186.0], [28.1, 187.0], [28.2, 187.0], [28.3, 187.0], [28.4, 187.0], [28.5, 188.0], [28.6, 188.0], [28.7, 188.0], [28.8, 188.0], [28.9, 188.0], [29.0, 188.0], [29.1, 189.0], [29.2, 189.0], [29.3, 189.0], [29.4, 189.0], [29.5, 189.0], [29.6, 190.0], [29.7, 190.0], [29.8, 190.0], [29.9, 190.0], [30.0, 190.0], [30.1, 190.0], [30.2, 191.0], [30.3, 191.0], [30.4, 191.0], [30.5, 191.0], [30.6, 192.0], [30.7, 192.0], [30.8, 192.0], [30.9, 192.0], [31.0, 192.0], [31.1, 192.0], [31.2, 192.0], [31.3, 193.0], [31.4, 193.0], [31.5, 193.0], [31.6, 193.0], [31.7, 193.0], [31.8, 194.0], [31.9, 194.0], [32.0, 194.0], [32.1, 194.0], [32.2, 194.0], [32.3, 195.0], [32.4, 195.0], [32.5, 195.0], [32.6, 195.0], [32.7, 195.0], [32.8, 196.0], [32.9, 196.0], [33.0, 196.0], [33.1, 196.0], [33.2, 196.0], [33.3, 197.0], [33.4, 197.0], [33.5, 197.0], [33.6, 197.0], [33.7, 197.0], [33.8, 197.0], [33.9, 198.0], [34.0, 198.0], [34.1, 198.0], [34.2, 198.0], [34.3, 198.0], [34.4, 199.0], [34.5, 199.0], [34.6, 199.0], [34.7, 200.0], [34.8, 200.0], [34.9, 200.0], [35.0, 200.0], [35.1, 200.0], [35.2, 200.0], [35.3, 201.0], [35.4, 201.0], [35.5, 201.0], [35.6, 201.0], [35.7, 201.0], [35.8, 202.0], [35.9, 202.0], [36.0, 202.0], [36.1, 202.0], [36.2, 203.0], [36.3, 203.0], [36.4, 203.0], [36.5, 203.0], [36.6, 203.0], [36.7, 204.0], [36.8, 204.0], [36.9, 204.0], [37.0, 204.0], [37.1, 204.0], [37.2, 204.0], [37.3, 204.0], [37.4, 205.0], [37.5, 205.0], [37.6, 205.0], [37.7, 205.0], [37.8, 205.0], [37.9, 206.0], [38.0, 206.0], [38.1, 206.0], [38.2, 206.0], [38.3, 206.0], [38.4, 206.0], [38.5, 207.0], [38.6, 207.0], [38.7, 207.0], [38.8, 207.0], [38.9, 207.0], [39.0, 208.0], [39.1, 208.0], [39.2, 208.0], [39.3, 208.0], [39.4, 208.0], [39.5, 208.0], [39.6, 208.0], [39.7, 209.0], [39.8, 209.0], [39.9, 209.0], [40.0, 209.0], [40.1, 210.0], [40.2, 210.0], [40.3, 210.0], [40.4, 211.0], [40.5, 211.0], [40.6, 211.0], [40.7, 211.0], [40.8, 211.0], [40.9, 212.0], [41.0, 212.0], [41.1, 212.0], [41.2, 212.0], [41.3, 213.0], [41.4, 213.0], [41.5, 213.0], [41.6, 213.0], [41.7, 214.0], [41.8, 214.0], [41.9, 214.0], [42.0, 214.0], [42.1, 215.0], [42.2, 215.0], [42.3, 215.0], [42.4, 215.0], [42.5, 215.0], [42.6, 216.0], [42.7, 216.0], [42.8, 216.0], [42.9, 216.0], [43.0, 217.0], [43.1, 217.0], [43.2, 217.0], [43.3, 217.0], [43.4, 218.0], [43.5, 218.0], [43.6, 218.0], [43.7, 218.0], [43.8, 218.0], [43.9, 219.0], [44.0, 219.0], [44.1, 219.0], [44.2, 219.0], [44.3, 219.0], [44.4, 220.0], [44.5, 220.0], [44.6, 220.0], [44.7, 220.0], [44.8, 220.0], [44.9, 221.0], [45.0, 221.0], [45.1, 221.0], [45.2, 221.0], [45.3, 222.0], [45.4, 222.0], [45.5, 222.0], [45.6, 222.0], [45.7, 222.0], [45.8, 223.0], [45.9, 223.0], [46.0, 223.0], [46.1, 223.0], [46.2, 224.0], [46.3, 224.0], [46.4, 224.0], [46.5, 224.0], [46.6, 224.0], [46.7, 224.0], [46.8, 225.0], [46.9, 225.0], [47.0, 225.0], [47.1, 225.0], [47.2, 225.0], [47.3, 226.0], [47.4, 226.0], [47.5, 226.0], [47.6, 226.0], [47.7, 226.0], [47.8, 226.0], [47.9, 227.0], [48.0, 227.0], [48.1, 227.0], [48.2, 227.0], [48.3, 227.0], [48.4, 228.0], [48.5, 228.0], [48.6, 228.0], [48.7, 228.0], [48.8, 228.0], [48.9, 229.0], [49.0, 229.0], [49.1, 229.0], [49.2, 229.0], [49.3, 229.0], [49.4, 230.0], [49.5, 230.0], [49.6, 230.0], [49.7, 230.0], [49.8, 230.0], [49.9, 230.0], [50.0, 231.0], [50.1, 231.0], [50.2, 231.0], [50.3, 231.0], [50.4, 231.0], [50.5, 231.0], [50.6, 232.0], [50.7, 232.0], [50.8, 232.0], [50.9, 232.0], [51.0, 233.0], [51.1, 233.0], [51.2, 233.0], [51.3, 233.0], [51.4, 233.0], [51.5, 234.0], [51.6, 234.0], [51.7, 234.0], [51.8, 234.0], [51.9, 235.0], [52.0, 235.0], [52.1, 235.0], [52.2, 235.0], [52.3, 235.0], [52.4, 235.0], [52.5, 236.0], [52.6, 236.0], [52.7, 236.0], [52.8, 236.0], [52.9, 236.0], [53.0, 237.0], [53.1, 237.0], [53.2, 237.0], [53.3, 237.0], [53.4, 237.0], [53.5, 238.0], [53.6, 238.0], [53.7, 238.0], [53.8, 238.0], [53.9, 238.0], [54.0, 239.0], [54.1, 239.0], [54.2, 239.0], [54.3, 239.0], [54.4, 239.0], [54.5, 239.0], [54.6, 240.0], [54.7, 240.0], [54.8, 240.0], [54.9, 240.0], [55.0, 241.0], [55.1, 241.0], [55.2, 241.0], [55.3, 241.0], [55.4, 241.0], [55.5, 241.0], [55.6, 242.0], [55.7, 242.0], [55.8, 242.0], [55.9, 242.0], [56.0, 242.0], [56.1, 243.0], [56.2, 243.0], [56.3, 243.0], [56.4, 243.0], [56.5, 243.0], [56.6, 244.0], [56.7, 244.0], [56.8, 244.0], [56.9, 244.0], [57.0, 245.0], [57.1, 245.0], [57.2, 245.0], [57.3, 245.0], [57.4, 245.0], [57.5, 246.0], [57.6, 246.0], [57.7, 246.0], [57.8, 246.0], [57.9, 247.0], [58.0, 247.0], [58.1, 247.0], [58.2, 247.0], [58.3, 247.0], [58.4, 247.0], [58.5, 248.0], [58.6, 248.0], [58.7, 248.0], [58.8, 248.0], [58.9, 248.0], [59.0, 248.0], [59.1, 248.0], [59.2, 249.0], [59.3, 249.0], [59.4, 249.0], [59.5, 250.0], [59.6, 250.0], [59.7, 250.0], [59.8, 251.0], [59.9, 251.0], [60.0, 251.0], [60.1, 251.0], [60.2, 251.0], [60.3, 251.0], [60.4, 252.0], [60.5, 252.0], [60.6, 252.0], [60.7, 252.0], [60.8, 252.0], [60.9, 253.0], [61.0, 253.0], [61.1, 254.0], [61.2, 254.0], [61.3, 254.0], [61.4, 254.0], [61.5, 254.0], [61.6, 255.0], [61.7, 255.0], [61.8, 255.0], [61.9, 255.0], [62.0, 256.0], [62.1, 256.0], [62.2, 256.0], [62.3, 256.0], [62.4, 256.0], [62.5, 256.0], [62.6, 257.0], [62.7, 257.0], [62.8, 257.0], [62.9, 258.0], [63.0, 258.0], [63.1, 258.0], [63.2, 258.0], [63.3, 258.0], [63.4, 258.0], [63.5, 259.0], [63.6, 259.0], [63.7, 259.0], [63.8, 259.0], [63.9, 259.0], [64.0, 260.0], [64.1, 260.0], [64.2, 260.0], [64.3, 260.0], [64.4, 261.0], [64.5, 261.0], [64.6, 261.0], [64.7, 261.0], [64.8, 261.0], [64.9, 262.0], [65.0, 262.0], [65.1, 262.0], [65.2, 262.0], [65.3, 263.0], [65.4, 263.0], [65.5, 263.0], [65.6, 263.0], [65.7, 264.0], [65.8, 264.0], [65.9, 264.0], [66.0, 265.0], [66.1, 265.0], [66.2, 265.0], [66.3, 265.0], [66.4, 266.0], [66.5, 266.0], [66.6, 266.0], [66.7, 267.0], [66.8, 267.0], [66.9, 267.0], [67.0, 268.0], [67.1, 268.0], [67.2, 268.0], [67.3, 268.0], [67.4, 268.0], [67.5, 268.0], [67.6, 269.0], [67.7, 269.0], [67.8, 269.0], [67.9, 269.0], [68.0, 270.0], [68.1, 270.0], [68.2, 270.0], [68.3, 270.0], [68.4, 271.0], [68.5, 271.0], [68.6, 271.0], [68.7, 271.0], [68.8, 271.0], [68.9, 272.0], [69.0, 272.0], [69.1, 272.0], [69.2, 272.0], [69.3, 273.0], [69.4, 273.0], [69.5, 273.0], [69.6, 274.0], [69.7, 274.0], [69.8, 274.0], [69.9, 274.0], [70.0, 275.0], [70.1, 275.0], [70.2, 275.0], [70.3, 276.0], [70.4, 276.0], [70.5, 276.0], [70.6, 277.0], [70.7, 277.0], [70.8, 277.0], [70.9, 278.0], [71.0, 278.0], [71.1, 278.0], [71.2, 279.0], [71.3, 279.0], [71.4, 279.0], [71.5, 280.0], [71.6, 280.0], [71.7, 280.0], [71.8, 280.0], [71.9, 281.0], [72.0, 281.0], [72.1, 282.0], [72.2, 282.0], [72.3, 282.0], [72.4, 282.0], [72.5, 282.0], [72.6, 283.0], [72.7, 283.0], [72.8, 283.0], [72.9, 284.0], [73.0, 284.0], [73.1, 285.0], [73.2, 285.0], [73.3, 285.0], [73.4, 286.0], [73.5, 286.0], [73.6, 287.0], [73.7, 287.0], [73.8, 287.0], [73.9, 287.0], [74.0, 288.0], [74.1, 288.0], [74.2, 288.0], [74.3, 289.0], [74.4, 289.0], [74.5, 289.0], [74.6, 289.0], [74.7, 290.0], [74.8, 290.0], [74.9, 290.0], [75.0, 291.0], [75.1, 291.0], [75.2, 291.0], [75.3, 291.0], [75.4, 292.0], [75.5, 292.0], [75.6, 292.0], [75.7, 292.0], [75.8, 293.0], [75.9, 293.0], [76.0, 294.0], [76.1, 294.0], [76.2, 294.0], [76.3, 294.0], [76.4, 295.0], [76.5, 295.0], [76.6, 295.0], [76.7, 295.0], [76.8, 296.0], [76.9, 296.0], [77.0, 296.0], [77.1, 297.0], [77.2, 297.0], [77.3, 297.0], [77.4, 298.0], [77.5, 298.0], [77.6, 298.0], [77.7, 299.0], [77.8, 299.0], [77.9, 299.0], [78.0, 299.0], [78.1, 300.0], [78.2, 300.0], [78.3, 301.0], [78.4, 301.0], [78.5, 301.0], [78.6, 301.0], [78.7, 302.0], [78.8, 302.0], [78.9, 302.0], [79.0, 303.0], [79.1, 303.0], [79.2, 303.0], [79.3, 304.0], [79.4, 304.0], [79.5, 305.0], [79.6, 305.0], [79.7, 305.0], [79.8, 305.0], [79.9, 305.0], [80.0, 306.0], [80.1, 306.0], [80.2, 307.0], [80.3, 307.0], [80.4, 307.0], [80.5, 308.0], [80.6, 308.0], [80.7, 308.0], [80.8, 309.0], [80.9, 309.0], [81.0, 309.0], [81.1, 310.0], [81.2, 310.0], [81.3, 310.0], [81.4, 311.0], [81.5, 311.0], [81.6, 311.0], [81.7, 312.0], [81.8, 312.0], [81.9, 312.0], [82.0, 313.0], [82.1, 313.0], [82.2, 314.0], [82.3, 314.0], [82.4, 315.0], [82.5, 315.0], [82.6, 316.0], [82.7, 316.0], [82.8, 316.0], [82.9, 317.0], [83.0, 317.0], [83.1, 317.0], [83.2, 318.0], [83.3, 318.0], [83.4, 319.0], [83.5, 319.0], [83.6, 319.0], [83.7, 320.0], [83.8, 320.0], [83.9, 320.0], [84.0, 321.0], [84.1, 321.0], [84.2, 322.0], [84.3, 322.0], [84.4, 323.0], [84.5, 323.0], [84.6, 323.0], [84.7, 324.0], [84.8, 324.0], [84.9, 324.0], [85.0, 325.0], [85.1, 326.0], [85.2, 326.0], [85.3, 326.0], [85.4, 326.0], [85.5, 327.0], [85.6, 328.0], [85.7, 328.0], [85.8, 329.0], [85.9, 329.0], [86.0, 330.0], [86.1, 330.0], [86.2, 331.0], [86.3, 331.0], [86.4, 332.0], [86.5, 332.0], [86.6, 332.0], [86.7, 333.0], [86.8, 333.0], [86.9, 333.0], [87.0, 334.0], [87.1, 334.0], [87.2, 335.0], [87.3, 335.0], [87.4, 335.0], [87.5, 336.0], [87.6, 336.0], [87.7, 337.0], [87.8, 337.0], [87.9, 338.0], [88.0, 339.0], [88.1, 339.0], [88.2, 340.0], [88.3, 340.0], [88.4, 341.0], [88.5, 342.0], [88.6, 342.0], [88.7, 343.0], [88.8, 343.0], [88.9, 344.0], [89.0, 344.0], [89.1, 344.0], [89.2, 345.0], [89.3, 346.0], [89.4, 346.0], [89.5, 347.0], [89.6, 347.0], [89.7, 348.0], [89.8, 348.0], [89.9, 349.0], [90.0, 350.0], [90.1, 350.0], [90.2, 351.0], [90.3, 352.0], [90.4, 352.0], [90.5, 353.0], [90.6, 354.0], [90.7, 355.0], [90.8, 355.0], [90.9, 356.0], [91.0, 356.0], [91.1, 357.0], [91.2, 358.0], [91.3, 358.0], [91.4, 359.0], [91.5, 360.0], [91.6, 360.0], [91.7, 361.0], [91.8, 362.0], [91.9, 362.0], [92.0, 363.0], [92.1, 364.0], [92.2, 364.0], [92.3, 365.0], [92.4, 366.0], [92.5, 367.0], [92.6, 367.0], [92.7, 368.0], [92.8, 369.0], [92.9, 369.0], [93.0, 370.0], [93.1, 372.0], [93.2, 372.0], [93.3, 372.0], [93.4, 373.0], [93.5, 375.0], [93.6, 376.0], [93.7, 378.0], [93.8, 379.0], [93.9, 379.0], [94.0, 381.0], [94.1, 384.0], [94.2, 385.0], [94.3, 386.0], [94.4, 387.0], [94.5, 388.0], [94.6, 389.0], [94.7, 390.0], [94.8, 391.0], [94.9, 392.0], [95.0, 393.0], [95.1, 394.0], [95.2, 395.0], [95.3, 397.0], [95.4, 398.0], [95.5, 400.0], [95.6, 401.0], [95.7, 402.0], [95.8, 404.0], [95.9, 406.0], [96.0, 408.0], [96.1, 409.0], [96.2, 411.0], [96.3, 413.0], [96.4, 416.0], [96.5, 418.0], [96.6, 422.0], [96.7, 425.0], [96.8, 428.0], [96.9, 431.0], [97.0, 431.0], [97.1, 436.0], [97.2, 438.0], [97.3, 441.0], [97.4, 444.0], [97.5, 447.0], [97.6, 449.0], [97.7, 454.0], [97.8, 457.0], [97.9, 463.0], [98.0, 466.0], [98.1, 469.0], [98.2, 474.0], [98.3, 478.0], [98.4, 486.0], [98.5, 496.0], [98.6, 503.0], [98.7, 510.0], [98.8, 523.0], [98.9, 529.0], [99.0, 539.0], [99.1, 545.0], [99.2, 548.0], [99.3, 551.0], [99.4, 556.0], [99.5, 561.0], [99.6, 568.0], [99.7, 571.0], [99.8, 576.0], [99.9, 596.0], [100.0, 753.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 3163.0, "series": [{"data": [[0.0, 103.0], [300.0, 1270.0], [600.0, 6.0], [700.0, 1.0], [200.0, 3163.0], [400.0, 223.0], [100.0, 2422.0], [500.0, 98.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 105.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 7181.0, "series": [{"data": [[0.0, 7181.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 105.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 197.31649739225927, "minX": 1.6857474E12, "maxY": 197.31649739225927, "series": [{"data": [[1.6857474E12, 197.31649739225927]], "isOverall": false, "label": "gateway_cl/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6857474E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 122.0, "minX": 2.0, "maxY": 507.0, "series": [{"data": [[2.0, 182.0], [3.0, 175.5], [4.0, 507.0], [7.0, 195.0], [13.0, 166.8], [14.0, 175.0], [15.0, 181.0], [16.0, 157.0], [19.0, 185.33333333333334], [21.0, 134.0], [24.0, 138.0], [25.0, 169.0], [28.0, 140.0], [30.0, 158.25], [33.0, 166.0], [32.0, 139.0], [35.0, 169.0], [37.0, 170.0], [44.0, 157.28571428571428], [48.0, 161.25], [53.0, 163.8], [55.0, 122.0], [54.0, 163.0], [56.0, 188.0], [59.0, 290.3333333333333], [61.0, 341.0], [60.0, 346.0], [65.0, 274.5], [64.0, 222.0], [70.0, 131.0], [69.0, 333.0], [68.0, 243.0], [75.0, 213.0], [73.0, 173.0], [72.0, 159.5], [79.0, 326.6666666666667], [77.0, 325.0], [81.0, 302.0], [80.0, 174.0], [87.0, 274.0], [85.0, 229.0], [89.0, 250.0], [88.0, 179.0], [94.0, 182.0], [99.0, 180.0], [98.0, 223.0], [96.0, 286.83333333333337], [103.0, 266.0], [101.0, 241.5], [107.0, 315.0], [111.0, 331.6666666666667], [109.0, 201.0], [108.0, 306.0], [115.0, 301.0], [114.0, 244.5], [118.0, 365.5], [122.0, 321.0], [127.0, 335.0], [126.0, 243.0], [125.0, 341.5], [124.0, 258.0], [131.0, 260.0], [143.0, 255.5], [142.0, 254.5], [141.0, 296.0], [140.0, 329.0], [136.0, 247.16666666666669], [147.0, 294.0], [159.0, 360.0], [158.0, 217.5], [152.0, 180.0], [166.0, 187.5], [165.0, 266.5], [164.0, 237.0], [162.0, 264.0], [161.0, 157.0], [160.0, 174.0], [175.0, 416.0], [174.0, 174.5], [173.0, 149.0], [172.0, 306.5], [171.0, 223.5], [170.0, 316.0], [169.0, 306.0], [183.0, 320.3333333333333], [180.0, 263.3333333333333], [177.0, 307.0], [191.0, 311.5], [189.0, 177.0], [188.0, 224.0], [187.0, 259.6666666666667], [199.0, 335.0], [197.0, 285.375], [195.0, 301.0], [193.0, 332.5], [200.0, 241.45978798586538]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}, {"data": [[197.31649739225927, 241.5164699423547]], "isOverall": false, "label": "gateway_cl/hellotea/tea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 22100.866666666665, "minX": 1.6857474E12, "maxY": 40437.3, "series": [{"data": [[1.6857474E12, 40437.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6857474E12, 22100.866666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6857474E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 241.5164699423547, "minX": 1.6857474E12, "maxY": 241.5164699423547, "series": [{"data": [[1.6857474E12, 241.5164699423547]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6857474E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 241.4898435355479, "minX": 1.6857474E12, "maxY": 241.4898435355479, "series": [{"data": [[1.6857474E12, 241.4898435355479]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6857474E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 5.181855613505355, "minX": 1.6857474E12, "maxY": 5.181855613505355, "series": [{"data": [[1.6857474E12, 5.181855613505355]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6857474E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 45.0, "minX": 1.6857474E12, "maxY": 753.0, "series": [{"data": [[1.6857474E12, 753.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6857474E12, 45.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6857474E12, 350.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6857474E12, 539.1300000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6857474E12, 231.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.6857474E12, 393.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6857474E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 182.0, "minX": 103.0, "maxY": 293.5, "series": [{"data": [[536.0, 293.5], [712.0, 248.0], [727.0, 264.0], [792.0, 252.5], [828.0, 230.5], [103.0, 182.0], [833.0, 222.0], [885.0, 211.0], [896.0, 203.5], [974.0, 203.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 974.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 182.0, "minX": 103.0, "maxY": 293.5, "series": [{"data": [[536.0, 293.5], [712.0, 248.0], [727.0, 264.0], [792.0, 252.5], [828.0, 230.5], [103.0, 182.0], [833.0, 222.0], [885.0, 211.0], [896.0, 203.5], [974.0, 203.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 974.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 121.43333333333334, "minX": 1.6857474E12, "maxY": 121.43333333333334, "series": [{"data": [[1.6857474E12, 121.43333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6857474E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 121.43333333333334, "minX": 1.6857474E12, "maxY": 121.43333333333334, "series": [{"data": [[1.6857474E12, 121.43333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6857474E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 121.43333333333334, "minX": 1.6857474E12, "maxY": 121.43333333333334, "series": [{"data": [[1.6857474E12, 121.43333333333334]], "isOverall": false, "label": "gateway_cl/hellotea/tea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6857474E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 121.43333333333334, "minX": 1.6857474E12, "maxY": 121.43333333333334, "series": [{"data": [[1.6857474E12, 121.43333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6857474E12, "title": "Total Transactions Per Second"}},
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

