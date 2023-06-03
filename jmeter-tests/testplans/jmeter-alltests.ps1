# testplans for each endpoint
$gateway0Helloauth = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_0_helloauth.jmx"
$gatewayClHelloauth = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_cl_helloauth.jmx"
$gatewayRsHelloauth = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_rs_helloauth.jmx"

$gateway0Hellotea = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_0_hellotea.jmx"
$gatewayClHellotea = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_cl_hellotea.jmx"
$gatewayRsHellotea = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_rs_hellotea.jmx"

$teas0 = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\teas_0.jmx"
$teasRs = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\teas_rs.jmx"

$testplans = @($gateway0Helloauth, $gatewayClHelloauth, $gatewayRsHelloauth, $gateway0Hellotea, $gatewayClHellotea, $gatewayRsHellotea, $teas0, $teasRs)
$endpoints = @("gateway0Helloauth", "gatewayClHelloauth", "gatewayRsHelloauth", "gateway0Hellotea", "gatewayClHellotea", "gatewayRsHellotea", "teas0", "teasRs")

# outputfiles
$outputFileNameStem = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\results\teapottests-"
$outputHTMLNameStem = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\results\teapottests-"

# jmeter home location
$jmeterPath = "C:\Program Files\Apache JMeter\apache-jmeter-5.5\bin\jmeter"

#for ($count = 200; $count -le 200; $count += 100) {
$count = 300

    for ($i = 2; $i -lt 5; $i++) {


        $outputFileName =  $outputFileNameStem + $endpoints[$i] + "-" + $count + ".csv"
        $outputHTMLName = $outputHTMLNameStem + $endpoints[$i] + "-" + $count
        
        $RAMP = 4 + $count/100
        $DURATION = 6 + $count/100
        $TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHVGZ5eG9HVTBjbGxobzhnX3U1SGcwajNucUtjUjdwMUgzS2xXNi1BQTRBIn0.eyJleHAiOjE2ODU4MjE4OTMsImlhdCI6MTY4NTc4NTg5MywianRpIjoiNDA3OGNlNWMtYzI3OC00NGVjLWFlNWEtODQ4ZjIyNmRjY2JiIiwiaXNzIjoiaHR0cDovL2hvc3QuZG9ja2VyLmludGVybmFsOjEwMDAxL3JlYWxtcy90ZWFwb3QiLCJzdWIiOiI5ZGI1NzI3My1mNDVkLTQ0MGYtOTEwZS04ZGM3NjRjM2JjYjAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwb3N0bWFuLWNsaWVudCIsInNlc3Npb25fc3RhdGUiOiI3ZWZhNThkMC0zMzE0LTQxYTQtODQ1OS0wYjNiYmQzMzYxMzEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRlZmF1bHQtcm9sZXMtdGVhcG90Il19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI3ZWZhNThkMC0zMzE0LTQxYTQtODQ1OS0wYjNiYmQzMzYxMzEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InVsYSIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiJ9.tss9t9K93iywzb9koMDfoxW7Lp8Os_H826i7dKebqwEsiXI4vMmcxmBhIXB3D9SnVf3-5Zx2jPviY7fQiR5zY4dKoJ2K8Mz7hPIN8pEuIGQtf3W9SCblK-xOcOsvJlxxiWstt_OJzSXfKlY14O5aMPubnhxfbgEjbFcB1MrEe_cgaQ6BEym67eQ0MXLtnfYLBpJo2z6J-5kFjhtXyyZr2QjgR8DCSgQWfKrZV97QDtG-khA0bvMbKqn5Rnxn9TIRnwsbQe6NIrcuwW8c1oe4f8fu7OeEGCmSsTtwOwLckWJi41Y_sCqDtgVsSI2ieUiZpz3rJJhuK3JXrg6Z0AOW8A"
        $SESSION = "3af650ea-370b-4b42-b649-4aaced4c6dbc"

        $arguments = "-JTHREADS=" + $count + " -JRAMP =" + $RAMP + " -JDURATION=" + $DURATION + " -JTOKEN=" + $TOKEN + " -JSESSION=" + $SESSION + " -n -t " + $testplans[$i] + " -l " + $outputFileName + " -e -o " + $outputHTMLName
        # Write-Output $arguments

        $process = Start-Process -PassThru -FilePath $jmeterPath -ArgumentList $arguments
        $process.WaitForExit()

        Start-Sleep -Seconds 60

        # write separator into output .csv file
        @("sep=,") + (Get-Content $outputFileName) | Set-Content $outputFileName
       }
#}