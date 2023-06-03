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
        data: {"result": {"minY": 40.0, "minX": 0.0, "maxY": 777.0, "series": [{"data": [[0.0, 40.0], [0.1, 60.0], [0.2, 68.0], [0.3, 72.0], [0.4, 75.0], [0.5, 79.0], [0.6, 84.0], [0.7, 86.0], [0.8, 88.0], [0.9, 90.0], [1.0, 91.0], [1.1, 92.0], [1.2, 93.0], [1.3, 94.0], [1.4, 96.0], [1.5, 97.0], [1.6, 98.0], [1.7, 99.0], [1.8, 100.0], [1.9, 101.0], [2.0, 102.0], [2.1, 103.0], [2.2, 105.0], [2.3, 105.0], [2.4, 107.0], [2.5, 108.0], [2.6, 109.0], [2.7, 109.0], [2.8, 110.0], [2.9, 111.0], [3.0, 111.0], [3.1, 112.0], [3.2, 113.0], [3.3, 114.0], [3.4, 114.0], [3.5, 115.0], [3.6, 115.0], [3.7, 116.0], [3.8, 116.0], [3.9, 117.0], [4.0, 117.0], [4.1, 118.0], [4.2, 119.0], [4.3, 119.0], [4.4, 120.0], [4.5, 121.0], [4.6, 121.0], [4.7, 122.0], [4.8, 123.0], [4.9, 123.0], [5.0, 124.0], [5.1, 124.0], [5.2, 125.0], [5.3, 125.0], [5.4, 126.0], [5.5, 126.0], [5.6, 126.0], [5.7, 127.0], [5.8, 127.0], [5.9, 128.0], [6.0, 128.0], [6.1, 129.0], [6.2, 129.0], [6.3, 129.0], [6.4, 130.0], [6.5, 130.0], [6.6, 131.0], [6.7, 131.0], [6.8, 131.0], [6.9, 132.0], [7.0, 132.0], [7.1, 133.0], [7.2, 133.0], [7.3, 134.0], [7.4, 135.0], [7.5, 135.0], [7.6, 135.0], [7.7, 136.0], [7.8, 136.0], [7.9, 136.0], [8.0, 136.0], [8.1, 137.0], [8.2, 137.0], [8.3, 138.0], [8.4, 138.0], [8.5, 138.0], [8.6, 139.0], [8.7, 139.0], [8.8, 140.0], [8.9, 140.0], [9.0, 140.0], [9.1, 141.0], [9.2, 141.0], [9.3, 141.0], [9.4, 141.0], [9.5, 142.0], [9.6, 142.0], [9.7, 143.0], [9.8, 143.0], [9.9, 143.0], [10.0, 144.0], [10.1, 144.0], [10.2, 144.0], [10.3, 145.0], [10.4, 145.0], [10.5, 145.0], [10.6, 145.0], [10.7, 146.0], [10.8, 146.0], [10.9, 146.0], [11.0, 147.0], [11.1, 147.0], [11.2, 147.0], [11.3, 148.0], [11.4, 148.0], [11.5, 149.0], [11.6, 149.0], [11.7, 149.0], [11.8, 149.0], [11.9, 150.0], [12.0, 150.0], [12.1, 150.0], [12.2, 151.0], [12.3, 151.0], [12.4, 151.0], [12.5, 152.0], [12.6, 152.0], [12.7, 152.0], [12.8, 153.0], [12.9, 153.0], [13.0, 153.0], [13.1, 154.0], [13.2, 154.0], [13.3, 154.0], [13.4, 154.0], [13.5, 155.0], [13.6, 155.0], [13.7, 155.0], [13.8, 156.0], [13.9, 156.0], [14.0, 156.0], [14.1, 157.0], [14.2, 157.0], [14.3, 157.0], [14.4, 157.0], [14.5, 158.0], [14.6, 158.0], [14.7, 158.0], [14.8, 159.0], [14.9, 159.0], [15.0, 159.0], [15.1, 159.0], [15.2, 160.0], [15.3, 160.0], [15.4, 160.0], [15.5, 160.0], [15.6, 161.0], [15.7, 161.0], [15.8, 161.0], [15.9, 161.0], [16.0, 162.0], [16.1, 162.0], [16.2, 162.0], [16.3, 163.0], [16.4, 163.0], [16.5, 163.0], [16.6, 164.0], [16.7, 164.0], [16.8, 164.0], [16.9, 165.0], [17.0, 165.0], [17.1, 165.0], [17.2, 165.0], [17.3, 165.0], [17.4, 166.0], [17.5, 166.0], [17.6, 166.0], [17.7, 167.0], [17.8, 167.0], [17.9, 167.0], [18.0, 167.0], [18.1, 168.0], [18.2, 168.0], [18.3, 168.0], [18.4, 168.0], [18.5, 168.0], [18.6, 169.0], [18.7, 169.0], [18.8, 169.0], [18.9, 170.0], [19.0, 170.0], [19.1, 171.0], [19.2, 171.0], [19.3, 171.0], [19.4, 171.0], [19.5, 172.0], [19.6, 172.0], [19.7, 172.0], [19.8, 172.0], [19.9, 173.0], [20.0, 173.0], [20.1, 173.0], [20.2, 173.0], [20.3, 174.0], [20.4, 174.0], [20.5, 174.0], [20.6, 174.0], [20.7, 175.0], [20.8, 175.0], [20.9, 175.0], [21.0, 175.0], [21.1, 175.0], [21.2, 176.0], [21.3, 176.0], [21.4, 176.0], [21.5, 176.0], [21.6, 177.0], [21.7, 177.0], [21.8, 177.0], [21.9, 177.0], [22.0, 178.0], [22.1, 178.0], [22.2, 178.0], [22.3, 179.0], [22.4, 179.0], [22.5, 179.0], [22.6, 179.0], [22.7, 179.0], [22.8, 180.0], [22.9, 180.0], [23.0, 180.0], [23.1, 180.0], [23.2, 181.0], [23.3, 181.0], [23.4, 181.0], [23.5, 181.0], [23.6, 182.0], [23.7, 182.0], [23.8, 182.0], [23.9, 182.0], [24.0, 182.0], [24.1, 183.0], [24.2, 183.0], [24.3, 183.0], [24.4, 184.0], [24.5, 184.0], [24.6, 184.0], [24.7, 184.0], [24.8, 184.0], [24.9, 185.0], [25.0, 185.0], [25.1, 185.0], [25.2, 185.0], [25.3, 185.0], [25.4, 186.0], [25.5, 186.0], [25.6, 186.0], [25.7, 186.0], [25.8, 186.0], [25.9, 187.0], [26.0, 187.0], [26.1, 187.0], [26.2, 188.0], [26.3, 188.0], [26.4, 188.0], [26.5, 188.0], [26.6, 188.0], [26.7, 189.0], [26.8, 189.0], [26.9, 189.0], [27.0, 190.0], [27.1, 190.0], [27.2, 190.0], [27.3, 190.0], [27.4, 190.0], [27.5, 190.0], [27.6, 191.0], [27.7, 191.0], [27.8, 191.0], [27.9, 191.0], [28.0, 192.0], [28.1, 192.0], [28.2, 192.0], [28.3, 192.0], [28.4, 192.0], [28.5, 193.0], [28.6, 193.0], [28.7, 193.0], [28.8, 193.0], [28.9, 193.0], [29.0, 194.0], [29.1, 194.0], [29.2, 194.0], [29.3, 194.0], [29.4, 195.0], [29.5, 195.0], [29.6, 195.0], [29.7, 195.0], [29.8, 195.0], [29.9, 196.0], [30.0, 196.0], [30.1, 196.0], [30.2, 196.0], [30.3, 196.0], [30.4, 196.0], [30.5, 197.0], [30.6, 197.0], [30.7, 197.0], [30.8, 197.0], [30.9, 198.0], [31.0, 198.0], [31.1, 198.0], [31.2, 198.0], [31.3, 198.0], [31.4, 199.0], [31.5, 199.0], [31.6, 199.0], [31.7, 200.0], [31.8, 200.0], [31.9, 200.0], [32.0, 200.0], [32.1, 200.0], [32.2, 201.0], [32.3, 201.0], [32.4, 201.0], [32.5, 201.0], [32.6, 201.0], [32.7, 202.0], [32.8, 202.0], [32.9, 202.0], [33.0, 202.0], [33.1, 202.0], [33.2, 203.0], [33.3, 203.0], [33.4, 203.0], [33.5, 203.0], [33.6, 204.0], [33.7, 204.0], [33.8, 204.0], [33.9, 204.0], [34.0, 205.0], [34.1, 205.0], [34.2, 205.0], [34.3, 205.0], [34.4, 206.0], [34.5, 206.0], [34.6, 206.0], [34.7, 206.0], [34.8, 206.0], [34.9, 206.0], [35.0, 207.0], [35.1, 207.0], [35.2, 207.0], [35.3, 208.0], [35.4, 208.0], [35.5, 208.0], [35.6, 208.0], [35.7, 208.0], [35.8, 209.0], [35.9, 209.0], [36.0, 209.0], [36.1, 209.0], [36.2, 209.0], [36.3, 210.0], [36.4, 210.0], [36.5, 210.0], [36.6, 210.0], [36.7, 210.0], [36.8, 211.0], [36.9, 211.0], [37.0, 211.0], [37.1, 211.0], [37.2, 212.0], [37.3, 212.0], [37.4, 212.0], [37.5, 212.0], [37.6, 212.0], [37.7, 213.0], [37.8, 213.0], [37.9, 213.0], [38.0, 213.0], [38.1, 213.0], [38.2, 214.0], [38.3, 214.0], [38.4, 214.0], [38.5, 214.0], [38.6, 214.0], [38.7, 214.0], [38.8, 215.0], [38.9, 215.0], [39.0, 215.0], [39.1, 215.0], [39.2, 216.0], [39.3, 216.0], [39.4, 216.0], [39.5, 216.0], [39.6, 216.0], [39.7, 217.0], [39.8, 217.0], [39.9, 217.0], [40.0, 218.0], [40.1, 218.0], [40.2, 218.0], [40.3, 219.0], [40.4, 219.0], [40.5, 219.0], [40.6, 219.0], [40.7, 219.0], [40.8, 220.0], [40.9, 220.0], [41.0, 220.0], [41.1, 220.0], [41.2, 221.0], [41.3, 221.0], [41.4, 221.0], [41.5, 221.0], [41.6, 222.0], [41.7, 222.0], [41.8, 222.0], [41.9, 222.0], [42.0, 222.0], [42.1, 223.0], [42.2, 223.0], [42.3, 223.0], [42.4, 223.0], [42.5, 224.0], [42.6, 224.0], [42.7, 224.0], [42.8, 224.0], [42.9, 224.0], [43.0, 225.0], [43.1, 225.0], [43.2, 225.0], [43.3, 226.0], [43.4, 226.0], [43.5, 226.0], [43.6, 227.0], [43.7, 227.0], [43.8, 227.0], [43.9, 227.0], [44.0, 228.0], [44.1, 228.0], [44.2, 228.0], [44.3, 228.0], [44.4, 229.0], [44.5, 229.0], [44.6, 229.0], [44.7, 229.0], [44.8, 229.0], [44.9, 230.0], [45.0, 230.0], [45.1, 230.0], [45.2, 230.0], [45.3, 230.0], [45.4, 231.0], [45.5, 231.0], [45.6, 231.0], [45.7, 231.0], [45.8, 231.0], [45.9, 232.0], [46.0, 232.0], [46.1, 232.0], [46.2, 233.0], [46.3, 233.0], [46.4, 233.0], [46.5, 233.0], [46.6, 234.0], [46.7, 234.0], [46.8, 234.0], [46.9, 234.0], [47.0, 235.0], [47.1, 235.0], [47.2, 235.0], [47.3, 235.0], [47.4, 235.0], [47.5, 236.0], [47.6, 236.0], [47.7, 236.0], [47.8, 236.0], [47.9, 236.0], [48.0, 236.0], [48.1, 237.0], [48.2, 237.0], [48.3, 237.0], [48.4, 237.0], [48.5, 237.0], [48.6, 238.0], [48.7, 238.0], [48.8, 238.0], [48.9, 238.0], [49.0, 238.0], [49.1, 239.0], [49.2, 239.0], [49.3, 239.0], [49.4, 240.0], [49.5, 240.0], [49.6, 240.0], [49.7, 240.0], [49.8, 241.0], [49.9, 241.0], [50.0, 241.0], [50.1, 241.0], [50.2, 242.0], [50.3, 242.0], [50.4, 242.0], [50.5, 242.0], [50.6, 242.0], [50.7, 242.0], [50.8, 243.0], [50.9, 243.0], [51.0, 243.0], [51.1, 244.0], [51.2, 244.0], [51.3, 244.0], [51.4, 244.0], [51.5, 244.0], [51.6, 245.0], [51.7, 245.0], [51.8, 245.0], [51.9, 245.0], [52.0, 246.0], [52.1, 246.0], [52.2, 246.0], [52.3, 247.0], [52.4, 247.0], [52.5, 247.0], [52.6, 247.0], [52.7, 248.0], [52.8, 248.0], [52.9, 248.0], [53.0, 248.0], [53.1, 248.0], [53.2, 249.0], [53.3, 249.0], [53.4, 249.0], [53.5, 249.0], [53.6, 250.0], [53.7, 250.0], [53.8, 250.0], [53.9, 250.0], [54.0, 251.0], [54.1, 251.0], [54.2, 251.0], [54.3, 251.0], [54.4, 252.0], [54.5, 252.0], [54.6, 252.0], [54.7, 252.0], [54.8, 253.0], [54.9, 253.0], [55.0, 253.0], [55.1, 254.0], [55.2, 254.0], [55.3, 254.0], [55.4, 255.0], [55.5, 255.0], [55.6, 255.0], [55.7, 255.0], [55.8, 255.0], [55.9, 256.0], [56.0, 256.0], [56.1, 256.0], [56.2, 256.0], [56.3, 256.0], [56.4, 257.0], [56.5, 257.0], [56.6, 257.0], [56.7, 257.0], [56.8, 258.0], [56.9, 258.0], [57.0, 258.0], [57.1, 258.0], [57.2, 258.0], [57.3, 259.0], [57.4, 259.0], [57.5, 259.0], [57.6, 260.0], [57.7, 260.0], [57.8, 260.0], [57.9, 260.0], [58.0, 261.0], [58.1, 261.0], [58.2, 261.0], [58.3, 262.0], [58.4, 262.0], [58.5, 262.0], [58.6, 262.0], [58.7, 263.0], [58.8, 263.0], [58.9, 263.0], [59.0, 263.0], [59.1, 264.0], [59.2, 264.0], [59.3, 264.0], [59.4, 264.0], [59.5, 264.0], [59.6, 265.0], [59.7, 265.0], [59.8, 265.0], [59.9, 265.0], [60.0, 265.0], [60.1, 266.0], [60.2, 266.0], [60.3, 266.0], [60.4, 266.0], [60.5, 267.0], [60.6, 267.0], [60.7, 267.0], [60.8, 267.0], [60.9, 267.0], [61.0, 268.0], [61.1, 268.0], [61.2, 268.0], [61.3, 269.0], [61.4, 269.0], [61.5, 269.0], [61.6, 269.0], [61.7, 269.0], [61.8, 270.0], [61.9, 270.0], [62.0, 270.0], [62.1, 270.0], [62.2, 270.0], [62.3, 271.0], [62.4, 271.0], [62.5, 271.0], [62.6, 272.0], [62.7, 272.0], [62.8, 272.0], [62.9, 272.0], [63.0, 273.0], [63.1, 273.0], [63.2, 273.0], [63.3, 273.0], [63.4, 273.0], [63.5, 274.0], [63.6, 274.0], [63.7, 274.0], [63.8, 274.0], [63.9, 275.0], [64.0, 275.0], [64.1, 275.0], [64.2, 275.0], [64.3, 275.0], [64.4, 276.0], [64.5, 276.0], [64.6, 276.0], [64.7, 277.0], [64.8, 277.0], [64.9, 277.0], [65.0, 278.0], [65.1, 278.0], [65.2, 278.0], [65.3, 278.0], [65.4, 278.0], [65.5, 279.0], [65.6, 279.0], [65.7, 280.0], [65.8, 280.0], [65.9, 280.0], [66.0, 280.0], [66.1, 281.0], [66.2, 281.0], [66.3, 281.0], [66.4, 282.0], [66.5, 282.0], [66.6, 283.0], [66.7, 283.0], [66.8, 283.0], [66.9, 283.0], [67.0, 284.0], [67.1, 284.0], [67.2, 285.0], [67.3, 285.0], [67.4, 285.0], [67.5, 285.0], [67.6, 286.0], [67.7, 286.0], [67.8, 286.0], [67.9, 287.0], [68.0, 287.0], [68.1, 287.0], [68.2, 288.0], [68.3, 288.0], [68.4, 288.0], [68.5, 288.0], [68.6, 289.0], [68.7, 289.0], [68.8, 289.0], [68.9, 290.0], [69.0, 290.0], [69.1, 290.0], [69.2, 291.0], [69.3, 291.0], [69.4, 291.0], [69.5, 292.0], [69.6, 292.0], [69.7, 292.0], [69.8, 293.0], [69.9, 293.0], [70.0, 293.0], [70.1, 293.0], [70.2, 294.0], [70.3, 294.0], [70.4, 294.0], [70.5, 295.0], [70.6, 295.0], [70.7, 295.0], [70.8, 295.0], [70.9, 296.0], [71.0, 296.0], [71.1, 296.0], [71.2, 297.0], [71.3, 297.0], [71.4, 298.0], [71.5, 298.0], [71.6, 298.0], [71.7, 299.0], [71.8, 299.0], [71.9, 299.0], [72.0, 299.0], [72.1, 300.0], [72.2, 300.0], [72.3, 300.0], [72.4, 301.0], [72.5, 301.0], [72.6, 301.0], [72.7, 302.0], [72.8, 302.0], [72.9, 302.0], [73.0, 303.0], [73.1, 303.0], [73.2, 303.0], [73.3, 304.0], [73.4, 304.0], [73.5, 304.0], [73.6, 305.0], [73.7, 305.0], [73.8, 305.0], [73.9, 306.0], [74.0, 306.0], [74.1, 306.0], [74.2, 307.0], [74.3, 307.0], [74.4, 307.0], [74.5, 308.0], [74.6, 308.0], [74.7, 308.0], [74.8, 309.0], [74.9, 309.0], [75.0, 309.0], [75.1, 310.0], [75.2, 310.0], [75.3, 311.0], [75.4, 311.0], [75.5, 311.0], [75.6, 312.0], [75.7, 312.0], [75.8, 312.0], [75.9, 313.0], [76.0, 313.0], [76.1, 314.0], [76.2, 314.0], [76.3, 314.0], [76.4, 315.0], [76.5, 315.0], [76.6, 315.0], [76.7, 316.0], [76.8, 316.0], [76.9, 316.0], [77.0, 317.0], [77.1, 317.0], [77.2, 317.0], [77.3, 318.0], [77.4, 318.0], [77.5, 318.0], [77.6, 319.0], [77.7, 319.0], [77.8, 319.0], [77.9, 319.0], [78.0, 319.0], [78.1, 320.0], [78.2, 320.0], [78.3, 321.0], [78.4, 321.0], [78.5, 321.0], [78.6, 322.0], [78.7, 322.0], [78.8, 323.0], [78.9, 323.0], [79.0, 324.0], [79.1, 324.0], [79.2, 325.0], [79.3, 325.0], [79.4, 326.0], [79.5, 326.0], [79.6, 326.0], [79.7, 327.0], [79.8, 327.0], [79.9, 328.0], [80.0, 328.0], [80.1, 328.0], [80.2, 329.0], [80.3, 329.0], [80.4, 329.0], [80.5, 330.0], [80.6, 330.0], [80.7, 330.0], [80.8, 330.0], [80.9, 331.0], [81.0, 331.0], [81.1, 332.0], [81.2, 332.0], [81.3, 333.0], [81.4, 333.0], [81.5, 333.0], [81.6, 334.0], [81.7, 334.0], [81.8, 335.0], [81.9, 335.0], [82.0, 336.0], [82.1, 336.0], [82.2, 337.0], [82.3, 338.0], [82.4, 338.0], [82.5, 339.0], [82.6, 339.0], [82.7, 339.0], [82.8, 340.0], [82.9, 340.0], [83.0, 341.0], [83.1, 341.0], [83.2, 342.0], [83.3, 342.0], [83.4, 343.0], [83.5, 343.0], [83.6, 344.0], [83.7, 345.0], [83.8, 346.0], [83.9, 346.0], [84.0, 347.0], [84.1, 347.0], [84.2, 348.0], [84.3, 348.0], [84.4, 349.0], [84.5, 349.0], [84.6, 350.0], [84.7, 350.0], [84.8, 351.0], [84.9, 351.0], [85.0, 352.0], [85.1, 352.0], [85.2, 353.0], [85.3, 353.0], [85.4, 353.0], [85.5, 354.0], [85.6, 355.0], [85.7, 355.0], [85.8, 356.0], [85.9, 356.0], [86.0, 357.0], [86.1, 358.0], [86.2, 359.0], [86.3, 360.0], [86.4, 361.0], [86.5, 361.0], [86.6, 362.0], [86.7, 362.0], [86.8, 363.0], [86.9, 364.0], [87.0, 365.0], [87.1, 365.0], [87.2, 366.0], [87.3, 366.0], [87.4, 367.0], [87.5, 367.0], [87.6, 369.0], [87.7, 369.0], [87.8, 370.0], [87.9, 370.0], [88.0, 371.0], [88.1, 371.0], [88.2, 372.0], [88.3, 374.0], [88.4, 374.0], [88.5, 375.0], [88.6, 376.0], [88.7, 377.0], [88.8, 377.0], [88.9, 377.0], [89.0, 379.0], [89.1, 380.0], [89.2, 380.0], [89.3, 381.0], [89.4, 383.0], [89.5, 383.0], [89.6, 384.0], [89.7, 385.0], [89.8, 386.0], [89.9, 387.0], [90.0, 387.0], [90.1, 388.0], [90.2, 388.0], [90.3, 389.0], [90.4, 390.0], [90.5, 390.0], [90.6, 391.0], [90.7, 392.0], [90.8, 392.0], [90.9, 393.0], [91.0, 395.0], [91.1, 395.0], [91.2, 396.0], [91.3, 397.0], [91.4, 398.0], [91.5, 399.0], [91.6, 400.0], [91.7, 401.0], [91.8, 401.0], [91.9, 402.0], [92.0, 402.0], [92.1, 404.0], [92.2, 404.0], [92.3, 405.0], [92.4, 407.0], [92.5, 408.0], [92.6, 409.0], [92.7, 411.0], [92.8, 412.0], [92.9, 413.0], [93.0, 414.0], [93.1, 415.0], [93.2, 416.0], [93.3, 416.0], [93.4, 418.0], [93.5, 419.0], [93.6, 419.0], [93.7, 420.0], [93.8, 422.0], [93.9, 423.0], [94.0, 424.0], [94.1, 425.0], [94.2, 427.0], [94.3, 428.0], [94.4, 430.0], [94.5, 431.0], [94.6, 432.0], [94.7, 433.0], [94.8, 435.0], [94.9, 435.0], [95.0, 437.0], [95.1, 438.0], [95.2, 439.0], [95.3, 440.0], [95.4, 441.0], [95.5, 443.0], [95.6, 444.0], [95.7, 446.0], [95.8, 449.0], [95.9, 450.0], [96.0, 451.0], [96.1, 453.0], [96.2, 454.0], [96.3, 456.0], [96.4, 458.0], [96.5, 459.0], [96.6, 462.0], [96.7, 464.0], [96.8, 468.0], [96.9, 470.0], [97.0, 473.0], [97.1, 475.0], [97.2, 479.0], [97.3, 481.0], [97.4, 484.0], [97.5, 489.0], [97.6, 493.0], [97.7, 496.0], [97.8, 502.0], [97.9, 507.0], [98.0, 515.0], [98.1, 521.0], [98.2, 525.0], [98.3, 533.0], [98.4, 539.0], [98.5, 544.0], [98.6, 558.0], [98.7, 579.0], [98.8, 588.0], [98.9, 597.0], [99.0, 606.0], [99.1, 613.0], [99.2, 621.0], [99.3, 646.0], [99.4, 666.0], [99.5, 680.0], [99.6, 684.0], [99.7, 690.0], [99.8, 703.0], [99.9, 726.0], [100.0, 777.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 17.0, "minX": 0.0, "maxY": 3124.0, "series": [{"data": [[0.0, 136.0], [300.0, 1511.0], [600.0, 64.0], [700.0, 17.0], [200.0, 3124.0], [400.0, 478.0], [100.0, 2311.0], [500.0, 92.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 172.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 7561.0, "series": [{"data": [[0.0, 7561.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 172.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 197.4531229794388, "minX": 1.68574752E12, "maxY": 197.4531229794388, "series": [{"data": [[1.68574752E12, 197.4531229794388]], "isOverall": false, "label": "with access token", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68574752E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 91.0, "minX": 3.0, "maxY": 333.0, "series": [{"data": [[3.0, 206.33333333333334], [4.0, 214.0], [6.0, 187.5], [8.0, 200.0], [10.0, 192.5], [12.0, 176.0], [15.0, 203.75], [18.0, 165.33333333333334], [19.0, 184.0], [20.0, 172.0], [23.0, 170.33333333333334], [24.0, 160.0], [26.0, 160.0], [28.0, 138.5], [29.0, 184.0], [30.0, 158.0], [33.0, 179.66666666666666], [35.0, 171.5], [37.0, 152.5], [41.0, 166.75], [43.0, 231.0], [46.0, 249.0], [51.0, 244.0], [53.0, 243.4], [52.0, 266.0], [55.0, 283.5], [56.0, 267.6666666666667], [59.0, 247.5], [60.0, 256.0], [63.0, 285.0], [62.0, 236.0], [66.0, 285.4], [75.0, 251.5], [74.0, 200.0], [79.0, 333.0], [78.0, 255.66666666666666], [76.0, 262.6666666666667], [80.0, 278.0], [86.0, 251.66666666666666], [84.0, 282.16666666666663], [88.0, 215.5], [95.0, 245.5], [93.0, 221.4], [96.0, 275.0], [103.0, 122.5], [101.0, 178.4], [109.0, 212.0], [108.0, 142.8], [115.0, 125.16666666666667], [118.0, 91.0], [116.0, 93.0], [122.0, 110.75], [134.0, 270.0], [132.0, 195.0], [131.0, 150.0], [143.0, 211.16666666666666], [137.0, 156.0], [136.0, 196.33333333333334], [151.0, 241.0], [145.0, 288.0], [157.0, 214.0], [154.0, 205.5], [152.0, 186.14285714285714], [166.0, 194.33333333333334], [162.0, 127.25], [173.0, 203.0], [171.0, 195.5], [169.0, 220.0], [168.0, 199.0], [179.0, 178.33333333333334], [178.0, 195.0], [177.0, 260.25], [189.0, 291.5], [187.0, 180.0], [186.0, 291.16666666666663], [185.0, 215.5], [198.0, 222.0], [197.0, 199.62500000000003], [195.0, 204.0], [194.0, 243.39999999999998], [200.0, 257.4329073482422]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}, {"data": [[197.45299366351992, 255.99107720160293]], "isOverall": false, "label": "gateway_rs/hellotea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 42918.15, "minX": 1.68574752E12, "maxY": 166388.38333333333, "series": [{"data": [[1.68574752E12, 42918.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68574752E12, 166388.38333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68574752E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 255.99107720160293, "minX": 1.68574752E12, "maxY": 255.99107720160293, "series": [{"data": [[1.68574752E12, 255.99107720160293]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68574752E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 255.9709039182731, "minX": 1.68574752E12, "maxY": 255.9709039182731, "series": [{"data": [[1.68574752E12, 255.9709039182731]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68574752E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.5936893831630634, "minX": 1.68574752E12, "maxY": 3.5936893831630634, "series": [{"data": [[1.68574752E12, 3.5936893831630634]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68574752E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 40.0, "minX": 1.68574752E12, "maxY": 777.0, "series": [{"data": [[1.68574752E12, 777.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68574752E12, 40.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68574752E12, 387.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68574752E12, 606.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68574752E12, 241.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68574752E12, 437.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68574752E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 207.0, "minX": 538.0, "maxY": 312.0, "series": [{"data": [[538.0, 312.0], [701.0, 262.0], [760.0, 257.5], [749.0, 263.0], [753.0, 221.0], [772.0, 251.5], [789.0, 257.0], [885.0, 223.0], [888.0, 207.0], [898.0, 215.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 898.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 207.0, "minX": 538.0, "maxY": 312.0, "series": [{"data": [[538.0, 312.0], [701.0, 262.0], [760.0, 257.5], [749.0, 263.0], [753.0, 221.0], [772.0, 251.5], [789.0, 257.0], [885.0, 223.0], [888.0, 207.0], [898.0, 215.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 898.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 128.88333333333333, "minX": 1.68574752E12, "maxY": 128.88333333333333, "series": [{"data": [[1.68574752E12, 128.88333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68574752E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 128.88333333333333, "minX": 1.68574752E12, "maxY": 128.88333333333333, "series": [{"data": [[1.68574752E12, 128.88333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68574752E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 128.88333333333333, "minX": 1.68574752E12, "maxY": 128.88333333333333, "series": [{"data": [[1.68574752E12, 128.88333333333333]], "isOverall": false, "label": "gateway_rs/hellotea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68574752E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 128.88333333333333, "minX": 1.68574752E12, "maxY": 128.88333333333333, "series": [{"data": [[1.68574752E12, 128.88333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68574752E12, "title": "Total Transactions Per Second"}},
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

