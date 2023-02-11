const crypto = require("crypto");
const fetch = require('node-fetch');
const fs = require('fs');

let azonosito = "ide az uuid";
console.log(`Beállitott uuid: ${azonosito}`);

const ezmegmi = JSON.parse(`
        {
           "java.specification.version":"17",
           "sun.cpu.isalist":"amd64",
           "sun.jnu.encoding":"Cp1250",
           "java.class.path":"C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/net/minecraft/launchwrapper/f1.0/launchwrapper-f1.0.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/optifine/OptiFine/1.18.2_HD_U_H6/OptiFine-1.18.2_HD_U_H6.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/optifine/launchwrapper-of/2.3/launchwrapper-of-2.3.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/com/mojang/logging/1.0.0/logging-1.0.0.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/com/mojang/blocklist/1.0.10/blocklist-1.0.10.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/com/mojang/patchy/2.2.10/patchy-2.2.10.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/com/github/oshi/oshi-core/5.8.5/oshi-core-5.8.5.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/net/java/dev/jna/jna/5.10.0/jna-5.10.0.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/net/java/dev/jna/jna-platform/5.10.0/jna-platform-5.10.0.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/org/slf4j/slf4j-api/1.8.0-beta4/slf4j-api-1.8.0-beta4.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/org/apache/logging/log4j/log4j-slf4j18-impl/2.17.0/log4j-slf4j18-impl-2.17.0.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/com/ibm/icu/icu4j/70.1/icu4j-70.1.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/com/mojang/javabridge/1.2.24/javabridge-1.2.24.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/net/sf/jopt-simple/jopt-simple/5.0.4/jopt-simple-5.0.4.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/io/netty/netty-all/4.1.68.Final/netty-all-4.1.68.Final.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/com/google/guava/failureaccess/1.0.1/failureaccess-1.0.1.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/com/google/guava/guava/31.0.1-jre/guava-31.0.1-jre.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/org/apache/commons/commons-lang3/3.12.0/commons-lang3-3.12.0.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/commons-io/commons-io/2.11.0/commons-io-2.11.0.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/commons-codec/commons-codec/1.15/commons-codec-1.15.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/com/mojang/brigadier/1.0.18/brigadier-1.0.18.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/com/mojang/datafixerupper/4.1.27/datafixerupper-4.1.27.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/com/google/code/gson/gson/2.8.9/gson-2.8.9.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/com/mojang/authlib/3.2.38/authlib-3.2.38.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/org/apache/commons/commons-compress/1.21/commons-compress-1.21.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/org/apache/httpcomponents/httpclient/4.5.13/httpclient-4.5.13.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/commons-logging/commons-logging/1.2/commons-logging-1.2.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/org/apache/httpcomponents/httpcore/4.4.14/httpcore-4.4.14.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/it/unimi/dsi/fastutil/8.5.6/fastutil-8.5.6.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/org/apache/logging/log4j/log4j-api/2.17.0/log4j-api-2.17.0.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/org/apache/logging/log4j/log4j-core/2.17.0/log4j-core-2.17.0.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/org/lwjgl/lwjgl/3.2.2/lwjgl-3.2.2.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/org/lwjgl/lwjgl-jemalloc/3.2.2/lwjgl-jemalloc-3.2.2.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/org/lwjgl/lwjgl-openal/3.2.2/lwjgl-openal-3.2.2.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/org/lwjgl/lwjgl-opengl/3.2.2/lwjgl-opengl-3.2.2.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/org/lwjgl/lwjgl-glfw/3.2.2/lwjgl-glfw-3.2.2.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/org/lwjgl/lwjgl-stb/3.2.2/lwjgl-stb-3.2.2.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/org/lwjgl/lwjgl-tinyfd/3.2.2/lwjgl-tinyfd-3.2.2.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/libraries/com/mojang/text2speech/1.12.4/text2speech-1.12.4.jar;C:/Users/user/AppData/Roaming/.fyremc.hu/bin/OptiFine 1.18.2.jar",
           "java.vm.vendor":"Oracle Corporation",
           "minecraft.launcher.brand":"FyreMC-Launcher",
           "sun.arch.data.model":"64",
           "jna.library.path":"null;./src/natives/resources/;C:\\\\Users\\\\user\\\\AppData\\\\Roaming\\\\.fyremc.hu\\\\bin\\\\natives",
           "user.variant":"",
           "java.vendor.url":"https://java.oracle.com/",
           "user.timezone":"Europe/Budapest",
           "java.vm.specification.version":"17",
           "os.name":"Windows 10",
           "sun.java.launcher":"SUN_STANDARD",
           "user.country":"HU",
           "sun.boot.library.path":"C:\\\\Users\\\\user\\\\AppData\\\\Roaming\\\\.fyremc.hu\\\\bin\\\\runtime\\\\java-runtime-beta\\\\x64\\\\bin",
           "sun.java.command":"net.minecraft.client.main.launch",
           "jdk.debug":"release",
           "minecraft.launcher.version":"0.8.9",
           "sun.cpu.endian":"little",
           "user.home":"C:\\\\Users\\\\user",
           "user.language":"hu",
           "java.specification.vendor":"Oracle Corporation",
           "java.version.date":"2021-10-19",
           "java.home":"C:\\\\Users\\\\user\\\\AppData\\\\Roaming\\\\.fyremc.hu\\\\bin\\\\runtime\\\\java-runtime-beta\\\\x64",
           "file.separator":"\\\\",
           "java.vm.compressedOopsMode":"32-bit",
           "line.separator":"\\r\\n",
           "java.vm.specification.vendor":"Oracle Corporation",
           "java.specification.name":"Java Platform API Specification",
           "java.awt.headless":"true",
           "fml.ignoreInvalidMinecraftCertificates":"true",
           "user.script":"",
           "sun.management.compiler":"HotSpot 64-Bit Tiered Compilers",
           "java.runtime.version":"17.0.1",
           "user.name":"user",
           "path.separator":";",
           "os.version":"10.0",
           "java.runtime.name":"Java(TM) SE Runtime Environment",
           "file.encoding":"Cp1250",
           "jnidispatch.path":"C:\\\\Users\\\\user\\\\AppData\\\\Local\\\\Temp\\\\jna--1940113314\\\\jna643578695274497112.dll",
           "sun.nio.ch.bugLevel":"",
           "java.vm.name":"Java HotSpot(TM) 64-Bit Server VM",
           "jna.loaded":"true",
           "java.vendor.url.bug":"https://bugreport.java.com/bugreport/",
           "java.io.tmpdir":"C:\\\\Users\\\\user\\\\AppData\\\\Local\\\\Temp\\\\",
           "java.version":"17.0.1",
           "user.dir":"C:\\\\Users\\\\user\\\\AppData\\\\Local",
           "os.arch":"amd64",
           "java.vm.specification.name":"Java Virtual Machine Specification",
           "sun.os.patch.level":"",
           "native.encoding":"Cp1250",
           "java.library.path":"C:\\\\Users\\\\user\\\\AppData\\\\Roaming\\\\.fyremc.hu\\\\bin\\\\natives",
           "java.vm.info":"mixed mode, sharing",
           "java.vendor":"Oracle Corporation",
           "java.vm.version":"17.0.1",
           "sun.io.unicode.encoding":"UnicodeLittle",
           "java.class.version":"61.0"
        }`).toString();


