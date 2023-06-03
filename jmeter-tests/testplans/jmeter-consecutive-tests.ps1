$testplan = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gw-helloauth-steps.jmx"

$outputname = "teapottests-steps-helloauth-cons-"
$outputfile = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\results\" + $outputname
$outputHTML = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\results\" + $outputname

$jmeterPath = "C:\Program Files\Apache JMeter\apache-jmeter-5.5\bin\jmeter"

#for ($count = 100; $count -le 100; $count += 1) {
Write-Output "Start"

$count = "300"
$RAMP = "2"
$DURATION = "3"
$TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHVGZ5eG9HVTBjbGxobzhnX3U1SGcwajNucUtjUjdwMUgzS2xXNi1BQTRBIn0.eyJleHAiOjE2ODU3NjIzNTQsImlhdCI6MTY4NTcyNjM1NCwianRpIjoiMDk4ZDAwY2ItMWUzMi00YTIxLWEzNmMtNDY3MmM0ZmU5MTEwIiwiaXNzIjoiaHR0cDovL2hvc3QuZG9ja2VyLmludGVybmFsOjEwMDAxL3JlYWxtcy90ZWFwb3QiLCJzdWIiOiI5ZGI1NzI3My1mNDVkLTQ0MGYtOTEwZS04ZGM3NjRjM2JjYjAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwb3N0bWFuLWNsaWVudCIsInNlc3Npb25fc3RhdGUiOiIzZjNkNGRlNS01ZWVhLTRlMjMtYThjMi1lM2NiNzZkYWEyMTkiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRlZmF1bHQtcm9sZXMtdGVhcG90Il19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiIzZjNkNGRlNS01ZWVhLTRlMjMtYThjMi1lM2NiNzZkYWEyMTkiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InVsYSIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiJ9.GKfptX63gienLC_SztetPvOZBu27T-puN1CRyOR26rsP7yTCvM-yeQrM2rm371cRvndBFO00ReeUSMteOPNa3A4Hj1Dgwh4RZ_81BQ7lS5XpoL55YbueTWnOkU10KsgJhkkeqODMP3rB2lWCxwIZ8oPLU6PMrFjPnlMdUQZmrge2dANpPHwpd63h2tJ1gLHLyLq5-D5agtVXZCFNbl7QkVnGU2195LBhCG7jO8VQjtmPpdYb3tVi_TXumXTgmvxVtHJXkYXK_KrnIzbg_IG7QOCcr-X4IgeyrHneFm5yPlUHi2_0kzTiwButASFynp4-4XxkiqdhGOBJbghcFY6Rmw"
$SESSION = "e5b95370-7d8e-45ad-859c-4199febe7729"

$arguments = "-JTHREADS=" + $count + " -JRAMP=" + $RAMP + " -JDURATION=" + $DURATION + " -JTOKEN=" + $TOKEN + " -JSESSION=" + $SESSION + " -n -t " + $testplan + " -l " + $outputfile + $count + ".csv -e -o " + $outputHTML + $count
Write-Output $arguments

$proc = Start-Process -PassThru -FilePath $jmeterPath -ArgumentList $arguments
$proc.WaitForExit()

Write-Output "Done"
#}