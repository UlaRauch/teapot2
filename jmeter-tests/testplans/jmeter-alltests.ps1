$testplan = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\teapot2-plan.jmx"

$gateway0helloauth = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_0_helloauth.jmx"
$gatewayClhelloauth = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_cl_helloauth.jmx"
$gatewayRshelloauth = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_rs_helloauth.jmx"

pfade nochamal neu!

$outputfile = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\results\teapottests-"
$outputHTML = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\results\teapottests-"

$jmeterPath = "C:\Program Files\Apache JMeter\apache-jmeter-5.5\bin\jmeter"

for ($count = 1; $count -le 100; $count += 50) {
Write-Output "Threadcount: " $count " Start"

$arguments = "-Jthreads=" + $count + " -n -t " + $testplan + " -l " + $outputfile + $count + ".csv -e -o " + $outputHTML + $count

$proc = Start-Process -PassThru -FilePath $jmeterPath -ArgumentList $arguments
$proc.WaitForExit()

Write-Output "Proc " + $count + " Done"
}