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
        data: {"result": {"minY": 10.0, "minX": 0.0, "maxY": 2149.0, "series": [{"data": [[0.0, 10.0], [0.1, 18.0], [0.2, 20.0], [0.3, 22.0], [0.4, 26.0], [0.5, 26.0], [0.6, 27.0], [0.7, 27.0], [0.8, 29.0], [0.9, 30.0], [1.0, 30.0], [1.1, 31.0], [1.2, 31.0], [1.3, 32.0], [1.4, 32.0], [1.5, 33.0], [1.6, 34.0], [1.7, 34.0], [1.8, 34.0], [1.9, 35.0], [2.0, 35.0], [2.1, 35.0], [2.2, 35.0], [2.3, 36.0], [2.4, 36.0], [2.5, 36.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 38.0], [3.1, 38.0], [3.2, 38.0], [3.3, 39.0], [3.4, 39.0], [3.5, 39.0], [3.6, 40.0], [3.7, 40.0], [3.8, 40.0], [3.9, 40.0], [4.0, 40.0], [4.1, 41.0], [4.2, 41.0], [4.3, 41.0], [4.4, 42.0], [4.5, 42.0], [4.6, 42.0], [4.7, 42.0], [4.8, 43.0], [4.9, 43.0], [5.0, 43.0], [5.1, 43.0], [5.2, 44.0], [5.3, 44.0], [5.4, 44.0], [5.5, 45.0], [5.6, 45.0], [5.7, 45.0], [5.8, 45.0], [5.9, 46.0], [6.0, 46.0], [6.1, 46.0], [6.2, 46.0], [6.3, 46.0], [6.4, 46.0], [6.5, 47.0], [6.6, 47.0], [6.7, 48.0], [6.8, 48.0], [6.9, 49.0], [7.0, 49.0], [7.1, 49.0], [7.2, 49.0], [7.3, 49.0], [7.4, 49.0], [7.5, 50.0], [7.6, 50.0], [7.7, 50.0], [7.8, 50.0], [7.9, 51.0], [8.0, 51.0], [8.1, 51.0], [8.2, 51.0], [8.3, 52.0], [8.4, 52.0], [8.5, 52.0], [8.6, 53.0], [8.7, 53.0], [8.8, 53.0], [8.9, 53.0], [9.0, 53.0], [9.1, 54.0], [9.2, 54.0], [9.3, 54.0], [9.4, 54.0], [9.5, 54.0], [9.6, 54.0], [9.7, 55.0], [9.8, 55.0], [9.9, 55.0], [10.0, 55.0], [10.1, 55.0], [10.2, 56.0], [10.3, 56.0], [10.4, 56.0], [10.5, 56.0], [10.6, 56.0], [10.7, 56.0], [10.8, 57.0], [10.9, 57.0], [11.0, 57.0], [11.1, 57.0], [11.2, 58.0], [11.3, 58.0], [11.4, 58.0], [11.5, 58.0], [11.6, 58.0], [11.7, 59.0], [11.8, 59.0], [11.9, 59.0], [12.0, 59.0], [12.1, 59.0], [12.2, 60.0], [12.3, 60.0], [12.4, 60.0], [12.5, 60.0], [12.6, 61.0], [12.7, 61.0], [12.8, 61.0], [12.9, 61.0], [13.0, 62.0], [13.1, 62.0], [13.2, 62.0], [13.3, 62.0], [13.4, 63.0], [13.5, 63.0], [13.6, 63.0], [13.7, 63.0], [13.8, 64.0], [13.9, 64.0], [14.0, 64.0], [14.1, 64.0], [14.2, 64.0], [14.3, 65.0], [14.4, 65.0], [14.5, 65.0], [14.6, 65.0], [14.7, 65.0], [14.8, 65.0], [14.9, 66.0], [15.0, 66.0], [15.1, 67.0], [15.2, 67.0], [15.3, 67.0], [15.4, 67.0], [15.5, 67.0], [15.6, 67.0], [15.7, 68.0], [15.8, 68.0], [15.9, 68.0], [16.0, 68.0], [16.1, 68.0], [16.2, 69.0], [16.3, 69.0], [16.4, 69.0], [16.5, 69.0], [16.6, 70.0], [16.7, 70.0], [16.8, 70.0], [16.9, 71.0], [17.0, 71.0], [17.1, 71.0], [17.2, 71.0], [17.3, 72.0], [17.4, 72.0], [17.5, 72.0], [17.6, 72.0], [17.7, 72.0], [17.8, 73.0], [17.9, 73.0], [18.0, 73.0], [18.1, 74.0], [18.2, 74.0], [18.3, 75.0], [18.4, 75.0], [18.5, 75.0], [18.6, 75.0], [18.7, 75.0], [18.8, 76.0], [18.9, 76.0], [19.0, 76.0], [19.1, 77.0], [19.2, 77.0], [19.3, 77.0], [19.4, 77.0], [19.5, 77.0], [19.6, 78.0], [19.7, 78.0], [19.8, 78.0], [19.9, 78.0], [20.0, 79.0], [20.1, 79.0], [20.2, 79.0], [20.3, 79.0], [20.4, 80.0], [20.5, 80.0], [20.6, 80.0], [20.7, 80.0], [20.8, 81.0], [20.9, 81.0], [21.0, 81.0], [21.1, 81.0], [21.2, 81.0], [21.3, 82.0], [21.4, 82.0], [21.5, 82.0], [21.6, 82.0], [21.7, 82.0], [21.8, 83.0], [21.9, 83.0], [22.0, 83.0], [22.1, 83.0], [22.2, 83.0], [22.3, 84.0], [22.4, 84.0], [22.5, 84.0], [22.6, 84.0], [22.7, 84.0], [22.8, 84.0], [22.9, 84.0], [23.0, 85.0], [23.1, 85.0], [23.2, 85.0], [23.3, 86.0], [23.4, 86.0], [23.5, 86.0], [23.6, 87.0], [23.7, 87.0], [23.8, 88.0], [23.9, 88.0], [24.0, 89.0], [24.1, 89.0], [24.2, 89.0], [24.3, 90.0], [24.4, 91.0], [24.5, 91.0], [24.6, 91.0], [24.7, 92.0], [24.8, 92.0], [24.9, 93.0], [25.0, 93.0], [25.1, 93.0], [25.2, 94.0], [25.3, 94.0], [25.4, 95.0], [25.5, 96.0], [25.6, 96.0], [25.7, 98.0], [25.8, 98.0], [25.9, 99.0], [26.0, 99.0], [26.1, 100.0], [26.2, 100.0], [26.3, 100.0], [26.4, 101.0], [26.5, 102.0], [26.6, 102.0], [26.7, 102.0], [26.8, 103.0], [26.9, 103.0], [27.0, 104.0], [27.1, 105.0], [27.2, 106.0], [27.3, 107.0], [27.4, 107.0], [27.5, 108.0], [27.6, 108.0], [27.7, 108.0], [27.8, 109.0], [27.9, 109.0], [28.0, 110.0], [28.1, 110.0], [28.2, 110.0], [28.3, 111.0], [28.4, 111.0], [28.5, 111.0], [28.6, 112.0], [28.7, 112.0], [28.8, 113.0], [28.9, 114.0], [29.0, 114.0], [29.1, 115.0], [29.2, 115.0], [29.3, 116.0], [29.4, 117.0], [29.5, 117.0], [29.6, 117.0], [29.7, 118.0], [29.8, 119.0], [29.9, 120.0], [30.0, 121.0], [30.1, 122.0], [30.2, 122.0], [30.3, 123.0], [30.4, 123.0], [30.5, 123.0], [30.6, 124.0], [30.7, 125.0], [30.8, 125.0], [30.9, 127.0], [31.0, 127.0], [31.1, 127.0], [31.2, 128.0], [31.3, 129.0], [31.4, 129.0], [31.5, 129.0], [31.6, 130.0], [31.7, 131.0], [31.8, 131.0], [31.9, 132.0], [32.0, 132.0], [32.1, 133.0], [32.2, 133.0], [32.3, 134.0], [32.4, 135.0], [32.5, 136.0], [32.6, 137.0], [32.7, 138.0], [32.8, 139.0], [32.9, 140.0], [33.0, 140.0], [33.1, 141.0], [33.2, 142.0], [33.3, 143.0], [33.4, 144.0], [33.5, 144.0], [33.6, 145.0], [33.7, 146.0], [33.8, 146.0], [33.9, 147.0], [34.0, 149.0], [34.1, 149.0], [34.2, 150.0], [34.3, 152.0], [34.4, 152.0], [34.5, 153.0], [34.6, 154.0], [34.7, 155.0], [34.8, 156.0], [34.9, 157.0], [35.0, 158.0], [35.1, 158.0], [35.2, 158.0], [35.3, 159.0], [35.4, 160.0], [35.5, 160.0], [35.6, 161.0], [35.7, 161.0], [35.8, 161.0], [35.9, 162.0], [36.0, 163.0], [36.1, 163.0], [36.2, 164.0], [36.3, 164.0], [36.4, 165.0], [36.5, 165.0], [36.6, 165.0], [36.7, 166.0], [36.8, 166.0], [36.9, 167.0], [37.0, 167.0], [37.1, 167.0], [37.2, 168.0], [37.3, 168.0], [37.4, 168.0], [37.5, 169.0], [37.6, 170.0], [37.7, 171.0], [37.8, 172.0], [37.9, 172.0], [38.0, 172.0], [38.1, 173.0], [38.2, 174.0], [38.3, 175.0], [38.4, 175.0], [38.5, 175.0], [38.6, 176.0], [38.7, 176.0], [38.8, 177.0], [38.9, 177.0], [39.0, 178.0], [39.1, 178.0], [39.2, 180.0], [39.3, 180.0], [39.4, 182.0], [39.5, 182.0], [39.6, 183.0], [39.7, 183.0], [39.8, 184.0], [39.9, 185.0], [40.0, 186.0], [40.1, 186.0], [40.2, 187.0], [40.3, 187.0], [40.4, 188.0], [40.5, 189.0], [40.6, 190.0], [40.7, 190.0], [40.8, 191.0], [40.9, 191.0], [41.0, 192.0], [41.1, 192.0], [41.2, 193.0], [41.3, 193.0], [41.4, 194.0], [41.5, 194.0], [41.6, 195.0], [41.7, 196.0], [41.8, 196.0], [41.9, 197.0], [42.0, 198.0], [42.1, 198.0], [42.2, 199.0], [42.3, 200.0], [42.4, 202.0], [42.5, 203.0], [42.6, 205.0], [42.7, 206.0], [42.8, 207.0], [42.9, 208.0], [43.0, 208.0], [43.1, 210.0], [43.2, 212.0], [43.3, 212.0], [43.4, 213.0], [43.5, 215.0], [43.6, 216.0], [43.7, 216.0], [43.8, 217.0], [43.9, 217.0], [44.0, 220.0], [44.1, 220.0], [44.2, 222.0], [44.3, 223.0], [44.4, 223.0], [44.5, 224.0], [44.6, 224.0], [44.7, 225.0], [44.8, 226.0], [44.9, 227.0], [45.0, 228.0], [45.1, 229.0], [45.2, 229.0], [45.3, 230.0], [45.4, 231.0], [45.5, 231.0], [45.6, 232.0], [45.7, 233.0], [45.8, 234.0], [45.9, 235.0], [46.0, 235.0], [46.1, 236.0], [46.2, 237.0], [46.3, 238.0], [46.4, 238.0], [46.5, 239.0], [46.6, 240.0], [46.7, 240.0], [46.8, 241.0], [46.9, 241.0], [47.0, 242.0], [47.1, 242.0], [47.2, 243.0], [47.3, 243.0], [47.4, 244.0], [47.5, 244.0], [47.6, 244.0], [47.7, 245.0], [47.8, 246.0], [47.9, 246.0], [48.0, 246.0], [48.1, 247.0], [48.2, 247.0], [48.3, 248.0], [48.4, 249.0], [48.5, 249.0], [48.6, 250.0], [48.7, 250.0], [48.8, 251.0], [48.9, 252.0], [49.0, 252.0], [49.1, 253.0], [49.2, 253.0], [49.3, 254.0], [49.4, 254.0], [49.5, 255.0], [49.6, 256.0], [49.7, 257.0], [49.8, 257.0], [49.9, 258.0], [50.0, 259.0], [50.1, 259.0], [50.2, 259.0], [50.3, 260.0], [50.4, 260.0], [50.5, 261.0], [50.6, 263.0], [50.7, 263.0], [50.8, 264.0], [50.9, 265.0], [51.0, 265.0], [51.1, 266.0], [51.2, 267.0], [51.3, 268.0], [51.4, 268.0], [51.5, 269.0], [51.6, 270.0], [51.7, 271.0], [51.8, 271.0], [51.9, 272.0], [52.0, 272.0], [52.1, 274.0], [52.2, 274.0], [52.3, 276.0], [52.4, 277.0], [52.5, 277.0], [52.6, 278.0], [52.7, 280.0], [52.8, 280.0], [52.9, 281.0], [53.0, 281.0], [53.1, 282.0], [53.2, 282.0], [53.3, 283.0], [53.4, 284.0], [53.5, 285.0], [53.6, 285.0], [53.7, 286.0], [53.8, 287.0], [53.9, 288.0], [54.0, 289.0], [54.1, 290.0], [54.2, 291.0], [54.3, 292.0], [54.4, 294.0], [54.5, 296.0], [54.6, 298.0], [54.7, 299.0], [54.8, 300.0], [54.9, 301.0], [55.0, 303.0], [55.1, 306.0], [55.2, 306.0], [55.3, 307.0], [55.4, 308.0], [55.5, 310.0], [55.6, 312.0], [55.7, 315.0], [55.8, 315.0], [55.9, 317.0], [56.0, 318.0], [56.1, 322.0], [56.2, 323.0], [56.3, 325.0], [56.4, 329.0], [56.5, 333.0], [56.6, 335.0], [56.7, 338.0], [56.8, 340.0], [56.9, 341.0], [57.0, 342.0], [57.1, 343.0], [57.2, 344.0], [57.3, 344.0], [57.4, 345.0], [57.5, 346.0], [57.6, 346.0], [57.7, 347.0], [57.8, 348.0], [57.9, 348.0], [58.0, 349.0], [58.1, 351.0], [58.2, 352.0], [58.3, 353.0], [58.4, 354.0], [58.5, 355.0], [58.6, 356.0], [58.7, 356.0], [58.8, 357.0], [58.9, 358.0], [59.0, 359.0], [59.1, 359.0], [59.2, 360.0], [59.3, 360.0], [59.4, 361.0], [59.5, 361.0], [59.6, 362.0], [59.7, 363.0], [59.8, 364.0], [59.9, 364.0], [60.0, 364.0], [60.1, 365.0], [60.2, 365.0], [60.3, 365.0], [60.4, 366.0], [60.5, 366.0], [60.6, 366.0], [60.7, 367.0], [60.8, 367.0], [60.9, 368.0], [61.0, 368.0], [61.1, 369.0], [61.2, 369.0], [61.3, 370.0], [61.4, 370.0], [61.5, 371.0], [61.6, 372.0], [61.7, 372.0], [61.8, 373.0], [61.9, 374.0], [62.0, 374.0], [62.1, 375.0], [62.2, 375.0], [62.3, 376.0], [62.4, 376.0], [62.5, 377.0], [62.6, 377.0], [62.7, 378.0], [62.8, 378.0], [62.9, 379.0], [63.0, 380.0], [63.1, 381.0], [63.2, 381.0], [63.3, 381.0], [63.4, 382.0], [63.5, 382.0], [63.6, 383.0], [63.7, 383.0], [63.8, 383.0], [63.9, 383.0], [64.0, 384.0], [64.1, 385.0], [64.2, 385.0], [64.3, 386.0], [64.4, 386.0], [64.5, 386.0], [64.6, 387.0], [64.7, 387.0], [64.8, 388.0], [64.9, 388.0], [65.0, 389.0], [65.1, 389.0], [65.2, 390.0], [65.3, 391.0], [65.4, 391.0], [65.5, 392.0], [65.6, 392.0], [65.7, 394.0], [65.8, 394.0], [65.9, 395.0], [66.0, 395.0], [66.1, 395.0], [66.2, 396.0], [66.3, 396.0], [66.4, 396.0], [66.5, 397.0], [66.6, 397.0], [66.7, 398.0], [66.8, 399.0], [66.9, 400.0], [67.0, 400.0], [67.1, 400.0], [67.2, 400.0], [67.3, 401.0], [67.4, 401.0], [67.5, 402.0], [67.6, 402.0], [67.7, 403.0], [67.8, 404.0], [67.9, 404.0], [68.0, 405.0], [68.1, 406.0], [68.2, 407.0], [68.3, 407.0], [68.4, 408.0], [68.5, 408.0], [68.6, 409.0], [68.7, 410.0], [68.8, 410.0], [68.9, 410.0], [69.0, 411.0], [69.1, 411.0], [69.2, 411.0], [69.3, 411.0], [69.4, 412.0], [69.5, 412.0], [69.6, 413.0], [69.7, 413.0], [69.8, 414.0], [69.9, 414.0], [70.0, 416.0], [70.1, 417.0], [70.2, 418.0], [70.3, 419.0], [70.4, 419.0], [70.5, 420.0], [70.6, 422.0], [70.7, 423.0], [70.8, 424.0], [70.9, 425.0], [71.0, 425.0], [71.1, 430.0], [71.2, 431.0], [71.3, 434.0], [71.4, 435.0], [71.5, 437.0], [71.6, 442.0], [71.7, 444.0], [71.8, 445.0], [71.9, 446.0], [72.0, 448.0], [72.1, 449.0], [72.2, 450.0], [72.3, 452.0], [72.4, 453.0], [72.5, 456.0], [72.6, 458.0], [72.7, 460.0], [72.8, 462.0], [72.9, 464.0], [73.0, 465.0], [73.1, 466.0], [73.2, 466.0], [73.3, 467.0], [73.4, 470.0], [73.5, 473.0], [73.6, 474.0], [73.7, 477.0], [73.8, 478.0], [73.9, 479.0], [74.0, 481.0], [74.1, 482.0], [74.2, 482.0], [74.3, 484.0], [74.4, 485.0], [74.5, 487.0], [74.6, 489.0], [74.7, 490.0], [74.8, 490.0], [74.9, 492.0], [75.0, 494.0], [75.1, 495.0], [75.2, 495.0], [75.3, 499.0], [75.4, 500.0], [75.5, 500.0], [75.6, 501.0], [75.7, 502.0], [75.8, 503.0], [75.9, 504.0], [76.0, 505.0], [76.1, 505.0], [76.2, 507.0], [76.3, 507.0], [76.4, 509.0], [76.5, 509.0], [76.6, 511.0], [76.7, 512.0], [76.8, 512.0], [76.9, 513.0], [77.0, 514.0], [77.1, 515.0], [77.2, 516.0], [77.3, 516.0], [77.4, 518.0], [77.5, 520.0], [77.6, 520.0], [77.7, 520.0], [77.8, 521.0], [77.9, 522.0], [78.0, 524.0], [78.1, 526.0], [78.2, 528.0], [78.3, 528.0], [78.4, 529.0], [78.5, 530.0], [78.6, 531.0], [78.7, 532.0], [78.8, 533.0], [78.9, 535.0], [79.0, 536.0], [79.1, 537.0], [79.2, 538.0], [79.3, 540.0], [79.4, 541.0], [79.5, 543.0], [79.6, 544.0], [79.7, 545.0], [79.8, 549.0], [79.9, 551.0], [80.0, 551.0], [80.1, 553.0], [80.2, 554.0], [80.3, 558.0], [80.4, 560.0], [80.5, 561.0], [80.6, 563.0], [80.7, 564.0], [80.8, 566.0], [80.9, 567.0], [81.0, 568.0], [81.1, 569.0], [81.2, 571.0], [81.3, 571.0], [81.4, 573.0], [81.5, 573.0], [81.6, 576.0], [81.7, 576.0], [81.8, 578.0], [81.9, 579.0], [82.0, 580.0], [82.1, 582.0], [82.2, 584.0], [82.3, 586.0], [82.4, 587.0], [82.5, 588.0], [82.6, 591.0], [82.7, 591.0], [82.8, 596.0], [82.9, 599.0], [83.0, 600.0], [83.1, 602.0], [83.2, 604.0], [83.3, 607.0], [83.4, 610.0], [83.5, 612.0], [83.6, 613.0], [83.7, 614.0], [83.8, 615.0], [83.9, 617.0], [84.0, 622.0], [84.1, 623.0], [84.2, 628.0], [84.3, 629.0], [84.4, 631.0], [84.5, 637.0], [84.6, 640.0], [84.7, 649.0], [84.8, 654.0], [84.9, 656.0], [85.0, 659.0], [85.1, 661.0], [85.2, 666.0], [85.3, 668.0], [85.4, 671.0], [85.5, 672.0], [85.6, 676.0], [85.7, 681.0], [85.8, 684.0], [85.9, 688.0], [86.0, 690.0], [86.1, 695.0], [86.2, 697.0], [86.3, 700.0], [86.4, 703.0], [86.5, 704.0], [86.6, 705.0], [86.7, 706.0], [86.8, 707.0], [86.9, 709.0], [87.0, 713.0], [87.1, 717.0], [87.2, 719.0], [87.3, 726.0], [87.4, 730.0], [87.5, 735.0], [87.6, 735.0], [87.7, 739.0], [87.8, 742.0], [87.9, 745.0], [88.0, 747.0], [88.1, 751.0], [88.2, 753.0], [88.3, 782.0], [88.4, 824.0], [88.5, 837.0], [88.6, 842.0], [88.7, 844.0], [88.8, 848.0], [88.9, 852.0], [89.0, 855.0], [89.1, 859.0], [89.2, 860.0], [89.3, 863.0], [89.4, 864.0], [89.5, 866.0], [89.6, 872.0], [89.7, 878.0], [89.8, 885.0], [89.9, 904.0], [90.0, 924.0], [90.1, 945.0], [90.2, 993.0], [90.3, 1019.0], [90.4, 1055.0], [90.5, 1086.0], [90.6, 1135.0], [90.7, 1169.0], [90.8, 1206.0], [90.9, 1250.0], [91.0, 1276.0], [91.1, 1312.0], [91.2, 1336.0], [91.3, 1355.0], [91.4, 1357.0], [91.5, 1370.0], [91.6, 1372.0], [91.7, 1380.0], [91.8, 1392.0], [91.9, 1405.0], [92.0, 1411.0], [92.1, 1415.0], [92.2, 1416.0], [92.3, 1419.0], [92.4, 1430.0], [92.5, 1445.0], [92.6, 1448.0], [92.7, 1461.0], [92.8, 1480.0], [92.9, 1516.0], [93.0, 1557.0], [93.1, 1589.0], [93.2, 1605.0], [93.3, 1608.0], [93.4, 1613.0], [93.5, 1614.0], [93.6, 1616.0], [93.7, 1617.0], [93.8, 1620.0], [93.9, 1621.0], [94.0, 1623.0], [94.1, 1626.0], [94.2, 1627.0], [94.3, 1628.0], [94.4, 1643.0], [94.5, 1679.0], [94.6, 1692.0], [94.7, 1754.0], [94.8, 1768.0], [94.9, 1787.0], [95.0, 1807.0], [95.1, 1824.0], [95.2, 1840.0], [95.3, 1871.0], [95.4, 1874.0], [95.5, 1878.0], [95.6, 1880.0], [95.7, 1890.0], [95.8, 1895.0], [95.9, 1898.0], [96.0, 1904.0], [96.1, 1917.0], [96.2, 1963.0], [96.3, 1970.0], [96.4, 1975.0], [96.5, 1983.0], [96.6, 1995.0], [96.7, 2000.0], [96.8, 2006.0], [96.9, 2013.0], [97.0, 2017.0], [97.1, 2030.0], [97.2, 2033.0], [97.3, 2037.0], [97.4, 2043.0], [97.5, 2057.0], [97.6, 2061.0], [97.7, 2073.0], [97.8, 2079.0], [97.9, 2082.0], [98.0, 2088.0], [98.1, 2093.0], [98.2, 2095.0], [98.3, 2101.0], [98.4, 2109.0], [98.5, 2112.0], [98.6, 2113.0], [98.7, 2115.0], [98.8, 2117.0], [98.9, 2118.0], [99.0, 2120.0], [99.1, 2121.0], [99.2, 2124.0], [99.3, 2128.0], [99.4, 2129.0], [99.5, 2129.0], [99.6, 2133.0], [99.7, 2136.0], [99.8, 2138.0], [99.9, 2141.0], [100.0, 2149.0]], "isOverall": false, "label": "gateway_0/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 11.0, "minX": 0.0, "maxY": 995.0, "series": [{"data": [[0.0, 995.0], [2100.0, 65.0], [600.0, 128.0], [700.0, 78.0], [200.0, 479.0], [800.0, 58.0], [900.0, 14.0], [1000.0, 11.0], [1100.0, 11.0], [300.0, 462.0], [1200.0, 11.0], [1300.0, 30.0], [1400.0, 37.0], [1500.0, 11.0], [100.0, 615.0], [400.0, 325.0], [1600.0, 56.0], [1700.0, 13.0], [1800.0, 39.0], [1900.0, 28.0], [500.0, 288.0], [2000.0, 61.0]], "isOverall": false, "label": "gateway_0/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 273.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1956.0, "series": [{"data": [[0.0, 1956.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 660.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 273.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 926.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 379.1043250327651, "minX": 1.68579066E12, "maxY": 379.1043250327651, "series": [{"data": [[1.68579066E12, 379.1043250327651]], "isOverall": false, "label": "noauth", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68579066E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 18.0, "minX": 10.0, "maxY": 2139.0, "series": [{"data": [[10.0, 728.75], [11.0, 698.7142857142857], [12.0, 703.0], [14.0, 738.0], [15.0, 703.0], [16.0, 742.0], [18.0, 742.0], [19.0, 688.0], [20.0, 730.0], [23.0, 700.3333333333334], [25.0, 734.0], [29.0, 713.25], [30.0, 723.0], [31.0, 721.0], [32.0, 728.0], [34.0, 718.5], [39.0, 1418.0], [38.0, 1067.0], [41.0, 1415.0], [40.0, 1415.0], [43.0, 1415.0], [45.0, 1415.0], [44.0, 1419.0], [46.0, 1417.0], [51.0, 1461.0], [50.0, 1440.75], [57.0, 701.6666666666666], [56.0, 699.0], [60.0, 1448.5], [63.0, 2023.0], [62.0, 1740.0], [67.0, 1359.0], [66.0, 1732.0], [64.0, 2021.0], [71.0, 2032.0], [70.0, 2023.5], [68.0, 1735.0], [72.0, 2014.0], [79.0, 2057.0], [78.0, 2046.0], [77.0, 2037.0], [76.0, 1700.25], [87.0, 2060.0], [86.0, 2060.5], [84.0, 2055.4], [91.0, 2107.5], [90.0, 2073.0], [89.0, 2069.0], [94.0, 2088.0], [93.0, 2079.0], [99.0, 1725.0], [97.0, 2088.0], [96.0, 2085.5], [105.0, 1702.0], [111.0, 1405.0], [110.0, 1416.0], [109.0, 1466.1249999999998], [115.0, 1974.0], [113.0, 1405.0], [112.0, 1405.0], [117.0, 1972.0], [116.0, 1666.5], [123.0, 1983.0], [122.0, 1981.0], [121.0, 1983.0], [120.0, 1974.6666666666667], [127.0, 1996.0], [126.0, 1998.0], [125.0, 1988.0], [124.0, 1981.0], [135.0, 1336.0], [134.0, 1355.0], [133.0, 2001.0], [132.0, 1336.0], [131.0, 1357.0], [130.0, 2006.0], [128.0, 1341.0], [142.0, 2000.0], [141.0, 2003.0], [140.0, 1367.0], [139.0, 1995.0], [138.0, 1683.5], [137.0, 1380.0], [149.0, 855.0], [145.0, 878.0], [144.0, 2013.0], [159.0, 1617.0], [156.0, 843.0], [153.0, 868.0], [166.0, 848.0], [163.0, 1242.25], [162.0, 1105.6666666666667], [160.0, 1624.0], [173.0, 613.0], [169.0, 842.0], [168.0, 1240.0], [180.0, 849.0], [179.0, 1614.0], [191.0, 1046.8333333333335], [190.0, 851.5], [188.0, 847.5], [195.0, 1245.5], [193.0, 1933.0], [205.0, 847.0], [202.0, 1234.5], [200.0, 1256.0], [215.0, 1625.0], [213.0, 1621.0], [212.0, 1622.5], [210.0, 1622.0], [209.0, 1610.6], [208.0, 1609.0], [221.0, 1628.0], [219.0, 1623.5], [216.0, 1629.0], [228.0, 1691.25], [225.0, 1619.0], [239.0, 2116.0], [235.0, 1612.0], [232.0, 2132.5], [246.0, 2121.5], [245.0, 2124.0], [243.0, 2069.6666666666665], [242.0, 2121.0], [240.0, 2118.0], [251.0, 2139.0], [270.0, 2114.0], [268.0, 2112.0], [265.0, 2137.0], [263.0, 1957.0], [262.0, 2120.0], [260.0, 2118.0], [259.0, 2120.8571428571427], [256.0, 1614.0], [284.0, 2129.0], [282.0, 1828.0], [281.0, 2112.6666666666665], [278.0, 2127.6666666666665], [277.0, 2133.0], [274.0, 2120.0], [303.0, 1813.0], [302.0, 1906.3333333333333], [299.0, 1896.0], [297.0, 1912.0], [296.0, 1871.0], [295.0, 1900.0], [293.0, 2127.0], [292.0, 2129.0], [289.0, 2129.0], [318.0, 1877.0], [316.0, 2099.0], [315.0, 1967.5], [312.0, 1871.0], [311.0, 1991.0], [310.0, 1902.0], [308.0, 1967.0], [307.0, 1872.0], [305.0, 1806.0], [335.0, 959.0], [334.0, 1899.0], [332.0, 1938.0], [328.0, 1871.0], [327.0, 1874.0], [325.0, 2093.8571428571427], [351.0, 956.0], [348.0, 1001.7500000000001], [347.0, 722.3333333333333], [342.0, 21.5], [341.0, 960.5], [340.0, 1895.0], [336.0, 20.0], [364.0, 37.0], [367.0, 41.0], [366.0, 44.0], [365.0, 411.8], [363.0, 1048.0], [359.0, 38.0], [352.0, 1049.5], [355.0, 27.0], [353.0, 1886.0], [358.0, 18.0], [357.0, 38.0], [356.0, 48.0], [381.0, 74.0], [383.0, 71.0], [380.0, 955.5], [371.0, 59.5], [369.0, 42.666666666666664], [368.0, 1868.0], [379.0, 59.0], [378.0, 63.333333333333336], [377.0, 72.0], [376.0, 72.0], [375.0, 1314.0], [374.0, 58.0], [373.0, 721.0], [372.0, 65.0], [397.0, 473.44444444444446], [399.0, 755.7499999999999], [396.0, 679.8333333333334], [395.0, 78.71428571428571], [394.0, 949.0], [393.0, 75.0], [388.0, 88.0], [387.0, 551.5], [386.0, 71.0], [385.0, 74.8], [384.0, 64.0], [400.0, 301.11909711909567]], "isOverall": false, "label": "gateway_0/helloauth", "isController": false}, {"data": [[379.1038007863689, 418.08440366972303]], "isOverall": false, "label": "gateway_0/helloauth-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 400.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6018.75, "minX": 1.68579066E12, "maxY": 45271.183333333334, "series": [{"data": [[1.68579066E12, 45271.183333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68579066E12, 6018.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68579066E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 418.08440366972303, "minX": 1.68579066E12, "maxY": 418.08440366972303, "series": [{"data": [[1.68579066E12, 418.08440366972303]], "isOverall": false, "label": "gateway_0/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68579066E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 403.50747051114007, "minX": 1.68579066E12, "maxY": 403.50747051114007, "series": [{"data": [[1.68579066E12, 403.50747051114007]], "isOverall": false, "label": "gateway_0/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68579066E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 36.906159895150665, "minX": 1.68579066E12, "maxY": 36.906159895150665, "series": [{"data": [[1.68579066E12, 36.906159895150665]], "isOverall": false, "label": "gateway_0/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68579066E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 66.0, "minX": 1.68579066E12, "maxY": 2149.0, "series": [{"data": [[1.68579066E12, 2149.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68579066E12, 66.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68579066E12, 1436.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68579066E12, 2127.1]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68579066E12, 375.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68579066E12, 1964.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68579066E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 10.0, "minX": 20.0, "maxY": 1767.5, "series": [{"data": [[1148.0, 281.0], [1157.0, 330.0], [20.0, 166.5], [648.0, 637.5], [91.0, 1415.0], [751.0, 1767.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1157.0, 10.0], [648.0, 62.0], [751.0, 58.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1157.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 20.0, "maxY": 1767.5, "series": [{"data": [[1148.0, 281.0], [1157.0, 330.0], [20.0, 166.5], [648.0, 637.5], [91.0, 1415.0], [751.0, 1767.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1157.0, 0.0], [648.0, 0.0], [751.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1157.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 63.583333333333336, "minX": 1.68579066E12, "maxY": 63.583333333333336, "series": [{"data": [[1.68579066E12, 63.583333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68579066E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.68579066E12, "maxY": 48.15, "series": [{"data": [[1.68579066E12, 48.15]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.68579066E12, 15.416666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.68579066E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68579066E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 15.433333333333334, "minX": 1.68579066E12, "maxY": 48.15, "series": [{"data": [[1.68579066E12, 48.15]], "isOverall": false, "label": "gateway_0/helloauth-success", "isController": false}, {"data": [[1.68579066E12, 15.433333333333334]], "isOverall": false, "label": "gateway_0/helloauth-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68579066E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 15.433333333333334, "minX": 1.68579066E12, "maxY": 48.15, "series": [{"data": [[1.68579066E12, 48.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.68579066E12, 15.433333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68579066E12, "title": "Total Transactions Per Second"}},
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

