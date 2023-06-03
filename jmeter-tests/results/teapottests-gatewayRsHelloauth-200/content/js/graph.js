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
        data: {"result": {"minY": 9.0, "minX": 0.0, "maxY": 487.0, "series": [{"data": [[0.0, 9.0], [0.1, 42.0], [0.2, 54.0], [0.3, 58.0], [0.4, 60.0], [0.5, 64.0], [0.6, 67.0], [0.7, 68.0], [0.8, 70.0], [0.9, 71.0], [1.0, 73.0], [1.1, 75.0], [1.2, 76.0], [1.3, 77.0], [1.4, 77.0], [1.5, 79.0], [1.6, 80.0], [1.7, 80.0], [1.8, 82.0], [1.9, 82.0], [2.0, 83.0], [2.1, 83.0], [2.2, 84.0], [2.3, 84.0], [2.4, 86.0], [2.5, 87.0], [2.6, 87.0], [2.7, 88.0], [2.8, 88.0], [2.9, 89.0], [3.0, 90.0], [3.1, 90.0], [3.2, 90.0], [3.3, 91.0], [3.4, 92.0], [3.5, 92.0], [3.6, 93.0], [3.7, 93.0], [3.8, 94.0], [3.9, 94.0], [4.0, 95.0], [4.1, 95.0], [4.2, 95.0], [4.3, 96.0], [4.4, 97.0], [4.5, 97.0], [4.6, 98.0], [4.7, 98.0], [4.8, 98.0], [4.9, 99.0], [5.0, 99.0], [5.1, 100.0], [5.2, 100.0], [5.3, 100.0], [5.4, 101.0], [5.5, 101.0], [5.6, 101.0], [5.7, 102.0], [5.8, 102.0], [5.9, 103.0], [6.0, 103.0], [6.1, 103.0], [6.2, 104.0], [6.3, 104.0], [6.4, 104.0], [6.5, 104.0], [6.6, 104.0], [6.7, 105.0], [6.8, 105.0], [6.9, 105.0], [7.0, 106.0], [7.1, 106.0], [7.2, 106.0], [7.3, 106.0], [7.4, 107.0], [7.5, 107.0], [7.6, 107.0], [7.7, 108.0], [7.8, 108.0], [7.9, 108.0], [8.0, 108.0], [8.1, 109.0], [8.2, 109.0], [8.3, 109.0], [8.4, 109.0], [8.5, 110.0], [8.6, 110.0], [8.7, 110.0], [8.8, 110.0], [8.9, 110.0], [9.0, 111.0], [9.1, 111.0], [9.2, 112.0], [9.3, 112.0], [9.4, 112.0], [9.5, 113.0], [9.6, 113.0], [9.7, 113.0], [9.8, 114.0], [9.9, 114.0], [10.0, 114.0], [10.1, 114.0], [10.2, 115.0], [10.3, 115.0], [10.4, 115.0], [10.5, 115.0], [10.6, 116.0], [10.7, 116.0], [10.8, 116.0], [10.9, 116.0], [11.0, 116.0], [11.1, 116.0], [11.2, 116.0], [11.3, 117.0], [11.4, 117.0], [11.5, 117.0], [11.6, 117.0], [11.7, 117.0], [11.8, 118.0], [11.9, 118.0], [12.0, 118.0], [12.1, 118.0], [12.2, 118.0], [12.3, 119.0], [12.4, 119.0], [12.5, 119.0], [12.6, 119.0], [12.7, 119.0], [12.8, 119.0], [12.9, 120.0], [13.0, 120.0], [13.1, 120.0], [13.2, 120.0], [13.3, 120.0], [13.4, 120.0], [13.5, 121.0], [13.6, 121.0], [13.7, 121.0], [13.8, 121.0], [13.9, 121.0], [14.0, 121.0], [14.1, 122.0], [14.2, 122.0], [14.3, 122.0], [14.4, 122.0], [14.5, 122.0], [14.6, 122.0], [14.7, 122.0], [14.8, 123.0], [14.9, 123.0], [15.0, 123.0], [15.1, 123.0], [15.2, 123.0], [15.3, 123.0], [15.4, 124.0], [15.5, 124.0], [15.6, 124.0], [15.7, 124.0], [15.8, 124.0], [15.9, 124.0], [16.0, 125.0], [16.1, 125.0], [16.2, 125.0], [16.3, 125.0], [16.4, 125.0], [16.5, 126.0], [16.6, 126.0], [16.7, 126.0], [16.8, 126.0], [16.9, 126.0], [17.0, 126.0], [17.1, 127.0], [17.2, 127.0], [17.3, 127.0], [17.4, 127.0], [17.5, 127.0], [17.6, 128.0], [17.7, 128.0], [17.8, 128.0], [17.9, 128.0], [18.0, 128.0], [18.1, 129.0], [18.2, 129.0], [18.3, 129.0], [18.4, 129.0], [18.5, 129.0], [18.6, 130.0], [18.7, 130.0], [18.8, 130.0], [18.9, 131.0], [19.0, 131.0], [19.1, 131.0], [19.2, 131.0], [19.3, 131.0], [19.4, 131.0], [19.5, 132.0], [19.6, 132.0], [19.7, 132.0], [19.8, 132.0], [19.9, 132.0], [20.0, 132.0], [20.1, 132.0], [20.2, 133.0], [20.3, 133.0], [20.4, 133.0], [20.5, 133.0], [20.6, 133.0], [20.7, 134.0], [20.8, 134.0], [20.9, 134.0], [21.0, 134.0], [21.1, 134.0], [21.2, 134.0], [21.3, 135.0], [21.4, 135.0], [21.5, 135.0], [21.6, 135.0], [21.7, 135.0], [21.8, 136.0], [21.9, 136.0], [22.0, 136.0], [22.1, 136.0], [22.2, 136.0], [22.3, 137.0], [22.4, 137.0], [22.5, 137.0], [22.6, 137.0], [22.7, 137.0], [22.8, 137.0], [22.9, 138.0], [23.0, 138.0], [23.1, 138.0], [23.2, 138.0], [23.3, 138.0], [23.4, 138.0], [23.5, 138.0], [23.6, 139.0], [23.7, 139.0], [23.8, 139.0], [23.9, 139.0], [24.0, 139.0], [24.1, 140.0], [24.2, 140.0], [24.3, 140.0], [24.4, 140.0], [24.5, 140.0], [24.6, 140.0], [24.7, 141.0], [24.8, 141.0], [24.9, 141.0], [25.0, 141.0], [25.1, 141.0], [25.2, 141.0], [25.3, 141.0], [25.4, 142.0], [25.5, 142.0], [25.6, 142.0], [25.7, 142.0], [25.8, 142.0], [25.9, 142.0], [26.0, 142.0], [26.1, 143.0], [26.2, 143.0], [26.3, 143.0], [26.4, 143.0], [26.5, 143.0], [26.6, 143.0], [26.7, 143.0], [26.8, 144.0], [26.9, 144.0], [27.0, 144.0], [27.1, 144.0], [27.2, 144.0], [27.3, 144.0], [27.4, 144.0], [27.5, 144.0], [27.6, 144.0], [27.7, 145.0], [27.8, 145.0], [27.9, 145.0], [28.0, 145.0], [28.1, 145.0], [28.2, 145.0], [28.3, 146.0], [28.4, 146.0], [28.5, 146.0], [28.6, 146.0], [28.7, 146.0], [28.8, 147.0], [28.9, 147.0], [29.0, 147.0], [29.1, 147.0], [29.2, 147.0], [29.3, 147.0], [29.4, 147.0], [29.5, 147.0], [29.6, 148.0], [29.7, 148.0], [29.8, 148.0], [29.9, 148.0], [30.0, 148.0], [30.1, 148.0], [30.2, 149.0], [30.3, 149.0], [30.4, 149.0], [30.5, 149.0], [30.6, 149.0], [30.7, 149.0], [30.8, 149.0], [30.9, 150.0], [31.0, 150.0], [31.1, 150.0], [31.2, 150.0], [31.3, 150.0], [31.4, 150.0], [31.5, 150.0], [31.6, 150.0], [31.7, 151.0], [31.8, 151.0], [31.9, 151.0], [32.0, 151.0], [32.1, 151.0], [32.2, 151.0], [32.3, 152.0], [32.4, 152.0], [32.5, 152.0], [32.6, 152.0], [32.7, 152.0], [32.8, 152.0], [32.9, 152.0], [33.0, 153.0], [33.1, 153.0], [33.2, 153.0], [33.3, 153.0], [33.4, 153.0], [33.5, 153.0], [33.6, 153.0], [33.7, 153.0], [33.8, 154.0], [33.9, 154.0], [34.0, 154.0], [34.1, 154.0], [34.2, 154.0], [34.3, 154.0], [34.4, 154.0], [34.5, 155.0], [34.6, 155.0], [34.7, 155.0], [34.8, 155.0], [34.9, 155.0], [35.0, 155.0], [35.1, 155.0], [35.2, 155.0], [35.3, 155.0], [35.4, 156.0], [35.5, 156.0], [35.6, 156.0], [35.7, 156.0], [35.8, 156.0], [35.9, 156.0], [36.0, 156.0], [36.1, 156.0], [36.2, 157.0], [36.3, 157.0], [36.4, 157.0], [36.5, 157.0], [36.6, 157.0], [36.7, 157.0], [36.8, 157.0], [36.9, 157.0], [37.0, 158.0], [37.1, 158.0], [37.2, 158.0], [37.3, 158.0], [37.4, 158.0], [37.5, 158.0], [37.6, 158.0], [37.7, 158.0], [37.8, 159.0], [37.9, 159.0], [38.0, 159.0], [38.1, 159.0], [38.2, 159.0], [38.3, 159.0], [38.4, 159.0], [38.5, 159.0], [38.6, 160.0], [38.7, 160.0], [38.8, 160.0], [38.9, 160.0], [39.0, 160.0], [39.1, 160.0], [39.2, 160.0], [39.3, 161.0], [39.4, 161.0], [39.5, 161.0], [39.6, 161.0], [39.7, 161.0], [39.8, 161.0], [39.9, 161.0], [40.0, 161.0], [40.1, 162.0], [40.2, 162.0], [40.3, 162.0], [40.4, 162.0], [40.5, 162.0], [40.6, 162.0], [40.7, 162.0], [40.8, 163.0], [40.9, 163.0], [41.0, 163.0], [41.1, 163.0], [41.2, 163.0], [41.3, 163.0], [41.4, 164.0], [41.5, 164.0], [41.6, 164.0], [41.7, 164.0], [41.8, 164.0], [41.9, 165.0], [42.0, 165.0], [42.1, 165.0], [42.2, 165.0], [42.3, 165.0], [42.4, 165.0], [42.5, 165.0], [42.6, 165.0], [42.7, 166.0], [42.8, 166.0], [42.9, 166.0], [43.0, 166.0], [43.1, 166.0], [43.2, 166.0], [43.3, 166.0], [43.4, 166.0], [43.5, 166.0], [43.6, 167.0], [43.7, 167.0], [43.8, 167.0], [43.9, 167.0], [44.0, 167.0], [44.1, 167.0], [44.2, 167.0], [44.3, 167.0], [44.4, 167.0], [44.5, 168.0], [44.6, 168.0], [44.7, 168.0], [44.8, 168.0], [44.9, 168.0], [45.0, 168.0], [45.1, 169.0], [45.2, 169.0], [45.3, 169.0], [45.4, 169.0], [45.5, 169.0], [45.6, 169.0], [45.7, 169.0], [45.8, 170.0], [45.9, 170.0], [46.0, 170.0], [46.1, 170.0], [46.2, 170.0], [46.3, 170.0], [46.4, 170.0], [46.5, 170.0], [46.6, 170.0], [46.7, 171.0], [46.8, 171.0], [46.9, 171.0], [47.0, 171.0], [47.1, 171.0], [47.2, 171.0], [47.3, 171.0], [47.4, 172.0], [47.5, 172.0], [47.6, 172.0], [47.7, 172.0], [47.8, 172.0], [47.9, 172.0], [48.0, 172.0], [48.1, 172.0], [48.2, 173.0], [48.3, 173.0], [48.4, 173.0], [48.5, 173.0], [48.6, 173.0], [48.7, 173.0], [48.8, 173.0], [48.9, 174.0], [49.0, 174.0], [49.1, 174.0], [49.2, 174.0], [49.3, 174.0], [49.4, 174.0], [49.5, 174.0], [49.6, 174.0], [49.7, 174.0], [49.8, 175.0], [49.9, 175.0], [50.0, 175.0], [50.1, 175.0], [50.2, 175.0], [50.3, 175.0], [50.4, 175.0], [50.5, 176.0], [50.6, 176.0], [50.7, 176.0], [50.8, 176.0], [50.9, 176.0], [51.0, 176.0], [51.1, 176.0], [51.2, 176.0], [51.3, 177.0], [51.4, 177.0], [51.5, 177.0], [51.6, 177.0], [51.7, 177.0], [51.8, 177.0], [51.9, 177.0], [52.0, 178.0], [52.1, 178.0], [52.2, 178.0], [52.3, 178.0], [52.4, 178.0], [52.5, 178.0], [52.6, 179.0], [52.7, 179.0], [52.8, 179.0], [52.9, 179.0], [53.0, 179.0], [53.1, 179.0], [53.2, 180.0], [53.3, 180.0], [53.4, 180.0], [53.5, 180.0], [53.6, 180.0], [53.7, 180.0], [53.8, 180.0], [53.9, 181.0], [54.0, 181.0], [54.1, 181.0], [54.2, 181.0], [54.3, 181.0], [54.4, 181.0], [54.5, 182.0], [54.6, 182.0], [54.7, 182.0], [54.8, 182.0], [54.9, 182.0], [55.0, 182.0], [55.1, 182.0], [55.2, 182.0], [55.3, 182.0], [55.4, 183.0], [55.5, 183.0], [55.6, 183.0], [55.7, 183.0], [55.8, 183.0], [55.9, 183.0], [56.0, 183.0], [56.1, 184.0], [56.2, 184.0], [56.3, 184.0], [56.4, 184.0], [56.5, 184.0], [56.6, 184.0], [56.7, 184.0], [56.8, 185.0], [56.9, 185.0], [57.0, 185.0], [57.1, 185.0], [57.2, 185.0], [57.3, 185.0], [57.4, 185.0], [57.5, 185.0], [57.6, 186.0], [57.7, 186.0], [57.8, 186.0], [57.9, 186.0], [58.0, 186.0], [58.1, 186.0], [58.2, 186.0], [58.3, 186.0], [58.4, 186.0], [58.5, 187.0], [58.6, 187.0], [58.7, 187.0], [58.8, 187.0], [58.9, 187.0], [59.0, 187.0], [59.1, 187.0], [59.2, 188.0], [59.3, 188.0], [59.4, 188.0], [59.5, 188.0], [59.6, 188.0], [59.7, 188.0], [59.8, 188.0], [59.9, 188.0], [60.0, 188.0], [60.1, 188.0], [60.2, 189.0], [60.3, 189.0], [60.4, 189.0], [60.5, 189.0], [60.6, 189.0], [60.7, 189.0], [60.8, 189.0], [60.9, 189.0], [61.0, 189.0], [61.1, 189.0], [61.2, 190.0], [61.3, 190.0], [61.4, 190.0], [61.5, 190.0], [61.6, 190.0], [61.7, 190.0], [61.8, 190.0], [61.9, 190.0], [62.0, 190.0], [62.1, 191.0], [62.2, 191.0], [62.3, 191.0], [62.4, 191.0], [62.5, 191.0], [62.6, 191.0], [62.7, 191.0], [62.8, 191.0], [62.9, 191.0], [63.0, 191.0], [63.1, 191.0], [63.2, 191.0], [63.3, 192.0], [63.4, 192.0], [63.5, 192.0], [63.6, 192.0], [63.7, 192.0], [63.8, 192.0], [63.9, 192.0], [64.0, 192.0], [64.1, 192.0], [64.2, 192.0], [64.3, 193.0], [64.4, 193.0], [64.5, 193.0], [64.6, 193.0], [64.7, 193.0], [64.8, 193.0], [64.9, 193.0], [65.0, 193.0], [65.1, 193.0], [65.2, 193.0], [65.3, 194.0], [65.4, 194.0], [65.5, 194.0], [65.6, 194.0], [65.7, 194.0], [65.8, 194.0], [65.9, 194.0], [66.0, 194.0], [66.1, 194.0], [66.2, 194.0], [66.3, 194.0], [66.4, 194.0], [66.5, 195.0], [66.6, 195.0], [66.7, 195.0], [66.8, 195.0], [66.9, 195.0], [67.0, 195.0], [67.1, 195.0], [67.2, 195.0], [67.3, 195.0], [67.4, 195.0], [67.5, 195.0], [67.6, 196.0], [67.7, 196.0], [67.8, 196.0], [67.9, 196.0], [68.0, 196.0], [68.1, 196.0], [68.2, 196.0], [68.3, 196.0], [68.4, 196.0], [68.5, 196.0], [68.6, 197.0], [68.7, 197.0], [68.8, 197.0], [68.9, 197.0], [69.0, 197.0], [69.1, 197.0], [69.2, 197.0], [69.3, 197.0], [69.4, 197.0], [69.5, 198.0], [69.6, 198.0], [69.7, 198.0], [69.8, 198.0], [69.9, 198.0], [70.0, 198.0], [70.1, 198.0], [70.2, 198.0], [70.3, 198.0], [70.4, 199.0], [70.5, 199.0], [70.6, 199.0], [70.7, 199.0], [70.8, 199.0], [70.9, 199.0], [71.0, 199.0], [71.1, 199.0], [71.2, 200.0], [71.3, 200.0], [71.4, 200.0], [71.5, 200.0], [71.6, 200.0], [71.7, 200.0], [71.8, 200.0], [71.9, 200.0], [72.0, 200.0], [72.1, 201.0], [72.2, 201.0], [72.3, 201.0], [72.4, 201.0], [72.5, 201.0], [72.6, 201.0], [72.7, 201.0], [72.8, 201.0], [72.9, 202.0], [73.0, 202.0], [73.1, 202.0], [73.2, 202.0], [73.3, 202.0], [73.4, 202.0], [73.5, 202.0], [73.6, 202.0], [73.7, 202.0], [73.8, 203.0], [73.9, 203.0], [74.0, 203.0], [74.1, 203.0], [74.2, 203.0], [74.3, 203.0], [74.4, 203.0], [74.5, 203.0], [74.6, 204.0], [74.7, 204.0], [74.8, 204.0], [74.9, 204.0], [75.0, 204.0], [75.1, 204.0], [75.2, 204.0], [75.3, 205.0], [75.4, 205.0], [75.5, 205.0], [75.6, 205.0], [75.7, 205.0], [75.8, 205.0], [75.9, 205.0], [76.0, 206.0], [76.1, 206.0], [76.2, 206.0], [76.3, 206.0], [76.4, 206.0], [76.5, 206.0], [76.6, 206.0], [76.7, 206.0], [76.8, 207.0], [76.9, 207.0], [77.0, 207.0], [77.1, 207.0], [77.2, 207.0], [77.3, 207.0], [77.4, 208.0], [77.5, 208.0], [77.6, 208.0], [77.7, 208.0], [77.8, 208.0], [77.9, 208.0], [78.0, 208.0], [78.1, 209.0], [78.2, 209.0], [78.3, 209.0], [78.4, 209.0], [78.5, 209.0], [78.6, 209.0], [78.7, 209.0], [78.8, 209.0], [78.9, 209.0], [79.0, 209.0], [79.1, 210.0], [79.2, 210.0], [79.3, 210.0], [79.4, 210.0], [79.5, 210.0], [79.6, 210.0], [79.7, 210.0], [79.8, 211.0], [79.9, 211.0], [80.0, 211.0], [80.1, 211.0], [80.2, 211.0], [80.3, 211.0], [80.4, 212.0], [80.5, 212.0], [80.6, 212.0], [80.7, 212.0], [80.8, 212.0], [80.9, 212.0], [81.0, 212.0], [81.1, 212.0], [81.2, 213.0], [81.3, 213.0], [81.4, 213.0], [81.5, 213.0], [81.6, 213.0], [81.7, 213.0], [81.8, 213.0], [81.9, 214.0], [82.0, 214.0], [82.1, 214.0], [82.2, 214.0], [82.3, 214.0], [82.4, 214.0], [82.5, 215.0], [82.6, 215.0], [82.7, 215.0], [82.8, 215.0], [82.9, 215.0], [83.0, 215.0], [83.1, 215.0], [83.2, 215.0], [83.3, 216.0], [83.4, 216.0], [83.5, 216.0], [83.6, 216.0], [83.7, 216.0], [83.8, 217.0], [83.9, 217.0], [84.0, 217.0], [84.1, 217.0], [84.2, 218.0], [84.3, 218.0], [84.4, 218.0], [84.5, 218.0], [84.6, 218.0], [84.7, 218.0], [84.8, 219.0], [84.9, 219.0], [85.0, 219.0], [85.1, 219.0], [85.2, 219.0], [85.3, 220.0], [85.4, 220.0], [85.5, 220.0], [85.6, 220.0], [85.7, 220.0], [85.8, 221.0], [85.9, 221.0], [86.0, 221.0], [86.1, 221.0], [86.2, 222.0], [86.3, 222.0], [86.4, 222.0], [86.5, 222.0], [86.6, 223.0], [86.7, 223.0], [86.8, 223.0], [86.9, 223.0], [87.0, 224.0], [87.1, 224.0], [87.2, 224.0], [87.3, 224.0], [87.4, 225.0], [87.5, 225.0], [87.6, 225.0], [87.7, 225.0], [87.8, 226.0], [87.9, 226.0], [88.0, 226.0], [88.1, 227.0], [88.2, 227.0], [88.3, 227.0], [88.4, 228.0], [88.5, 228.0], [88.6, 228.0], [88.7, 229.0], [88.8, 229.0], [88.9, 230.0], [89.0, 230.0], [89.1, 231.0], [89.2, 231.0], [89.3, 232.0], [89.4, 232.0], [89.5, 232.0], [89.6, 232.0], [89.7, 233.0], [89.8, 234.0], [89.9, 234.0], [90.0, 234.0], [90.1, 235.0], [90.2, 235.0], [90.3, 235.0], [90.4, 236.0], [90.5, 236.0], [90.6, 236.0], [90.7, 237.0], [90.8, 237.0], [90.9, 237.0], [91.0, 238.0], [91.1, 238.0], [91.2, 238.0], [91.3, 239.0], [91.4, 239.0], [91.5, 240.0], [91.6, 240.0], [91.7, 241.0], [91.8, 241.0], [91.9, 242.0], [92.0, 242.0], [92.1, 243.0], [92.2, 243.0], [92.3, 243.0], [92.4, 244.0], [92.5, 244.0], [92.6, 246.0], [92.7, 246.0], [92.8, 247.0], [92.9, 248.0], [93.0, 248.0], [93.1, 249.0], [93.2, 250.0], [93.3, 250.0], [93.4, 252.0], [93.5, 253.0], [93.6, 253.0], [93.7, 255.0], [93.8, 255.0], [93.9, 256.0], [94.0, 257.0], [94.1, 258.0], [94.2, 259.0], [94.3, 260.0], [94.4, 261.0], [94.5, 263.0], [94.6, 264.0], [94.7, 265.0], [94.8, 266.0], [94.9, 267.0], [95.0, 268.0], [95.1, 269.0], [95.2, 271.0], [95.3, 272.0], [95.4, 273.0], [95.5, 275.0], [95.6, 276.0], [95.7, 277.0], [95.8, 279.0], [95.9, 281.0], [96.0, 283.0], [96.1, 285.0], [96.2, 287.0], [96.3, 288.0], [96.4, 288.0], [96.5, 290.0], [96.6, 291.0], [96.7, 292.0], [96.8, 295.0], [96.9, 298.0], [97.0, 300.0], [97.1, 301.0], [97.2, 303.0], [97.3, 304.0], [97.4, 305.0], [97.5, 306.0], [97.6, 309.0], [97.7, 312.0], [97.8, 314.0], [97.9, 317.0], [98.0, 321.0], [98.1, 324.0], [98.2, 327.0], [98.3, 332.0], [98.4, 335.0], [98.5, 339.0], [98.6, 343.0], [98.7, 345.0], [98.8, 349.0], [98.9, 352.0], [99.0, 359.0], [99.1, 363.0], [99.2, 371.0], [99.3, 382.0], [99.4, 388.0], [99.5, 416.0], [99.6, 428.0], [99.7, 431.0], [99.8, 441.0], [99.9, 454.0]], "isOverall": false, "label": "gateway_rs/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 43.0, "minX": 0.0, "maxY": 5070.0, "series": [{"data": [[0.0, 389.0], [300.0, 189.0], [200.0, 1984.0], [100.0, 5070.0], [400.0, 43.0]], "isOverall": false, "label": "gateway_rs/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7675.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 7675.0, "series": [{"data": [[0.0, 7675.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 197.47218241042327, "minX": 1.68574692E12, "maxY": 197.47218241042327, "series": [{"data": [[1.68574692E12, 197.47218241042327]], "isOverall": false, "label": "with access token", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68574692E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 101.0, "minX": 1.0, "maxY": 240.0, "series": [{"data": [[2.0, 104.0], [4.0, 132.5], [9.0, 149.0], [10.0, 122.0], [12.0, 137.0], [15.0, 144.4], [17.0, 187.5], [18.0, 122.0], [21.0, 159.66666666666666], [24.0, 139.0], [25.0, 123.0], [26.0, 157.5], [27.0, 103.0], [29.0, 145.0], [30.0, 200.0], [32.0, 183.5], [34.0, 147.0], [36.0, 178.0], [39.0, 130.0], [38.0, 147.5], [41.0, 114.0], [40.0, 127.0], [47.0, 108.0], [49.0, 117.14285714285714], [53.0, 101.0], [55.0, 123.0], [54.0, 140.0], [60.0, 112.16666666666667], [67.0, 181.66666666666666], [65.0, 141.0], [69.0, 177.0], [68.0, 193.0], [75.0, 168.0], [79.0, 161.0], [76.0, 153.66666666666666], [82.0, 140.33333333333334], [89.0, 161.57142857142856], [95.0, 143.0], [92.0, 195.0], [102.0, 198.0], [101.0, 184.0], [107.0, 173.5], [105.0, 199.0], [109.0, 165.0], [108.0, 182.99999999999997], [113.0, 162.25], [118.0, 170.5], [123.0, 191.0], [121.0, 144.5], [127.0, 185.0], [125.0, 170.0], [124.0, 169.66666666666669], [135.0, 240.0], [131.0, 189.25], [142.0, 205.0], [140.0, 222.0], [139.0, 194.5], [136.0, 235.0], [149.0, 200.66666666666666], [147.0, 215.0], [146.0, 209.5], [144.0, 186.0], [154.0, 197.5], [175.0, 208.25], [171.0, 221.0], [170.0, 215.5], [169.0, 222.5], [168.0, 228.0], [182.0, 208.0], [180.0, 225.66666666666666], [178.0, 180.0], [177.0, 203.0], [176.0, 209.83333333333331], [190.0, 213.0], [189.0, 215.0], [188.0, 212.0], [187.0, 213.0], [185.0, 212.0], [184.0, 214.0], [199.0, 219.0], [198.0, 213.44444444444443], [195.0, 211.16666666666669], [193.0, 213.0], [192.0, 217.0], [200.0, 176.70598497047777], [1.0, 123.0]], "isOverall": false, "label": "gateway_rs/helloauth", "isController": false}, {"data": [[197.47205211726384, 176.73355048859938]], "isOverall": false, "label": "gateway_rs/helloauth-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 37991.25, "minX": 1.68574692E12, "maxY": 164756.66666666666, "series": [{"data": [[1.68574692E12, 37991.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68574692E12, 164756.66666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68574692E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 176.73355048859938, "minX": 1.68574692E12, "maxY": 176.73355048859938, "series": [{"data": [[1.68574692E12, 176.73355048859938]], "isOverall": false, "label": "gateway_rs/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68574692E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 176.69524429967427, "minX": 1.68574692E12, "maxY": 176.69524429967427, "series": [{"data": [[1.68574692E12, 176.69524429967427]], "isOverall": false, "label": "gateway_rs/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68574692E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 4.9583061889250715, "minX": 1.68574692E12, "maxY": 4.9583061889250715, "series": [{"data": [[1.68574692E12, 4.9583061889250715]], "isOverall": false, "label": "gateway_rs/helloauth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68574692E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.68574692E12, "maxY": 487.0, "series": [{"data": [[1.68574692E12, 487.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68574692E12, 9.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68574692E12, 234.40000000000055]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68574692E12, 359.2399999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68574692E12, 175.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68574692E12, 268.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68574692E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 140.0, "minX": 223.0, "maxY": 228.0, "series": [{"data": [[1087.0, 172.0], [579.0, 228.0], [1179.0, 167.0], [1324.0, 144.0], [1354.0, 140.0], [223.0, 185.0], [949.0, 206.0], [980.0, 196.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1354.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 140.0, "minX": 223.0, "maxY": 225.0, "series": [{"data": [[1087.0, 172.0], [579.0, 225.0], [1179.0, 167.0], [1324.0, 144.0], [1354.0, 140.0], [223.0, 185.0], [949.0, 206.0], [980.0, 196.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1354.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 127.91666666666667, "minX": 1.68574692E12, "maxY": 127.91666666666667, "series": [{"data": [[1.68574692E12, 127.91666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68574692E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 127.91666666666667, "minX": 1.68574692E12, "maxY": 127.91666666666667, "series": [{"data": [[1.68574692E12, 127.91666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68574692E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 127.91666666666667, "minX": 1.68574692E12, "maxY": 127.91666666666667, "series": [{"data": [[1.68574692E12, 127.91666666666667]], "isOverall": false, "label": "gateway_rs/helloauth-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68574692E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 127.91666666666667, "minX": 1.68574692E12, "maxY": 127.91666666666667, "series": [{"data": [[1.68574692E12, 127.91666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68574692E12, "title": "Total Transactions Per Second"}},
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

