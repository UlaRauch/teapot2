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
        data: {"result": {"minY": 21.0, "minX": 0.0, "maxY": 1760.0, "series": [{"data": [[0.0, 21.0], [0.1, 32.0], [0.2, 37.0], [0.3, 45.0], [0.4, 48.0], [0.5, 49.0], [0.6, 51.0], [0.7, 51.0], [0.8, 55.0], [0.9, 55.0], [1.0, 56.0], [1.1, 57.0], [1.2, 58.0], [1.3, 60.0], [1.4, 60.0], [1.5, 61.0], [1.6, 62.0], [1.7, 64.0], [1.8, 65.0], [1.9, 66.0], [2.0, 66.0], [2.1, 67.0], [2.2, 68.0], [2.3, 69.0], [2.4, 70.0], [2.5, 70.0], [2.6, 71.0], [2.7, 71.0], [2.8, 72.0], [2.9, 73.0], [3.0, 73.0], [3.1, 74.0], [3.2, 75.0], [3.3, 75.0], [3.4, 76.0], [3.5, 76.0], [3.6, 77.0], [3.7, 77.0], [3.8, 78.0], [3.9, 78.0], [4.0, 79.0], [4.1, 79.0], [4.2, 80.0], [4.3, 80.0], [4.4, 81.0], [4.5, 81.0], [4.6, 82.0], [4.7, 82.0], [4.8, 83.0], [4.9, 84.0], [5.0, 84.0], [5.1, 84.0], [5.2, 85.0], [5.3, 86.0], [5.4, 86.0], [5.5, 87.0], [5.6, 88.0], [5.7, 88.0], [5.8, 88.0], [5.9, 89.0], [6.0, 89.0], [6.1, 89.0], [6.2, 89.0], [6.3, 90.0], [6.4, 90.0], [6.5, 91.0], [6.6, 91.0], [6.7, 91.0], [6.8, 91.0], [6.9, 92.0], [7.0, 92.0], [7.1, 92.0], [7.2, 93.0], [7.3, 93.0], [7.4, 93.0], [7.5, 94.0], [7.6, 94.0], [7.7, 95.0], [7.8, 95.0], [7.9, 95.0], [8.0, 95.0], [8.1, 96.0], [8.2, 96.0], [8.3, 96.0], [8.4, 97.0], [8.5, 97.0], [8.6, 97.0], [8.7, 98.0], [8.8, 98.0], [8.9, 98.0], [9.0, 98.0], [9.1, 99.0], [9.2, 99.0], [9.3, 99.0], [9.4, 100.0], [9.5, 100.0], [9.6, 100.0], [9.7, 100.0], [9.8, 101.0], [9.9, 101.0], [10.0, 101.0], [10.1, 102.0], [10.2, 102.0], [10.3, 103.0], [10.4, 103.0], [10.5, 103.0], [10.6, 103.0], [10.7, 104.0], [10.8, 104.0], [10.9, 104.0], [11.0, 104.0], [11.1, 104.0], [11.2, 104.0], [11.3, 105.0], [11.4, 105.0], [11.5, 105.0], [11.6, 106.0], [11.7, 106.0], [11.8, 106.0], [11.9, 106.0], [12.0, 107.0], [12.1, 107.0], [12.2, 107.0], [12.3, 108.0], [12.4, 108.0], [12.5, 108.0], [12.6, 108.0], [12.7, 109.0], [12.8, 109.0], [12.9, 109.0], [13.0, 109.0], [13.1, 110.0], [13.2, 110.0], [13.3, 110.0], [13.4, 111.0], [13.5, 111.0], [13.6, 111.0], [13.7, 111.0], [13.8, 112.0], [13.9, 112.0], [14.0, 112.0], [14.1, 113.0], [14.2, 113.0], [14.3, 113.0], [14.4, 113.0], [14.5, 114.0], [14.6, 114.0], [14.7, 114.0], [14.8, 114.0], [14.9, 115.0], [15.0, 115.0], [15.1, 115.0], [15.2, 115.0], [15.3, 115.0], [15.4, 116.0], [15.5, 116.0], [15.6, 116.0], [15.7, 117.0], [15.8, 117.0], [15.9, 117.0], [16.0, 117.0], [16.1, 117.0], [16.2, 118.0], [16.3, 118.0], [16.4, 118.0], [16.5, 118.0], [16.6, 119.0], [16.7, 119.0], [16.8, 119.0], [16.9, 120.0], [17.0, 120.0], [17.1, 120.0], [17.2, 121.0], [17.3, 121.0], [17.4, 121.0], [17.5, 121.0], [17.6, 121.0], [17.7, 122.0], [17.8, 122.0], [17.9, 122.0], [18.0, 122.0], [18.1, 122.0], [18.2, 122.0], [18.3, 123.0], [18.4, 123.0], [18.5, 123.0], [18.6, 124.0], [18.7, 124.0], [18.8, 124.0], [18.9, 124.0], [19.0, 125.0], [19.1, 125.0], [19.2, 125.0], [19.3, 125.0], [19.4, 126.0], [19.5, 126.0], [19.6, 126.0], [19.7, 127.0], [19.8, 127.0], [19.9, 127.0], [20.0, 127.0], [20.1, 128.0], [20.2, 128.0], [20.3, 128.0], [20.4, 128.0], [20.5, 128.0], [20.6, 129.0], [20.7, 129.0], [20.8, 130.0], [20.9, 130.0], [21.0, 130.0], [21.1, 131.0], [21.2, 131.0], [21.3, 131.0], [21.4, 131.0], [21.5, 132.0], [21.6, 132.0], [21.7, 133.0], [21.8, 133.0], [21.9, 133.0], [22.0, 134.0], [22.1, 134.0], [22.2, 134.0], [22.3, 134.0], [22.4, 135.0], [22.5, 135.0], [22.6, 135.0], [22.7, 135.0], [22.8, 135.0], [22.9, 136.0], [23.0, 136.0], [23.1, 136.0], [23.2, 136.0], [23.3, 136.0], [23.4, 137.0], [23.5, 137.0], [23.6, 137.0], [23.7, 137.0], [23.8, 137.0], [23.9, 137.0], [24.0, 138.0], [24.1, 138.0], [24.2, 138.0], [24.3, 138.0], [24.4, 139.0], [24.5, 139.0], [24.6, 139.0], [24.7, 139.0], [24.8, 139.0], [24.9, 140.0], [25.0, 140.0], [25.1, 140.0], [25.2, 140.0], [25.3, 141.0], [25.4, 141.0], [25.5, 141.0], [25.6, 141.0], [25.7, 141.0], [25.8, 141.0], [25.9, 141.0], [26.0, 142.0], [26.1, 142.0], [26.2, 142.0], [26.3, 142.0], [26.4, 143.0], [26.5, 143.0], [26.6, 143.0], [26.7, 143.0], [26.8, 143.0], [26.9, 144.0], [27.0, 144.0], [27.1, 144.0], [27.2, 145.0], [27.3, 145.0], [27.4, 145.0], [27.5, 145.0], [27.6, 146.0], [27.7, 146.0], [27.8, 146.0], [27.9, 146.0], [28.0, 146.0], [28.1, 146.0], [28.2, 147.0], [28.3, 147.0], [28.4, 147.0], [28.5, 147.0], [28.6, 148.0], [28.7, 148.0], [28.8, 148.0], [28.9, 148.0], [29.0, 148.0], [29.1, 148.0], [29.2, 148.0], [29.3, 149.0], [29.4, 149.0], [29.5, 149.0], [29.6, 149.0], [29.7, 150.0], [29.8, 150.0], [29.9, 150.0], [30.0, 150.0], [30.1, 150.0], [30.2, 150.0], [30.3, 150.0], [30.4, 151.0], [30.5, 151.0], [30.6, 151.0], [30.7, 152.0], [30.8, 152.0], [30.9, 152.0], [31.0, 152.0], [31.1, 152.0], [31.2, 153.0], [31.3, 153.0], [31.4, 153.0], [31.5, 153.0], [31.6, 154.0], [31.7, 154.0], [31.8, 154.0], [31.9, 154.0], [32.0, 155.0], [32.1, 155.0], [32.2, 155.0], [32.3, 155.0], [32.4, 156.0], [32.5, 156.0], [32.6, 156.0], [32.7, 156.0], [32.8, 156.0], [32.9, 156.0], [33.0, 157.0], [33.1, 157.0], [33.2, 157.0], [33.3, 157.0], [33.4, 158.0], [33.5, 158.0], [33.6, 158.0], [33.7, 158.0], [33.8, 158.0], [33.9, 159.0], [34.0, 159.0], [34.1, 159.0], [34.2, 159.0], [34.3, 159.0], [34.4, 160.0], [34.5, 160.0], [34.6, 160.0], [34.7, 160.0], [34.8, 161.0], [34.9, 161.0], [35.0, 161.0], [35.1, 161.0], [35.2, 161.0], [35.3, 161.0], [35.4, 162.0], [35.5, 162.0], [35.6, 162.0], [35.7, 162.0], [35.8, 162.0], [35.9, 163.0], [36.0, 163.0], [36.1, 163.0], [36.2, 163.0], [36.3, 163.0], [36.4, 163.0], [36.5, 163.0], [36.6, 164.0], [36.7, 164.0], [36.8, 165.0], [36.9, 165.0], [37.0, 165.0], [37.1, 165.0], [37.2, 166.0], [37.3, 166.0], [37.4, 166.0], [37.5, 167.0], [37.6, 167.0], [37.7, 167.0], [37.8, 167.0], [37.9, 168.0], [38.0, 168.0], [38.1, 168.0], [38.2, 168.0], [38.3, 168.0], [38.4, 168.0], [38.5, 169.0], [38.6, 169.0], [38.7, 169.0], [38.8, 169.0], [38.9, 170.0], [39.0, 170.0], [39.1, 170.0], [39.2, 170.0], [39.3, 170.0], [39.4, 171.0], [39.5, 171.0], [39.6, 171.0], [39.7, 171.0], [39.8, 171.0], [39.9, 172.0], [40.0, 172.0], [40.1, 172.0], [40.2, 172.0], [40.3, 173.0], [40.4, 173.0], [40.5, 173.0], [40.6, 173.0], [40.7, 174.0], [40.8, 174.0], [40.9, 174.0], [41.0, 174.0], [41.1, 174.0], [41.2, 175.0], [41.3, 175.0], [41.4, 175.0], [41.5, 176.0], [41.6, 176.0], [41.7, 176.0], [41.8, 176.0], [41.9, 176.0], [42.0, 176.0], [42.1, 177.0], [42.2, 177.0], [42.3, 177.0], [42.4, 177.0], [42.5, 177.0], [42.6, 178.0], [42.7, 178.0], [42.8, 178.0], [42.9, 178.0], [43.0, 178.0], [43.1, 178.0], [43.2, 179.0], [43.3, 179.0], [43.4, 179.0], [43.5, 179.0], [43.6, 179.0], [43.7, 179.0], [43.8, 180.0], [43.9, 180.0], [44.0, 180.0], [44.1, 181.0], [44.2, 181.0], [44.3, 181.0], [44.4, 181.0], [44.5, 181.0], [44.6, 182.0], [44.7, 182.0], [44.8, 182.0], [44.9, 182.0], [45.0, 183.0], [45.1, 183.0], [45.2, 183.0], [45.3, 184.0], [45.4, 184.0], [45.5, 184.0], [45.6, 184.0], [45.7, 184.0], [45.8, 185.0], [45.9, 185.0], [46.0, 185.0], [46.1, 185.0], [46.2, 185.0], [46.3, 186.0], [46.4, 186.0], [46.5, 186.0], [46.6, 186.0], [46.7, 186.0], [46.8, 186.0], [46.9, 186.0], [47.0, 187.0], [47.1, 187.0], [47.2, 187.0], [47.3, 188.0], [47.4, 188.0], [47.5, 188.0], [47.6, 188.0], [47.7, 188.0], [47.8, 189.0], [47.9, 189.0], [48.0, 189.0], [48.1, 190.0], [48.2, 190.0], [48.3, 190.0], [48.4, 190.0], [48.5, 190.0], [48.6, 191.0], [48.7, 191.0], [48.8, 191.0], [48.9, 191.0], [49.0, 192.0], [49.1, 192.0], [49.2, 192.0], [49.3, 192.0], [49.4, 192.0], [49.5, 192.0], [49.6, 193.0], [49.7, 193.0], [49.8, 193.0], [49.9, 194.0], [50.0, 194.0], [50.1, 194.0], [50.2, 194.0], [50.3, 194.0], [50.4, 195.0], [50.5, 195.0], [50.6, 195.0], [50.7, 195.0], [50.8, 195.0], [50.9, 196.0], [51.0, 196.0], [51.1, 196.0], [51.2, 196.0], [51.3, 196.0], [51.4, 196.0], [51.5, 196.0], [51.6, 197.0], [51.7, 197.0], [51.8, 197.0], [51.9, 197.0], [52.0, 197.0], [52.1, 197.0], [52.2, 198.0], [52.3, 198.0], [52.4, 198.0], [52.5, 198.0], [52.6, 198.0], [52.7, 199.0], [52.8, 199.0], [52.9, 199.0], [53.0, 199.0], [53.1, 199.0], [53.2, 200.0], [53.3, 200.0], [53.4, 200.0], [53.5, 200.0], [53.6, 201.0], [53.7, 201.0], [53.8, 201.0], [53.9, 201.0], [54.0, 202.0], [54.1, 202.0], [54.2, 202.0], [54.3, 202.0], [54.4, 202.0], [54.5, 202.0], [54.6, 202.0], [54.7, 203.0], [54.8, 203.0], [54.9, 203.0], [55.0, 204.0], [55.1, 204.0], [55.2, 204.0], [55.3, 204.0], [55.4, 204.0], [55.5, 205.0], [55.6, 205.0], [55.7, 205.0], [55.8, 205.0], [55.9, 206.0], [56.0, 206.0], [56.1, 206.0], [56.2, 206.0], [56.3, 206.0], [56.4, 207.0], [56.5, 207.0], [56.6, 207.0], [56.7, 207.0], [56.8, 208.0], [56.9, 208.0], [57.0, 208.0], [57.1, 208.0], [57.2, 208.0], [57.3, 209.0], [57.4, 209.0], [57.5, 209.0], [57.6, 209.0], [57.7, 210.0], [57.8, 210.0], [57.9, 210.0], [58.0, 210.0], [58.1, 211.0], [58.2, 211.0], [58.3, 211.0], [58.4, 211.0], [58.5, 212.0], [58.6, 212.0], [58.7, 212.0], [58.8, 213.0], [58.9, 213.0], [59.0, 213.0], [59.1, 213.0], [59.2, 213.0], [59.3, 214.0], [59.4, 214.0], [59.5, 214.0], [59.6, 214.0], [59.7, 214.0], [59.8, 215.0], [59.9, 215.0], [60.0, 215.0], [60.1, 216.0], [60.2, 216.0], [60.3, 216.0], [60.4, 216.0], [60.5, 216.0], [60.6, 217.0], [60.7, 217.0], [60.8, 217.0], [60.9, 217.0], [61.0, 218.0], [61.1, 218.0], [61.2, 218.0], [61.3, 218.0], [61.4, 218.0], [61.5, 219.0], [61.6, 219.0], [61.7, 219.0], [61.8, 220.0], [61.9, 220.0], [62.0, 221.0], [62.1, 221.0], [62.2, 221.0], [62.3, 221.0], [62.4, 221.0], [62.5, 222.0], [62.6, 222.0], [62.7, 222.0], [62.8, 222.0], [62.9, 223.0], [63.0, 223.0], [63.1, 223.0], [63.2, 223.0], [63.3, 224.0], [63.4, 224.0], [63.5, 225.0], [63.6, 225.0], [63.7, 225.0], [63.8, 226.0], [63.9, 226.0], [64.0, 226.0], [64.1, 226.0], [64.2, 227.0], [64.3, 227.0], [64.4, 227.0], [64.5, 227.0], [64.6, 228.0], [64.7, 228.0], [64.8, 228.0], [64.9, 228.0], [65.0, 229.0], [65.1, 229.0], [65.2, 229.0], [65.3, 229.0], [65.4, 229.0], [65.5, 230.0], [65.6, 230.0], [65.7, 230.0], [65.8, 231.0], [65.9, 231.0], [66.0, 232.0], [66.1, 232.0], [66.2, 232.0], [66.3, 232.0], [66.4, 233.0], [66.5, 233.0], [66.6, 233.0], [66.7, 233.0], [66.8, 233.0], [66.9, 234.0], [67.0, 234.0], [67.1, 234.0], [67.2, 234.0], [67.3, 235.0], [67.4, 235.0], [67.5, 235.0], [67.6, 236.0], [67.7, 236.0], [67.8, 236.0], [67.9, 236.0], [68.0, 237.0], [68.1, 237.0], [68.2, 237.0], [68.3, 237.0], [68.4, 237.0], [68.5, 238.0], [68.6, 238.0], [68.7, 238.0], [68.8, 239.0], [68.9, 239.0], [69.0, 239.0], [69.1, 239.0], [69.2, 240.0], [69.3, 240.0], [69.4, 241.0], [69.5, 241.0], [69.6, 242.0], [69.7, 242.0], [69.8, 242.0], [69.9, 243.0], [70.0, 243.0], [70.1, 243.0], [70.2, 244.0], [70.3, 244.0], [70.4, 244.0], [70.5, 245.0], [70.6, 245.0], [70.7, 245.0], [70.8, 245.0], [70.9, 246.0], [71.0, 246.0], [71.1, 246.0], [71.2, 247.0], [71.3, 247.0], [71.4, 247.0], [71.5, 248.0], [71.6, 248.0], [71.7, 249.0], [71.8, 249.0], [71.9, 249.0], [72.0, 249.0], [72.1, 250.0], [72.2, 250.0], [72.3, 250.0], [72.4, 251.0], [72.5, 251.0], [72.6, 251.0], [72.7, 252.0], [72.8, 252.0], [72.9, 252.0], [73.0, 252.0], [73.1, 252.0], [73.2, 253.0], [73.3, 253.0], [73.4, 253.0], [73.5, 254.0], [73.6, 254.0], [73.7, 255.0], [73.8, 255.0], [73.9, 255.0], [74.0, 255.0], [74.1, 256.0], [74.2, 257.0], [74.3, 257.0], [74.4, 257.0], [74.5, 258.0], [74.6, 258.0], [74.7, 259.0], [74.8, 259.0], [74.9, 259.0], [75.0, 260.0], [75.1, 260.0], [75.2, 260.0], [75.3, 261.0], [75.4, 261.0], [75.5, 261.0], [75.6, 261.0], [75.7, 262.0], [75.8, 262.0], [75.9, 262.0], [76.0, 263.0], [76.1, 263.0], [76.2, 263.0], [76.3, 263.0], [76.4, 264.0], [76.5, 264.0], [76.6, 265.0], [76.7, 266.0], [76.8, 266.0], [76.9, 266.0], [77.0, 267.0], [77.1, 267.0], [77.2, 268.0], [77.3, 268.0], [77.4, 268.0], [77.5, 269.0], [77.6, 269.0], [77.7, 270.0], [77.8, 270.0], [77.9, 270.0], [78.0, 271.0], [78.1, 271.0], [78.2, 271.0], [78.3, 272.0], [78.4, 272.0], [78.5, 272.0], [78.6, 273.0], [78.7, 274.0], [78.8, 274.0], [78.9, 274.0], [79.0, 275.0], [79.1, 276.0], [79.2, 277.0], [79.3, 277.0], [79.4, 277.0], [79.5, 278.0], [79.6, 279.0], [79.7, 279.0], [79.8, 280.0], [79.9, 280.0], [80.0, 281.0], [80.1, 282.0], [80.2, 282.0], [80.3, 282.0], [80.4, 283.0], [80.5, 283.0], [80.6, 284.0], [80.7, 284.0], [80.8, 285.0], [80.9, 285.0], [81.0, 286.0], [81.1, 287.0], [81.2, 287.0], [81.3, 287.0], [81.4, 288.0], [81.5, 288.0], [81.6, 289.0], [81.7, 290.0], [81.8, 290.0], [81.9, 291.0], [82.0, 291.0], [82.1, 292.0], [82.2, 294.0], [82.3, 294.0], [82.4, 295.0], [82.5, 295.0], [82.6, 295.0], [82.7, 296.0], [82.8, 297.0], [82.9, 297.0], [83.0, 298.0], [83.1, 298.0], [83.2, 299.0], [83.3, 299.0], [83.4, 299.0], [83.5, 300.0], [83.6, 301.0], [83.7, 302.0], [83.8, 303.0], [83.9, 303.0], [84.0, 304.0], [84.1, 305.0], [84.2, 306.0], [84.3, 307.0], [84.4, 307.0], [84.5, 308.0], [84.6, 308.0], [84.7, 309.0], [84.8, 310.0], [84.9, 311.0], [85.0, 312.0], [85.1, 312.0], [85.2, 313.0], [85.3, 314.0], [85.4, 315.0], [85.5, 315.0], [85.6, 316.0], [85.7, 317.0], [85.8, 318.0], [85.9, 318.0], [86.0, 319.0], [86.1, 320.0], [86.2, 321.0], [86.3, 322.0], [86.4, 322.0], [86.5, 323.0], [86.6, 323.0], [86.7, 324.0], [86.8, 325.0], [86.9, 326.0], [87.0, 327.0], [87.1, 327.0], [87.2, 328.0], [87.3, 328.0], [87.4, 329.0], [87.5, 331.0], [87.6, 331.0], [87.7, 332.0], [87.8, 333.0], [87.9, 334.0], [88.0, 334.0], [88.1, 335.0], [88.2, 335.0], [88.3, 336.0], [88.4, 337.0], [88.5, 339.0], [88.6, 339.0], [88.7, 340.0], [88.8, 341.0], [88.9, 342.0], [89.0, 343.0], [89.1, 344.0], [89.2, 344.0], [89.3, 345.0], [89.4, 346.0], [89.5, 347.0], [89.6, 349.0], [89.7, 350.0], [89.8, 351.0], [89.9, 352.0], [90.0, 355.0], [90.1, 357.0], [90.2, 358.0], [90.3, 359.0], [90.4, 360.0], [90.5, 361.0], [90.6, 362.0], [90.7, 362.0], [90.8, 363.0], [90.9, 364.0], [91.0, 365.0], [91.1, 366.0], [91.2, 367.0], [91.3, 369.0], [91.4, 371.0], [91.5, 374.0], [91.6, 375.0], [91.7, 377.0], [91.8, 379.0], [91.9, 383.0], [92.0, 384.0], [92.1, 386.0], [92.2, 388.0], [92.3, 389.0], [92.4, 392.0], [92.5, 393.0], [92.6, 396.0], [92.7, 400.0], [92.8, 400.0], [92.9, 404.0], [93.0, 406.0], [93.1, 408.0], [93.2, 411.0], [93.3, 416.0], [93.4, 418.0], [93.5, 419.0], [93.6, 421.0], [93.7, 423.0], [93.8, 424.0], [93.9, 428.0], [94.0, 431.0], [94.1, 433.0], [94.2, 435.0], [94.3, 442.0], [94.4, 448.0], [94.5, 450.0], [94.6, 454.0], [94.7, 459.0], [94.8, 465.0], [94.9, 466.0], [95.0, 476.0], [95.1, 484.0], [95.2, 494.0], [95.3, 496.0], [95.4, 509.0], [95.5, 511.0], [95.6, 514.0], [95.7, 518.0], [95.8, 521.0], [95.9, 529.0], [96.0, 532.0], [96.1, 535.0], [96.2, 544.0], [96.3, 546.0], [96.4, 554.0], [96.5, 568.0], [96.6, 584.0], [96.7, 588.0], [96.8, 602.0], [96.9, 616.0], [97.0, 625.0], [97.1, 631.0], [97.2, 642.0], [97.3, 652.0], [97.4, 660.0], [97.5, 670.0], [97.6, 673.0], [97.7, 683.0], [97.8, 686.0], [97.9, 692.0], [98.0, 726.0], [98.1, 740.0], [98.2, 763.0], [98.3, 801.0], [98.4, 827.0], [98.5, 840.0], [98.6, 845.0], [98.7, 861.0], [98.8, 882.0], [98.9, 891.0], [99.0, 914.0], [99.1, 951.0], [99.2, 1023.0], [99.3, 1057.0], [99.4, 1094.0], [99.5, 1163.0], [99.6, 1239.0], [99.7, 1335.0], [99.8, 1551.0], [99.9, 1622.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1922.0, "series": [{"data": [[0.0, 410.0], [600.0, 51.0], [700.0, 16.0], [200.0, 1331.0], [800.0, 29.0], [900.0, 10.0], [1000.0, 11.0], [1100.0, 4.0], [300.0, 407.0], [1200.0, 6.0], [1300.0, 4.0], [1400.0, 2.0], [1500.0, 1.0], [100.0, 1922.0], [400.0, 118.0], [1600.0, 5.0], [1700.0, 3.0], [500.0, 61.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4188.0, "series": [{"data": [[0.0, 4188.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 194.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 9.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 98.9152812571168, "minX": 1.6857426E12, "maxY": 98.9152812571168, "series": [{"data": [[1.6857426E12, 98.9152812571168]], "isOverall": false, "label": "with access token", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6857426E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 95.0, "minX": 2.0, "maxY": 389.0, "series": [{"data": [[2.0, 252.0], [5.0, 222.25], [8.0, 195.0], [9.0, 196.0], [10.0, 242.0], [14.0, 204.0], [20.0, 221.16666666666666], [21.0, 170.5], [22.0, 181.0], [23.0, 143.0], [28.0, 192.0], [29.0, 196.33333333333334], [33.0, 188.28571428571428], [32.0, 188.0], [34.0, 178.0], [37.0, 167.0], [36.0, 169.5], [39.0, 217.0], [42.0, 165.0], [49.0, 261.0], [53.0, 138.0], [52.0, 208.75], [57.0, 144.0], [56.0, 170.66666666666666], [59.0, 182.0], [62.0, 244.33333333333334], [67.0, 257.5], [65.0, 136.0], [64.0, 227.0], [71.0, 247.0], [70.0, 154.0], [74.0, 225.0], [73.0, 163.0], [79.0, 250.0], [78.0, 187.0], [76.0, 181.66666666666666], [83.0, 389.0], [82.0, 252.0], [80.0, 260.0], [85.0, 252.0], [84.0, 208.0], [91.0, 186.75], [88.0, 209.5], [95.0, 95.0], [94.0, 177.5], [92.0, 131.0], [99.0, 186.66666666666666], [98.0, 207.0], [96.0, 164.5], [100.0, 227.03777104220055]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}, {"data": [[98.91505351856067, 226.4281484855382]], "isOverall": false, "label": "gateway_rs/hellotea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 24370.05, "minX": 1.6857426E12, "maxY": 94479.68333333333, "series": [{"data": [[1.6857426E12, 24370.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6857426E12, 94479.68333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6857426E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 226.4281484855382, "minX": 1.6857426E12, "maxY": 226.4281484855382, "series": [{"data": [[1.6857426E12, 226.4281484855382]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6857426E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 226.4099294010473, "minX": 1.6857426E12, "maxY": 226.4099294010473, "series": [{"data": [[1.6857426E12, 226.4099294010473]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6857426E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.512411751309494, "minX": 1.6857426E12, "maxY": 2.512411751309494, "series": [{"data": [[1.6857426E12, 2.512411751309494]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6857426E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 21.0, "minX": 1.6857426E12, "maxY": 1760.0, "series": [{"data": [[1.6857426E12, 1760.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6857426E12, 21.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6857426E12, 355.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6857426E12, 915.4399999999987]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6857426E12, 194.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.6857426E12, 477.1999999999989]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6857426E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 162.5, "minX": 295.0, "maxY": 290.5, "series": [{"data": [[517.0, 193.0], [295.0, 192.0], [578.0, 162.5], [306.0, 290.5], [314.0, 190.5], [437.0, 223.0], [461.0, 190.0], [478.0, 199.0], [494.0, 181.0], [511.0, 191.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 578.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 162.5, "minX": 295.0, "maxY": 290.5, "series": [{"data": [[517.0, 193.0], [295.0, 192.0], [578.0, 162.5], [306.0, 290.5], [314.0, 190.5], [437.0, 223.0], [461.0, 190.0], [478.0, 199.0], [494.0, 181.0], [511.0, 191.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 578.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 73.18333333333334, "minX": 1.6857426E12, "maxY": 73.18333333333334, "series": [{"data": [[1.6857426E12, 73.18333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6857426E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 73.18333333333334, "minX": 1.6857426E12, "maxY": 73.18333333333334, "series": [{"data": [[1.6857426E12, 73.18333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6857426E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 73.18333333333334, "minX": 1.6857426E12, "maxY": 73.18333333333334, "series": [{"data": [[1.6857426E12, 73.18333333333334]], "isOverall": false, "label": "gateway_rs/hellotea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6857426E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 73.18333333333334, "minX": 1.6857426E12, "maxY": 73.18333333333334, "series": [{"data": [[1.6857426E12, 73.18333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6857426E12, "title": "Total Transactions Per Second"}},
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

