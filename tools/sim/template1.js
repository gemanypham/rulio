{"Name":"unlockThenLight",
 "Description":"When a door is unlocked, turn on the light.  Action makes HTTP request.",
 "Parameters":{"DoorLock":"doorLock",
               "Light":"light"},
 "Facts":{"f1":{"likes":"tacos"}},
 "Rules":{"r1":{"when":{"pattern":{"state":"unlocked",
				   "device":"DoorLock"}},
		"condition":{"pattern":{"likes":"?likes"}},
                "action":{"code":["console.log('for ACCOUNT, turn light Light on to see ' + likes);",
				  "Env.http('GET', 'http://ENDPOINT/ACCOUNT/' + 'Light' + '/on');"]}}}}
