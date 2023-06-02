$testplan = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\alt\teapot2-plan.jmx"
$outputfile = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\results\teapottests-"
$outputHTML = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\results\teapottests-"

$jmeterPath = "C:\Program Files\Apache JMeter\apache-jmeter-5.5\bin\jmeter"

for ($count = 1; $count -le 2; $count += 1) {
Write-Output "Proc " + $count + " Start"

$arguments = "-Jthreads=" + $count + " -n -t " + $testplan + " -l " + $outputfile + $count + ".csv -e -o " + $outputHTML + $count
Write-Output $arguments

$proc = Start-Process -PassThru -FilePath $jmeterPath -ArgumentList $arguments
$proc.WaitForExit()

Write-Output "Proc " + $count + " Done"
}