let megvanacc = false;

async function sendResponse(fmctoken, fmcuuid, serverId, kuldjuzit) {
    let json = {};

    json.accessToken = fmctoken;
    json.selectedProfile = fmcuuid;
    json.serverId = serverId;


    let firstPart = sha1Hex(
        ezmegmi +
        "ea022" +
        serverId.substring(1, 8) +
        fmcuuid.toString().substring(0, 4)
    ).substring(0, 39);

    json.d = firstPart + Buffer.from(ezmegmi).toString("base64");

    let body = JSON.stringify(json);
    try {
        const resp = await fetch("http://auth.fyremc.hu/game/join2.php", {
            method: "POST",
            headers: {
                "Accept": "text/html, image/jpeg, *; q=.2, */*; q=.2",
                "Content-Type": "application/json; charset=utf8",
                "User-Agent": "Java/17.0.1",
                "Cache-Control": "no-cache"
            },
            body: body
        }).then(res => res.json()).catch((err) => {
          throw err;
        })
        
        if(kuldjuzit == true) {
          console.log(await resp);
        }

        var fmcdata = await resp;
        if(fmcdata.id != undefined || fmcdata.id != null && kuldjuzit == true) {
            console.log(`MEGVAN ${fmcdata.name} FIÓK`);
            console.log(fmcdata.name);
            console.log(fmcdata.id);
            console.log(fmctoken);
            console.log(`MEGVAN ${fmcdata.name} FIÓK`);
            megvanacc = true;
        }

    } catch(e) {
        throw e;
    }
}

function sha1Hex(s) {
    let digest = crypto.createHash("sha1");
    return digest.update(s).digest("hex");
}   

let szamsor = 0;
let szoveg = "";

const cooldowntime = new Set();

setInterval(()=>{
    function generateAccesstoken() {
        let result = '63';
        const characters = 'abcdef0123456789';
        const numbers = '0123456789';
        for (let i = 0; i < 21; i++) {
          if (i === 12) {
            result += '.';  
          } else if (i > 12) {
            result += numbers.charAt(Math.floor(Math.random() * numbers.length));
          } else {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
          }
        }

        szoveg = result;
        return;
      }
          if(megvanacc == false) {  
            fs.readFile('./wyaxe.txt', 'utf8', (err, data) => {
              if (err) throw err;

              let lines = data.split('\n');
              for (let i = 0; i < lines.length; i++) {
                if (lines[i] == szoveg) {
                  if(cooldowntime.has("wyaxe")) {} else {
                    cooldowntime.add("wyaxe");
                    setTimeout(() => {
                      cooldowntime.delete("wyaxe");
                    }, 800);
                    return generateAccesstoken();
                  }
                  
                } else {
                  if(cooldowntime.has("wyaxe")) {} else {
                    cooldowntime.add("wyaxe");
                    setTimeout(() => {
                      cooldowntime.delete("wyaxe");
                    }, 800);
                    sendResponse(generateAccesstoken(), azonosito, "play.fyremc.hu", true);
                  }
                }
              }
              szamsor += 1;
              console.log("\n" + szamsor + "    ++++++++       TOKEN: " + szoveg)
            });

            let fmctokendata = szoveg + "\n";
            fs.appendFile('./wyaxe.txt', fmctokendata, (err) => {
              if (err) throw err;


            });

          }
  }, 800)
