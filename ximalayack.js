/*
 *
 *
脚本功能：喜马拉雅,会员.大师课,儿童+音效&音质,去广告,界面优化+++
软件版本：9.2.78（兼容最新版本）
下载地址：
脚本作者：**
更新时间：2024-8.21
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]

# > 喜马拉雅,会员.大师课,儿童+音效&音质,去广告,界面优化+++
^https?:\/\/.+((ximalaya)|(xmcdn)).+(mobile-user\/v2|mobile-web|queryCategoryPageData|discovery-feed\/v4|vip\/v1\/recommand|product\/detail\/v1|mobile\/v1\/album|playpage|album\/price\/ts|mobile\/user\/member).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/ximalaya.js
^https?:\/\/.+((ximalaya)|(xmcdn)).+\/[a-z]{6}\-[a-z]{8}\/track\/(v[0-9])\/[a-zA-Z]+\/ts.*$ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/ximalayack.js
# > 去广告,
^https?://passport\.ximalaya\.com/friendship-mobile/v1/findFriendsBanner/show/ url reject
^https?://xdcs-collector\.ximalaya\.com/api/v1/realtime url reject
^https?://.+\.ximalaya\.com/linkeye.+/checkIP\?ip.+passport.ximalaya.com url reject
^https?://adse\.wsa\.ximalaya\.com url reject
^https?://openapi\.mysteel\.com\/v5\/getAdv\.htm url reject
^https?://ulogs\.umeng\.com\/unify_logs url reject
^https?://adse\.ximalaya\.com\/ url reject
^https?://gslbali\.ximalaya\.com url reject
^https?://www\.taobao\.com\/help\/getip\.php url reject
^https?://.+location\.ximalaya\.com url reject
^https?://.+dbehavior\.ximalaya\.com url reject
^https?://ad\.ximalaya\.com url reject
^https?://.+audid-api\.taobao.com url reject
^https?://passport\.ximalaya\.com\/user-http-app\/v1\/token\/refresh url reject

[mitm] 
hostname = 42.56.64.*,*.xmcdn.com, *.ximalaya.com, 61.172.194.*,180.153.*.*,180.153.255.*, 180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.2*,61.162.174.*,119.188.123.*,59.83.227.*, 114.80.161.29,1.62.62.64,1.194.255.171, 23.236.99.89, 36.99.200.135, 42.81.4.198, 42.81.26.128, 42.81.120.58, 43.152.24.12, 43.152.24.18, 43.152.25.127, 43.152.29.38, 43.175.16.34, 43.175.22.25, 43.175.44.15, 49.7.69.197, 49.51.224.95, 101.33.11.32, 101.33.11.106, 101.33.20.34, 101.33.29.110, 103.105.60.99, 140.249.84.135, 140.249.85.189, 150.109.90.80, 150.109.91.35, 150.138.47.94, 150.138.136.145, 203.205.13*.*, 203.205.250.*, 211.152.137.*, 47.100.227.85, 61.164.145.12, 106.41.204.126, 112.80.180.72, 112.98.170.228, 112.99.146.108, 118.25.119.177, 223.111.231.198, 120.22*.2*.*, 43.132.8*.*, 101.33.27.*, 43.141.11.*,101.89.53.*,36.131.221.*,111.42.194.*,adse.ximalaya.com,36.131.221.*,112.84.131.*,111.6.56.*,111.6.56.228,*.xmcdn.com,120.232.165.228,43.159.71.*,ulogs.umeng.com,www.taobao.com,43.132.81.*,101.33.27.*,114*0.*,61.172.1*.*,43.141.11.*,114.80.99.86,180.153.255.*,114.80.99.*,*.mysteel.*,61.172.194.196,180.153.*.*,*xima*,*xmcdn*,*.ximalaya.com,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com,1.194.255.171, 23.236.99.89, 36.99.200.135,42.81.4.198,42.81.26.128,42.81.120.58,43.132.80.77,43.132.83.175,43.132.84.11,43.152.24.12,43.152.24.18,43.152.25.127,43.152.29.38,43.175.16.34,43.175.22.25,43.175.44.15,49.7.69.197,49.51.224.95,101.33.11.32,101.33.11.106,101.33.20.34,101.33.29.110,103.105.60.99,114.80.99.90,114.80.99.70,114.80.99.71, 114.80.99.89,114.80.99.91,114.80.99.88, 114.80.99.87,140.249.84.135,140.249.85.189,150.109.90.80,150.109.91.35,150.138.47.94,150.138.136.145,203.205.136.87,203.205.136.100,203.205.136.102,203.205.136.159,203.205.137.27,203.205.137.87,203.205.137.241,203.205.250.111,203.205.250.113,211.152.137.25,ulogs.umeng.com,passport.ximalaya.com



*
*
*/

















 








































