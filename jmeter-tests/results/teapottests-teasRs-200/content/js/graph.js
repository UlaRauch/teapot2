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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 1465.0, "series": [{"data": [[0.0, 27.0], [0.1, 70.0], [0.2, 73.0], [0.3, 79.0], [0.4, 82.0], [0.5, 85.0], [0.6, 88.0], [0.7, 90.0], [0.8, 92.0], [0.9, 93.0], [1.0, 94.0], [1.1, 97.0], [1.2, 98.0], [1.3, 100.0], [1.4, 103.0], [1.5, 105.0], [1.6, 108.0], [1.7, 109.0], [1.8, 110.0], [1.9, 111.0], [2.0, 112.0], [2.1, 113.0], [2.2, 114.0], [2.3, 116.0], [2.4, 116.0], [2.5, 117.0], [2.6, 118.0], [2.7, 119.0], [2.8, 119.0], [2.9, 120.0], [3.0, 121.0], [3.1, 121.0], [3.2, 122.0], [3.3, 122.0], [3.4, 123.0], [3.5, 123.0], [3.6, 124.0], [3.7, 124.0], [3.8, 124.0], [3.9, 125.0], [4.0, 125.0], [4.1, 126.0], [4.2, 127.0], [4.3, 127.0], [4.4, 127.0], [4.5, 127.0], [4.6, 128.0], [4.7, 128.0], [4.8, 129.0], [4.9, 129.0], [5.0, 130.0], [5.1, 130.0], [5.2, 131.0], [5.3, 131.0], [5.4, 132.0], [5.5, 132.0], [5.6, 133.0], [5.7, 133.0], [5.8, 133.0], [5.9, 134.0], [6.0, 134.0], [6.1, 135.0], [6.2, 135.0], [6.3, 135.0], [6.4, 136.0], [6.5, 136.0], [6.6, 136.0], [6.7, 137.0], [6.8, 137.0], [6.9, 138.0], [7.0, 138.0], [7.1, 138.0], [7.2, 139.0], [7.3, 139.0], [7.4, 139.0], [7.5, 140.0], [7.6, 140.0], [7.7, 141.0], [7.8, 141.0], [7.9, 142.0], [8.0, 142.0], [8.1, 142.0], [8.2, 142.0], [8.3, 142.0], [8.4, 143.0], [8.5, 143.0], [8.6, 144.0], [8.7, 144.0], [8.8, 144.0], [8.9, 145.0], [9.0, 145.0], [9.1, 145.0], [9.2, 146.0], [9.3, 146.0], [9.4, 147.0], [9.5, 147.0], [9.6, 147.0], [9.7, 147.0], [9.8, 148.0], [9.9, 148.0], [10.0, 148.0], [10.1, 148.0], [10.2, 149.0], [10.3, 149.0], [10.4, 149.0], [10.5, 150.0], [10.6, 150.0], [10.7, 150.0], [10.8, 151.0], [10.9, 151.0], [11.0, 151.0], [11.1, 151.0], [11.2, 152.0], [11.3, 152.0], [11.4, 152.0], [11.5, 152.0], [11.6, 152.0], [11.7, 153.0], [11.8, 153.0], [11.9, 153.0], [12.0, 153.0], [12.1, 154.0], [12.2, 154.0], [12.3, 154.0], [12.4, 154.0], [12.5, 154.0], [12.6, 155.0], [12.7, 155.0], [12.8, 155.0], [12.9, 155.0], [13.0, 155.0], [13.1, 156.0], [13.2, 156.0], [13.3, 156.0], [13.4, 156.0], [13.5, 157.0], [13.6, 157.0], [13.7, 157.0], [13.8, 157.0], [13.9, 157.0], [14.0, 157.0], [14.1, 158.0], [14.2, 158.0], [14.3, 158.0], [14.4, 158.0], [14.5, 158.0], [14.6, 159.0], [14.7, 159.0], [14.8, 159.0], [14.9, 160.0], [15.0, 160.0], [15.1, 160.0], [15.2, 161.0], [15.3, 161.0], [15.4, 161.0], [15.5, 162.0], [15.6, 162.0], [15.7, 162.0], [15.8, 162.0], [15.9, 162.0], [16.0, 162.0], [16.1, 163.0], [16.2, 163.0], [16.3, 163.0], [16.4, 163.0], [16.5, 163.0], [16.6, 164.0], [16.7, 164.0], [16.8, 164.0], [16.9, 164.0], [17.0, 165.0], [17.1, 165.0], [17.2, 165.0], [17.3, 165.0], [17.4, 166.0], [17.5, 166.0], [17.6, 166.0], [17.7, 166.0], [17.8, 166.0], [17.9, 166.0], [18.0, 167.0], [18.1, 167.0], [18.2, 167.0], [18.3, 167.0], [18.4, 167.0], [18.5, 168.0], [18.6, 168.0], [18.7, 168.0], [18.8, 168.0], [18.9, 168.0], [19.0, 168.0], [19.1, 169.0], [19.2, 169.0], [19.3, 169.0], [19.4, 169.0], [19.5, 169.0], [19.6, 170.0], [19.7, 170.0], [19.8, 170.0], [19.9, 170.0], [20.0, 170.0], [20.1, 170.0], [20.2, 170.0], [20.3, 170.0], [20.4, 171.0], [20.5, 171.0], [20.6, 171.0], [20.7, 171.0], [20.8, 171.0], [20.9, 171.0], [21.0, 171.0], [21.1, 171.0], [21.2, 172.0], [21.3, 172.0], [21.4, 172.0], [21.5, 172.0], [21.6, 172.0], [21.7, 173.0], [21.8, 173.0], [21.9, 173.0], [22.0, 173.0], [22.1, 173.0], [22.2, 174.0], [22.3, 174.0], [22.4, 174.0], [22.5, 174.0], [22.6, 174.0], [22.7, 174.0], [22.8, 175.0], [22.9, 175.0], [23.0, 175.0], [23.1, 175.0], [23.2, 175.0], [23.3, 175.0], [23.4, 175.0], [23.5, 176.0], [23.6, 176.0], [23.7, 176.0], [23.8, 176.0], [23.9, 176.0], [24.0, 176.0], [24.1, 176.0], [24.2, 177.0], [24.3, 177.0], [24.4, 177.0], [24.5, 177.0], [24.6, 177.0], [24.7, 177.0], [24.8, 177.0], [24.9, 178.0], [25.0, 178.0], [25.1, 178.0], [25.2, 178.0], [25.3, 178.0], [25.4, 178.0], [25.5, 178.0], [25.6, 178.0], [25.7, 178.0], [25.8, 179.0], [25.9, 179.0], [26.0, 179.0], [26.1, 179.0], [26.2, 179.0], [26.3, 179.0], [26.4, 180.0], [26.5, 180.0], [26.6, 180.0], [26.7, 180.0], [26.8, 180.0], [26.9, 180.0], [27.0, 181.0], [27.1, 181.0], [27.2, 181.0], [27.3, 181.0], [27.4, 181.0], [27.5, 181.0], [27.6, 182.0], [27.7, 182.0], [27.8, 182.0], [27.9, 182.0], [28.0, 182.0], [28.1, 182.0], [28.2, 183.0], [28.3, 183.0], [28.4, 183.0], [28.5, 183.0], [28.6, 183.0], [28.7, 183.0], [28.8, 183.0], [28.9, 184.0], [29.0, 184.0], [29.1, 184.0], [29.2, 184.0], [29.3, 184.0], [29.4, 184.0], [29.5, 185.0], [29.6, 185.0], [29.7, 185.0], [29.8, 185.0], [29.9, 185.0], [30.0, 185.0], [30.1, 185.0], [30.2, 186.0], [30.3, 186.0], [30.4, 186.0], [30.5, 186.0], [30.6, 186.0], [30.7, 186.0], [30.8, 187.0], [30.9, 187.0], [31.0, 187.0], [31.1, 187.0], [31.2, 187.0], [31.3, 188.0], [31.4, 188.0], [31.5, 188.0], [31.6, 188.0], [31.7, 188.0], [31.8, 188.0], [31.9, 188.0], [32.0, 189.0], [32.1, 189.0], [32.2, 189.0], [32.3, 189.0], [32.4, 189.0], [32.5, 189.0], [32.6, 189.0], [32.7, 189.0], [32.8, 190.0], [32.9, 190.0], [33.0, 190.0], [33.1, 190.0], [33.2, 190.0], [33.3, 190.0], [33.4, 190.0], [33.5, 190.0], [33.6, 190.0], [33.7, 191.0], [33.8, 191.0], [33.9, 191.0], [34.0, 191.0], [34.1, 191.0], [34.2, 191.0], [34.3, 191.0], [34.4, 192.0], [34.5, 192.0], [34.6, 192.0], [34.7, 192.0], [34.8, 192.0], [34.9, 192.0], [35.0, 192.0], [35.1, 192.0], [35.2, 193.0], [35.3, 193.0], [35.4, 193.0], [35.5, 193.0], [35.6, 193.0], [35.7, 193.0], [35.8, 193.0], [35.9, 193.0], [36.0, 194.0], [36.1, 194.0], [36.2, 194.0], [36.3, 194.0], [36.4, 194.0], [36.5, 194.0], [36.6, 194.0], [36.7, 194.0], [36.8, 195.0], [36.9, 195.0], [37.0, 195.0], [37.1, 195.0], [37.2, 195.0], [37.3, 195.0], [37.4, 195.0], [37.5, 195.0], [37.6, 195.0], [37.7, 196.0], [37.8, 196.0], [37.9, 196.0], [38.0, 196.0], [38.1, 196.0], [38.2, 196.0], [38.3, 196.0], [38.4, 196.0], [38.5, 197.0], [38.6, 197.0], [38.7, 197.0], [38.8, 197.0], [38.9, 197.0], [39.0, 197.0], [39.1, 197.0], [39.2, 197.0], [39.3, 197.0], [39.4, 197.0], [39.5, 197.0], [39.6, 197.0], [39.7, 198.0], [39.8, 198.0], [39.9, 198.0], [40.0, 198.0], [40.1, 198.0], [40.2, 198.0], [40.3, 198.0], [40.4, 198.0], [40.5, 198.0], [40.6, 199.0], [40.7, 199.0], [40.8, 199.0], [40.9, 199.0], [41.0, 199.0], [41.1, 199.0], [41.2, 199.0], [41.3, 199.0], [41.4, 200.0], [41.5, 200.0], [41.6, 200.0], [41.7, 200.0], [41.8, 200.0], [41.9, 200.0], [42.0, 200.0], [42.1, 200.0], [42.2, 201.0], [42.3, 201.0], [42.4, 201.0], [42.5, 201.0], [42.6, 201.0], [42.7, 201.0], [42.8, 201.0], [42.9, 201.0], [43.0, 201.0], [43.1, 202.0], [43.2, 202.0], [43.3, 202.0], [43.4, 202.0], [43.5, 202.0], [43.6, 202.0], [43.7, 202.0], [43.8, 202.0], [43.9, 202.0], [44.0, 203.0], [44.1, 203.0], [44.2, 203.0], [44.3, 203.0], [44.4, 203.0], [44.5, 203.0], [44.6, 203.0], [44.7, 203.0], [44.8, 204.0], [44.9, 204.0], [45.0, 204.0], [45.1, 204.0], [45.2, 204.0], [45.3, 204.0], [45.4, 204.0], [45.5, 204.0], [45.6, 204.0], [45.7, 204.0], [45.8, 205.0], [45.9, 205.0], [46.0, 205.0], [46.1, 205.0], [46.2, 205.0], [46.3, 205.0], [46.4, 205.0], [46.5, 206.0], [46.6, 206.0], [46.7, 206.0], [46.8, 206.0], [46.9, 206.0], [47.0, 206.0], [47.1, 206.0], [47.2, 206.0], [47.3, 207.0], [47.4, 207.0], [47.5, 207.0], [47.6, 207.0], [47.7, 207.0], [47.8, 207.0], [47.9, 207.0], [48.0, 207.0], [48.1, 208.0], [48.2, 208.0], [48.3, 208.0], [48.4, 208.0], [48.5, 208.0], [48.6, 208.0], [48.7, 208.0], [48.8, 209.0], [48.9, 209.0], [49.0, 209.0], [49.1, 209.0], [49.2, 209.0], [49.3, 209.0], [49.4, 209.0], [49.5, 209.0], [49.6, 210.0], [49.7, 210.0], [49.8, 210.0], [49.9, 210.0], [50.0, 210.0], [50.1, 210.0], [50.2, 210.0], [50.3, 211.0], [50.4, 211.0], [50.5, 211.0], [50.6, 211.0], [50.7, 211.0], [50.8, 211.0], [50.9, 212.0], [51.0, 212.0], [51.1, 212.0], [51.2, 212.0], [51.3, 212.0], [51.4, 212.0], [51.5, 213.0], [51.6, 213.0], [51.7, 213.0], [51.8, 213.0], [51.9, 213.0], [52.0, 213.0], [52.1, 214.0], [52.2, 214.0], [52.3, 214.0], [52.4, 214.0], [52.5, 214.0], [52.6, 214.0], [52.7, 215.0], [52.8, 215.0], [52.9, 215.0], [53.0, 215.0], [53.1, 215.0], [53.2, 215.0], [53.3, 215.0], [53.4, 216.0], [53.5, 216.0], [53.6, 216.0], [53.7, 216.0], [53.8, 216.0], [53.9, 216.0], [54.0, 216.0], [54.1, 217.0], [54.2, 217.0], [54.3, 217.0], [54.4, 217.0], [54.5, 217.0], [54.6, 217.0], [54.7, 217.0], [54.8, 218.0], [54.9, 218.0], [55.0, 218.0], [55.1, 218.0], [55.2, 218.0], [55.3, 218.0], [55.4, 218.0], [55.5, 218.0], [55.6, 218.0], [55.7, 219.0], [55.8, 219.0], [55.9, 219.0], [56.0, 219.0], [56.1, 219.0], [56.2, 219.0], [56.3, 220.0], [56.4, 220.0], [56.5, 220.0], [56.6, 220.0], [56.7, 220.0], [56.8, 220.0], [56.9, 221.0], [57.0, 221.0], [57.1, 221.0], [57.2, 221.0], [57.3, 221.0], [57.4, 221.0], [57.5, 221.0], [57.6, 222.0], [57.7, 222.0], [57.8, 222.0], [57.9, 222.0], [58.0, 222.0], [58.1, 222.0], [58.2, 222.0], [58.3, 223.0], [58.4, 223.0], [58.5, 223.0], [58.6, 223.0], [58.7, 223.0], [58.8, 223.0], [58.9, 224.0], [59.0, 224.0], [59.1, 224.0], [59.2, 224.0], [59.3, 225.0], [59.4, 225.0], [59.5, 225.0], [59.6, 225.0], [59.7, 225.0], [59.8, 226.0], [59.9, 226.0], [60.0, 226.0], [60.1, 226.0], [60.2, 226.0], [60.3, 226.0], [60.4, 226.0], [60.5, 227.0], [60.6, 227.0], [60.7, 227.0], [60.8, 227.0], [60.9, 227.0], [61.0, 227.0], [61.1, 227.0], [61.2, 228.0], [61.3, 228.0], [61.4, 228.0], [61.5, 228.0], [61.6, 228.0], [61.7, 229.0], [61.8, 229.0], [61.9, 229.0], [62.0, 229.0], [62.1, 229.0], [62.2, 229.0], [62.3, 230.0], [62.4, 230.0], [62.5, 230.0], [62.6, 230.0], [62.7, 230.0], [62.8, 230.0], [62.9, 230.0], [63.0, 231.0], [63.1, 231.0], [63.2, 231.0], [63.3, 231.0], [63.4, 231.0], [63.5, 231.0], [63.6, 231.0], [63.7, 232.0], [63.8, 232.0], [63.9, 232.0], [64.0, 232.0], [64.1, 232.0], [64.2, 232.0], [64.3, 233.0], [64.4, 233.0], [64.5, 233.0], [64.6, 233.0], [64.7, 233.0], [64.8, 234.0], [64.9, 234.0], [65.0, 234.0], [65.1, 234.0], [65.2, 234.0], [65.3, 235.0], [65.4, 235.0], [65.5, 235.0], [65.6, 235.0], [65.7, 235.0], [65.8, 235.0], [65.9, 235.0], [66.0, 236.0], [66.1, 236.0], [66.2, 236.0], [66.3, 236.0], [66.4, 236.0], [66.5, 237.0], [66.6, 237.0], [66.7, 237.0], [66.8, 238.0], [66.9, 238.0], [67.0, 238.0], [67.1, 238.0], [67.2, 239.0], [67.3, 239.0], [67.4, 239.0], [67.5, 239.0], [67.6, 240.0], [67.7, 240.0], [67.8, 240.0], [67.9, 240.0], [68.0, 240.0], [68.1, 240.0], [68.2, 240.0], [68.3, 241.0], [68.4, 241.0], [68.5, 241.0], [68.6, 241.0], [68.7, 242.0], [68.8, 242.0], [68.9, 243.0], [69.0, 243.0], [69.1, 243.0], [69.2, 243.0], [69.3, 244.0], [69.4, 244.0], [69.5, 244.0], [69.6, 244.0], [69.7, 244.0], [69.8, 245.0], [69.9, 245.0], [70.0, 245.0], [70.1, 246.0], [70.2, 246.0], [70.3, 247.0], [70.4, 247.0], [70.5, 247.0], [70.6, 248.0], [70.7, 248.0], [70.8, 249.0], [70.9, 249.0], [71.0, 249.0], [71.1, 249.0], [71.2, 250.0], [71.3, 250.0], [71.4, 250.0], [71.5, 251.0], [71.6, 251.0], [71.7, 252.0], [71.8, 252.0], [71.9, 253.0], [72.0, 253.0], [72.1, 253.0], [72.2, 254.0], [72.3, 255.0], [72.4, 255.0], [72.5, 256.0], [72.6, 256.0], [72.7, 256.0], [72.8, 257.0], [72.9, 257.0], [73.0, 257.0], [73.1, 258.0], [73.2, 258.0], [73.3, 259.0], [73.4, 259.0], [73.5, 259.0], [73.6, 260.0], [73.7, 260.0], [73.8, 260.0], [73.9, 261.0], [74.0, 261.0], [74.1, 262.0], [74.2, 262.0], [74.3, 263.0], [74.4, 263.0], [74.5, 263.0], [74.6, 264.0], [74.7, 264.0], [74.8, 265.0], [74.9, 265.0], [75.0, 266.0], [75.1, 267.0], [75.2, 267.0], [75.3, 268.0], [75.4, 268.0], [75.5, 269.0], [75.6, 270.0], [75.7, 271.0], [75.8, 272.0], [75.9, 273.0], [76.0, 275.0], [76.1, 275.0], [76.2, 277.0], [76.3, 277.0], [76.4, 279.0], [76.5, 279.0], [76.6, 281.0], [76.7, 283.0], [76.8, 285.0], [76.9, 286.0], [77.0, 287.0], [77.1, 289.0], [77.2, 293.0], [77.3, 295.0], [77.4, 297.0], [77.5, 300.0], [77.6, 307.0], [77.7, 311.0], [77.8, 314.0], [77.9, 316.0], [78.0, 319.0], [78.1, 321.0], [78.2, 325.0], [78.3, 330.0], [78.4, 333.0], [78.5, 335.0], [78.6, 338.0], [78.7, 341.0], [78.8, 348.0], [78.9, 352.0], [79.0, 356.0], [79.1, 367.0], [79.2, 373.0], [79.3, 379.0], [79.4, 382.0], [79.5, 387.0], [79.6, 392.0], [79.7, 406.0], [79.8, 618.0], [79.9, 622.0], [80.0, 638.0], [80.1, 640.0], [80.2, 643.0], [80.3, 646.0], [80.4, 648.0], [80.5, 650.0], [80.6, 653.0], [80.7, 653.0], [80.8, 654.0], [80.9, 655.0], [81.0, 656.0], [81.1, 660.0], [81.2, 662.0], [81.3, 663.0], [81.4, 665.0], [81.5, 668.0], [81.6, 671.0], [81.7, 673.0], [81.8, 674.0], [81.9, 676.0], [82.0, 677.0], [82.1, 677.0], [82.2, 679.0], [82.3, 680.0], [82.4, 681.0], [82.5, 682.0], [82.6, 682.0], [82.7, 682.0], [82.8, 683.0], [82.9, 684.0], [83.0, 684.0], [83.1, 685.0], [83.2, 685.0], [83.3, 686.0], [83.4, 687.0], [83.5, 687.0], [83.6, 688.0], [83.7, 689.0], [83.8, 690.0], [83.9, 690.0], [84.0, 691.0], [84.1, 692.0], [84.2, 693.0], [84.3, 693.0], [84.4, 695.0], [84.5, 696.0], [84.6, 697.0], [84.7, 699.0], [84.8, 700.0], [84.9, 701.0], [85.0, 702.0], [85.1, 702.0], [85.2, 703.0], [85.3, 703.0], [85.4, 704.0], [85.5, 707.0], [85.6, 708.0], [85.7, 710.0], [85.8, 711.0], [85.9, 715.0], [86.0, 719.0], [86.1, 720.0], [86.2, 722.0], [86.3, 723.0], [86.4, 724.0], [86.5, 726.0], [86.6, 727.0], [86.7, 728.0], [86.8, 730.0], [86.9, 735.0], [87.0, 737.0], [87.1, 738.0], [87.2, 740.0], [87.3, 740.0], [87.4, 742.0], [87.5, 744.0], [87.6, 747.0], [87.7, 748.0], [87.8, 749.0], [87.9, 751.0], [88.0, 752.0], [88.1, 753.0], [88.2, 754.0], [88.3, 755.0], [88.4, 757.0], [88.5, 757.0], [88.6, 761.0], [88.7, 763.0], [88.8, 764.0], [88.9, 766.0], [89.0, 768.0], [89.1, 769.0], [89.2, 771.0], [89.3, 772.0], [89.4, 774.0], [89.5, 774.0], [89.6, 775.0], [89.7, 777.0], [89.8, 777.0], [89.9, 778.0], [90.0, 781.0], [90.1, 782.0], [90.2, 784.0], [90.3, 786.0], [90.4, 786.0], [90.5, 788.0], [90.6, 790.0], [90.7, 791.0], [90.8, 792.0], [90.9, 795.0], [91.0, 796.0], [91.1, 797.0], [91.2, 799.0], [91.3, 799.0], [91.4, 802.0], [91.5, 804.0], [91.6, 806.0], [91.7, 806.0], [91.8, 807.0], [91.9, 809.0], [92.0, 811.0], [92.1, 812.0], [92.2, 815.0], [92.3, 819.0], [92.4, 824.0], [92.5, 827.0], [92.6, 834.0], [92.7, 842.0], [92.8, 847.0], [92.9, 851.0], [93.0, 855.0], [93.1, 857.0], [93.2, 860.0], [93.3, 862.0], [93.4, 868.0], [93.5, 871.0], [93.6, 878.0], [93.7, 890.0], [93.8, 900.0], [93.9, 903.0], [94.0, 904.0], [94.1, 907.0], [94.2, 910.0], [94.3, 911.0], [94.4, 913.0], [94.5, 914.0], [94.6, 915.0], [94.7, 915.0], [94.8, 916.0], [94.9, 917.0], [95.0, 917.0], [95.1, 917.0], [95.2, 918.0], [95.3, 919.0], [95.4, 920.0], [95.5, 921.0], [95.6, 922.0], [95.7, 923.0], [95.8, 924.0], [95.9, 924.0], [96.0, 926.0], [96.1, 927.0], [96.2, 930.0], [96.3, 931.0], [96.4, 935.0], [96.5, 938.0], [96.6, 944.0], [96.7, 951.0], [96.8, 958.0], [96.9, 961.0], [97.0, 970.0], [97.1, 983.0], [97.2, 988.0], [97.3, 998.0], [97.4, 1003.0], [97.5, 1010.0], [97.6, 1014.0], [97.7, 1017.0], [97.8, 1021.0], [97.9, 1024.0], [98.0, 1028.0], [98.1, 1034.0], [98.2, 1035.0], [98.3, 1037.0], [98.4, 1048.0], [98.5, 1057.0], [98.6, 1073.0], [98.7, 1090.0], [98.8, 1136.0], [98.9, 1146.0], [99.0, 1167.0], [99.1, 1179.0], [99.2, 1203.0], [99.3, 1205.0], [99.4, 1223.0], [99.5, 1381.0], [99.6, 1397.0], [99.7, 1419.0], [99.8, 1444.0], [99.9, 1455.0]], "isOverall": false, "label": "teas_rs/teas/hello/tea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 2845.0, "series": [{"data": [[0.0, 90.0], [600.0, 351.0], [700.0, 471.0], [200.0, 2565.0], [800.0, 174.0], [900.0, 252.0], [1000.0, 97.0], [1100.0, 32.0], [300.0, 157.0], [1200.0, 23.0], [1300.0, 10.0], [1400.0, 27.0], [100.0, 2845.0], [400.0, 3.0], [500.0, 2.0]], "isOverall": false, "label": "teas_rs/teas/hello/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1439.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5660.0, "series": [{"data": [[0.0, 5660.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1439.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 197.2925764192141, "minX": 1.68578616E12, "maxY": 197.2925764192141, "series": [{"data": [[1.68578616E12, 197.2925764192141]], "isOverall": false, "label": "with access token", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68578616E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 88.5, "minX": 6.0, "maxY": 330.0471615720517, "series": [{"data": [[6.0, 185.0], [8.0, 139.33333333333334], [10.0, 126.0], [11.0, 139.0], [12.0, 208.5], [14.0, 133.25], [15.0, 133.0], [28.0, 143.0], [30.0, 112.0], [31.0, 176.33333333333334], [32.0, 270.0], [34.0, 240.66666666666666], [37.0, 228.0], [39.0, 285.0], [38.0, 260.5], [41.0, 193.0], [40.0, 148.0], [45.0, 117.0], [44.0, 144.66666666666666], [47.0, 185.0], [49.0, 88.5], [48.0, 154.5], [51.0, 189.66666666666666], [53.0, 116.0], [52.0, 143.0], [57.0, 116.0], [56.0, 276.5], [59.0, 170.5], [58.0, 90.0], [61.0, 131.0], [60.0, 178.0], [63.0, 160.0], [62.0, 156.0], [66.0, 148.0], [70.0, 209.0], [68.0, 226.5], [74.0, 207.0], [73.0, 192.66666666666666], [79.0, 171.0], [77.0, 205.0], [76.0, 190.0], [81.0, 162.0], [86.0, 174.0], [85.0, 161.2], [93.0, 213.5], [96.0, 179.66666666666666], [102.0, 176.5], [100.0, 150.0], [105.0, 135.33333333333334], [104.0, 195.85714285714286], [108.0, 177.25], [114.0, 159.5], [117.0, 149.0], [123.0, 170.5], [122.0, 186.0], [120.0, 148.66666666666666], [127.0, 175.0], [126.0, 219.0], [135.0, 232.0], [133.0, 234.0], [132.0, 192.66666666666666], [129.0, 238.0], [128.0, 235.0], [143.0, 241.0], [140.0, 229.0], [139.0, 232.0], [148.0, 231.0], [146.0, 235.0], [158.0, 218.0], [157.0, 222.0], [156.0, 228.0], [154.0, 225.5], [152.0, 230.5], [165.0, 234.25], [163.0, 245.33333333333334], [162.0, 215.0], [191.0, 232.76923076923077], [185.0, 224.41666666666669], [199.0, 247.87499999999997], [197.0, 251.49999999999997], [192.0, 246.0], [200.0, 330.0471615720517]], "isOverall": false, "label": "teas_rs/teas/hello/tea", "isController": false}, {"data": [[197.2925764192141, 325.8784335821942]], "isOverall": false, "label": "teas_rs/teas/hello/tea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 41292.51666666667, "minX": 1.68578616E12, "maxY": 152983.45, "series": [{"data": [[1.68578616E12, 41292.51666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68578616E12, 152983.45]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68578616E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 325.8784335821942, "minX": 1.68578616E12, "maxY": 325.8784335821942, "series": [{"data": [[1.68578616E12, 325.8784335821942]], "isOverall": false, "label": "teas_rs/teas/hello/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68578616E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 325.8349063248356, "minX": 1.68578616E12, "maxY": 325.8349063248356, "series": [{"data": [[1.68578616E12, 325.8349063248356]], "isOverall": false, "label": "teas_rs/teas/hello/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68578616E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 10.443442738413847, "minX": 1.68578616E12, "maxY": 10.443442738413847, "series": [{"data": [[1.68578616E12, 10.443442738413847]], "isOverall": false, "label": "teas_rs/teas/hello/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68578616E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.68578616E12, "maxY": 1465.0, "series": [{"data": [[1.68578616E12, 1465.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68578616E12, 27.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68578616E12, 781.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68578616E12, 1167.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68578616E12, 210.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68578616E12, 917.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68578616E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 163.0, "minX": 241.0, "maxY": 930.0, "series": [{"data": [[262.0, 916.0], [365.0, 707.0], [368.0, 673.0], [391.0, 220.0], [836.0, 199.0], [419.0, 719.0], [435.0, 257.0], [947.0, 194.0], [954.0, 163.0], [241.0, 930.0], [992.0, 201.0], [498.0, 209.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 992.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 162.5, "minX": 241.0, "maxY": 930.0, "series": [{"data": [[262.0, 916.0], [365.0, 707.0], [368.0, 673.0], [391.0, 219.0], [836.0, 199.0], [419.0, 719.0], [435.0, 257.0], [947.0, 194.0], [954.0, 162.5], [241.0, 930.0], [992.0, 201.0], [498.0, 209.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 992.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 118.31666666666666, "minX": 1.68578616E12, "maxY": 118.31666666666666, "series": [{"data": [[1.68578616E12, 118.31666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68578616E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 118.31666666666666, "minX": 1.68578616E12, "maxY": 118.31666666666666, "series": [{"data": [[1.68578616E12, 118.31666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68578616E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 118.31666666666666, "minX": 1.68578616E12, "maxY": 118.31666666666666, "series": [{"data": [[1.68578616E12, 118.31666666666666]], "isOverall": false, "label": "teas_rs/teas/hello/tea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68578616E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 118.31666666666666, "minX": 1.68578616E12, "maxY": 118.31666666666666, "series": [{"data": [[1.68578616E12, 118.31666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68578616E12, "title": "Total Transactions Per Second"}},
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

