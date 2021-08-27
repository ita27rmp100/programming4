// التقديم
let LenOfName = 0;
setInterval(() => {
    let sen = "تقدم لكم هذه الشبكة كل ما يتعلق بالبرمجة : استفتاءات ، تحديات ، معلومات ، كورسات  إلى غير ذلك."
        /*console.clear()*/
        document.getElementById("intro").innerHTML = (
            sen.slice(0,LenOfName) + "|"
        )
        LenOfName++
    if (LenOfName==sen.length){
        LenOfName = 0
    }
    },200
)
// التنقل
function go(page){
    var titles = {
        "home":"برمجيات | الرئيسية",
        "pinfo":"برمجيات | معلومات برمجية",
        "challenge":"برمجيات | تمارين برمجية",
        "source":"برمجيات | مصادر برمجية"
    };
    document.location = "index.html#"+page;
    document.getElementById(page).style.display = "block";
    document.title = titles[page];
    function open_close(){
        switch (page){
            case "home":
                document.getElementById("challenge").style.display = "none";
                document.getElementById("pinfo").style.display = "none";
                document.getElementById("source").style.display = "none";
                break ;
            case "pinfo":
                document.getElementById("challenge").style.display = "none";
                document.getElementById("home").style.display = "none";
                document.getElementById("source").style.display = "none";
                break ;   
            case "challenge":
                document.getElementById("pinfo").style.display = "none";
                document.getElementById("home").style.display = "none";
                document.getElementById("source").style.display = "none"
                break ;
            case "source":
                document.getElementById("challenge").style.display = "none";
                document.getElementById("home").style.display = "none";
                document.getElementById("pinfo").style.display = "none"
                break ;                    
        }
    }
    setTimeout(open_close,200)
}
// أفكار التمارين و التحديات
var ideas = ["قم بكتابة برنامج بايثون يقوم بحساب مجموع الأعداد من 1 إلى 100",
            "رسم مثلث قائم",
            "قم بكتابة برنامج يقوم بحساب الفترة المستغرقة لكتابة نص في البرنامج",
            "قم بعمل برنامج يطلب منك إسم الأب و العائلة و إسمك ثم يرجع لك الحرف الأول من إسم أبيك و عائلتك بالإضافة إلى إسمك",
            "قم بعمل آلة حاسبة بدون واجهة مستخدم رسومية",
            "قم ببرمجة آلة حاسبة بواجهة مستخدم رسومية",
            "باستخدام مكتبة turtle قم برسم مثلث متقايس الأضلاع",
            "قم بعمل برنامج ذو واجهة مستخدم رسومية للكتابة فيه (وورد مصغر)"
            ];
var help = ["https://twitter.com/ita27rmp100/status/1290787770928070662?s=20",
            "https://twitter.com/ita27rmp100/status/1324801865796722689?s=20",
            "https://twitter.com/labdallahl2/status/1328012890742394883?s=20",
            "https://twitter.com/ita27rmp100/status/1322189870006231040?s=20",
            "https://twitter.com/ita27rmp100/status/1290051113320886282?s=20",
            "https://www.youtube.com/watch?v=IWFz3QGjOLc&t=26s",
            "https://www.youtube.com/watch?v=rXpEAum4nsk",
            "https://www.youtube.com/watch?v=aAHirlNyhKY&list=PLHWcjlt7orKY67czFuffareLg4E03tRhK"
            ]
function chall(){   
    x = Math.round(Math.random()*ideas.length-1);
    document.getElementById("idea").innerHTML = ideas[x];
}  
function help_me(){window.open(help[x])} 
chall()
// المكتبات
var infos = ["لغة malbolg من أصعب لغات البرمجة ، حيث أنك تحتاج إلى 14 سطر لطباعة 'hello world' .",
            "لغة البايثون ظهرت سنة 1991",
            "JSF هو اختصار لـ Java Server Faces، ويعتبر فريم وورك لبناء web application باستخدام جافا",
            "JSONP هي تقنية مستخدمة في الجافاسكربت للتواصل (بتقنية ajax) مع domain مختلف عن الـ domain الحالي.",
            ];
function info(){            
    var y = Math.round(Math.random()*infos.length-0.5);
    document.getElementById("info").innerHTML = infos[y];
}
info()