;var encode_version = 'jsjiami.com.v5', fvxzb = '__0x11ca24',  __0x11ca24=['wr3Dk3/CpQDCnjjDp8Os','ecKEVsKrw5vCpcK2','wqvCvMOpcC0=','cy55fB4lw40=','w5nCh8OFdMOZ','w5/Cn3U2w6o=','w6ULUxV6','XsKkw5g2wpwTw60=','wrzDjn7CtRc=','WwBzwo0=','Z8K7VA==','JcOewqjDuRHDjVM=','PgIhw5bCoQ==','w4kGQ8O+YxBu','wo1eScK/EA==','IsKVDQ7CtQ==','QRpnwovDt8OJ','wrFTVMKDw5nCkg==','wqkcwrU=','wpvCvMOt','IcKVOg==','wp/Dh1/CjB0=','f1A1wptc','wq7DmFg=','RMKZwo0=','5Ymq6ZiU54iI5p6Z5Yyz772jw57DouS/hOWvtOafpuW+seephw==','wpLDlUXDuSQ=','ewLDh8KcBw==','w5xmw4XDucOy','w5Y9woHCgTA=','wq7DocKk','wrLCu8Odew4=','OVfDpsOjRw==','w61aw6p8woA=','wrQgwrI+w4A=','w74ZScOleg==','wokkwroHw6M=','Ekpawq/DrQ==','w6kOSMOpag==','w4DDmj02YA==','KV15','w7UTXhJgbMOoTU7DucOzBMO7b8KGwrrCgDxffcKEwrPCu8KrA8KkAGTDgBt2P3rDgMKTw5Fqw6nDlsOSFMOpwp9rbsOSIsK+woTCjXrCjsK2wrohwrzDqMK+REY7GcObOGvCmGjDoTLDocKwWgHCi8KAASHCh8OjW3NYJMOYFz3DsC5Tw6YLWsKTPMKVI8K3e8Ojw7rCmjwXK8KUw7gmwqoJETA0QcKMwqlMHDLCo3/CiX0OLDBNw6HDkcOnwrYtAzcFwqQUwonDpsOkV8OTcsO+wq4CG8KxwpTCuh9Yw6AZHQ3Dk8OWG8KMwplvURw1OMOJw6d0woPCrVjDg23DrsOKw5pvwpXCpsKqwpLDrGN4VcK/w4zDsMONw4JVw7fCgW/DswHDvMKfNQrDh1bDlcO0wpxYasODw5l6','YMKBcMOrw6fDsMOUCcKLI8KOw6XDu2PCisOJw51jNmoywo8OwqnCtsKAwqQUwoMQN3PDqzJSwrxyaMOtUcKVwo1tQMOaw6gYwoB5VQDCnsO7DwQKERN0GkELNsO8QsOYwqZaGSzCk8KHwrjDgnViw5NWWSbCmTwww7rCpl3DjX/DjsO1wo1Sw7w0WV3DuWzDugdhX8K2wq4YccKhKcKda30FRz1OcsOEPcKIwohdw6fDuQ5ZZFjDmhINaUPDk8OVG8KAw4Fic8KSFMOoI8KxJwFsw6xIX0UveUl1GMKcDxzDsgE9w44dw5fDjcOIwovCvCjCuhjCscKYw7p5SnvCunbDgcOWf8Kiw7NnworDscK2w7jCrU7DhTnCvinChGwfw50fw7vCrBRFw7x/wpjDr8KX','wqzCo8K/wqkMw5jDp8K+OMOLNsOhBMONwqN/fi7CvmTCknHDtsKpPsKuwowEw5kOWWXCoXnDlETDlMKvFGjDq8OYwp96woM4wrvCj8KvIMKlw5XDqsK/w67DkwFNwp0rTsKOw4gcOCJAwoDCgDcUwp0bXxHCu8KHwrfCpSrCm8Olw6/ChRlrGsOwwo8QInXDp8KXPUgdw5LDi3jDs2zClMOGw7xTw4XCgcOyY8Obwq/DpD0OAMOIHMKKShLCjS/Dh0lKwofDu03DusOIw4JIw5DCuMK9NMOTUsO2wrHDvcOFXSHCusOUwrQZw4Z+esOFw7vCoF0swp0PwojCisOLDgvDv2bCoGzDuMO8w7hKCgoNwoIdwqvDsQDCisOCwpZwBypBw79lbsOJwrsAYMO5w5rDgcKOBiUmQMOVwr3DlFMewqjChkE=','TkzDo8KFEsOcwpBFJcO/w7LCh2jClX/CvMOpd8K9TMKswp/CsMOULcOhKsOpwpnClBxWUgEpbcOTf0XCqcO/UT/DlHMxTW8uasO1wp7DiEnCl8Klw4bDtSh8w73Dnm/ChirCsEJkwpQbw6HCk3gnUMOEw5LDoMKUPcOxwq3Cl0ARGBR7YMOhwrRew5nDm8OjT0DDphctMMKow5tSS8OnMADChMOIw5sNfcOmLHZ1wpYYZcKVX8KuI1ZdVirCn8K/QQg9Q8ODV2cNHcKnw5XCsMOTV0YELMKAeH/Cp0gXwpPDkl7DsMOEw6TDjnVBw6zDjsONwpYuLsKuwobDnnjCusOjw4hXwrHCtsKdw4zDgMKnw6DDhMKFwpDClnNEHMKqS3RWw7QzwpNfUsK6S8K+w5LDkMOJw7TCh38Fw70=','cyl2YR8sw4TDpsKSaCbDo8KYFMKxw6Q5GcO2chXDhXZ1OAkRwo/DhwPCvsK4dgTCoABrwoFJw5x7w7pNKcKTEHtUVMKVw7DDv8KTwohve8KswpXCnMKLw6rDhBXCjWkzw5oWO8OFwojDqcKZXW9tU3ZNw6MgwrrCqcOFw4bDqMKPGS1JwrUjOcKWbMOow7h1w4fDoCxQwoM1U8Kdw5kOF8Kuw6TDjGHCrMKQJz1eO8KcwrbDk8KdMCJJw7VtbRLCp33CpFAww6jChsKHwoA9HcKzSHNRQnDCiFgQaFHDr8OZHWzClcOjKcOCVMODw7jCoDV1fxPDmT7DnR/CtMOew7VWCmRpw5HDiiwwYwjDpUMgwpLDoWVqIxTCkWjCv8OuCijDhMKvfcOWd8KFw6Yww6Ve','wrzCpsOpfSY/wq19wq1jDSbDiRfCj0sfAsOEw50mwpIzHcOSwpvDqGNgT1Vqw6/DlcO2H8KSwpMrXl/CjMOzd0zDhS3CssK5ERt1J8Kww6tIw6jCmMK6w6xxZWxoAMKGHh7CssK7HsOkw4V4w5TDmz7Cv0nCqjLDuMK5PwoBN8Kiw4fDo29LRzk+w5/DigrCljPDtyjDmQoLw4DDtBLDv8KDBcOwwr/CvcKKQW1XBVTCq8Kew7p1wrJ0w4HDpj5uBsOtEVYRRMKRV1AHwr7CuC/CnMOPw78Xw7fDjRNZBhDCsMK2C8K0wqJSZXHChHhUwrR3CMKsw7/DjE9Rw7fDmcKXw5fDjMOxwqtAMTtyJjzCojzDh8OuWSTDngvCqHrCnVMHW2k8GsKgIF8uJmgMJQ==','DsOFJMO/Y8OTMx3Dn1JP','VAfDnMKPCATDrw==','EAnCn8KBYGHDtw==','wpnDiMKZ','wqvCocOEfD8/wrMDwqV/Gw==','w4TDtTwpUQ==','wobDiMKHWMO4w7M=','w5nCh8OD','5Ym56Zij54qe5pyu5YyH77+lwrYD5Lyl5ayL5pyd5byo56i1','wqvDm3DCqQQ=','w6khSw==','wp3Dp8KGc8OC','wonDgGJ0w48=','GFHDnMOkXA==','GsOpwoo=','wqFUwqM=','HV9owp/Dsg==','w6/DkEZJwoXDl1EQwqXDk1fCnMKEw77CuVU5F8KWwpE0b8OtOMKNL8KVwoZHw6VtGyzClMOwwpxWw6A5TMOAfgUBw5oowrlEU8KUw47CiMKCdmxwDcKCw7/DhcKmw78=','wp1Id1dS','wrRYSsKRw5k=','X8Kiwqc=','Wi1Y','FMOVwrPDh0M=','HDPCpA==','wo5ZVcKzFsKvw5nCm8Knw6bCmT7DuDPDksOA','wqMWXk17','w79jw4PDrA==','wqzDjm/CtA==','wo1XUMKKw4g=','wqvCq8O7Zw==','woXDlwo3wqg=','wo3Dl1hhw48=','RW9TEsKC','w4PDqSMqWg==','w6EWUgts','TMKDfMKCw4w=','wrtzWMKiw6g=','wo1QeldI','HAnCnMKQYg==','wrzDuhRPwqdMJBJe','bVLCo1om','dC96wrrDng==','w74NwpfCiAc=','esOTecKcDQ==','wozDpEXCtSY=','w5PDnhU2Wg==','wpjDmzxewrw=','fmvDrA==','TMKIwrgIw4c=','DcKyCg==','fsOsdQ==','R1fDqMKCHcOUwpVWL8O/w6zChHzCkQ==','w6xpw6U=','w5Vlw7o=','w4pcJ0IMD8OyWFjCnMKlwrfDrg==','wpkVHMOxPAA5Pn7DlsOtAz4=','UV/DjhFY','wq0KwpQ/w5Q=','wrrCpcK6wqIEw5TDpcOmNQ==','wrDCvwxWFg==','w744fTpq','wr8vwpEsw5pA','w6bDqTQVTA==','w4c2w4vDl8OH','aVTDpcK4Ew==','wq9lTcK2w4Q=','w4nDvToUTw==','QwdlwpLDsA==','ClrDgMOAWcK6AQ==','UcKkw5E=','wpDDjMKLScOw','J8KRPxY=','wpHDm8KbU8Ol','fFLCsFYx','wp8swpIGw7Y=','T8KRw7c=','w60Fb8OUaw==','QhnDhMKUFQ==','Vgt3wpfDvg==','VF3DsTNkw6ZO','wqjCr8O6fQ==','MCnCsG0=','UgbDhsKODg3DuQ=='];(function(_0x48d7e5,_0x3d38c3){var _0x288a04=function(_0x215dff){while(--_0x215dff){_0x48d7e5['push'](_0x48d7e5['shift']());}};var _0x1284e7=function(){var _0x115996={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3bfc10,_0x9bbc7e,_0x173851,_0x3ef9ba){_0x3ef9ba=_0x3ef9ba||{};var _0x4b4fba=_0x9bbc7e+'='+_0x173851;var _0xeaafcf=0x0;for(var _0xeaafcf=0x0,_0x2d5cd1=_0x3bfc10['length'];_0xeaafcf<_0x2d5cd1;_0xeaafcf++){var _0x1d2330=_0x3bfc10[_0xeaafcf];_0x4b4fba+=';\x20'+_0x1d2330;var _0x5e1165=_0x3bfc10[_0x1d2330];_0x3bfc10['push'](_0x5e1165);_0x2d5cd1=_0x3bfc10['length'];if(_0x5e1165!==!![]){_0x4b4fba+='='+_0x5e1165;}}_0x3ef9ba['cookie']=_0x4b4fba;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3af73b,_0x585075){_0x3af73b=_0x3af73b||function(_0x4b16a1){return _0x4b16a1;};var _0x539bd4=_0x3af73b(new RegExp('(?:^|;\x20)'+_0x585075['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x58474c=function(_0x11b32b,_0x7e570a){_0x11b32b(++_0x7e570a);};_0x58474c(_0x288a04,_0x3d38c3);return _0x539bd4?decodeURIComponent(_0x539bd4[0x1]):undefined;}};var _0x199743=function(){var _0x390bdc=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x390bdc['test'](_0x115996['removeCookie']['toString']());};_0x115996['updateCookie']=_0x199743;var _0xe81cd='';var _0x5d5d4d=_0x115996['updateCookie']();if(!_0x5d5d4d){_0x115996['setCookie'](['*'],'counter',0x1);}else if(_0x5d5d4d){_0xe81cd=_0x115996['getCookie'](null,'counter');}else{_0x115996['removeCookie']();}};_0x1284e7();}(__0x11ca24,0xab));var _0x5dd5=function(_0x9c12ed,_0x263dd3){_0x9c12ed=_0x9c12ed-0x0;var _0x4f7409=__0x11ca24[_0x9c12ed];if(_0x5dd5['initialized']===undefined){(function(){var _0x5b96eb=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x86c128='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5b96eb['atob']||(_0x5b96eb['atob']=function(_0x3c58eb){var _0x1902b4=String(_0x3c58eb)['replace'](/=+$/,'');for(var _0x462a03=0x0,_0x576d89,_0x744bea,_0x1a36d8=0x0,_0x137b6b='';_0x744bea=_0x1902b4['charAt'](_0x1a36d8++);~_0x744bea&&(_0x576d89=_0x462a03%0x4?_0x576d89*0x40+_0x744bea:_0x744bea,_0x462a03++%0x4)?_0x137b6b+=String['fromCharCode'](0xff&_0x576d89>>(-0x2*_0x462a03&0x6)):0x0){_0x744bea=_0x86c128['indexOf'](_0x744bea);}return _0x137b6b;});}());var _0x219534=function(_0xbda126,_0x326741){var _0x4996ca=[],_0x465276=0x0,_0x1cad37,_0x4a64f7='',_0xa2e5f0='';_0xbda126=atob(_0xbda126);for(var _0x3116fb=0x0,_0x18c8a3=_0xbda126['length'];_0x3116fb<_0x18c8a3;_0x3116fb++){_0xa2e5f0+='%'+('00'+_0xbda126['charCodeAt'](_0x3116fb)['toString'](0x10))['slice'](-0x2);}_0xbda126=decodeURIComponent(_0xa2e5f0);for(var _0x35b5fe=0x0;_0x35b5fe<0x100;_0x35b5fe++){_0x4996ca[_0x35b5fe]=_0x35b5fe;}for(_0x35b5fe=0x0;_0x35b5fe<0x100;_0x35b5fe++){_0x465276=(_0x465276+_0x4996ca[_0x35b5fe]+_0x326741['charCodeAt'](_0x35b5fe%_0x326741['length']))%0x100;_0x1cad37=_0x4996ca[_0x35b5fe];_0x4996ca[_0x35b5fe]=_0x4996ca[_0x465276];_0x4996ca[_0x465276]=_0x1cad37;}_0x35b5fe=0x0;_0x465276=0x0;for(var _0x3c1d19=0x0;_0x3c1d19<_0xbda126['length'];_0x3c1d19++){_0x35b5fe=(_0x35b5fe+0x1)%0x100;_0x465276=(_0x465276+_0x4996ca[_0x35b5fe])%0x100;_0x1cad37=_0x4996ca[_0x35b5fe];_0x4996ca[_0x35b5fe]=_0x4996ca[_0x465276];_0x4996ca[_0x465276]=_0x1cad37;_0x4a64f7+=String['fromCharCode'](_0xbda126['charCodeAt'](_0x3c1d19)^_0x4996ca[(_0x4996ca[_0x35b5fe]+_0x4996ca[_0x465276])%0x100]);}return _0x4a64f7;};_0x5dd5['rc4']=_0x219534;_0x5dd5['data']={};_0x5dd5['initialized']=!![];}var _0x1e400a=_0x5dd5['data'][_0x9c12ed];if(_0x1e400a===undefined){if(_0x5dd5['once']===undefined){var _0x341672=function(_0x524f7b){this['rc4Bytes']=_0x524f7b;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x341672['prototype']['checkState']=function(){var _0x245143=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x245143['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x341672['prototype']['runState']=function(_0x41c652){if(!Boolean(~_0x41c652)){return _0x41c652;}return this['getState'](this['rc4Bytes']);};_0x341672['prototype']['getState']=function(_0x581f22){for(var _0xb0c872=0x0,_0x2cb37a=this['states']['length'];_0xb0c872<_0x2cb37a;_0xb0c872++){this['states']['push'](Math['round'](Math['random']()));_0x2cb37a=this['states']['length'];}return _0x581f22(this['states'][0x0]);};new _0x341672(_0x5dd5)['checkState']();_0x5dd5['once']=!![];}_0x4f7409=_0x5dd5['rc4'](_0x4f7409,_0x263dd3);_0x5dd5['data'][_0x9c12ed]=_0x4f7409;}else{_0x4f7409=_0x1e400a;}return _0x4f7409;};const _0x58f52f=[_0x5dd5('0x0','ySIz'),'channel=ios-b1;\x201&_device=iPhone&779717B3-4A5F-487E-AAFF-0AC3E6779717&9.2.71;\x20net-mode=WIFI;1&_token=518404962&0ED581DF-22C0-41EE-BEF1-CCD0BCB020BB;\x20device_model=VGVsZWdyYW06aHR0cHM6Ly90Lm1lL0dpZUdpZTc3Nw%3D%3D',_0x5dd5('0x1','l]yx'),_0x5dd5('0x2','PI^V'),_0x5dd5('0x3','8P@6'),_0x5dd5('0x4','r5By'),_0x5dd5('0x5','J5VS'),'channel=ios-b1;\x201&_device=iPhone&541612B3-4A5F-487E-AAFF-0AC3E6541612&9.2.71;\x20net-mode=WIFI;1&_token=518405493&4F06119C-BC16-4C35-BB40-26F40037AD2E;\x20device_model=VGVsZWdyYW06aHR0cHM6Ly90Lm1lL0dpZUdpZTc3Nw%3D%3D','channel=ios-b1;\x201&_device=iPhone&342772B3-4A5F-487E-AAFF-0AC3E6342772&9.2.71;\x20net-mode=WIFI;1&_token=518405543&4B74DEA3-859F-4431-B322-6C9F233A0085;\x20device_model=VGVsZWdyYW06aHR0cHM6Ly90Lm1lL0dpZUdpZTc3Nw%3D%3D','channel=ios-b1;\x201&_device=iPhone&810672B3-4A5F-487E-AAFF-0AC3E6810672&9.2.71;\x20net-mode=WIFI;1&_token=518405599&3FE66A69-DDB8-47D9-9A34-74B0647F8E7A;\x20device_model=VGVsZWdyYW06aHR0cHM6Ly90Lm1lL0dpZUdpZTc3Nw%3D%3D'];setInterval(function(){var _0x3d888e={'qvsio':function _0x22f4eb(_0x29bdf7){return _0x29bdf7();}};_0x3d888e['qvsio'](_0x1048fb);},0xfa0);const _0x1c8fec=Object[_0x5dd5('0x6','(U1X')](Object[_0x5dd5('0x7',']jXi')]($request[_0x5dd5('0x8','yKE(')])[_0x5dd5('0x9','G3E#')](([_0x2d2c77,_0x13e7f2])=>[_0x2d2c77[_0x5dd5('0xa','J5VS')](),_0x13e7f2]));const _0xb63d39=_0x58f52f[Math[_0x5dd5('0xb',']^Ia')](Math[_0x5dd5('0xc','G3E#')]()*_0x58f52f['length'])];Object['assign'](_0x1c8fec,{'cookie':_0xb63d39,'x-tk':''});$done({'headers':_0x1c8fec});;(function(_0xf7d769,_0x538e8c,_0x5024d9){var _0x5a3e31={'aMxvQ':function _0xabce3e(_0x23826e,_0x20a4ad,_0x504152){return _0x23826e(_0x20a4ad,_0x504152);},'JTTCJ':_0x5dd5('0xd','JmiF'),'iobYe':function _0x19aa06(_0xee1522,_0x5b1bd5){return _0xee1522!==_0x5b1bd5;},'TOYuV':'undefined','qGFpy':function _0x350228(_0x3107a5,_0x460f7d){return _0x3107a5===_0x460f7d;},'hUIAm':'jsjiami.com.v5','AYKtk':function _0x49b4d9(_0x178e4b,_0x173f04){return _0x178e4b+_0x173f04;},'TnPTr':'IYs','FyCnS':_0x5dd5('0xe','pZi!'),'ljTwi':function _0x3ef4e3(_0x240cae){return _0x240cae();}};var _0x15100f='2|0|1|4|5|6|7|3'[_0x5dd5('0xf','[Th7')]('|'),_0x591633=0x0;while(!![]){switch(_0x15100f[_0x591633++]){case'0':var _0x2eed28=function(){var _0x223510={'iNoOU':function _0x298801(_0x103843,_0x430bf2){return _0x103843!==_0x430bf2;},'jxJDo':_0x5dd5('0x10','ao7H'),'qdrWj':function _0x3d6d6f(_0x14955b,_0x301d3f){return _0x14955b(_0x301d3f);}};if(_0x223510[_0x5dd5('0x11','G3E#')](_0x223510[_0x5dd5('0x12','Jcy4')],_0x223510['jxJDo'])){_0x223510[_0x5dd5('0x13','0g80')](result,'0');}else{var _0x5c2a96=!![];return function(_0x181805,_0x55fa19){var _0x2f0156={'YTFan':_0x5dd5('0x14','yEa2')};var _0x510ac9=_0x5c2a96?function(){if(_0x55fa19){if(_0x2f0156['YTFan']!==_0x5dd5('0x15','VxpP')){var _0x319b2c=_0x55fa19['apply'](_0x181805,arguments);_0x55fa19=null;return _0x319b2c;}else{}}}:function(){};_0x5c2a96=![];return _0x510ac9;};}}();continue;case'1':(function(){_0x1ea095[_0x5dd5('0x16','xJN7')](_0x2eed28,this,function(){var _0x5d5c99={'ddqvZ':function _0x525556(_0x41467e,_0xb093c3){return _0x41467e===_0xb093c3;},'YHYIe':'Etr','PAhaX':_0x5dd5('0x17','d]O*'),'HXbIG':function _0x4a071c(_0x446d81,_0x167214){return _0x446d81(_0x167214);},'Pajne':function _0x1ecfc2(_0x396bb5,_0x118218){return _0x396bb5+_0x118218;},'bnvDi':_0x5dd5('0x18','cqpx'),'FAoXG':function _0x501339(_0x4b283f,_0x4a555c){return _0x4b283f+_0x4a555c;},'GXDXY':_0x5dd5('0x19','8aPF'),'nopQo':_0x5dd5('0x1a','^f^g'),'btaWs':'JWH','WvFWi':function _0x4edac7(_0x1ab2c2,_0x446684){return _0x1ab2c2(_0x446684);},'wmmwb':function _0x32bbcd(_0x7f41d7,_0x4f24b0){return _0x7f41d7!==_0x4f24b0;},'VhDZx':_0x5dd5('0x1b','DDu#'),'YwJLI':'nFo','rIYyC':'版本号，js会定期弹窗，还请支持我们的工作'};if(_0x5d5c99[_0x5dd5('0x1c','yEa2')](_0x5dd5('0x1d','pZi!'),_0x5d5c99['YHYIe'])){var _0x23d332=new RegExp(_0x5dd5('0x1e','@Zqz'));var _0x5c3779=new RegExp(_0x5d5c99['PAhaX'],'i');var _0x4981cd=_0x5d5c99[_0x5dd5('0x1f','hwn6')](_0x1048fb,_0x5dd5('0x20','dT*['));if(!_0x23d332[_0x5dd5('0x21','[Th7')](_0x5d5c99[_0x5dd5('0x22','8aPF')](_0x4981cd,_0x5d5c99['bnvDi']))||!_0x5c3779[_0x5dd5('0x23','J5VS')](_0x5d5c99['FAoXG'](_0x4981cd,_0x5d5c99['GXDXY']))){if(_0x5d5c99[_0x5dd5('0x24','TtOv')](_0x5d5c99[_0x5dd5('0x25','Jcy4')],_0x5d5c99[_0x5dd5('0x26','Kz0L')])){if(fn){var _0x469dc0=fn[_0x5dd5('0x27',']^Ia')](context,arguments);fn=null;return _0x469dc0;}}else{_0x5d5c99['WvFWi'](_0x4981cd,'0');}}else{if(_0x5d5c99[_0x5dd5('0x28','ySIz')](_0x5d5c99[_0x5dd5('0x29','2U[N')],_0x5d5c99['YwJLI'])){_0x1048fb();}else{that['console']=function(_0x535667){var _0x480544={'fEbFE':'7|5|3|2|6|8|4|1|0'};var _0x1c018d=_0x480544[_0x5dd5('0x2a','8aPF')][_0x5dd5('0x2b','cqpx')]('|'),_0x35985d=0x0;while(!![]){switch(_0x1c018d[_0x35985d++]){case'0':return _0x200789;case'1':_0x200789['trace']=_0x535667;continue;case'2':_0x200789[_0x5dd5('0x2c','yKE(')]=_0x535667;continue;case'3':_0x200789['warn']=_0x535667;continue;case'4':_0x200789[_0x5dd5('0x2d','8Eq@')]=_0x535667;continue;case'5':_0x200789['log']=_0x535667;continue;case'6':_0x200789['info']=_0x535667;continue;case'7':var _0x200789={};continue;case'8':_0x200789[_0x5dd5('0x2e','!VTE')]=_0x535667;continue;}break;}}(func);}}}else{_0xf7d769[_0x5024d9](_0x5d5c99[_0x5dd5('0x2f','DDu#')]('删除',_0x5d5c99[_0x5dd5('0x30','C[jn')]));}})();}());continue;case'2':var _0x1ea095={'KyAZK':function _0x2d76d4(_0x9483e,_0x39227a,_0x56ef72){return _0x5a3e31[_0x5dd5('0x31','Fl1&')](_0x9483e,_0x39227a,_0x56ef72);}};continue;case'3':try{_0x5024d9+=_0x5a3e31['JTTCJ'];_0x538e8c=encode_version;if(!(_0x5a3e31['iobYe'](typeof _0x538e8c,_0x5a3e31[_0x5dd5('0x32','[Th7')])&&_0x5a3e31[_0x5dd5('0x33',']^Ia')](_0x538e8c,_0x5a3e31['hUIAm']))){_0xf7d769[_0x5024d9](_0x5a3e31[_0x5dd5('0x34','8Eq@')]('删除','版本号，js会定期弹窗，还请支持我们的工作'));}}catch(_0x343d55){if(_0x5dd5('0x35','g6eO')!==_0x5a3e31['TnPTr']){}else{_0xf7d769[_0x5024d9](_0x5a3e31['FyCnS']);}}continue;case'4':var _0x5aaa5f=function(){var _0x140084=!![];return function(_0x48dd55,_0x26a9dd){var _0x111604=_0x140084?function(){if(_0x26a9dd){var _0x1d082b=_0x26a9dd[_0x5dd5('0x36','^f^g')](_0x48dd55,arguments);_0x26a9dd=null;return _0x1d082b;}}:function(){};_0x140084=![];return _0x111604;};}();continue;case'5':var _0x35fbee=_0x5aaa5f(this,function(){var _0x2e520e={'fmQQS':_0x5dd5('0x37','$fWo'),'cBmtZ':_0x5dd5('0x38','Fl1&'),'sdXqJ':function _0xd77734(_0x48e737,_0x43cdb0){return _0x48e737===_0x43cdb0;},'yJylJ':_0x5dd5('0x39','8P@6'),'KjNCh':function _0x4b006a(_0x10fd41,_0x468c73){return _0x10fd41+_0x468c73;},'lRLdd':function _0x4357ad(_0x3d8902,_0x380d79){return _0x3d8902!==_0x380d79;},'DpgSo':function _0xee873e(_0x2ac57b,_0x2f8d4d){return _0x2ac57b===_0x2f8d4d;},'PpjUM':'function','rSwRi':'object','kdiRl':'exT','qippi':_0x5dd5('0x3a','(yNm'),'OaiOO':_0x5dd5('0x3b','dT*['),'GlBYg':_0x5dd5('0x3c','cqpx'),'ldoTO':_0x5dd5('0x3d','ao7H')};if(_0x2e520e[_0x5dd5('0x3e','g6eO')]!==_0x2e520e['fmQQS']){_0x5024d9+=_0x2e520e[_0x5dd5('0x3f','sm2t')];_0x538e8c=encode_version;if(!(typeof _0x538e8c!==_0x5dd5('0x40','PI^V')&&_0x2e520e['sdXqJ'](_0x538e8c,_0x2e520e['yJylJ']))){_0xf7d769[_0x5024d9](_0x2e520e['KjNCh']('删除','版本号，js会定期弹窗，还请支持我们的工作'));}}else{var _0x283115=function(){var _0x1a4864={'hCBFd':'Enh'};if(_0x1a4864[_0x5dd5('0x41','5h8i')]!==_0x1a4864[_0x5dd5('0x42','ySIz')]){debugger;}else{}};var _0x178fde=_0x2e520e['lRLdd'](typeof window,'undefined')?window:_0x2e520e['DpgSo'](typeof process,_0x5dd5('0x43','dBkr'))&&_0x2e520e[_0x5dd5('0x44',']^Ia')](typeof require,_0x2e520e[_0x5dd5('0x45','ouib')])&&_0x2e520e[_0x5dd5('0x46','8P@6')](typeof global,_0x2e520e[_0x5dd5('0x47','8aPF')])?global:this;if(!_0x178fde['console']){if(_0x2e520e['lRLdd'](_0x2e520e[_0x5dd5('0x48',']^Ia')],_0x2e520e[_0x5dd5('0x49','DDu#')])){_0x178fde[_0x5dd5('0x4a','0g80')]=function(_0x3befe1){var _0x5024d9={};_0x5024d9[_0x5dd5('0x4b','gBJ2')]=_0x3befe1;_0x5024d9['warn']=_0x3befe1;_0x5024d9[_0x5dd5('0x4c','G3E#')]=_0x3befe1;_0x5024d9[_0x5dd5('0x4d','$fWo')]=_0x3befe1;_0x5024d9[_0x5dd5('0x4e','G3E#')]=_0x3befe1;_0x5024d9['exception']=_0x3befe1;_0x5024d9[_0x5dd5('0x4f','!VTE')]=_0x3befe1;return _0x5024d9;}(_0x283115);}else{var _0x4e6593=fn['apply'](context,arguments);fn=null;return _0x4e6593;}}else{if(_0x2e520e[_0x5dd5('0x50','dBkr')]===_0x5dd5('0x51','gBJ2')){var _0x5cfbeb=_0x2e520e[_0x5dd5('0x52','ao7H')][_0x5dd5('0x53',']jXi')]('|'),_0x794bfe=0x0;while(!![]){switch(_0x5cfbeb[_0x794bfe++]){case'0':_0x178fde['console'][_0x5dd5('0x54','DDu#')]=_0x283115;continue;case'1':_0x178fde[_0x5dd5('0x55','g6eO')][_0x5dd5('0x56','J5VS')]=_0x283115;continue;case'2':_0x178fde['console'][_0x5dd5('0x57','pZi!')]=_0x283115;continue;case'3':_0x178fde[_0x5dd5('0x58',']jXi')][_0x5dd5('0x59','[Th7')]=_0x283115;continue;case'4':_0x178fde['console']['log']=_0x283115;continue;case'5':_0x178fde[_0x5dd5('0x5a','2U[N')][_0x5dd5('0x5b','J5VS')]=_0x283115;continue;case'6':_0x178fde[_0x5dd5('0x5c','r5By')][_0x5dd5('0x5d','JmiF')]=_0x283115;continue;}break;}}else{var _0x379133=_0x2e520e[_0x5dd5('0x5e','d]O*')][_0x5dd5('0x5f','ySIz')]('|'),_0x262182=0x0;while(!![]){switch(_0x379133[_0x262182++]){case'0':_0x178fde[_0x5dd5('0x60','gBJ2')][_0x5dd5('0x61','[Th7')]=_0x283115;continue;case'1':_0x178fde['console']['warn']=_0x283115;continue;case'2':_0x178fde['console'][_0x5dd5('0x62','DDu#')]=_0x283115;continue;case'3':_0x178fde[_0x5dd5('0x4a','0g80')][_0x5dd5('0x63','F$Yr')]=_0x283115;continue;case'4':_0x178fde[_0x5dd5('0x64','ffC^')]['exception']=_0x283115;continue;case'5':_0x178fde['console'][_0x5dd5('0x65','#1]6')]=_0x283115;continue;case'6':_0x178fde[_0x5dd5('0x66','ao7H')][_0x5dd5('0x67','@Zqz')]=_0x283115;continue;}break;}}}}});continue;case'6':_0x5a3e31[_0x5dd5('0x68','$fWo')](_0x35fbee);continue;case'7':_0x5024d9='al';continue;}break;}}(window));function _0x1048fb(_0x32eab5){var _0xc3d021={'GlCLm':function _0x1fe815(_0x2624b1,_0x461bd9){return _0x2624b1===_0x461bd9;},'oIeyG':_0x5dd5('0x69','DDu#'),'gEbNo':function _0x31e527(_0x36664e,_0x30676a){return _0x36664e!==_0x30676a;},'PbHPq':function _0xc176cb(_0x518789,_0x3032d0){return _0x518789+_0x3032d0;},'xAHei':function _0x4c6558(_0x3cfe65,_0x586f4f){return _0x3cfe65/_0x586f4f;},'zhKuN':_0x5dd5('0x6a','8aPF'),'Tpdhv':function _0x485b9b(_0x36d743,_0x2fc46e){return _0x36d743%_0x2fc46e;},'UeMDF':_0x5dd5('0x6b','sm2t'),'DlsjT':_0x5dd5('0x6c','J5VS'),'haCFB':_0x5dd5('0x6d','$fWo'),'Cgedf':function _0x3cba6f(_0x20404b,_0x181a1e){return _0x20404b(_0x181a1e);},'bCnpC':function _0x300047(_0x320723,_0x94ed0e){return _0x320723(_0x94ed0e);}};function _0x1eeeaf(_0x2335a8){if(_0xc3d021[_0x5dd5('0x6e','[Th7')](typeof _0x2335a8,_0xc3d021[_0x5dd5('0x6f','FGfc')])){var _0x4aee16=function(){var _0x54a61a={'rOAEf':function _0x663f34(_0x164cc2,_0x4f29b5){return _0x164cc2===_0x4f29b5;},'Jkoaf':_0x5dd5('0x70','[Th7'),'ZyOpt':function _0x2bce5f(_0x2d3227,_0x1cdef5){return _0x2d3227!==_0x1cdef5;},'maEbO':_0x5dd5('0x71','^f^g'),'muUhF':_0x5dd5('0x72','#1]6')};if(_0x54a61a[_0x5dd5('0x73','di$3')](_0x54a61a[_0x5dd5('0x74',']jXi')],_0x54a61a[_0x5dd5('0x75','dT*[')])){while(!![]){if(_0x54a61a[_0x5dd5('0x76','C[jn')](_0x5dd5('0x77','G3E#'),_0x54a61a['maEbO'])){}else{return _0x1eeeaf;}}}else{w[c](_0x54a61a[_0x5dd5('0x78','J5VS')]);}};return _0x4aee16();}else{if(_0xc3d021['gEbNo'](_0xc3d021[_0x5dd5('0x79','0g80')]('',_0xc3d021[_0x5dd5('0x7a','(yNm')](_0x2335a8,_0x2335a8))[_0xc3d021[_0x5dd5('0x7b','sm2t')]],0x1)||_0xc3d021[_0x5dd5('0x7c','ao7H')](_0x2335a8,0x14)===0x0){if(_0xc3d021['gEbNo'](_0xc3d021['UeMDF'],_0xc3d021['UeMDF'])){}else{debugger;}}else{if(_0xc3d021[_0x5dd5('0x7d','sm2t')](_0xc3d021[_0x5dd5('0x7e','xJN7')],_0xc3d021['haCFB'])){_0xc3d021[_0x5dd5('0x7f','ao7H')](_0x1eeeaf,0x0);}else{debugger;}}}_0xc3d021[_0x5dd5('0x80',']^Ia')](_0x1eeeaf,++_0x2335a8);}try{if(_0x32eab5){return _0x1eeeaf;}else{_0xc3d021['bCnpC'](_0x1eeeaf,0x0);}}catch(_0x5f0ef9){if('CSN'===_0x5dd5('0x81','WEht')){}else{while(!![]){}}}};encode_version = 'jsjiami.com.v5';
