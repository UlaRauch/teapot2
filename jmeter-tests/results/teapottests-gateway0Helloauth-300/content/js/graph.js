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
        data: {"result": {"minY": 42.0, "minX": 0.0, "maxY": 981.0, "series": [{"data": [[0.0, 42.0], [0.1, 56.0], [0.2, 62.0], [0.3, 69.0], [0.4, 76.0], [0.5, 81.0], [0.6, 83.0], [0.7, 86.0], [0.8, 88.0], [0.9, 91.0], [1.0, 92.0], [1.1, 93.0], [1.2, 95.0], [1.3, 97.0], [1.4, 98.0], [1.5, 100.0], [1.6, 101.0], [1.7, 102.0], [1.8, 104.0], [1.9, 106.0], [2.0, 107.0], [2.1, 108.0], [2.2, 110.0], [2.3, 111.0], [2.4, 112.0], [2.5, 113.0], [2.6, 113.0], [2.7, 114.0], [2.8, 114.0], [2.9, 115.0], [3.0, 116.0], [3.1, 117.0], [3.2, 117.0], [3.3, 118.0], [3.4, 119.0], [3.5, 119.0], [3.6, 120.0], [3.7, 121.0], [3.8, 121.0], [3.9, 122.0], [4.0, 123.0], [4.1, 123.0], [4.2, 124.0], [4.3, 124.0], [4.4, 124.0], [4.5, 125.0], [4.6, 125.0], [4.7, 126.0], [4.8, 127.0], [4.9, 128.0], [5.0, 128.0], [5.1, 129.0], [5.2, 129.0], [5.3, 130.0], [5.4, 130.0], [5.5, 131.0], [5.6, 131.0], [5.7, 131.0], [5.8, 132.0], [5.9, 132.0], [6.0, 133.0], [6.1, 133.0], [6.2, 134.0], [6.3, 134.0], [6.4, 135.0], [6.5, 135.0], [6.6, 136.0], [6.7, 136.0], [6.8, 137.0], [6.9, 137.0], [7.0, 137.0], [7.1, 138.0], [7.2, 138.0], [7.3, 138.0], [7.4, 139.0], [7.5, 139.0], [7.6, 139.0], [7.7, 140.0], [7.8, 140.0], [7.9, 140.0], [8.0, 141.0], [8.1, 141.0], [8.2, 142.0], [8.3, 142.0], [8.4, 143.0], [8.5, 143.0], [8.6, 144.0], [8.7, 144.0], [8.8, 145.0], [8.9, 146.0], [9.0, 146.0], [9.1, 147.0], [9.2, 147.0], [9.3, 148.0], [9.4, 148.0], [9.5, 149.0], [9.6, 149.0], [9.7, 150.0], [9.8, 150.0], [9.9, 151.0], [10.0, 151.0], [10.1, 151.0], [10.2, 152.0], [10.3, 152.0], [10.4, 153.0], [10.5, 153.0], [10.6, 153.0], [10.7, 153.0], [10.8, 154.0], [10.9, 154.0], [11.0, 154.0], [11.1, 155.0], [11.2, 155.0], [11.3, 155.0], [11.4, 156.0], [11.5, 156.0], [11.6, 156.0], [11.7, 157.0], [11.8, 157.0], [11.9, 157.0], [12.0, 157.0], [12.1, 158.0], [12.2, 158.0], [12.3, 159.0], [12.4, 159.0], [12.5, 159.0], [12.6, 159.0], [12.7, 160.0], [12.8, 160.0], [12.9, 160.0], [13.0, 160.0], [13.1, 161.0], [13.2, 161.0], [13.3, 162.0], [13.4, 162.0], [13.5, 163.0], [13.6, 163.0], [13.7, 163.0], [13.8, 163.0], [13.9, 164.0], [14.0, 164.0], [14.1, 164.0], [14.2, 165.0], [14.3, 165.0], [14.4, 165.0], [14.5, 166.0], [14.6, 166.0], [14.7, 166.0], [14.8, 167.0], [14.9, 167.0], [15.0, 167.0], [15.1, 168.0], [15.2, 168.0], [15.3, 168.0], [15.4, 168.0], [15.5, 169.0], [15.6, 169.0], [15.7, 169.0], [15.8, 170.0], [15.9, 170.0], [16.0, 170.0], [16.1, 170.0], [16.2, 170.0], [16.3, 171.0], [16.4, 171.0], [16.5, 171.0], [16.6, 172.0], [16.7, 172.0], [16.8, 172.0], [16.9, 172.0], [17.0, 173.0], [17.1, 173.0], [17.2, 173.0], [17.3, 173.0], [17.4, 174.0], [17.5, 174.0], [17.6, 174.0], [17.7, 174.0], [17.8, 175.0], [17.9, 175.0], [18.0, 175.0], [18.1, 176.0], [18.2, 176.0], [18.3, 176.0], [18.4, 176.0], [18.5, 176.0], [18.6, 177.0], [18.7, 177.0], [18.8, 177.0], [18.9, 178.0], [19.0, 178.0], [19.1, 178.0], [19.2, 178.0], [19.3, 179.0], [19.4, 179.0], [19.5, 179.0], [19.6, 180.0], [19.7, 180.0], [19.8, 180.0], [19.9, 180.0], [20.0, 181.0], [20.1, 181.0], [20.2, 181.0], [20.3, 181.0], [20.4, 182.0], [20.5, 182.0], [20.6, 182.0], [20.7, 182.0], [20.8, 183.0], [20.9, 183.0], [21.0, 183.0], [21.1, 184.0], [21.2, 184.0], [21.3, 184.0], [21.4, 185.0], [21.5, 185.0], [21.6, 185.0], [21.7, 186.0], [21.8, 186.0], [21.9, 186.0], [22.0, 187.0], [22.1, 187.0], [22.2, 187.0], [22.3, 187.0], [22.4, 187.0], [22.5, 188.0], [22.6, 188.0], [22.7, 188.0], [22.8, 188.0], [22.9, 189.0], [23.0, 189.0], [23.1, 189.0], [23.2, 190.0], [23.3, 190.0], [23.4, 190.0], [23.5, 191.0], [23.6, 191.0], [23.7, 191.0], [23.8, 192.0], [23.9, 192.0], [24.0, 192.0], [24.1, 192.0], [24.2, 193.0], [24.3, 193.0], [24.4, 193.0], [24.5, 194.0], [24.6, 194.0], [24.7, 195.0], [24.8, 195.0], [24.9, 195.0], [25.0, 196.0], [25.1, 196.0], [25.2, 197.0], [25.3, 197.0], [25.4, 197.0], [25.5, 198.0], [25.6, 198.0], [25.7, 198.0], [25.8, 199.0], [25.9, 199.0], [26.0, 199.0], [26.1, 199.0], [26.2, 200.0], [26.3, 200.0], [26.4, 200.0], [26.5, 201.0], [26.6, 201.0], [26.7, 202.0], [26.8, 202.0], [26.9, 203.0], [27.0, 203.0], [27.1, 203.0], [27.2, 204.0], [27.3, 204.0], [27.4, 204.0], [27.5, 205.0], [27.6, 205.0], [27.7, 205.0], [27.8, 206.0], [27.9, 206.0], [28.0, 206.0], [28.1, 207.0], [28.2, 207.0], [28.3, 207.0], [28.4, 207.0], [28.5, 208.0], [28.6, 208.0], [28.7, 209.0], [28.8, 209.0], [28.9, 209.0], [29.0, 210.0], [29.1, 210.0], [29.2, 210.0], [29.3, 211.0], [29.4, 211.0], [29.5, 211.0], [29.6, 212.0], [29.7, 212.0], [29.8, 213.0], [29.9, 213.0], [30.0, 213.0], [30.1, 213.0], [30.2, 214.0], [30.3, 214.0], [30.4, 215.0], [30.5, 215.0], [30.6, 215.0], [30.7, 215.0], [30.8, 216.0], [30.9, 216.0], [31.0, 216.0], [31.1, 216.0], [31.2, 217.0], [31.3, 217.0], [31.4, 218.0], [31.5, 218.0], [31.6, 218.0], [31.7, 219.0], [31.8, 219.0], [31.9, 219.0], [32.0, 219.0], [32.1, 220.0], [32.2, 220.0], [32.3, 220.0], [32.4, 221.0], [32.5, 221.0], [32.6, 221.0], [32.7, 222.0], [32.8, 222.0], [32.9, 222.0], [33.0, 222.0], [33.1, 223.0], [33.2, 223.0], [33.3, 223.0], [33.4, 224.0], [33.5, 225.0], [33.6, 225.0], [33.7, 225.0], [33.8, 225.0], [33.9, 226.0], [34.0, 226.0], [34.1, 226.0], [34.2, 227.0], [34.3, 227.0], [34.4, 228.0], [34.5, 228.0], [34.6, 228.0], [34.7, 229.0], [34.8, 229.0], [34.9, 229.0], [35.0, 230.0], [35.1, 230.0], [35.2, 231.0], [35.3, 231.0], [35.4, 231.0], [35.5, 231.0], [35.6, 232.0], [35.7, 232.0], [35.8, 232.0], [35.9, 232.0], [36.0, 232.0], [36.1, 233.0], [36.2, 233.0], [36.3, 233.0], [36.4, 234.0], [36.5, 234.0], [36.6, 234.0], [36.7, 234.0], [36.8, 235.0], [36.9, 235.0], [37.0, 236.0], [37.1, 236.0], [37.2, 236.0], [37.3, 237.0], [37.4, 237.0], [37.5, 237.0], [37.6, 237.0], [37.7, 237.0], [37.8, 238.0], [37.9, 238.0], [38.0, 238.0], [38.1, 239.0], [38.2, 239.0], [38.3, 240.0], [38.4, 240.0], [38.5, 240.0], [38.6, 240.0], [38.7, 241.0], [38.8, 241.0], [38.9, 241.0], [39.0, 242.0], [39.1, 242.0], [39.2, 242.0], [39.3, 243.0], [39.4, 243.0], [39.5, 243.0], [39.6, 243.0], [39.7, 243.0], [39.8, 243.0], [39.9, 244.0], [40.0, 244.0], [40.1, 244.0], [40.2, 245.0], [40.3, 245.0], [40.4, 246.0], [40.5, 246.0], [40.6, 246.0], [40.7, 246.0], [40.8, 247.0], [40.9, 247.0], [41.0, 247.0], [41.1, 247.0], [41.2, 247.0], [41.3, 248.0], [41.4, 248.0], [41.5, 248.0], [41.6, 249.0], [41.7, 249.0], [41.8, 249.0], [41.9, 249.0], [42.0, 250.0], [42.1, 250.0], [42.2, 250.0], [42.3, 250.0], [42.4, 251.0], [42.5, 251.0], [42.6, 251.0], [42.7, 252.0], [42.8, 252.0], [42.9, 252.0], [43.0, 252.0], [43.1, 253.0], [43.2, 253.0], [43.3, 253.0], [43.4, 254.0], [43.5, 254.0], [43.6, 254.0], [43.7, 255.0], [43.8, 255.0], [43.9, 255.0], [44.0, 256.0], [44.1, 256.0], [44.2, 256.0], [44.3, 257.0], [44.4, 257.0], [44.5, 257.0], [44.6, 257.0], [44.7, 257.0], [44.8, 258.0], [44.9, 258.0], [45.0, 258.0], [45.1, 258.0], [45.2, 259.0], [45.3, 259.0], [45.4, 259.0], [45.5, 259.0], [45.6, 260.0], [45.7, 260.0], [45.8, 260.0], [45.9, 261.0], [46.0, 261.0], [46.1, 261.0], [46.2, 262.0], [46.3, 262.0], [46.4, 262.0], [46.5, 263.0], [46.6, 263.0], [46.7, 263.0], [46.8, 263.0], [46.9, 264.0], [47.0, 264.0], [47.1, 264.0], [47.2, 265.0], [47.3, 265.0], [47.4, 265.0], [47.5, 266.0], [47.6, 266.0], [47.7, 266.0], [47.8, 266.0], [47.9, 267.0], [48.0, 267.0], [48.1, 267.0], [48.2, 267.0], [48.3, 267.0], [48.4, 268.0], [48.5, 268.0], [48.6, 269.0], [48.7, 269.0], [48.8, 269.0], [48.9, 270.0], [49.0, 270.0], [49.1, 270.0], [49.2, 270.0], [49.3, 271.0], [49.4, 271.0], [49.5, 271.0], [49.6, 271.0], [49.7, 272.0], [49.8, 272.0], [49.9, 272.0], [50.0, 272.0], [50.1, 273.0], [50.2, 273.0], [50.3, 273.0], [50.4, 274.0], [50.5, 274.0], [50.6, 274.0], [50.7, 275.0], [50.8, 275.0], [50.9, 275.0], [51.0, 275.0], [51.1, 276.0], [51.2, 276.0], [51.3, 276.0], [51.4, 277.0], [51.5, 277.0], [51.6, 277.0], [51.7, 277.0], [51.8, 278.0], [51.9, 278.0], [52.0, 279.0], [52.1, 279.0], [52.2, 279.0], [52.3, 279.0], [52.4, 280.0], [52.5, 280.0], [52.6, 281.0], [52.7, 281.0], [52.8, 281.0], [52.9, 282.0], [53.0, 282.0], [53.1, 283.0], [53.2, 283.0], [53.3, 283.0], [53.4, 284.0], [53.5, 284.0], [53.6, 285.0], [53.7, 285.0], [53.8, 285.0], [53.9, 286.0], [54.0, 286.0], [54.1, 287.0], [54.2, 287.0], [54.3, 288.0], [54.4, 288.0], [54.5, 288.0], [54.6, 289.0], [54.7, 289.0], [54.8, 290.0], [54.9, 290.0], [55.0, 290.0], [55.1, 291.0], [55.2, 291.0], [55.3, 292.0], [55.4, 292.0], [55.5, 293.0], [55.6, 293.0], [55.7, 294.0], [55.8, 294.0], [55.9, 295.0], [56.0, 295.0], [56.1, 295.0], [56.2, 296.0], [56.3, 296.0], [56.4, 296.0], [56.5, 297.0], [56.6, 297.0], [56.7, 297.0], [56.8, 298.0], [56.9, 298.0], [57.0, 298.0], [57.1, 299.0], [57.2, 300.0], [57.3, 300.0], [57.4, 301.0], [57.5, 301.0], [57.6, 301.0], [57.7, 302.0], [57.8, 302.0], [57.9, 302.0], [58.0, 303.0], [58.1, 303.0], [58.2, 304.0], [58.3, 304.0], [58.4, 305.0], [58.5, 305.0], [58.6, 306.0], [58.7, 306.0], [58.8, 307.0], [58.9, 307.0], [59.0, 307.0], [59.1, 308.0], [59.2, 308.0], [59.3, 309.0], [59.4, 309.0], [59.5, 310.0], [59.6, 310.0], [59.7, 311.0], [59.8, 311.0], [59.9, 311.0], [60.0, 312.0], [60.1, 312.0], [60.2, 313.0], [60.3, 313.0], [60.4, 314.0], [60.5, 314.0], [60.6, 314.0], [60.7, 315.0], [60.8, 315.0], [60.9, 316.0], [61.0, 316.0], [61.1, 317.0], [61.2, 317.0], [61.3, 317.0], [61.4, 318.0], [61.5, 318.0], [61.6, 319.0], [61.7, 319.0], [61.8, 320.0], [61.9, 320.0], [62.0, 320.0], [62.1, 321.0], [62.2, 322.0], [62.3, 322.0], [62.4, 323.0], [62.5, 323.0], [62.6, 323.0], [62.7, 324.0], [62.8, 324.0], [62.9, 325.0], [63.0, 325.0], [63.1, 325.0], [63.2, 326.0], [63.3, 326.0], [63.4, 327.0], [63.5, 327.0], [63.6, 328.0], [63.7, 328.0], [63.8, 328.0], [63.9, 329.0], [64.0, 329.0], [64.1, 330.0], [64.2, 330.0], [64.3, 331.0], [64.4, 331.0], [64.5, 331.0], [64.6, 332.0], [64.7, 332.0], [64.8, 332.0], [64.9, 333.0], [65.0, 333.0], [65.1, 334.0], [65.2, 334.0], [65.3, 335.0], [65.4, 335.0], [65.5, 336.0], [65.6, 336.0], [65.7, 337.0], [65.8, 337.0], [65.9, 338.0], [66.0, 338.0], [66.1, 339.0], [66.2, 339.0], [66.3, 339.0], [66.4, 340.0], [66.5, 340.0], [66.6, 341.0], [66.7, 341.0], [66.8, 342.0], [66.9, 342.0], [67.0, 343.0], [67.1, 343.0], [67.2, 344.0], [67.3, 344.0], [67.4, 345.0], [67.5, 346.0], [67.6, 347.0], [67.7, 347.0], [67.8, 348.0], [67.9, 348.0], [68.0, 348.0], [68.1, 349.0], [68.2, 349.0], [68.3, 350.0], [68.4, 351.0], [68.5, 351.0], [68.6, 351.0], [68.7, 352.0], [68.8, 352.0], [68.9, 353.0], [69.0, 353.0], [69.1, 354.0], [69.2, 354.0], [69.3, 354.0], [69.4, 355.0], [69.5, 355.0], [69.6, 356.0], [69.7, 357.0], [69.8, 357.0], [69.9, 358.0], [70.0, 358.0], [70.1, 358.0], [70.2, 359.0], [70.3, 359.0], [70.4, 360.0], [70.5, 360.0], [70.6, 361.0], [70.7, 362.0], [70.8, 362.0], [70.9, 363.0], [71.0, 364.0], [71.1, 364.0], [71.2, 364.0], [71.3, 365.0], [71.4, 365.0], [71.5, 366.0], [71.6, 366.0], [71.7, 367.0], [71.8, 368.0], [71.9, 368.0], [72.0, 369.0], [72.1, 370.0], [72.2, 370.0], [72.3, 370.0], [72.4, 371.0], [72.5, 371.0], [72.6, 372.0], [72.7, 372.0], [72.8, 373.0], [72.9, 373.0], [73.0, 374.0], [73.1, 375.0], [73.2, 375.0], [73.3, 376.0], [73.4, 377.0], [73.5, 377.0], [73.6, 378.0], [73.7, 379.0], [73.8, 379.0], [73.9, 380.0], [74.0, 380.0], [74.1, 380.0], [74.2, 381.0], [74.3, 381.0], [74.4, 382.0], [74.5, 383.0], [74.6, 383.0], [74.7, 383.0], [74.8, 384.0], [74.9, 384.0], [75.0, 385.0], [75.1, 385.0], [75.2, 386.0], [75.3, 386.0], [75.4, 386.0], [75.5, 387.0], [75.6, 387.0], [75.7, 387.0], [75.8, 388.0], [75.9, 388.0], [76.0, 389.0], [76.1, 389.0], [76.2, 389.0], [76.3, 390.0], [76.4, 390.0], [76.5, 391.0], [76.6, 391.0], [76.7, 392.0], [76.8, 392.0], [76.9, 393.0], [77.0, 394.0], [77.1, 394.0], [77.2, 395.0], [77.3, 396.0], [77.4, 396.0], [77.5, 397.0], [77.6, 398.0], [77.7, 398.0], [77.8, 399.0], [77.9, 400.0], [78.0, 401.0], [78.1, 401.0], [78.2, 402.0], [78.3, 402.0], [78.4, 403.0], [78.5, 404.0], [78.6, 404.0], [78.7, 405.0], [78.8, 406.0], [78.9, 406.0], [79.0, 407.0], [79.1, 408.0], [79.2, 408.0], [79.3, 409.0], [79.4, 410.0], [79.5, 412.0], [79.6, 412.0], [79.7, 413.0], [79.8, 414.0], [79.9, 415.0], [80.0, 416.0], [80.1, 418.0], [80.2, 420.0], [80.3, 421.0], [80.4, 422.0], [80.5, 423.0], [80.6, 424.0], [80.7, 426.0], [80.8, 427.0], [80.9, 428.0], [81.0, 429.0], [81.1, 432.0], [81.2, 434.0], [81.3, 435.0], [81.4, 437.0], [81.5, 438.0], [81.6, 440.0], [81.7, 442.0], [81.8, 443.0], [81.9, 444.0], [82.0, 448.0], [82.1, 448.0], [82.2, 451.0], [82.3, 452.0], [82.4, 453.0], [82.5, 454.0], [82.6, 455.0], [82.7, 458.0], [82.8, 459.0], [82.9, 461.0], [83.0, 463.0], [83.1, 464.0], [83.2, 467.0], [83.3, 468.0], [83.4, 470.0], [83.5, 471.0], [83.6, 473.0], [83.7, 475.0], [83.8, 477.0], [83.9, 479.0], [84.0, 482.0], [84.1, 484.0], [84.2, 487.0], [84.3, 489.0], [84.4, 492.0], [84.5, 496.0], [84.6, 498.0], [84.7, 501.0], [84.8, 502.0], [84.9, 505.0], [85.0, 506.0], [85.1, 508.0], [85.2, 510.0], [85.3, 512.0], [85.4, 514.0], [85.5, 516.0], [85.6, 516.0], [85.7, 518.0], [85.8, 519.0], [85.9, 522.0], [86.0, 522.0], [86.1, 523.0], [86.2, 524.0], [86.3, 525.0], [86.4, 526.0], [86.5, 528.0], [86.6, 530.0], [86.7, 531.0], [86.8, 533.0], [86.9, 534.0], [87.0, 535.0], [87.1, 537.0], [87.2, 538.0], [87.3, 541.0], [87.4, 543.0], [87.5, 543.0], [87.6, 545.0], [87.7, 547.0], [87.8, 549.0], [87.9, 551.0], [88.0, 552.0], [88.1, 553.0], [88.2, 554.0], [88.3, 556.0], [88.4, 557.0], [88.5, 558.0], [88.6, 561.0], [88.7, 565.0], [88.8, 565.0], [88.9, 567.0], [89.0, 569.0], [89.1, 570.0], [89.2, 571.0], [89.3, 573.0], [89.4, 573.0], [89.5, 575.0], [89.6, 575.0], [89.7, 576.0], [89.8, 576.0], [89.9, 577.0], [90.0, 580.0], [90.1, 583.0], [90.2, 584.0], [90.3, 585.0], [90.4, 590.0], [90.5, 592.0], [90.6, 595.0], [90.7, 596.0], [90.8, 597.0], [90.9, 600.0], [91.0, 601.0], [91.1, 602.0], [91.2, 605.0], [91.3, 608.0], [91.4, 610.0], [91.5, 611.0], [91.6, 614.0], [91.7, 615.0], [91.8, 620.0], [91.9, 622.0], [92.0, 625.0], [92.1, 629.0], [92.2, 630.0], [92.3, 631.0], [92.4, 634.0], [92.5, 637.0], [92.6, 639.0], [92.7, 645.0], [92.8, 650.0], [92.9, 653.0], [93.0, 656.0], [93.1, 660.0], [93.2, 666.0], [93.3, 672.0], [93.4, 678.0], [93.5, 683.0], [93.6, 685.0], [93.7, 687.0], [93.8, 699.0], [93.9, 702.0], [94.0, 706.0], [94.1, 713.0], [94.2, 714.0], [94.3, 716.0], [94.4, 718.0], [94.5, 720.0], [94.6, 723.0], [94.7, 728.0], [94.8, 730.0], [94.9, 735.0], [95.0, 736.0], [95.1, 738.0], [95.2, 739.0], [95.3, 741.0], [95.4, 743.0], [95.5, 749.0], [95.6, 751.0], [95.7, 752.0], [95.8, 755.0], [95.9, 757.0], [96.0, 758.0], [96.1, 760.0], [96.2, 760.0], [96.3, 762.0], [96.4, 762.0], [96.5, 764.0], [96.6, 766.0], [96.7, 767.0], [96.8, 767.0], [96.9, 769.0], [97.0, 771.0], [97.1, 772.0], [97.2, 773.0], [97.3, 775.0], [97.4, 776.0], [97.5, 778.0], [97.6, 779.0], [97.7, 780.0], [97.8, 781.0], [97.9, 782.0], [98.0, 783.0], [98.1, 784.0], [98.2, 785.0], [98.3, 786.0], [98.4, 787.0], [98.5, 787.0], [98.6, 788.0], [98.7, 791.0], [98.8, 792.0], [98.9, 793.0], [99.0, 794.0], [99.1, 796.0], [99.2, 800.0], [99.3, 804.0], [99.4, 806.0], [99.5, 814.0], [99.6, 818.0], [99.7, 829.0], [99.8, 841.0], [99.9, 886.0]], "isOverall": false, "label": "gateway_0/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 2269.0, "series": [{"data": [[0.0, 109.0], [600.0, 217.0], [300.0, 1512.0], [700.0, 390.0], [400.0, 499.0], [800.0, 55.0], [200.0, 2269.0], [100.0, 1802.0], [900.0, 6.0], [500.0, 457.0]], "isOverall": false, "label": "gateway_0/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1121.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 6195.0, "series": [{"data": [[0.0, 6195.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1121.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 293.92714598141083, "minX": 1.6857864E12, "maxY": 293.92714598141083, "series": [{"data": [[1.6857864E12, 293.92714598141083]], "isOverall": false, "label": "noauth", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6857864E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 68.0, "minX": 1.0, "maxY": 802.0, "series": [{"data": [[2.0, 282.0], [4.0, 313.0], [6.0, 287.5], [8.0, 474.0], [9.0, 293.0], [11.0, 353.6666666666667], [13.0, 283.0], [14.0, 324.0], [17.0, 305.0], [18.0, 334.0], [19.0, 319.0], [22.0, 302.0], [23.0, 318.0], [24.0, 317.0], [26.0, 323.5], [29.0, 337.0], [30.0, 323.3333333333333], [33.0, 374.0], [32.0, 342.0], [34.0, 466.0], [37.0, 363.0], [38.0, 369.0], [41.0, 368.0], [40.0, 330.0], [42.0, 379.5], [45.0, 355.0], [49.0, 414.0], [50.0, 516.0], [55.0, 351.0], [57.0, 375.5], [59.0, 376.0], [58.0, 450.6666666666667], [60.0, 410.2], [63.0, 434.3333333333333], [69.0, 434.75], [68.0, 476.0], [74.0, 418.0], [73.0, 420.0], [72.0, 412.0], [79.0, 416.0], [77.0, 474.0], [76.0, 452.0], [83.0, 248.0], [82.0, 448.0], [81.0, 469.3333333333333], [80.0, 472.0], [85.0, 444.0], [84.0, 228.0], [90.0, 474.0], [89.0, 479.0], [95.0, 479.0], [93.0, 470.0], [92.0, 471.5], [96.0, 488.0], [102.0, 459.0], [100.0, 460.25], [106.0, 479.0], [104.0, 455.0], [109.0, 518.0], [115.0, 566.0], [113.0, 491.0], [112.0, 504.5], [119.0, 576.0], [118.0, 576.0], [117.0, 500.0], [116.0, 493.0], [122.0, 522.0], [125.0, 523.0], [133.0, 113.0], [132.0, 82.0], [131.0, 611.0], [128.0, 580.6666666666666], [142.0, 119.0], [141.0, 735.0], [140.0, 431.5], [138.0, 106.0], [137.0, 760.25], [151.0, 84.5], [149.0, 250.0], [145.0, 730.0], [144.0, 96.5], [159.0, 605.6], [158.0, 723.0], [155.0, 726.0], [152.0, 68.0], [167.0, 727.0], [165.0, 573.25], [161.0, 417.5], [173.0, 717.5], [171.0, 725.75], [180.0, 739.1666666666667], [177.0, 783.0], [188.0, 742.0], [187.0, 744.5], [186.0, 740.0], [198.0, 722.25], [196.0, 742.0], [195.0, 729.6666666666666], [194.0, 742.0], [193.0, 771.0], [207.0, 756.75], [203.0, 746.4], [211.0, 772.0], [210.0, 738.0], [208.0, 739.0], [220.0, 759.5], [217.0, 802.0], [216.0, 735.6666666666667], [231.0, 730.0], [230.0, 776.0], [229.0, 796.0], [228.0, 791.0], [226.0, 779.5], [225.0, 742.5], [224.0, 774.5], [238.0, 795.0], [237.0, 773.0], [232.0, 796.0], [247.0, 777.0], [242.0, 768.3333333333334], [254.0, 772.0], [253.0, 775.3333333333334], [249.0, 721.6666666666666], [248.0, 768.6666666666666], [271.0, 750.4], [266.0, 767.6666666666666], [265.0, 751.0], [264.0, 779.0], [263.0, 759.0], [259.0, 743.5], [257.0, 758.0], [286.0, 764.4], [284.0, 747.0], [283.0, 754.0], [282.0, 761.3333333333334], [279.0, 761.5], [278.0, 763.0], [277.0, 756.0], [274.0, 770.3333333333334], [300.0, 308.4791666666671], [299.0, 757.0], [298.0, 750.5], [297.0, 760.6], [296.0, 753.0], [295.0, 759.0], [293.0, 763.0], [289.0, 760.0], [288.0, 760.6666666666666], [1.0, 264.0]], "isOverall": false, "label": "gateway_0/helloauth", "isController": false}, {"data": [[293.9265992345545, 319.8352925095687]], "isOverall": false, "label": "gateway_0/helloauth-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 11827.533333333333, "minX": 1.6857864E12, "maxY": 15241.666666666666, "series": [{"data": [[1.6857864E12, 11827.533333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6857864E12, 15241.666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6857864E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 319.8352925095687, "minX": 1.6857864E12, "maxY": 319.8352925095687, "series": [{"data": [[1.6857864E12, 319.8352925095687]], "isOverall": false, "label": "gateway_0/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6857864E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 319.8151995626023, "minX": 1.6857864E12, "maxY": 319.8151995626023, "series": [{"data": [[1.6857864E12, 319.8151995626023]], "isOverall": false, "label": "gateway_0/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6857864E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 13.135456533624929, "minX": 1.6857864E12, "maxY": 13.135456533624929, "series": [{"data": [[1.6857864E12, 13.135456533624929]], "isOverall": false, "label": "gateway_0/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6857864E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 42.0, "minX": 1.6857864E12, "maxY": 981.0, "series": [{"data": [[1.6857864E12, 981.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6857864E12, 42.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6857864E12, 580.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6857864E12, 794.8299999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6857864E12, 272.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.6857864E12, 736.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6857864E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 194.0, "minX": 101.0, "maxY": 562.0, "series": [{"data": [[1144.0, 194.0], [1319.0, 248.0], [789.0, 297.0], [777.0, 261.0], [391.0, 562.0], [101.0, 522.0], [911.0, 341.0], [930.0, 297.0], [954.0, 242.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1319.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 194.0, "minX": 101.0, "maxY": 562.0, "series": [{"data": [[1144.0, 194.0], [1319.0, 248.0], [789.0, 297.0], [777.0, 261.0], [391.0, 562.0], [101.0, 522.0], [911.0, 341.0], [930.0, 297.0], [954.0, 242.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1319.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 121.93333333333334, "minX": 1.6857864E12, "maxY": 121.93333333333334, "series": [{"data": [[1.6857864E12, 121.93333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6857864E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 121.93333333333334, "minX": 1.6857864E12, "maxY": 121.93333333333334, "series": [{"data": [[1.6857864E12, 121.93333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6857864E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 121.93333333333334, "minX": 1.6857864E12, "maxY": 121.93333333333334, "series": [{"data": [[1.6857864E12, 121.93333333333334]], "isOverall": false, "label": "gateway_0/helloauth-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6857864E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 121.93333333333334, "minX": 1.6857864E12, "maxY": 121.93333333333334, "series": [{"data": [[1.6857864E12, 121.93333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6857864E12, "title": "Total Transactions Per Second"}},
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

