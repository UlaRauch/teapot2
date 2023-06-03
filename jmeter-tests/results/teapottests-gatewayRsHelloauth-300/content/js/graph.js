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
        data: {"result": {"minY": 47.0, "minX": 0.0, "maxY": 1036.0, "series": [{"data": [[0.0, 47.0], [0.1, 73.0], [0.2, 80.0], [0.3, 87.0], [0.4, 91.0], [0.5, 94.0], [0.6, 97.0], [0.7, 100.0], [0.8, 102.0], [0.9, 104.0], [1.0, 106.0], [1.1, 108.0], [1.2, 108.0], [1.3, 111.0], [1.4, 112.0], [1.5, 113.0], [1.6, 115.0], [1.7, 116.0], [1.8, 117.0], [1.9, 120.0], [2.0, 121.0], [2.1, 122.0], [2.2, 124.0], [2.3, 125.0], [2.4, 125.0], [2.5, 126.0], [2.6, 127.0], [2.7, 128.0], [2.8, 130.0], [2.9, 131.0], [3.0, 131.0], [3.1, 132.0], [3.2, 132.0], [3.3, 134.0], [3.4, 135.0], [3.5, 135.0], [3.6, 136.0], [3.7, 137.0], [3.8, 138.0], [3.9, 139.0], [4.0, 139.0], [4.1, 140.0], [4.2, 140.0], [4.3, 141.0], [4.4, 142.0], [4.5, 142.0], [4.6, 143.0], [4.7, 143.0], [4.8, 143.0], [4.9, 144.0], [5.0, 144.0], [5.1, 145.0], [5.2, 145.0], [5.3, 146.0], [5.4, 146.0], [5.5, 147.0], [5.6, 148.0], [5.7, 148.0], [5.8, 149.0], [5.9, 149.0], [6.0, 150.0], [6.1, 150.0], [6.2, 151.0], [6.3, 151.0], [6.4, 152.0], [6.5, 153.0], [6.6, 153.0], [6.7, 154.0], [6.8, 154.0], [6.9, 155.0], [7.0, 156.0], [7.1, 156.0], [7.2, 156.0], [7.3, 157.0], [7.4, 157.0], [7.5, 158.0], [7.6, 158.0], [7.7, 159.0], [7.8, 159.0], [7.9, 159.0], [8.0, 160.0], [8.1, 160.0], [8.2, 161.0], [8.3, 161.0], [8.4, 162.0], [8.5, 162.0], [8.6, 162.0], [8.7, 163.0], [8.8, 163.0], [8.9, 164.0], [9.0, 164.0], [9.1, 165.0], [9.2, 165.0], [9.3, 165.0], [9.4, 166.0], [9.5, 166.0], [9.6, 167.0], [9.7, 167.0], [9.8, 168.0], [9.9, 168.0], [10.0, 168.0], [10.1, 169.0], [10.2, 170.0], [10.3, 170.0], [10.4, 170.0], [10.5, 171.0], [10.6, 171.0], [10.7, 172.0], [10.8, 172.0], [10.9, 173.0], [11.0, 174.0], [11.1, 174.0], [11.2, 174.0], [11.3, 175.0], [11.4, 175.0], [11.5, 176.0], [11.6, 176.0], [11.7, 177.0], [11.8, 177.0], [11.9, 178.0], [12.0, 178.0], [12.1, 178.0], [12.2, 179.0], [12.3, 179.0], [12.4, 179.0], [12.5, 180.0], [12.6, 180.0], [12.7, 180.0], [12.8, 181.0], [12.9, 181.0], [13.0, 182.0], [13.1, 182.0], [13.2, 182.0], [13.3, 183.0], [13.4, 183.0], [13.5, 184.0], [13.6, 184.0], [13.7, 184.0], [13.8, 185.0], [13.9, 185.0], [14.0, 185.0], [14.1, 186.0], [14.2, 187.0], [14.3, 187.0], [14.4, 187.0], [14.5, 188.0], [14.6, 188.0], [14.7, 189.0], [14.8, 189.0], [14.9, 190.0], [15.0, 190.0], [15.1, 191.0], [15.2, 191.0], [15.3, 191.0], [15.4, 192.0], [15.5, 193.0], [15.6, 193.0], [15.7, 193.0], [15.8, 194.0], [15.9, 194.0], [16.0, 194.0], [16.1, 194.0], [16.2, 195.0], [16.3, 195.0], [16.4, 195.0], [16.5, 196.0], [16.6, 196.0], [16.7, 197.0], [16.8, 197.0], [16.9, 197.0], [17.0, 197.0], [17.1, 198.0], [17.2, 198.0], [17.3, 198.0], [17.4, 199.0], [17.5, 199.0], [17.6, 199.0], [17.7, 200.0], [17.8, 200.0], [17.9, 200.0], [18.0, 201.0], [18.1, 201.0], [18.2, 201.0], [18.3, 202.0], [18.4, 202.0], [18.5, 202.0], [18.6, 202.0], [18.7, 203.0], [18.8, 203.0], [18.9, 203.0], [19.0, 203.0], [19.1, 204.0], [19.2, 204.0], [19.3, 204.0], [19.4, 205.0], [19.5, 205.0], [19.6, 206.0], [19.7, 206.0], [19.8, 206.0], [19.9, 207.0], [20.0, 207.0], [20.1, 208.0], [20.2, 208.0], [20.3, 208.0], [20.4, 208.0], [20.5, 209.0], [20.6, 209.0], [20.7, 209.0], [20.8, 210.0], [20.9, 210.0], [21.0, 210.0], [21.1, 211.0], [21.2, 211.0], [21.3, 211.0], [21.4, 212.0], [21.5, 212.0], [21.6, 212.0], [21.7, 212.0], [21.8, 213.0], [21.9, 213.0], [22.0, 213.0], [22.1, 214.0], [22.2, 214.0], [22.3, 214.0], [22.4, 215.0], [22.5, 215.0], [22.6, 215.0], [22.7, 216.0], [22.8, 216.0], [22.9, 216.0], [23.0, 217.0], [23.1, 217.0], [23.2, 217.0], [23.3, 217.0], [23.4, 218.0], [23.5, 218.0], [23.6, 218.0], [23.7, 219.0], [23.8, 219.0], [23.9, 220.0], [24.0, 220.0], [24.1, 220.0], [24.2, 220.0], [24.3, 221.0], [24.4, 221.0], [24.5, 222.0], [24.6, 222.0], [24.7, 222.0], [24.8, 223.0], [24.9, 223.0], [25.0, 223.0], [25.1, 223.0], [25.2, 224.0], [25.3, 224.0], [25.4, 224.0], [25.5, 225.0], [25.6, 225.0], [25.7, 226.0], [25.8, 226.0], [25.9, 226.0], [26.0, 226.0], [26.1, 227.0], [26.2, 227.0], [26.3, 228.0], [26.4, 228.0], [26.5, 229.0], [26.6, 229.0], [26.7, 229.0], [26.8, 229.0], [26.9, 230.0], [27.0, 230.0], [27.1, 230.0], [27.2, 230.0], [27.3, 231.0], [27.4, 231.0], [27.5, 231.0], [27.6, 232.0], [27.7, 232.0], [27.8, 233.0], [27.9, 233.0], [28.0, 233.0], [28.1, 234.0], [28.2, 234.0], [28.3, 234.0], [28.4, 235.0], [28.5, 235.0], [28.6, 236.0], [28.7, 236.0], [28.8, 236.0], [28.9, 236.0], [29.0, 237.0], [29.1, 237.0], [29.2, 237.0], [29.3, 237.0], [29.4, 237.0], [29.5, 238.0], [29.6, 238.0], [29.7, 238.0], [29.8, 239.0], [29.9, 239.0], [30.0, 239.0], [30.1, 239.0], [30.2, 240.0], [30.3, 240.0], [30.4, 240.0], [30.5, 241.0], [30.6, 241.0], [30.7, 241.0], [30.8, 242.0], [30.9, 242.0], [31.0, 242.0], [31.1, 242.0], [31.2, 243.0], [31.3, 243.0], [31.4, 243.0], [31.5, 243.0], [31.6, 244.0], [31.7, 244.0], [31.8, 244.0], [31.9, 245.0], [32.0, 245.0], [32.1, 245.0], [32.2, 245.0], [32.3, 246.0], [32.4, 246.0], [32.5, 247.0], [32.6, 247.0], [32.7, 247.0], [32.8, 248.0], [32.9, 248.0], [33.0, 248.0], [33.1, 249.0], [33.2, 249.0], [33.3, 249.0], [33.4, 249.0], [33.5, 250.0], [33.6, 250.0], [33.7, 250.0], [33.8, 250.0], [33.9, 250.0], [34.0, 251.0], [34.1, 251.0], [34.2, 251.0], [34.3, 252.0], [34.4, 252.0], [34.5, 252.0], [34.6, 253.0], [34.7, 253.0], [34.8, 253.0], [34.9, 254.0], [35.0, 254.0], [35.1, 254.0], [35.2, 254.0], [35.3, 254.0], [35.4, 255.0], [35.5, 255.0], [35.6, 255.0], [35.7, 256.0], [35.8, 256.0], [35.9, 256.0], [36.0, 257.0], [36.1, 257.0], [36.2, 257.0], [36.3, 258.0], [36.4, 258.0], [36.5, 258.0], [36.6, 258.0], [36.7, 259.0], [36.8, 259.0], [36.9, 259.0], [37.0, 259.0], [37.1, 260.0], [37.2, 260.0], [37.3, 260.0], [37.4, 261.0], [37.5, 261.0], [37.6, 261.0], [37.7, 262.0], [37.8, 262.0], [37.9, 262.0], [38.0, 263.0], [38.1, 263.0], [38.2, 263.0], [38.3, 264.0], [38.4, 264.0], [38.5, 264.0], [38.6, 265.0], [38.7, 265.0], [38.8, 266.0], [38.9, 266.0], [39.0, 266.0], [39.1, 266.0], [39.2, 266.0], [39.3, 267.0], [39.4, 267.0], [39.5, 267.0], [39.6, 268.0], [39.7, 268.0], [39.8, 268.0], [39.9, 269.0], [40.0, 269.0], [40.1, 269.0], [40.2, 270.0], [40.3, 270.0], [40.4, 270.0], [40.5, 271.0], [40.6, 271.0], [40.7, 271.0], [40.8, 272.0], [40.9, 272.0], [41.0, 272.0], [41.1, 273.0], [41.2, 273.0], [41.3, 274.0], [41.4, 274.0], [41.5, 274.0], [41.6, 274.0], [41.7, 275.0], [41.8, 275.0], [41.9, 275.0], [42.0, 275.0], [42.1, 276.0], [42.2, 276.0], [42.3, 276.0], [42.4, 277.0], [42.5, 277.0], [42.6, 277.0], [42.7, 277.0], [42.8, 278.0], [42.9, 278.0], [43.0, 279.0], [43.1, 279.0], [43.2, 279.0], [43.3, 279.0], [43.4, 280.0], [43.5, 280.0], [43.6, 281.0], [43.7, 281.0], [43.8, 281.0], [43.9, 281.0], [44.0, 282.0], [44.1, 282.0], [44.2, 282.0], [44.3, 283.0], [44.4, 283.0], [44.5, 284.0], [44.6, 284.0], [44.7, 284.0], [44.8, 284.0], [44.9, 285.0], [45.0, 285.0], [45.1, 285.0], [45.2, 286.0], [45.3, 286.0], [45.4, 286.0], [45.5, 286.0], [45.6, 287.0], [45.7, 287.0], [45.8, 287.0], [45.9, 288.0], [46.0, 288.0], [46.1, 288.0], [46.2, 289.0], [46.3, 289.0], [46.4, 289.0], [46.5, 290.0], [46.6, 290.0], [46.7, 290.0], [46.8, 291.0], [46.9, 291.0], [47.0, 291.0], [47.1, 291.0], [47.2, 292.0], [47.3, 292.0], [47.4, 292.0], [47.5, 293.0], [47.6, 293.0], [47.7, 294.0], [47.8, 294.0], [47.9, 295.0], [48.0, 295.0], [48.1, 295.0], [48.2, 296.0], [48.3, 296.0], [48.4, 296.0], [48.5, 297.0], [48.6, 297.0], [48.7, 297.0], [48.8, 298.0], [48.9, 298.0], [49.0, 298.0], [49.1, 299.0], [49.2, 299.0], [49.3, 300.0], [49.4, 300.0], [49.5, 300.0], [49.6, 301.0], [49.7, 301.0], [49.8, 301.0], [49.9, 302.0], [50.0, 302.0], [50.1, 302.0], [50.2, 303.0], [50.3, 304.0], [50.4, 304.0], [50.5, 304.0], [50.6, 305.0], [50.7, 305.0], [50.8, 305.0], [50.9, 305.0], [51.0, 306.0], [51.1, 306.0], [51.2, 306.0], [51.3, 307.0], [51.4, 307.0], [51.5, 307.0], [51.6, 308.0], [51.7, 308.0], [51.8, 308.0], [51.9, 309.0], [52.0, 309.0], [52.1, 310.0], [52.2, 310.0], [52.3, 311.0], [52.4, 311.0], [52.5, 311.0], [52.6, 312.0], [52.7, 312.0], [52.8, 312.0], [52.9, 313.0], [53.0, 313.0], [53.1, 313.0], [53.2, 314.0], [53.3, 314.0], [53.4, 314.0], [53.5, 315.0], [53.6, 315.0], [53.7, 316.0], [53.8, 316.0], [53.9, 316.0], [54.0, 317.0], [54.1, 317.0], [54.2, 318.0], [54.3, 318.0], [54.4, 319.0], [54.5, 319.0], [54.6, 320.0], [54.7, 320.0], [54.8, 321.0], [54.9, 321.0], [55.0, 321.0], [55.1, 322.0], [55.2, 322.0], [55.3, 323.0], [55.4, 323.0], [55.5, 324.0], [55.6, 324.0], [55.7, 325.0], [55.8, 325.0], [55.9, 326.0], [56.0, 326.0], [56.1, 326.0], [56.2, 326.0], [56.3, 327.0], [56.4, 327.0], [56.5, 327.0], [56.6, 328.0], [56.7, 328.0], [56.8, 329.0], [56.9, 329.0], [57.0, 330.0], [57.1, 330.0], [57.2, 331.0], [57.3, 331.0], [57.4, 331.0], [57.5, 332.0], [57.6, 332.0], [57.7, 333.0], [57.8, 333.0], [57.9, 334.0], [58.0, 334.0], [58.1, 334.0], [58.2, 335.0], [58.3, 336.0], [58.4, 336.0], [58.5, 337.0], [58.6, 337.0], [58.7, 338.0], [58.8, 338.0], [58.9, 338.0], [59.0, 339.0], [59.1, 339.0], [59.2, 340.0], [59.3, 340.0], [59.4, 340.0], [59.5, 341.0], [59.6, 341.0], [59.7, 342.0], [59.8, 342.0], [59.9, 343.0], [60.0, 343.0], [60.1, 344.0], [60.2, 345.0], [60.3, 345.0], [60.4, 346.0], [60.5, 346.0], [60.6, 347.0], [60.7, 347.0], [60.8, 348.0], [60.9, 349.0], [61.0, 350.0], [61.1, 350.0], [61.2, 350.0], [61.3, 351.0], [61.4, 351.0], [61.5, 352.0], [61.6, 352.0], [61.7, 353.0], [61.8, 353.0], [61.9, 353.0], [62.0, 354.0], [62.1, 354.0], [62.2, 354.0], [62.3, 355.0], [62.4, 355.0], [62.5, 356.0], [62.6, 356.0], [62.7, 357.0], [62.8, 358.0], [62.9, 358.0], [63.0, 359.0], [63.1, 359.0], [63.2, 360.0], [63.3, 360.0], [63.4, 361.0], [63.5, 361.0], [63.6, 362.0], [63.7, 362.0], [63.8, 363.0], [63.9, 364.0], [64.0, 365.0], [64.1, 366.0], [64.2, 367.0], [64.3, 367.0], [64.4, 368.0], [64.5, 368.0], [64.6, 369.0], [64.7, 369.0], [64.8, 370.0], [64.9, 371.0], [65.0, 371.0], [65.1, 372.0], [65.2, 373.0], [65.3, 373.0], [65.4, 374.0], [65.5, 374.0], [65.6, 375.0], [65.7, 376.0], [65.8, 376.0], [65.9, 377.0], [66.0, 378.0], [66.1, 378.0], [66.2, 379.0], [66.3, 379.0], [66.4, 380.0], [66.5, 380.0], [66.6, 381.0], [66.7, 382.0], [66.8, 382.0], [66.9, 383.0], [67.0, 383.0], [67.1, 384.0], [67.2, 385.0], [67.3, 386.0], [67.4, 386.0], [67.5, 387.0], [67.6, 387.0], [67.7, 388.0], [67.8, 389.0], [67.9, 390.0], [68.0, 391.0], [68.1, 392.0], [68.2, 392.0], [68.3, 393.0], [68.4, 393.0], [68.5, 394.0], [68.6, 395.0], [68.7, 395.0], [68.8, 396.0], [68.9, 396.0], [69.0, 397.0], [69.1, 398.0], [69.2, 398.0], [69.3, 399.0], [69.4, 399.0], [69.5, 400.0], [69.6, 401.0], [69.7, 402.0], [69.8, 403.0], [69.9, 404.0], [70.0, 405.0], [70.1, 406.0], [70.2, 407.0], [70.3, 407.0], [70.4, 409.0], [70.5, 410.0], [70.6, 410.0], [70.7, 411.0], [70.8, 412.0], [70.9, 413.0], [71.0, 413.0], [71.1, 414.0], [71.2, 415.0], [71.3, 415.0], [71.4, 416.0], [71.5, 416.0], [71.6, 417.0], [71.7, 418.0], [71.8, 419.0], [71.9, 420.0], [72.0, 421.0], [72.1, 421.0], [72.2, 422.0], [72.3, 424.0], [72.4, 425.0], [72.5, 426.0], [72.6, 426.0], [72.7, 426.0], [72.8, 428.0], [72.9, 428.0], [73.0, 430.0], [73.1, 430.0], [73.2, 431.0], [73.3, 432.0], [73.4, 434.0], [73.5, 435.0], [73.6, 435.0], [73.7, 436.0], [73.8, 438.0], [73.9, 439.0], [74.0, 440.0], [74.1, 440.0], [74.2, 441.0], [74.3, 443.0], [74.4, 444.0], [74.5, 446.0], [74.6, 446.0], [74.7, 448.0], [74.8, 449.0], [74.9, 450.0], [75.0, 451.0], [75.1, 452.0], [75.2, 453.0], [75.3, 454.0], [75.4, 455.0], [75.5, 457.0], [75.6, 458.0], [75.7, 458.0], [75.8, 459.0], [75.9, 460.0], [76.0, 461.0], [76.1, 463.0], [76.2, 463.0], [76.3, 464.0], [76.4, 466.0], [76.5, 466.0], [76.6, 467.0], [76.7, 468.0], [76.8, 470.0], [76.9, 471.0], [77.0, 473.0], [77.1, 474.0], [77.2, 476.0], [77.3, 477.0], [77.4, 478.0], [77.5, 480.0], [77.6, 481.0], [77.7, 482.0], [77.8, 484.0], [77.9, 485.0], [78.0, 486.0], [78.1, 487.0], [78.2, 488.0], [78.3, 490.0], [78.4, 491.0], [78.5, 492.0], [78.6, 493.0], [78.7, 494.0], [78.8, 496.0], [78.9, 496.0], [79.0, 497.0], [79.1, 499.0], [79.2, 499.0], [79.3, 501.0], [79.4, 503.0], [79.5, 504.0], [79.6, 504.0], [79.7, 506.0], [79.8, 507.0], [79.9, 508.0], [80.0, 509.0], [80.1, 509.0], [80.2, 511.0], [80.3, 511.0], [80.4, 513.0], [80.5, 514.0], [80.6, 515.0], [80.7, 516.0], [80.8, 518.0], [80.9, 519.0], [81.0, 520.0], [81.1, 521.0], [81.2, 522.0], [81.3, 523.0], [81.4, 524.0], [81.5, 525.0], [81.6, 526.0], [81.7, 526.0], [81.8, 528.0], [81.9, 529.0], [82.0, 530.0], [82.1, 531.0], [82.2, 532.0], [82.3, 533.0], [82.4, 534.0], [82.5, 535.0], [82.6, 536.0], [82.7, 537.0], [82.8, 537.0], [82.9, 538.0], [83.0, 539.0], [83.1, 540.0], [83.2, 541.0], [83.3, 541.0], [83.4, 542.0], [83.5, 543.0], [83.6, 544.0], [83.7, 545.0], [83.8, 546.0], [83.9, 546.0], [84.0, 547.0], [84.1, 549.0], [84.2, 550.0], [84.3, 550.0], [84.4, 551.0], [84.5, 552.0], [84.6, 552.0], [84.7, 554.0], [84.8, 554.0], [84.9, 556.0], [85.0, 557.0], [85.1, 558.0], [85.2, 559.0], [85.3, 560.0], [85.4, 561.0], [85.5, 562.0], [85.6, 562.0], [85.7, 563.0], [85.8, 566.0], [85.9, 567.0], [86.0, 568.0], [86.1, 569.0], [86.2, 570.0], [86.3, 572.0], [86.4, 573.0], [86.5, 574.0], [86.6, 575.0], [86.7, 577.0], [86.8, 578.0], [86.9, 579.0], [87.0, 580.0], [87.1, 581.0], [87.2, 582.0], [87.3, 584.0], [87.4, 585.0], [87.5, 586.0], [87.6, 588.0], [87.7, 590.0], [87.8, 590.0], [87.9, 593.0], [88.0, 594.0], [88.1, 595.0], [88.2, 596.0], [88.3, 598.0], [88.4, 600.0], [88.5, 602.0], [88.6, 602.0], [88.7, 604.0], [88.8, 605.0], [88.9, 607.0], [89.0, 609.0], [89.1, 611.0], [89.2, 613.0], [89.3, 615.0], [89.4, 616.0], [89.5, 618.0], [89.6, 621.0], [89.7, 623.0], [89.8, 626.0], [89.9, 629.0], [90.0, 630.0], [90.1, 632.0], [90.2, 635.0], [90.3, 639.0], [90.4, 643.0], [90.5, 646.0], [90.6, 649.0], [90.7, 652.0], [90.8, 658.0], [90.9, 662.0], [91.0, 663.0], [91.1, 670.0], [91.2, 676.0], [91.3, 677.0], [91.4, 679.0], [91.5, 682.0], [91.6, 692.0], [91.7, 694.0], [91.8, 696.0], [91.9, 698.0], [92.0, 700.0], [92.1, 701.0], [92.2, 702.0], [92.3, 705.0], [92.4, 707.0], [92.5, 709.0], [92.6, 710.0], [92.7, 712.0], [92.8, 717.0], [92.9, 721.0], [93.0, 723.0], [93.1, 725.0], [93.2, 729.0], [93.3, 730.0], [93.4, 736.0], [93.5, 740.0], [93.6, 743.0], [93.7, 746.0], [93.8, 747.0], [93.9, 752.0], [94.0, 753.0], [94.1, 755.0], [94.2, 758.0], [94.3, 761.0], [94.4, 763.0], [94.5, 766.0], [94.6, 770.0], [94.7, 771.0], [94.8, 775.0], [94.9, 777.0], [95.0, 779.0], [95.1, 781.0], [95.2, 785.0], [95.3, 788.0], [95.4, 793.0], [95.5, 794.0], [95.6, 797.0], [95.7, 802.0], [95.8, 806.0], [95.9, 812.0], [96.0, 815.0], [96.1, 824.0], [96.2, 832.0], [96.3, 842.0], [96.4, 846.0], [96.5, 850.0], [96.6, 852.0], [96.7, 856.0], [96.8, 858.0], [96.9, 864.0], [97.0, 868.0], [97.1, 875.0], [97.2, 880.0], [97.3, 883.0], [97.4, 885.0], [97.5, 886.0], [97.6, 888.0], [97.7, 893.0], [97.8, 899.0], [97.9, 906.0], [98.0, 911.0], [98.1, 913.0], [98.2, 915.0], [98.3, 917.0], [98.4, 924.0], [98.5, 929.0], [98.6, 934.0], [98.7, 936.0], [98.8, 939.0], [98.9, 944.0], [99.0, 949.0], [99.1, 951.0], [99.2, 958.0], [99.3, 961.0], [99.4, 965.0], [99.5, 967.0], [99.6, 980.0], [99.7, 985.0], [99.8, 990.0], [99.9, 1009.0], [100.0, 1036.0]], "isOverall": false, "label": "gateway_rs/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "maxY": 2319.0, "series": [{"data": [[0.0, 51.0], [300.0, 1484.0], [600.0, 265.0], [700.0, 270.0], [100.0, 1247.0], [200.0, 2319.0], [400.0, 717.0], [800.0, 158.0], [900.0, 150.0], [500.0, 674.0], [1000.0, 10.0]], "isOverall": false, "label": "gateway_rs/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1521.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5824.0, "series": [{"data": [[0.0, 5824.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1521.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 293.9543907420016, "minX": 1.68578742E12, "maxY": 293.9543907420016, "series": [{"data": [[1.68578742E12, 293.9543907420016]], "isOverall": false, "label": "with access token", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68578742E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 186.0, "minX": 3.0, "maxY": 619.0, "series": [{"data": [[3.0, 378.3333333333333], [7.0, 565.5], [8.0, 398.0], [12.0, 598.75], [14.0, 578.5], [17.0, 579.0], [19.0, 307.0], [22.0, 330.6666666666667], [23.0, 530.0], [25.0, 269.0], [26.0, 355.0], [28.0, 311.0], [30.0, 559.0], [31.0, 454.5], [32.0, 378.0], [35.0, 525.6666666666666], [36.0, 350.0], [41.0, 553.0], [40.0, 480.0], [43.0, 552.0], [42.0, 552.0], [45.0, 268.0], [48.0, 342.3333333333333], [53.0, 476.5], [57.0, 539.0], [61.0, 420.0], [67.0, 524.0], [66.0, 524.0], [65.0, 532.0], [64.0, 537.3333333333334], [71.0, 521.5], [68.0, 522.0], [75.0, 520.0], [74.0, 533.5], [72.0, 543.0], [76.0, 550.0], [81.0, 546.0], [80.0, 538.5], [87.0, 539.0], [86.0, 541.5], [84.0, 532.6666666666666], [91.0, 537.3333333333334], [88.0, 538.0], [94.0, 540.3333333333334], [99.0, 559.0], [97.0, 569.0], [96.0, 534.5], [101.0, 546.0], [100.0, 551.0], [107.0, 559.0], [106.0, 305.0], [105.0, 559.75], [110.0, 299.0], [108.0, 619.0], [114.0, 587.0], [112.0, 558.0], [119.0, 359.0], [117.0, 307.0], [116.0, 618.0], [123.0, 282.0], [122.0, 568.5], [125.0, 537.0], [124.0, 331.0], [135.0, 570.6666666666666], [133.0, 365.0], [130.0, 557.0], [129.0, 570.0], [128.0, 475.3333333333333], [143.0, 289.3333333333333], [139.0, 275.0], [150.0, 262.6666666666667], [148.0, 412.0], [147.0, 318.0], [145.0, 323.0], [144.0, 208.0], [159.0, 588.0], [166.0, 570.8], [161.0, 582.8333333333334], [160.0, 574.0], [173.0, 312.6666666666667], [170.0, 261.0], [169.0, 558.1666666666666], [181.0, 555.2], [188.0, 247.0], [187.0, 565.75], [185.0, 538.0], [199.0, 324.0], [198.0, 473.3333333333333], [196.0, 515.0], [194.0, 266.0], [192.0, 278.75], [207.0, 241.0], [206.0, 247.0], [205.0, 532.5], [204.0, 284.0], [203.0, 186.0], [202.0, 268.0], [201.0, 286.5], [213.0, 256.0], [210.0, 217.0], [209.0, 401.0], [220.0, 571.0], [219.0, 556.0], [218.0, 374.5], [216.0, 504.3333333333333], [231.0, 542.0], [230.0, 481.0], [228.0, 565.0], [227.0, 576.0], [225.0, 515.0], [238.0, 270.0], [236.0, 418.5], [234.0, 522.5], [232.0, 542.0], [244.0, 525.0], [242.0, 260.6666666666667], [240.0, 355.0], [255.0, 520.0], [254.0, 526.0], [253.0, 245.0], [252.0, 561.6666666666666], [251.0, 552.4], [249.0, 565.0], [268.0, 558.0], [267.0, 270.25], [263.0, 536.0], [261.0, 545.3333333333334], [258.0, 572.0], [257.0, 550.0], [256.0, 217.0], [274.0, 239.0], [286.0, 262.5], [287.0, 259.5], [284.0, 541.0], [283.0, 539.5], [281.0, 260.6666666666667], [279.0, 532.0], [278.0, 244.0], [277.0, 279.0], [276.0, 264.5], [273.0, 285.0], [272.0, 537.0], [300.0, 355.63724235963036], [299.0, 371.77777777777777], [296.0, 366.5], [295.0, 233.0], [293.0, 374.5], [292.0, 337.3333333333333], [289.0, 529.0], [288.0, 253.0]], "isOverall": false, "label": "gateway_rs/helloauth", "isController": false}, {"data": [[293.9543907420016, 359.64969366916256]], "isOverall": false, "label": "gateway_rs/helloauth-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 36357.75, "minX": 1.68578742E12, "maxY": 157672.66666666666, "series": [{"data": [[1.68578742E12, 36357.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68578742E12, 157672.66666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68578742E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 359.64969366916256, "minX": 1.68578742E12, "maxY": 359.64969366916256, "series": [{"data": [[1.68578742E12, 359.64969366916256]], "isOverall": false, "label": "gateway_rs/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68578742E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 359.58393464942, "minX": 1.68578742E12, "maxY": 359.58393464942, "series": [{"data": [[1.68578742E12, 359.58393464942]], "isOverall": false, "label": "gateway_rs/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68578742E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 15.005582028590846, "minX": 1.68578742E12, "maxY": 15.005582028590846, "series": [{"data": [[1.68578742E12, 15.005582028590846]], "isOverall": false, "label": "gateway_rs/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68578742E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 47.0, "minX": 1.68578742E12, "maxY": 1036.0, "series": [{"data": [[1.68578742E12, 1036.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68578742E12, 47.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68578742E12, 630.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68578742E12, 949.54]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68578742E12, 302.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68578742E12, 779.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68578742E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 231.0, "minX": 322.0, "maxY": 612.0, "series": [{"data": [[1034.0, 276.0], [1086.0, 231.0], [1132.0, 268.0], [574.0, 447.5], [609.0, 433.0], [322.0, 521.0], [701.0, 309.0], [436.0, 315.0], [449.0, 612.0], [1002.0, 281.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1132.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 231.0, "minX": 322.0, "maxY": 612.0, "series": [{"data": [[1034.0, 276.0], [1086.0, 231.0], [1132.0, 268.0], [574.0, 447.5], [609.0, 433.0], [322.0, 521.0], [701.0, 309.0], [436.0, 315.0], [449.0, 612.0], [1002.0, 281.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1132.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 122.41666666666667, "minX": 1.68578742E12, "maxY": 122.41666666666667, "series": [{"data": [[1.68578742E12, 122.41666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68578742E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 122.41666666666667, "minX": 1.68578742E12, "maxY": 122.41666666666667, "series": [{"data": [[1.68578742E12, 122.41666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68578742E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 122.41666666666667, "minX": 1.68578742E12, "maxY": 122.41666666666667, "series": [{"data": [[1.68578742E12, 122.41666666666667]], "isOverall": false, "label": "gateway_rs/helloauth-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68578742E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 122.41666666666667, "minX": 1.68578742E12, "maxY": 122.41666666666667, "series": [{"data": [[1.68578742E12, 122.41666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68578742E12, "title": "Total Transactions Per Second"}},
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

