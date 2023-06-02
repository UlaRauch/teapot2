# testplans for each endpoint
$gateway0Helloauth = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_0_helloauth.jmx"
$gatewayClHelloauth = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_cl_helloauth.jmx"
$gatewayRsHelloauth = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_rs_helloauth.jmx"

$gateway0Hellotea = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_0_hellotea.jmx"
$gatewayClHellotea = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_cl_hellotea.jmx"
$gatewayRsHellotea = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_rs_hellotea.jmx"

$teas0 = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\teas_rs.jmx"
$teasRs = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\teas_rs.jmx"

$testplans = @($gateway0Helloauth, $gatewayClHelloauth, $gatewayRsHelloauth, $gateway0Hellotea, $gatewayClHellotea, $gatewayRsHellotea, $teas0, $teasRs)
$endpoints = @("gateway0Helloauth", "gatewayClHelloauth", "gatewayRsHelloauth", "gateway0Hellotea", "gatewayClHellotea", "gatewayRsHellotea", "teas0", "teasRs")

# outputfiles
$outputFileNameStem = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\results\teapottests-"
$outputHTMLNameStem = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\results\teapottests-"

# jmeter home location
$jmeterPath = "C:\Program Files\Apache JMeter\apache-jmeter-5.5\bin\jmeter"

for ($count = 100; $count -le 500; $count += 100) {

    for ($i = 0; $i -lt 1; $i++) {
        $outputFileName =  $outputFileNameStem + $endpoints[$i] + "-" + $count + ".csv"
        $outputHTMLName = $outputHTMLNameStem + $endpoints[$i] + "-" + $count
        
        $TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHVGZ5eG9HVTBjbGxobzhnX3U1SGcwajNucUtjUjdwMUgzS2xXNi1BQTRBIn0.eyJleHAiOjE2ODU2NzM5MDUsImlhdCI6MTY4NTYzNzkwNSwianRpIjoiOTUyZmE2ZTctZmIyMi00ODU1LTkyZWEtNmFhN2QyMzg3ZjFkIiwiaXNzIjoiaHR0cDovL2hvc3QuZG9ja2VyLmludGVybmFsOjEwMDAxL3JlYWxtcy90ZWFwb3QiLCJzdWIiOiI5ZGI1NzI3My1mNDVkLTQ0MGYtOTEwZS04ZGM3NjRjM2JjYjAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwb3N0bWFuLWNsaWVudCIsInNlc3Npb25fc3RhdGUiOiI4ZjJiNTQ2NS04ZTY0LTRhOTMtYTg2OC02MzdkZmM3YjIxNzEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRlZmF1bHQtcm9sZXMtdGVhcG90Il19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI4ZjJiNTQ2NS04ZTY0LTRhOTMtYTg2OC02MzdkZmM3YjIxNzEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InVsYSIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiJ9.L7XIdqomdSR6T52Pn6b9Gtq6g1skBSaUKKborzWjqCyYuPshIUqlNXFQo1_6bVlqHTqwQhpbuxlCOfyeHeFoesfvEHCuTcjMrjP19TghBNydELRnqHUKRx2pTj1UTUF7O7BGwM-Xb-zx4aT6cb7Vf3ZAWYbD39OazFNkbsC40kEXVDrcCBJ1db8dJbODO5XWRFRNNdvNHZfgUN4Pd-6XgfORpPpZuwzV-IlM-17NZelXmxdu9LDxR-nECXAEVw9KgnADDlXXHH2Q4hmLGVHQ2GVd5MibjGvAmy9W97tBqw9Ek-lY0_tCwMEk54Kt4QPosaUh4ap7HBasM8EAi4J4wA"
        $SESSION = "380448f2-ff15-4b4b-8f45-ce95c15390fb"

        $arguments = "-JTHREADS=" + $count + " -JTOKEN=" + $TOKEN + " -JSESSION=" + $SESSION + " -n -t " + $testplans[$i] + " -l " + $outputFileName + " -e -o " + $outputHTMLName
        # Write-Output $arguments

        $process = Start-Process -PassThru -FilePath $jmeterPath -ArgumentList $arguments
        $process.WaitForExit()

        @("sep=,") + (Get-Content $outputFileName) | Set-Content $outputFileName
        }
}