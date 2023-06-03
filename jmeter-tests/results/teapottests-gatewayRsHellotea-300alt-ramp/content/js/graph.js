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
        data: {"result": {"minY": 103.0, "minX": 0.0, "maxY": 1781.0, "series": [{"data": [[0.0, 103.0], [0.1, 120.0], [0.2, 124.0], [0.3, 133.0], [0.4, 142.0], [0.5, 154.0], [0.6, 162.0], [0.7, 169.0], [0.8, 170.0], [0.9, 172.0], [1.0, 175.0], [1.1, 177.0], [1.2, 177.0], [1.3, 181.0], [1.4, 183.0], [1.5, 185.0], [1.6, 186.0], [1.7, 188.0], [1.8, 188.0], [1.9, 192.0], [2.0, 192.0], [2.1, 193.0], [2.2, 194.0], [2.3, 195.0], [2.4, 199.0], [2.5, 200.0], [2.6, 202.0], [2.7, 202.0], [2.8, 204.0], [2.9, 205.0], [3.0, 205.0], [3.1, 210.0], [3.2, 210.0], [3.3, 216.0], [3.4, 218.0], [3.5, 221.0], [3.6, 221.0], [3.7, 223.0], [3.8, 225.0], [3.9, 225.0], [4.0, 226.0], [4.1, 228.0], [4.2, 231.0], [4.3, 231.0], [4.4, 232.0], [4.5, 233.0], [4.6, 234.0], [4.7, 236.0], [4.8, 238.0], [4.9, 238.0], [5.0, 239.0], [5.1, 240.0], [5.2, 240.0], [5.3, 242.0], [5.4, 243.0], [5.5, 244.0], [5.6, 245.0], [5.7, 245.0], [5.8, 248.0], [5.9, 248.0], [6.0, 249.0], [6.1, 250.0], [6.2, 253.0], [6.3, 254.0], [6.4, 254.0], [6.5, 255.0], [6.6, 255.0], [6.7, 256.0], [6.8, 258.0], [6.9, 260.0], [7.0, 261.0], [7.1, 264.0], [7.2, 266.0], [7.3, 266.0], [7.4, 267.0], [7.5, 267.0], [7.6, 268.0], [7.7, 269.0], [7.8, 269.0], [7.9, 270.0], [8.0, 271.0], [8.1, 272.0], [8.2, 273.0], [8.3, 274.0], [8.4, 275.0], [8.5, 275.0], [8.6, 276.0], [8.7, 277.0], [8.8, 277.0], [8.9, 278.0], [9.0, 280.0], [9.1, 280.0], [9.2, 281.0], [9.3, 281.0], [9.4, 282.0], [9.5, 283.0], [9.6, 284.0], [9.7, 286.0], [9.8, 288.0], [9.9, 288.0], [10.0, 289.0], [10.1, 290.0], [10.2, 291.0], [10.3, 292.0], [10.4, 293.0], [10.5, 294.0], [10.6, 295.0], [10.7, 295.0], [10.8, 296.0], [10.9, 296.0], [11.0, 296.0], [11.1, 299.0], [11.2, 300.0], [11.3, 301.0], [11.4, 301.0], [11.5, 301.0], [11.6, 303.0], [11.7, 305.0], [11.8, 305.0], [11.9, 306.0], [12.0, 307.0], [12.1, 308.0], [12.2, 308.0], [12.3, 308.0], [12.4, 309.0], [12.5, 310.0], [12.6, 311.0], [12.7, 311.0], [12.8, 311.0], [12.9, 311.0], [13.0, 312.0], [13.1, 312.0], [13.2, 312.0], [13.3, 313.0], [13.4, 315.0], [13.5, 315.0], [13.6, 315.0], [13.7, 316.0], [13.8, 316.0], [13.9, 317.0], [14.0, 317.0], [14.1, 318.0], [14.2, 318.0], [14.3, 318.0], [14.4, 318.0], [14.5, 319.0], [14.6, 320.0], [14.7, 320.0], [14.8, 320.0], [14.9, 321.0], [15.0, 321.0], [15.1, 321.0], [15.2, 322.0], [15.3, 323.0], [15.4, 323.0], [15.5, 324.0], [15.6, 324.0], [15.7, 324.0], [15.8, 325.0], [15.9, 326.0], [16.0, 327.0], [16.1, 327.0], [16.2, 329.0], [16.3, 330.0], [16.4, 330.0], [16.5, 331.0], [16.6, 331.0], [16.7, 332.0], [16.8, 332.0], [16.9, 333.0], [17.0, 333.0], [17.1, 333.0], [17.2, 334.0], [17.3, 334.0], [17.4, 335.0], [17.5, 335.0], [17.6, 335.0], [17.7, 336.0], [17.8, 337.0], [17.9, 338.0], [18.0, 338.0], [18.1, 339.0], [18.2, 341.0], [18.3, 341.0], [18.4, 341.0], [18.5, 342.0], [18.6, 343.0], [18.7, 344.0], [18.8, 345.0], [18.9, 346.0], [19.0, 347.0], [19.1, 347.0], [19.2, 350.0], [19.3, 350.0], [19.4, 350.0], [19.5, 351.0], [19.6, 352.0], [19.7, 353.0], [19.8, 354.0], [19.9, 355.0], [20.0, 355.0], [20.1, 356.0], [20.2, 357.0], [20.3, 359.0], [20.4, 359.0], [20.5, 360.0], [20.6, 360.0], [20.7, 361.0], [20.8, 361.0], [20.9, 362.0], [21.0, 362.0], [21.1, 363.0], [21.2, 364.0], [21.3, 365.0], [21.4, 366.0], [21.5, 366.0], [21.6, 367.0], [21.7, 367.0], [21.8, 368.0], [21.9, 369.0], [22.0, 369.0], [22.1, 370.0], [22.2, 370.0], [22.3, 370.0], [22.4, 370.0], [22.5, 371.0], [22.6, 372.0], [22.7, 372.0], [22.8, 373.0], [22.9, 373.0], [23.0, 374.0], [23.1, 375.0], [23.2, 376.0], [23.3, 377.0], [23.4, 377.0], [23.5, 378.0], [23.6, 379.0], [23.7, 379.0], [23.8, 380.0], [23.9, 380.0], [24.0, 382.0], [24.1, 382.0], [24.2, 384.0], [24.3, 385.0], [24.4, 386.0], [24.5, 386.0], [24.6, 387.0], [24.7, 387.0], [24.8, 389.0], [24.9, 390.0], [25.0, 391.0], [25.1, 392.0], [25.2, 393.0], [25.3, 393.0], [25.4, 394.0], [25.5, 395.0], [25.6, 396.0], [25.7, 396.0], [25.8, 397.0], [25.9, 397.0], [26.0, 398.0], [26.1, 399.0], [26.2, 399.0], [26.3, 400.0], [26.4, 400.0], [26.5, 401.0], [26.6, 401.0], [26.7, 401.0], [26.8, 402.0], [26.9, 402.0], [27.0, 403.0], [27.1, 404.0], [27.2, 404.0], [27.3, 404.0], [27.4, 405.0], [27.5, 406.0], [27.6, 406.0], [27.7, 407.0], [27.8, 408.0], [27.9, 408.0], [28.0, 410.0], [28.1, 410.0], [28.2, 412.0], [28.3, 413.0], [28.4, 415.0], [28.5, 415.0], [28.6, 416.0], [28.7, 416.0], [28.8, 416.0], [28.9, 416.0], [29.0, 417.0], [29.1, 417.0], [29.2, 418.0], [29.3, 418.0], [29.4, 419.0], [29.5, 420.0], [29.6, 421.0], [29.7, 421.0], [29.8, 421.0], [29.9, 422.0], [30.0, 423.0], [30.1, 423.0], [30.2, 424.0], [30.3, 425.0], [30.4, 425.0], [30.5, 425.0], [30.6, 425.0], [30.7, 426.0], [30.8, 427.0], [30.9, 427.0], [31.0, 428.0], [31.1, 428.0], [31.2, 429.0], [31.3, 430.0], [31.4, 432.0], [31.5, 432.0], [31.6, 433.0], [31.7, 434.0], [31.8, 434.0], [31.9, 435.0], [32.0, 437.0], [32.1, 437.0], [32.2, 438.0], [32.3, 438.0], [32.4, 439.0], [32.5, 440.0], [32.6, 440.0], [32.7, 441.0], [32.8, 442.0], [32.9, 443.0], [33.0, 443.0], [33.1, 443.0], [33.2, 444.0], [33.3, 444.0], [33.4, 445.0], [33.5, 445.0], [33.6, 446.0], [33.7, 447.0], [33.8, 447.0], [33.9, 448.0], [34.0, 448.0], [34.1, 449.0], [34.2, 450.0], [34.3, 450.0], [34.4, 450.0], [34.5, 452.0], [34.6, 452.0], [34.7, 453.0], [34.8, 453.0], [34.9, 454.0], [35.0, 454.0], [35.1, 456.0], [35.2, 456.0], [35.3, 458.0], [35.4, 458.0], [35.5, 460.0], [35.6, 460.0], [35.7, 461.0], [35.8, 461.0], [35.9, 461.0], [36.0, 462.0], [36.1, 462.0], [36.2, 463.0], [36.3, 463.0], [36.4, 464.0], [36.5, 465.0], [36.6, 466.0], [36.7, 467.0], [36.8, 467.0], [36.9, 468.0], [37.0, 468.0], [37.1, 469.0], [37.2, 469.0], [37.3, 470.0], [37.4, 470.0], [37.5, 470.0], [37.6, 471.0], [37.7, 472.0], [37.8, 473.0], [37.9, 473.0], [38.0, 474.0], [38.1, 474.0], [38.2, 474.0], [38.3, 475.0], [38.4, 475.0], [38.5, 477.0], [38.6, 477.0], [38.7, 477.0], [38.8, 478.0], [38.9, 479.0], [39.0, 480.0], [39.1, 480.0], [39.2, 481.0], [39.3, 481.0], [39.4, 481.0], [39.5, 482.0], [39.6, 483.0], [39.7, 483.0], [39.8, 484.0], [39.9, 485.0], [40.0, 486.0], [40.1, 487.0], [40.2, 487.0], [40.3, 488.0], [40.4, 488.0], [40.5, 489.0], [40.6, 489.0], [40.7, 489.0], [40.8, 490.0], [40.9, 490.0], [41.0, 490.0], [41.1, 491.0], [41.2, 491.0], [41.3, 491.0], [41.4, 492.0], [41.5, 492.0], [41.6, 492.0], [41.7, 492.0], [41.8, 493.0], [41.9, 493.0], [42.0, 493.0], [42.1, 494.0], [42.2, 494.0], [42.3, 495.0], [42.4, 496.0], [42.5, 496.0], [42.6, 497.0], [42.7, 497.0], [42.8, 498.0], [42.9, 498.0], [43.0, 498.0], [43.1, 499.0], [43.2, 499.0], [43.3, 500.0], [43.4, 500.0], [43.5, 500.0], [43.6, 501.0], [43.7, 501.0], [43.8, 502.0], [43.9, 502.0], [44.0, 503.0], [44.1, 504.0], [44.2, 505.0], [44.3, 505.0], [44.4, 505.0], [44.5, 507.0], [44.6, 507.0], [44.7, 508.0], [44.8, 508.0], [44.9, 508.0], [45.0, 509.0], [45.1, 509.0], [45.2, 509.0], [45.3, 510.0], [45.4, 510.0], [45.5, 510.0], [45.6, 511.0], [45.7, 512.0], [45.8, 512.0], [45.9, 513.0], [46.0, 513.0], [46.1, 513.0], [46.2, 514.0], [46.3, 514.0], [46.4, 515.0], [46.5, 515.0], [46.6, 515.0], [46.7, 516.0], [46.8, 516.0], [46.9, 517.0], [47.0, 518.0], [47.1, 519.0], [47.2, 519.0], [47.3, 519.0], [47.4, 521.0], [47.5, 521.0], [47.6, 522.0], [47.7, 522.0], [47.8, 522.0], [47.9, 522.0], [48.0, 523.0], [48.1, 523.0], [48.2, 523.0], [48.3, 524.0], [48.4, 524.0], [48.5, 524.0], [48.6, 525.0], [48.7, 526.0], [48.8, 526.0], [48.9, 527.0], [49.0, 528.0], [49.1, 529.0], [49.2, 529.0], [49.3, 530.0], [49.4, 530.0], [49.5, 531.0], [49.6, 532.0], [49.7, 534.0], [49.8, 535.0], [49.9, 535.0], [50.0, 536.0], [50.1, 538.0], [50.2, 538.0], [50.3, 539.0], [50.4, 540.0], [50.5, 541.0], [50.6, 541.0], [50.7, 541.0], [50.8, 542.0], [50.9, 543.0], [51.0, 543.0], [51.1, 544.0], [51.2, 545.0], [51.3, 545.0], [51.4, 546.0], [51.5, 546.0], [51.6, 547.0], [51.7, 547.0], [51.8, 547.0], [51.9, 547.0], [52.0, 548.0], [52.1, 548.0], [52.2, 549.0], [52.3, 549.0], [52.4, 550.0], [52.5, 550.0], [52.6, 551.0], [52.7, 551.0], [52.8, 551.0], [52.9, 551.0], [53.0, 552.0], [53.1, 553.0], [53.2, 553.0], [53.3, 554.0], [53.4, 554.0], [53.5, 554.0], [53.6, 554.0], [53.7, 555.0], [53.8, 556.0], [53.9, 557.0], [54.0, 557.0], [54.1, 558.0], [54.2, 558.0], [54.3, 558.0], [54.4, 559.0], [54.5, 562.0], [54.6, 562.0], [54.7, 563.0], [54.8, 565.0], [54.9, 565.0], [55.0, 566.0], [55.1, 568.0], [55.2, 568.0], [55.3, 569.0], [55.4, 569.0], [55.5, 571.0], [55.6, 571.0], [55.7, 572.0], [55.8, 572.0], [55.9, 573.0], [56.0, 573.0], [56.1, 574.0], [56.2, 575.0], [56.3, 575.0], [56.4, 575.0], [56.5, 576.0], [56.6, 577.0], [56.7, 578.0], [56.8, 578.0], [56.9, 579.0], [57.0, 579.0], [57.1, 580.0], [57.2, 580.0], [57.3, 581.0], [57.4, 582.0], [57.5, 583.0], [57.6, 583.0], [57.7, 584.0], [57.8, 585.0], [57.9, 585.0], [58.0, 586.0], [58.1, 587.0], [58.2, 588.0], [58.3, 588.0], [58.4, 589.0], [58.5, 590.0], [58.6, 590.0], [58.7, 590.0], [58.8, 591.0], [58.9, 591.0], [59.0, 592.0], [59.1, 592.0], [59.2, 593.0], [59.3, 594.0], [59.4, 594.0], [59.5, 595.0], [59.6, 596.0], [59.7, 596.0], [59.8, 596.0], [59.9, 598.0], [60.0, 599.0], [60.1, 600.0], [60.2, 600.0], [60.3, 601.0], [60.4, 602.0], [60.5, 602.0], [60.6, 603.0], [60.7, 603.0], [60.8, 605.0], [60.9, 605.0], [61.0, 606.0], [61.1, 606.0], [61.2, 608.0], [61.3, 609.0], [61.4, 609.0], [61.5, 610.0], [61.6, 610.0], [61.7, 610.0], [61.8, 611.0], [61.9, 611.0], [62.0, 611.0], [62.1, 612.0], [62.2, 613.0], [62.3, 613.0], [62.4, 616.0], [62.5, 617.0], [62.6, 617.0], [62.7, 618.0], [62.8, 618.0], [62.9, 619.0], [63.0, 619.0], [63.1, 619.0], [63.2, 621.0], [63.3, 621.0], [63.4, 622.0], [63.5, 623.0], [63.6, 625.0], [63.7, 626.0], [63.8, 627.0], [63.9, 628.0], [64.0, 629.0], [64.1, 629.0], [64.2, 629.0], [64.3, 632.0], [64.4, 633.0], [64.5, 633.0], [64.6, 634.0], [64.7, 634.0], [64.8, 635.0], [64.9, 636.0], [65.0, 637.0], [65.1, 638.0], [65.2, 639.0], [65.3, 641.0], [65.4, 641.0], [65.5, 641.0], [65.6, 643.0], [65.7, 644.0], [65.8, 644.0], [65.9, 645.0], [66.0, 646.0], [66.1, 647.0], [66.2, 648.0], [66.3, 648.0], [66.4, 649.0], [66.5, 650.0], [66.6, 650.0], [66.7, 651.0], [66.8, 652.0], [66.9, 652.0], [67.0, 654.0], [67.1, 655.0], [67.2, 655.0], [67.3, 655.0], [67.4, 655.0], [67.5, 656.0], [67.6, 656.0], [67.7, 657.0], [67.8, 657.0], [67.9, 658.0], [68.0, 659.0], [68.1, 659.0], [68.2, 661.0], [68.3, 662.0], [68.4, 663.0], [68.5, 664.0], [68.6, 665.0], [68.7, 666.0], [68.8, 667.0], [68.9, 669.0], [69.0, 670.0], [69.1, 671.0], [69.2, 671.0], [69.3, 672.0], [69.4, 674.0], [69.5, 675.0], [69.6, 675.0], [69.7, 677.0], [69.8, 678.0], [69.9, 680.0], [70.0, 681.0], [70.1, 682.0], [70.2, 684.0], [70.3, 686.0], [70.4, 688.0], [70.5, 689.0], [70.6, 691.0], [70.7, 692.0], [70.8, 693.0], [70.9, 693.0], [71.0, 695.0], [71.1, 696.0], [71.2, 696.0], [71.3, 698.0], [71.4, 698.0], [71.5, 698.0], [71.6, 700.0], [71.7, 700.0], [71.8, 700.0], [71.9, 702.0], [72.0, 702.0], [72.1, 703.0], [72.2, 703.0], [72.3, 704.0], [72.4, 705.0], [72.5, 705.0], [72.6, 706.0], [72.7, 706.0], [72.8, 707.0], [72.9, 709.0], [73.0, 710.0], [73.1, 711.0], [73.2, 711.0], [73.3, 711.0], [73.4, 712.0], [73.5, 712.0], [73.6, 712.0], [73.7, 713.0], [73.8, 714.0], [73.9, 714.0], [74.0, 715.0], [74.1, 716.0], [74.2, 716.0], [74.3, 717.0], [74.4, 719.0], [74.5, 720.0], [74.6, 721.0], [74.7, 721.0], [74.8, 721.0], [74.9, 723.0], [75.0, 725.0], [75.1, 726.0], [75.2, 726.0], [75.3, 727.0], [75.4, 729.0], [75.5, 729.0], [75.6, 730.0], [75.7, 730.0], [75.8, 731.0], [75.9, 731.0], [76.0, 734.0], [76.1, 735.0], [76.2, 737.0], [76.3, 738.0], [76.4, 740.0], [76.5, 740.0], [76.6, 741.0], [76.7, 743.0], [76.8, 744.0], [76.9, 745.0], [77.0, 746.0], [77.1, 747.0], [77.2, 748.0], [77.3, 748.0], [77.4, 749.0], [77.5, 751.0], [77.6, 752.0], [77.7, 752.0], [77.8, 753.0], [77.9, 755.0], [78.0, 755.0], [78.1, 759.0], [78.2, 761.0], [78.3, 763.0], [78.4, 763.0], [78.5, 764.0], [78.6, 765.0], [78.7, 765.0], [78.8, 766.0], [78.9, 767.0], [79.0, 768.0], [79.1, 770.0], [79.2, 772.0], [79.3, 773.0], [79.4, 775.0], [79.5, 776.0], [79.6, 778.0], [79.7, 778.0], [79.8, 780.0], [79.9, 780.0], [80.0, 781.0], [80.1, 785.0], [80.2, 787.0], [80.3, 790.0], [80.4, 793.0], [80.5, 794.0], [80.6, 796.0], [80.7, 797.0], [80.8, 800.0], [80.9, 802.0], [81.0, 804.0], [81.1, 806.0], [81.2, 807.0], [81.3, 809.0], [81.4, 811.0], [81.5, 812.0], [81.6, 814.0], [81.7, 817.0], [81.8, 820.0], [81.9, 821.0], [82.0, 822.0], [82.1, 825.0], [82.2, 825.0], [82.3, 827.0], [82.4, 828.0], [82.5, 828.0], [82.6, 830.0], [82.7, 830.0], [82.8, 833.0], [82.9, 834.0], [83.0, 836.0], [83.1, 837.0], [83.2, 837.0], [83.3, 838.0], [83.4, 842.0], [83.5, 845.0], [83.6, 846.0], [83.7, 846.0], [83.8, 849.0], [83.9, 853.0], [84.0, 854.0], [84.1, 855.0], [84.2, 856.0], [84.3, 858.0], [84.4, 858.0], [84.5, 861.0], [84.6, 861.0], [84.7, 861.0], [84.8, 866.0], [84.9, 867.0], [85.0, 869.0], [85.1, 872.0], [85.2, 876.0], [85.3, 876.0], [85.4, 879.0], [85.5, 886.0], [85.6, 888.0], [85.7, 888.0], [85.8, 888.0], [85.9, 891.0], [86.0, 893.0], [86.1, 894.0], [86.2, 899.0], [86.3, 899.0], [86.4, 901.0], [86.5, 903.0], [86.6, 905.0], [86.7, 910.0], [86.8, 912.0], [86.9, 917.0], [87.0, 918.0], [87.1, 923.0], [87.2, 925.0], [87.3, 926.0], [87.4, 930.0], [87.5, 931.0], [87.6, 936.0], [87.7, 940.0], [87.8, 941.0], [87.9, 944.0], [88.0, 946.0], [88.1, 948.0], [88.2, 949.0], [88.3, 949.0], [88.4, 950.0], [88.5, 951.0], [88.6, 951.0], [88.7, 957.0], [88.8, 960.0], [88.9, 964.0], [89.0, 967.0], [89.1, 969.0], [89.2, 971.0], [89.3, 973.0], [89.4, 975.0], [89.5, 978.0], [89.6, 981.0], [89.7, 987.0], [89.8, 996.0], [89.9, 999.0], [90.0, 1008.0], [90.1, 1009.0], [90.2, 1011.0], [90.3, 1013.0], [90.4, 1016.0], [90.5, 1019.0], [90.6, 1021.0], [90.7, 1022.0], [90.8, 1022.0], [90.9, 1024.0], [91.0, 1027.0], [91.1, 1035.0], [91.2, 1036.0], [91.3, 1040.0], [91.4, 1044.0], [91.5, 1045.0], [91.6, 1048.0], [91.7, 1051.0], [91.8, 1055.0], [91.9, 1058.0], [92.0, 1058.0], [92.1, 1060.0], [92.2, 1063.0], [92.3, 1064.0], [92.4, 1065.0], [92.5, 1066.0], [92.6, 1067.0], [92.7, 1069.0], [92.8, 1069.0], [92.9, 1071.0], [93.0, 1072.0], [93.1, 1074.0], [93.2, 1075.0], [93.3, 1078.0], [93.4, 1078.0], [93.5, 1080.0], [93.6, 1083.0], [93.7, 1084.0], [93.8, 1085.0], [93.9, 1090.0], [94.0, 1091.0], [94.1, 1097.0], [94.2, 1100.0], [94.3, 1109.0], [94.4, 1114.0], [94.5, 1117.0], [94.6, 1125.0], [94.7, 1132.0], [94.8, 1138.0], [94.9, 1140.0], [95.0, 1148.0], [95.1, 1151.0], [95.2, 1161.0], [95.3, 1175.0], [95.4, 1176.0], [95.5, 1176.0], [95.6, 1180.0], [95.7, 1190.0], [95.8, 1193.0], [95.9, 1195.0], [96.0, 1197.0], [96.1, 1222.0], [96.2, 1230.0], [96.3, 1246.0], [96.4, 1250.0], [96.5, 1252.0], [96.6, 1253.0], [96.7, 1263.0], [96.8, 1266.0], [96.9, 1270.0], [97.0, 1298.0], [97.1, 1305.0], [97.2, 1306.0], [97.3, 1309.0], [97.4, 1309.0], [97.5, 1314.0], [97.6, 1319.0], [97.7, 1320.0], [97.8, 1322.0], [97.9, 1323.0], [98.0, 1324.0], [98.1, 1327.0], [98.2, 1332.0], [98.3, 1335.0], [98.4, 1338.0], [98.5, 1343.0], [98.6, 1345.0], [98.7, 1348.0], [98.8, 1350.0], [98.9, 1356.0], [99.0, 1367.0], [99.1, 1380.0], [99.2, 1398.0], [99.3, 1409.0], [99.4, 1424.0], [99.5, 1484.0], [99.6, 1501.0], [99.7, 1570.0], [99.8, 1597.0], [99.9, 1660.0], [100.0, 1781.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 346.0, "series": [{"data": [[600.0, 235.0], [700.0, 188.0], [800.0, 114.0], [200.0, 177.0], [900.0, 72.0], [1000.0, 86.0], [1100.0, 38.0], [300.0, 308.0], [1200.0, 20.0], [1300.0, 45.0], [1400.0, 7.0], [1500.0, 5.0], [100.0, 50.0], [400.0, 346.0], [1600.0, 3.0], [1700.0, 1.0], [500.0, 341.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1140.0, "series": [{"data": [[0.0, 887.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1140.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 9.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 278.2779960707271, "minX": 1.68580992E12, "maxY": 278.2779960707271, "series": [{"data": [[1.68580992E12, 278.2779960707271]], "isOverall": false, "label": "with access token", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68580992E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 170.0, "minX": 1.0, "maxY": 851.0, "series": [{"data": [[2.0, 270.0], [6.0, 296.0], [7.0, 696.5], [10.0, 555.2], [13.0, 500.0], [14.0, 589.0], [16.0, 608.0], [17.0, 634.0], [22.0, 730.0], [24.0, 454.0], [26.0, 480.0], [28.0, 538.1666666666666], [30.0, 504.5], [33.0, 573.0], [32.0, 471.0], [37.0, 685.0], [36.0, 602.0], [38.0, 622.3333333333334], [41.0, 480.0], [43.0, 489.0], [42.0, 648.0], [45.0, 635.0], [44.0, 489.0], [46.0, 734.3333333333334], [49.0, 646.0], [48.0, 693.0], [51.0, 446.0], [52.0, 747.0], [55.0, 738.5], [58.0, 371.0], [60.0, 701.0], [62.0, 851.0], [65.0, 656.25], [71.0, 528.6666666666666], [68.0, 675.3333333333334], [75.0, 456.0], [77.0, 447.0], [82.0, 686.0], [81.0, 569.0], [85.0, 633.888888888889], [95.0, 707.0], [94.0, 476.4], [92.0, 345.0], [97.0, 476.0], [103.0, 730.0], [102.0, 418.0], [100.0, 551.75], [106.0, 548.0], [109.0, 420.0], [108.0, 566.5], [113.0, 571.0], [112.0, 611.0], [119.0, 731.0], [118.0, 625.5], [117.0, 325.5], [116.0, 239.0], [122.0, 458.1666666666667], [120.0, 596.0], [127.0, 692.3333333333334], [126.0, 438.0], [124.0, 547.0], [135.0, 517.5], [134.0, 712.0], [133.0, 656.0], [130.0, 700.0], [129.0, 525.5], [140.0, 500.6], [136.0, 712.0], [151.0, 444.0], [144.0, 534.75], [158.0, 481.5], [157.0, 497.5], [156.0, 560.6666666666666], [155.0, 524.0], [165.0, 661.0], [161.0, 711.0], [160.0, 536.8571428571429], [174.0, 663.0], [173.0, 705.0], [172.0, 544.0], [170.0, 431.5], [183.0, 598.5], [181.0, 320.0], [179.0, 443.2], [191.0, 521.3333333333334], [188.0, 327.0], [185.0, 211.0], [184.0, 528.0], [199.0, 381.8], [194.0, 261.0], [192.0, 170.0], [206.0, 613.0], [205.0, 654.5], [203.0, 649.0], [202.0, 405.5], [200.0, 334.0], [214.0, 377.0], [213.0, 355.0], [222.0, 545.6666666666666], [219.0, 629.0], [218.0, 644.0], [217.0, 320.0], [229.0, 270.0], [228.0, 281.5], [226.0, 379.0], [225.0, 505.0], [239.0, 542.0], [238.0, 431.0], [237.0, 512.0], [236.0, 528.0], [232.0, 486.3333333333333], [247.0, 261.0], [246.0, 436.3333333333333], [244.0, 404.0], [242.0, 324.5], [240.0, 416.0], [253.0, 488.0], [252.0, 542.6666666666666], [250.0, 403.0], [249.0, 583.0], [269.0, 395.25], [265.0, 686.5], [263.0, 624.0], [257.0, 333.0], [256.0, 458.3333333333333], [286.0, 493.0], [287.0, 370.0], [285.0, 376.99999999999994], [284.0, 522.0], [282.0, 286.0], [281.0, 499.0], [280.0, 282.5], [279.0, 401.0], [278.0, 267.0], [276.0, 348.0], [300.0, 606.2553561088582], [299.0, 382.0], [297.0, 494.0], [296.0, 385.8571428571429], [292.0, 401.25], [289.0, 451.3333333333333], [288.0, 200.0], [1.0, 625.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}, {"data": [[278.2779960707271, 590.9228880157159]], "isOverall": false, "label": "gateway_rs/hellotea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 11299.8, "minX": 1.68580992E12, "maxY": 43807.933333333334, "series": [{"data": [[1.68580992E12, 11299.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68580992E12, 43807.933333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68580992E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 590.9228880157159, "minX": 1.68580992E12, "maxY": 590.9228880157159, "series": [{"data": [[1.68580992E12, 590.9228880157159]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68580992E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 590.9002946954819, "minX": 1.68580992E12, "maxY": 590.9002946954819, "series": [{"data": [[1.68580992E12, 590.9002946954819]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68580992E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 10.42730844793714, "minX": 1.68580992E12, "maxY": 10.42730844793714, "series": [{"data": [[1.68580992E12, 10.42730844793714]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68580992E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 103.0, "minX": 1.68580992E12, "maxY": 1781.0, "series": [{"data": [[1.68580992E12, 1781.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68580992E12, 103.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68580992E12, 1008.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68580992E12, 1373.2999999999988]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68580992E12, 536.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68580992E12, 1148.2999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68580992E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 441.5, "minX": 2.0, "maxY": 923.0, "series": [{"data": [[2.0, 447.5], [647.0, 534.0], [191.0, 923.0], [752.0, 441.5], [444.0, 654.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 752.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 441.5, "minX": 2.0, "maxY": 923.0, "series": [{"data": [[2.0, 447.5], [647.0, 534.0], [191.0, 923.0], [752.0, 441.5], [444.0, 654.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 752.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 33.93333333333333, "minX": 1.68580992E12, "maxY": 33.93333333333333, "series": [{"data": [[1.68580992E12, 33.93333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68580992E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 33.93333333333333, "minX": 1.68580992E12, "maxY": 33.93333333333333, "series": [{"data": [[1.68580992E12, 33.93333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68580992E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 33.93333333333333, "minX": 1.68580992E12, "maxY": 33.93333333333333, "series": [{"data": [[1.68580992E12, 33.93333333333333]], "isOverall": false, "label": "gateway_rs/hellotea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68580992E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 33.93333333333333, "minX": 1.68580992E12, "maxY": 33.93333333333333, "series": [{"data": [[1.68580992E12, 33.93333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68580992E12, "title": "Total Transactions Per Second"}},
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

