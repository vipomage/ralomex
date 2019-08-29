(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/about-us/about-innovations/about-innovations.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/about-us/about-innovations/about-innovations.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>about-innovations works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/about-us/awards/awards.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/about-us/awards/awards.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"awards | async\" class=\"container-fluid\">\n  <div class=\"card-deck\" *ngFor=\"let awardsArray of awards | async | keyValueFilter | objectSplitToArray: 3\">\n    <div *ngFor=\"let award of awardsArray\" class=\"card mb-3\">\n      <div class=\"view overlay\">\n        <img class=\"card-img-top\" src=\"{{ award.value.image }}\" alt=\"award image cap\" />\n      </div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">{{ award.value.heading }}</h4>\n        <p class=\"card-text\">{{ award.value.content }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/about-us/history/history.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/about-us/history/history.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrap\">\n  <div class=\"container clearfix\">\n    <!-- ============================================\n       Content Start\n       ============================================= -->\n    <div class=\"col_two_fifth nobottommargin\">\n      <h3>&nbsp; История на Раломекс</h3>\n      <div class=\"accordion clearfix nobottommargin\">\n        <p class=\"nobottommargin\">\n          &nbsp;&nbsp;&nbsp; Началото на „Раломекс” е поставено на 01.01.1976 год. със заповед № І – 35 от 10.02.1976 г. на\n          Министъра на земеделието и хранителната промишленост, считано от 01.01.1976 г., с която са определени терен и сгради от\n          тогавашната хидромелиоративна станция в гр.Завет за създаването на машиностроителен завод, на основата на промишлената\n          дейност на хидромелиоративната станция. За директор на завода е назначен инж. Петко Христов, който успява да запали с\n          ентусиазма си хората и поставя добри основи за бъдещето му развитие. Започва дейност с 240 души персонал. Произвежда\n          кооперирани детайли за силажокомбайни “КИР-1,5” за МЗ”Георги Димитров” гр.Русе, детайли, възли и отливка от сив чугун за\n          сеялки за МЗ”Иван Йонков” гр.Трявна, възли и детайли за МЗ”Победа” гр.Трявна. Същата година като собствено производство\n          започва производството на приспособление за вършитба на люцерна и комбайни за прибиране на моркови възложени от\n          Министерството на земеделието и хранителната промишленост без да има необходимата конструктивно-технологична\n          документация – само по доставени образци.\n        </p>\n      </div>\n    </div>\n    <div class=\"col_three_fifth col_last nobottommargin\">\n      <div class=\"fslider\" data-pause=\"3000\" data-speed=\"400\" data-easing=\"easeOutQuad\" data-arrows=\"false\">\n        <div class=\"flexslider\" style=\"top: 50px;\">\n          <div class=\"flex-viewport\" style=\"overflow: hidden; position: relative; \"></div>\n          <ol class=\"flex-control-nav flex-control-paging\">\n            <li><a class=\"\">1</a></li>\n            <li><a class=\"\">2</a></li>\n            <li><a class=\"flex-active\">3</a></li>\n            <li><a class=\"\">4</a></li>\n          </ol>\n          <div class=\"flex-viewport\" style=\"overflow: hidden; position: relative; height: 427px;\">\n            <div class=\"slider-wrap\" style=\"width: 1200%; margin-left: -1998px;\">\n              <div class=\"slide clone\" style=\"width: 666px; float: left; display: block;\" aria-hidden=\"true\">\n                <img src=\"https://ralomex.com/Images/ral1t33.jpg\" alt=\"плуг ПН 6-40\" draggable=\"false\" />\n              </div>\n              <div class=\"slide\" style=\"width: 666px; float: left; display: block;\">\n                <img src=\"https://ralomex.com/Images/ralqwe1.jpg\" alt=\"плуг ПН 4-25\" draggable=\"false\" />\n              </div>\n              <div class=\"slide\" style=\"width: 666px; float: left; display: block;\">\n                <img src=\"https://ralomex.com/Images/ralll1.jpg\" alt=\"плуг П-30-35\" draggable=\"false\" />\n              </div>\n              <div class=\"slide flex-active-slide\" style=\"width: 666px; float: left; display: block;\">\n                <img src=\"https://ralomex.com/Images/ral1t32.jpg\" alt=\"плуг ПН 4-40\" draggable=\"false\" />\n              </div>\n              <div class=\"slide\" style=\"width: 666px; float: left; display: block;\">\n                <img src=\"https://ralomex.com/Images/ral1t33.jpg\" alt=\"плуг ПН 6-40\" draggable=\"false\" />\n              </div>\n              <div class=\"slide clone\" style=\"width: 666px; float: left; display: block;\" aria-hidden=\"true\">\n                <img src=\"https://ralomex.com/Images/ralqwe1.jpg\" alt=\"плуг ПН 4-25\" draggable=\"false\" />\n              </div>\n            </div>\n          </div>\n          <ol class=\"flex-control-nav flex-control-paging\">\n            <li><a>1</a></li>\n            <li><a>2</a></li>\n            <li><a>3</a></li>\n            <li><a>4</a></li>\n          </ol>\n        </div>\n      </div>\n    </div>\n    <br /><br />\n    <div style=\"margin: 20px 0;clear: both;float: left;\">\n      <p>\n        През следващата 1977 година се усвоява производството на плугове – навесни с корпус 25 см и прикачни с корпус 30 см, като\n        се приема производството им от завода за малки трактори гр.Русе. Същата година започва и производството на тракторни\n        валяци.\n      </p>\n      <p>\n        През 1979 година завода вече е в състава на Стопански комбинат “Г.Димитров” гр.Русе и се ръководи от Асен Асенов –\n        изпратен да оглави завода. Изпращат се и екипи от гр.Русе за укрепване на отделните звена – технологично-конструктивни,\n        енерго-механични, контролни, производствени. Усъвършенстват се плуговете, разширява се тяхната номенклатура. По-късно\n        започва и подготовка за усвояване на производството на нова генерация плугове и приспособление за силажиране на редови\n        култури.\n      </p>\n      <p>\n        В началото на 1980 година Асен Асенов е сменен с инж.Ангел Генев. Усвоява се производството на триредово приспособление\n        към силажокомбайна КСС-100Т, разширява се гамата от плугове – усвоява се производството на обръщателен плуг ПНО-3-25 за\n        трактор “Мургаш-45” и плуг ПП-1,6. Усилено се произвеждат тракторни валяци, като годишното производство достига до 1600\n        броя. В решителна фаза e и строителството на две халета под формата на складове. Леярското производство и заваровъчния цех\n        все още са в сградите на ХМТС. Сериозно се стабилизира организацията на производството. Постоянно се увеличава персонала и\n        производството.\n      </p>\n    </div>\n  </div>\n  <div class=\"content-section\">\n    <div class=\"container clearfix\">\n      <div class=\"col_one_fourth center nobottommargin fadeInDown animated\" data-animate=\"fadeInDown\">\n        <img src=\"https://ralomex.com/Images/hh/history_01.png\" alt=\"инж. Петко Христов\" draggable=\"false\" />\n        <p class=\"nobottommargin\">инж. Петко Христов</p>\n      </div>\n      <div class=\"col_one_fourth center nobottommargin fadeInDown animated\" data-animate=\"fadeInDown\" data-delay=\"300\">\n        <img src=\"https://ralomex.com/Images/hh/history_02.png\" alt=\"Асен Асенов\" draggable=\"false\" />\n        <p class=\"nobottommargin\">Асен Асенов</p>\n      </div>\n      <div class=\"col_one_fourth center nobottommargin fadeInDown animated\" data-animate=\"fadeInDown\" data-delay=\"600\">\n        <img src=\"https://ralomex.com/Images/hh/history_03.png\" alt=\"инж.Ангел Генев\" draggable=\"false\" />\n        <p class=\"nobottommargin\">инж.Ангел Генев</p>\n      </div>\n      <div class=\"col_one_fourth center nobottommargin col_last fadeInDown animated\" data-animate=\"fadeInDown\" data-delay=\"900\">\n        <img src=\"https://ralomex.com/Images/hh/history_04.png\" alt=\"инж.Мехмед Узунов\" draggable=\"false\" />\n        <p class=\"nobottommargin\">инж.Мехмед Узунов</p>\n      </div>\n      <div class=\"clear\"></div>\n    </div>\n  </div>\n  <div class=\"container clearfix\">\n    <div style=\"margin: 20px 0;clear: both;float: left;\">\n      <p>\n        През м.ноември 1981 година заводът все още в състава на стопанския комбинат “Г.Димитров” гр.Русе, но поради преминаване на\n        друга работа инж.Ангел Генев напуска и за директор е издигнат инж.Мехмед Узунов, който и до днес е на този пост, посветил\n        целия си професионален и трудов стаж в утвърждаване на името и просперитета на предприятието.\n      </p>\n      <p>\n        През 1982 година започва серийно производство на плугове от нова генерация – с хидравлично задействане на привеждането от\n        работно в транспортно положение с представител ПП-1,6 – произведени са общо 490 бр. Дотогава са произведени и 2474 бр.\n        плуга П-4-30 МБ. Плуг ПП-1,6 получава златен медал на Пловдивския Международен панаир. Производството на ПРК-3 продължава\n        до 1990 г. Когато се снема от производство са произведени общо 2539 бр. През същата година се заселват новите корпуси –\n        механо-монтажен и заваровъчен и административен комплекс. Продължава работното проектиране на площадката от ИП”Машпроект”\n        гр.Русе.\n      </p>\n    </div>\n  </div>\n  <div class=\"content-section\">\n    <div class=\"container clearfix\">\n      <div class=\"col_three_fifth nobottommargin fadeInLeft animated\" data-animate=\"fadeInLeft\">\n        <p>\n          През 1987г. започва производството на агрегати за директна сеитба – първо за редови култури, а по-късно и за култури за\n          слята повърхност – собствени разработки. Поради стремежа за въвеждане на минимални обработки наложени в земеделието през\n          1988 г. започва редовно производство на сеялка за директна сеитба СДС-3,6 разработка на основата на сеялка “ХАУАРД”,\n          произведена е пробна серия от 20 бр. и редовна серия от 100 бр. През тези години развитието на плуговото производство\n          изостава. По-късно през деветдесетте години производството на плугове се възобновява, утвърждава се през годините и\n          съхранява до днес.\n        </p>\n      </div>\n      <div\n        class=\"col_two_fifth col_last nobottommargin fadeInUp animated\"\n        data-animate=\"fadeInUp\"\n        style=\"margin-bottom: 0!important;\"\n      >\n        <img src=\"https://ralomex.com/Images/seyalka.jpg\" alt=\"сеялка\" style=\"margin-bottom: -65px;\" />\n      </div>\n    </div>\n  </div>\n  <div class=\"container clearfix\">\n    <div class=\"col_two_fifth col_last nobottommargin fadeInRight animated\" data-animate=\"fadeInRight\">\n      <img src=\"https://ralomex.com/Images/pn220.jpg\" alt=\"плуг пн 2-20\" />\n    </div>\n    <div class=\"col_three_fifth nobottommargin fadeInLeft animated\" data-animate=\"fadeInLeft\">\n      <p>\n        Настъпва периодът на работа в нови икономически условия – преход от планова към пазарна икономика. Кризата която настъпва\n        в българското земеделие след 1989 година довежда до значително ограничаване на производството, В резултат на това през\n        1990 г. започва намаляване на търсенето на плугове и триредово приспособление ПРК-3А. Започва преструктуриране на\n        производството – за сметка на големи плугове започва усвояване и производство на малки плугове с 1,2,3 тела с 20 см и 25\n        см корпус.\n      </p>\n    </div>\n    <div class=\"clear\"></div>\n  </div>\n  <div class=\"content-section\">\n    <div class=\"container clearfix\">\n      <div class=\"col_one_fourth center nobottommargin fadeInDown animated\" data-animate=\"fadeInDown\">\n        <img src=\"https://ralomex.com/Images/hh/pn235.jpg\" alt=\"плуг пн 2-25\" draggable=\"false\" />\n      </div>\n      <div class=\"col_one_fourth center nobottommargin fadeInDown animated\" data-animate=\"fadeInDown\" data-delay=\"300\">\n        <img src=\"https://ralomex.com/Images/hh/pn335.jpg\" alt=\"плуг пн 3-35\" draggable=\"false\" />\n      </div>\n      <div class=\"col_one_fourth center nobottommargin fadeInDown animated\" data-animate=\"fadeInDown\" data-delay=\"600\">\n        <img src=\"https://ralomex.com/Images/hh/pn435.jpg\" alt=\"плуг пн 4-35\" draggable=\"false\" />\n      </div>\n      <div class=\"col_one_fourth center nobottommargin col_last fadeInDown animated\" data-animate=\"fadeInDown\" data-delay=\"900\">\n        <img src=\"https://ralomex.com/Images/hh/pn535.jpg\" alt=\"плуг пн 5-35\" draggable=\"false\" />\n      </div>\n      <div class=\"clear\"></div>\n    </div>\n  </div>\n  <div class=\"container clearfix\">\n    <p>\n      През годините е извършен износ на плугове ПН-4-25 за Виетнам, ПН-3-35 за Албания и Корея, дискови плугове и култиватори за\n      Мароко, плугове и брани за Гърция, обръщателни плугове и култиватори и животински плугове за Алжир., дискови плугове за\n      Нигерия, плугове за Румъния.\n    </p>\n    <p>\n      През 1991 година със заповед № РД-1785 от 26.08.1991 се преустановява дейността на ОСО”Агромашина” и се създава търговско\n      дружество с ограничена отговорност с управител инж.Мехмед Узунов и се регистрира, като такъв в Разградски Окръжен Съд с\n      решение № 44. Приема името “РАЛОМЕКС” – съчетаващо старобългарското име на плуг, други машини и експорт на продукцията.\n    </p>\n    <p>\n      През 1993 г. се поставя началото по усвояване с ускорени методи на култиватори за слята обработка – КСН (навесни), а\n      по-късно и КСП (прикачни) в началото с работна ширина 2,4 и 3,8 м, а от 1994 г. и с работна ширина 7,2 и 8 м., които през\n      2003 г. достигат до 10 и 12 метрови. През 1994 г. започва усвояване и производство на дискови брани – в началото с работна\n      ширина 2,5 и 5 м, а по-късно и целия ред от 2 до 9 м.\n    </p>\n    <div class=\"clear\"></div>\n  </div>\n  <div class=\"content-section\">\n    <div class=\"container clearfix\">\n      <div class=\"col_one_fourth center nobottommargin fadeInDown animated\" data-animate=\"fadeInDown\">\n        <img src=\"https://ralomex.com/Images/hh/knu1-8.jpg\" alt=\"Култиватор КНУ\" draggable=\"false\" />\n      </div>\n      <div class=\"col_one_fourth center nobottommargin fadeInDown animated\" data-animate=\"fadeInDown\" data-delay=\"300\">\n        <img src=\"https://ralomex.com/Images/hh/ksp12.jpg\" alt=\"Култиватор КСП 12\" draggable=\"false\" />\n      </div>\n      <div class=\"col_one_fourth center nobottommargin fadeInDown animated\" data-animate=\"fadeInDown\" data-delay=\"600\">\n        <img src=\"https://ralomex.com/Images/hh/bdp2-5.jpg\" alt=\"Дискова Брана БДП 2.5\" draggable=\"false\" />\n      </div>\n      <div class=\"col_one_fourth center nobottommargin col_last fadeInDown animated\" data-animate=\"fadeInDown\" data-delay=\"900\">\n        <img src=\"https://ralomex.com/Images/hh/bdp5.jpg\" alt=\"Дискова Брана БДП 5\" draggable=\"false\" />\n      </div>\n      <div class=\"clear\"></div>\n    </div>\n  </div>\n  <div class=\"container clearfix\">\n    <div class=\"col_two_fifth col_last nobottommargin fadeInRight animated\" data-animate=\"fadeInRight\">\n      <img src=\"https://ralomex.com/Images/getaward1.jpg\" alt=\"награда Раломекс\" />\n    </div>\n    <div class=\"col_three_fifth nobottommargin fadeInLeft animated\" data-animate=\"fadeInLeft\">\n      <p>\n        Значителен успех дружеството постига през 1999 с усвояването на нови изделия – цяла гама обръщателни плугове, комплектация\n        на култиваторите за слята обработка с роторни брани, зъбни брани. Запълва се реда плугове, култиватори и брани, за което е\n        отличен с „ГРАМОТА – първо място-български производител” на Седмото международно изложение „Селското стопанствоо и всичко\n        за него – Добрич/99”\n      </p>\n    </div>\n    <div class=\"clear\"></div>\n  </div>\n  <div class=\"content-section\">\n    <div class=\"container clearfix\">\n      <div class=\"col_three_fifth nobottommargin fadeInLeft animated\" data-animate=\"fadeInLeft\">\n        <p>\n          След 2002 г. производството започва да се увеличава с темпове около с 25% годишно. Следствие на което започва ново\n          строителство по завършване на първи корпус и закупуване на оборудване. През Януари 2005 год. корпуса се заселва с\n          производствени машини, в резултат на което са ликвидирани кръстосаните технологични потоци. Рязко се подобряват\n          условията на труд и признанието не закъснява. На Десетото международно изложение „Селското стопанство и всичко за него –\n          Добрич 2002” колективът е отличен с грамота за комплексно представяне.\n        </p>\n      </div>\n      <div\n        class=\"col_two_fifth col_last nobottommargin fadeInUp animated\"\n        data-animate=\"fadeInUp\"\n        style=\"margin-bottom: 0!important;\"\n      >\n        <img src=\"https://ralomex.com/Images/getaward.jpg\" alt=\"Награда\" style=\"margin-bottom: -65px;\" />\n      </div>\n    </div>\n  </div>\n  <div class=\"container clearfix\">\n    <div class=\"col_two_fifth col_last nobottommargin fadeInRight animated\" data-animate=\"fadeInRight\">\n      <img\n        src=\"https://ralomex.com/Images/30years.jpg\"\n        alt=\"30 години Раломекс\"\n        style=\"margin-left: auto;margin-right: auto;display: block\"\n      />\n    </div>\n    <div class=\"col_three_fifth nobottommargin fadeInLeft animated\" data-animate=\"fadeInLeft\">\n      <p>\n        За \"Раломекс\" АД 2006г. започва бурно с официалните празненства на 30- годишният юбилей. На специален коктейл присъстваха\n        над 200 официални гости, изпълнителният директор и цялото ръководство приеха поздравления от свои клиенти и доставчици,\n        както и народните представители д-р Хасан Адемов и Дауд Осман. На официалната вачеря инж. Мехмед Узунов награди със златен\n        плакет дългогодишни партньори на фирмата.\n      </p>\n    </div>\n    <div class=\"clear\"></div>\n  </div>\n  <div class=\"content-section\">\n    <div class=\"container clearfix\">\n      <div class=\"col_three_fifth nobottommargin fadeInLeft animated\" data-animate=\"fadeInLeft\">\n        <p>\n          Водени от своето верую, че \"Клиентът винаги има право\", констриктивно-технологичният отдел с ръководител д-р инж. Петър\n          Богословов разработва и внедрява в производсвото специализирани почвообработващи машини като: плуг за оранжерии ,\n          култиватор за рози. Пускат се в производство серия навесни дисково брани от 1,8 до 2,2 метра. Допълва се номенклатурата\n          на прикачните брани с X-образни такива.\n        </p>\n      </div>\n      <div\n        class=\"col_two_fifth col_last nobottommargin fadeInUp animated\"\n        data-animate=\"fadeInUp\"\n        style=\"margin-bottom: 0!important;\"\n      >\n        <img\n          src=\"https://ralomex.com/Images/bogoslovov.jpg\"\n          alt=\"д-р инж.  Петър Богословов\"\n          style=\"margin-left: auto;margin-right: auto;display: block\"\n        />\n      </div>\n      <div style=\"margin: 20px 0;clear: both;float: left;\"></div>\n    </div>\n    <div class=\"container clearfix\">\n      <div class=\"col_one_fourth center nobottommargin fadeInDown animated\" data-animate=\"fadeInDown\">\n        <img src=\"https://ralomex.com/Images/hh/poran.jpg\" alt=\"Плуг за оранжерии\" draggable=\"false\" />\n      </div>\n      <div class=\"col_one_fourth center nobottommargin fadeInDown animated\" data-animate=\"fadeInDown\" data-delay=\"300\">\n        <img src=\"https://ralomex.com/Images/hh/krozi.jpg\" alt=\"Култиватор за рози\" draggable=\"false\" />\n      </div>\n      <div class=\"col_one_fourth center nobottommargin fadeInDown animated\" data-animate=\"fadeInDown\" data-delay=\"600\">\n        <img src=\"https://ralomex.com/Images/hh/bdn22.jpeg\" alt=\"Дискова Брана БДН 2.2\" draggable=\"false\" />\n      </div>\n      <div class=\"col_one_fourth center nobottommargin col_last fadeInDown animated\" data-animate=\"fadeInDown\" data-delay=\"900\">\n        <img src=\"https://ralomex.com/Images/hh/bdn33x.jpg\" alt=\"Дискова Брана БДН 3.3\" draggable=\"false\" />\n      </div>\n      <div class=\"clear\"></div>\n    </div>\n  </div>\n  <div class=\"container clearfix\">\n    <div class=\"col_two_fifth col_last nobottommargin fadeInRight animated\" data-animate=\"fadeInRight\">\n      <img\n        src=\"https://ralomex.com/Images/ruzunov.jpg\"\n        alt=\"Рашит Узунов\"\n        style=\"margin-left: auto;margin-right: auto;display: block\"\n      />\n    </div>\n    <div class=\"col_three_fifth nobottommargin fadeInLeft animated\" data-animate=\"fadeInLeft\">\n      <p>\n        С приемането на България в Европейският Съюз на 01.01.2007 г. и представените възможности за получаване на безбъзмездни\n        финансови помощи от малките и средните предприятия \"Раломекс\" АД започва уселено разработване на проекти. Под\n        ръководството на гл. инж Рашит Узунов, фирмата печели първия си проект по програма ФАР за консултантски услуги, а по късно\n        и проект за ново технологично оборудване.\n      </p>\n      <p>\n        Развитието на дисковите брани навлиа в нов етап. Разработени са размери 3,8 и 4,2 както и 8 метра, на който принцип се\n        констроира и наъ голямата брана произвеждана в България БДП-10. Успехите на фирмата през 2006 г. и през 2007 г. мотивират\n        допълнително екипа на фирмата и се приема курс за разработване и внедряване на иновации в произвежданата продукция.\n      </p>\n    </div>\n    <div class=\"clear\"></div>\n    <div style=\"margin: 40px 0;clear: both;float: left;\"></div>\n  </div>\n  <div class=\"container clearfix\">\n    <div style=\"margin: 40px 0;clear: both;float: left;\"></div>\n    <p>\n      През 2008 г. се конструират и пускат в производство серия иновативни машини: разрохвачи, плугове с нова кинематика и полу\n      автоматични предпазители както и нов тип култиватор със S-образен работен орган.\n    </p>\n    <p>\n      Плуговото производство се допълва и от нова генерация плугове с автоматични предпазители тип \"non-stop\". В производство\n      влиза най-големият плуг произвеждан в България от този тип (ПП-10-35А).\n    </p>\n    <div class=\"clear\"></div>\n  </div>\n  <div class=\"content-section\">\n    <div class=\"container clearfix\">\n      <div class=\"col_three_fifth nobottommargin fadeInLeft animated\" data-animate=\"fadeInLeft\">\n        <p>\n          Разработването на проекти по Европйските фондове довежда до нов успех. През 2009 г. се подписва договор за безвъзмездна\n          финансова помощ с ИАНМСП за закупуване на високотехнологично оборудване с CNC-управлене. През 2010 г. е включено в\n          производствения процес. Именно това оборудване дава възможност на фирмата да усвои производство на нови серии плугове\n          регулируем тип. Разработени и пуснати в производство са регулируеми плуговеза предсеидбена и дълбока оран за всички\n          модификации трактори.\n        </p>\n      </div>\n      <div\n        class=\"col_two_fifth col_last nobottommargin fadeInUp animated\"\n        data-animate=\"fadeInUp\"\n        style=\"margin-bottom: 0!important;\"\n      >\n        <img src=\"https://ralomex.com/Images/PNR.4.20-28.jpg\" alt=\"Плуг ПНР.4.20-28 \" />\n      </div>\n    </div>\n  </div>\n  <div class=\"container clerfix\">\n    <div class=\"promo clearfix nobottommargin\">\n      <div class=\"promo-desc fadeInDown animated\" data-animate=\"fadeInDown\">\n        <h3>\n          Следвайки своето мото <span>\"Машини за модерно земеделие\"</span> , Раломекс АД продължава своето развитие и гледа в\n          бъдещето с надежда за по силно развитие и отвраждаване на пазара, както в България така и в Европейския съюз.\n        </h3>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/about-us/projects/projects.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/about-us/projects/projects.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center\">\n  <div class=\"wrapper w-auto\" *ngFor=\"let project of projects | async | keyValueFilter\">\n    <a class=\"btn btn-primary\" [attr.data-target]=\"'#modal-' + project.key\" data-toggle=\"modal\" type=\"button\">\n      {{ project.value.heading }}\n    </a>\n    <!-- Modal -->\n    <div\n      class=\"modal fade\"\n      id=\"modal-{{ project.key }}\"\n      tabindex=\"-1\"\n      role=\"dialog\"\n      aria-labelledby=\"myModalLabel\"\n      aria-hidden=\"true\"\n    >\n      <div class=\"modal-dialog modal-lg   modal-notify modal-success\" role=\"document\">\n        <!--Content-->\n        <div class=\"modal-content\">\n          <!--Header-->\n          <div class=\"modal-header\">\n            <p class=\"heading lead text-center\">{{ project.value.heading }}</p>\n\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\" class=\"white-text\">×</span>\n            </button>\n          </div>\n\n          <!--Body-->\n          <div class=\"modal-body\">\n            <div class=\"text-center\">\n              <img src=\"{{ project.value.image }}\" alt=\"\" />\n              <hr />\n              <p>{{ project.value.content }}</p>\n            </div>\n          </div>\n\n          <!--Footer-->\n          <div class=\"modal-footer text-center\">\n            <a type=\"button\" class=\"btn btn-outline-danger waves-effect\" data-dismiss=\"modal\">Затвори</a>\n          </div>\n        </div>\n        <!--/.Content-->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/about-us/the-team/team-card/team-card.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/about-us/the-team/team-card/team-card.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"member\" class=\"card card-product\">\n  <div class=\"card-header card-header-image\" data-header-animation=\"true\">\n    <a>\n      <img class=\"img\" [attr.src]=\"member.avatarUrl\" />\n    </a>\n  </div>\n  <div class=\"card-body text-center\">\n    <h5 class=\"card-title\">\n      <a>{{ member.name }}</a>\n    </h5>\n    <div class=\"card-description\">\n      {{ member.description }}\n    </div>\n  </div>\n  <div class=\"card-footer text-center\">\n    <div>\n      <h6 class=\"text-bold\">{{ member.duty }}</h6>\n    </div>\n    <div class=\"stats\">\n      <a class=\"mb-1\" target=\"_blank\" [attr.href]=\"'mailto:' + member.email\">\n        <i class=\"fas fa-envelope mr-2\"></i>{{ member.email }}</a\n      >\n      <a target=\"_blank\" [attr.href]=\"'tel:' + member.phone\"><i class=\"fas fa-phone mr-2\"></i>{{ member.phone }}</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/about-us/the-team/the-team.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/about-us/the-team/the-team.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"teamMembers\" class=\"container-fluid the-team-container p-5\">\n  <div class=\"row\">\n    \n    <div class=\"col-4 mt-3\" *ngFor=\"let member of teamMembers | keyvalue\">\n      <app-team-card [member]=\"member.value\"></app-team-card>\n    </div>\n    \n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/about/team-dialog/team-dialog.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/about/team-dialog/team-dialog.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"teamMemberFG\" class=\"card container disk-dialog-container\">\n  <div class=\"row card-body justify-content-center\">\n    <form class=\"row justify-content-center\" [formGroup]=\"teamMemberFG\">\n      <div class=\"col-6 align-self-center\" *ngFor=\"let inputField of inputFields\">\n        <mat-form-field class=\"col\" *ngIf=\"inputField.key !== 'avatarUrl'\">\n          <input\n            autocomplete=\"new-password\"\n            matInput\n            [placeholder]=\"inputField.value\"\n            [formControlName]=\"inputField.key\"\n            type=\"text\"\n          />\n        </mat-form-field>\n        <input class=\"col\" *ngIf=\"inputField.key === 'avatarUrl'\" placeholder=\"avatarUrl\" type=\"file\" (change)=\"onFileChange($event)\" />\n      </div>\n      \n    </form>\n  </div>\n  <hr />\n  <div class=\"row p-0 m-0 justify-content-end\">\n    <button class=\"btn btn-warning bnt-sm\" (click)=\"dialogRef.close()\">Close</button>\n    <button [disabled]=\"teamMemberFG.invalid || uploading\" class=\"btn btn-success btn-lg ml-auto\" (click)=\"saveMember()\">Save</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/admin.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/admin.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"!(fireService.online | async) ? 'disabled' : ''\" class=\"container-fluid\">\n  <div class=\"col-md-12\">\n    <div class=\"user text-center\">\n      <div *ngIf=\"!(authService.user | async)\" class=\"button-wrapper\">\n        <div (click)=\"authService.signIn()\" id=\"gSignInWrapper\">\n          <div id=\"customBtn\" class=\"customGPlusSignIn\"><span class=\"icon\"></span> <span class=\"buttonText\">Google</span></div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"authService.user | async\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-2\">\n            <nav>\n              <button class=\"btn btn-warning\" (click)=\"authService.logout()\" *ngIf=\"authService.user | async\">\n                Logout\n              </button>\n              <ul class=\"nav flex-column products-nav\">\n                <li routerLinkActive=\"active\" class=\"nav-item\">\n                  <!--              <a class=\"nav-link\" [routerLink]=\"[{ outlets: { admin: ['ploughs'] } }]\">Плугове</a>-->\n                  <a class=\"nav-link\" (click)=\"showAddProductDialog('ploughs')\">Плугове</a>\n                </li>\n                <li routerLinkActive=\"active\" class=\"nav-item\">\n                  <a class=\"nav-link\" (click)=\"showAddProductDialog('disks')\">Дискови Брани</a>\n                </li>\n                <li routerLinkActive=\"active\" class=\"nav-item\">\n                  <a class=\"nav-link\" (click)=\"showAddProductDialog('cultivators')\">Култиватори</a>\n                </li>\n                <li routerLinkActive=\"active\" class=\"nav-item\">\n                  <a class=\"nav-link\" (click)=\"showAddProductDialog('rollers')\">Валяци</a>\n                </li>\n                <li routerLinkActive=\"active\" class=\"nav-item\">\n                  <a class=\"nav-link\" (click)=\"showAddProductDialog('shredders')\">Раздробители</a>\n                </li>\n                <li routerLinkActive=\"active\" class=\"nav-item\">\n                  <a class=\"nav-link\" (click)=\"showAddProductDialog('sprayers')\">Пръскачки</a>\n                </li>\n                <li routerLinkActive=\"active\" class=\"nav-item\">\n                  <a class=\"nav-link\" (click)=\"showAddProductDialog('special')\">Специализирани</a>\n                </li>\n                <li routerLinkActive=\"active\" class=\"nav-item\">\n                  <a class=\"nav-link\" (click)=\"showAddProductDialog('parts')\">Резервни Части</a>\n                </li>\n                <li routerLinkActive=\"active\" class=\"nav-item\">\n                  <a class=\"nav-link\" (click)=\"showAddProductDialog('tools')\">Работни Органи</a>\n                </li>\n              </ul>\n              <ul class=\"secondary-nav\">\n                <li routerLinkActive=\"active\" class=\"nav-item\">\n                  <a [routerLink]=\"[{ outlets: { admin: ['home'] } }]\" class=\"nav-link\">Начални Ел.</a>\n                </li>\n                <li routerLinkActive=\"active\" class=\"nav-item\">\n                  <a [routerLink]=\"[{ outlets: { admin: ['news'] } }]\" class=\"nav-link\">Новини</a>\n                </li>\n                <li routerLinkActive=\"active\" class=\"nav-item\">\n                  <a [routerLink]=\"[{ outlets: { admin: ['awards'] } }]\" class=\"nav-link\">Награди</a>\n                </li>\n                <li routerLinkActive=\"active\" class=\"nav-item\">\n                  <a [routerLink]=\"[{ outlets: { admin: ['projects'] } }]\" class=\"nav-link\">Проекти</a>\n                </li>\n                <li routerLinkActive=\"active\" class=\"nav-item\">\n                  <a (click)=\"showMemberDialog()\" class=\"nav-link\">Екип</a>\n                </li>\n              </ul>\n            </nav>\n          </div>\n          <div class=\"col-md-10 text-center\">\n            <div class=\"container-fluid pl-1\">\n              <router-outlet class=\"admin-router\" name=\"admin\"></router-outlet>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/awards/add-awards/add-awards.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/controls/awards/add-awards/add-awards.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"saveAwardElement(form.value)\">\n  <div class=\"form-group\">\n    <label for=\"heading\">Заглавие</label>\n    <input ngModel required class=\"form-control\" type=\"text\" id=\"heading\" name=\"heading\" />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"content\">Съдържание на наградата</label>\n    <textarea ngModel required class=\"form-control\" name=\"content\" id=\"content\" cols=\"30\" rows=\"10\"></textarea>\n  </div>\n  <div class=\"form-control-plaintext\">\n    <label for=\"catImage\">Снимка</label>\n    <input\n      (change)=\"startUpload($event.target.files)\"\n      [disabled]=\"preventEdit\"\n      name=\"image\"\n      ngModel\n      class=\"form-control-file\"\n      type=\"file\"\n      accept=\"image/*\"\n      id=\"catImage\"\n    />\n    <div>\n      <img *ngIf=\"image\" class=\"img-thumbnail col-md-4\" src=\"{{ image }}\" alt=\"news image preview\" />\n    </div>\n  </div>\n  <button [disabled]=\"!form.valid || this.imgService.preventEdit\" class=\"btn btn-primary\" type=\"submit\">\n    Запази\n  </button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/awards/awards-controls/awards-controls.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/controls/awards/awards-controls/awards-controls.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Награди</h2>\n<div class=\"container-fluid\">\n  <div class=\"col-md-12 text-center buttons-container\">\n    <div>\n      <a class=\"btn btn-primary\" [routerLink]=\"[{ outlets: { controls: ['add'] } }]\">Добави</a>\n      <a class=\"btn bg-warning\" [routerLink]=\"[{ outlets: { controls: ['edit'] } }]\">Редактирай</a>\n    </div>\n  </div>\n  <router-outlet name=\"controls\" class=\"container-fluid\"></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/awards/edit-awards/edit-awards.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/controls/awards/edit-awards/edit-awards.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <form *ngIf=\"awardElement\" #form=\"ngForm\" (ngSubmit)=\"editAwardElement(awardElementId, form.value).then((awardElement = null))\">\n    <img class=\"img-thumbnail\" src=\"{{ awardElement.image }}\" alt=\"\" />\n    <div class=\"form-group\">\n      <label for=\"heading\">Заглавие</label>\n      <input [(ngModel)]=\"awardElement.heading\" required class=\"form-control\" type=\"text\" id=\"heading\" name=\"heading\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"content\">Съдържание на новината</label>\n      <textarea\n        [(ngModel)]=\"awardElement.content\"\n        required\n        class=\"form-control\"\n        name=\"content\"\n        id=\"content\"\n        cols=\"30\"\n        rows=\"10\"\n      ></textarea>\n    </div>\n    <div class=\"form-control-plaintext\">\n      <label for=\"catImage\">Качи нова Снимка?</label>\n      <input\n        (change)=\"startUpload($event.target.files)\"\n        [disabled]=\"this.imgService.preventEdit\"\n        name=\"image\"\n        ngModel\n        class=\"form-control-file\"\n        type=\"file\"\n        accept=\"image/*\"\n        id=\"catImage\"\n      />\n      <div>\n        <img *ngIf=\"image\" class=\"img-thumbnail col-md-4\" src=\"{{ image }}\" alt=\"news image preview\" />\n      </div>\n    </div>\n    <button [disabled]=\"!form.valid || this.imgService.preventEdit\" class=\"btn btn-primary\" type=\"submit\">\n      Запази\n    </button>\n  </form>\n  <div class=\"wrapper\" *ngIf=\"elements\">\n    <div class=\"card-group\" *ngFor=\"let elementsArr of elements | async | keyValueFilter | objectSplitToArray: 3\">\n      <mdb-card *ngFor=\"let element of elementsArr\" class=\"m-1\" id=\"{{ element.key }}\">\n        <mdb-card-img *ngIf=\"element.value.image\" src=\"{{ element.value.image }}\" alt=\"Card image cap\"></mdb-card-img>\n        <mdb-card-title>\n          <h4>{{ element.value.heading }}</h4>\n        </mdb-card-title>\n        <button (click)=\"setElement(element.key, element.value)\" mdbBtn color=\"primary\" mdbWavesEffect>\n          Редактирай\n        </button>\n        <button (click)=\"deleteElement(element.key)\" mdbBtn color=\"danger\" mdbWavesEffect>\n          Изтрий\n        </button>\n      </mdb-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/home/add-home/add-home.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/controls/home/add-home/add-home.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"saveHomeElement(form.value)\">\n  <div class=\"form-group\">\n    <label for=\"heading\">Заглавие</label>\n    <input ngModel required class=\"form-control\" type=\"text\" id=\"heading\" name=\"heading\" />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"href\">Връзка към продукта</label>\n    <input ngModel required class=\"form-control\" type=\"url\" id=\"href\" name=\"href\" />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"image\">Връзка към снимка</label>\n    <input ngModel required class=\"form-control\" type=\"url\" id=\"image\" name=\"image\" />\n  </div>\n  <button [disabled]=\"!form.valid\" class=\"btn btn-primary\" type=\"submit\">\n    Запази\n  </button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/home/edit-home/edit-home.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/controls/home/edit-home/edit-home.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <form *ngIf=\"homeElement\" #form=\"ngForm\" (ngSubmit)=\"editHomeElement(homeElementId, form.value).then((homeElement = null))\">\n    <div class=\"form-group\">\n      <label for=\"heading\">Заглавие</label>\n      <input [(ngModel)]=\"homeElement.heading\" required class=\"form-control\" type=\"text\" id=\"heading\" name=\"heading\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"href\">Връзка към продукта</label>\n      <input [(ngModel)]=\"homeElement.href\" required class=\"form-control\" type=\"text\" id=\"href\" name=\"href\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image\">Връзка към снимка</label>\n      <input [(ngModel)]=\"homeElement.image\" required class=\"form-control\" type=\"text\" id=\"image\" name=\"image\" />\n    </div>\n    <button [disabled]=\"!form.valid\" class=\"btn btn-primary\" type=\"submit\">\n      Запази\n    </button>\n  </form>\n  <div class=\"wrapper\" *ngIf=\"elements\">\n    <div class=\"card-group\" *ngFor=\"let elementsArr of elements | async | keyValueFilter | objectSplitToArray: 3\">\n      <mdb-card *ngFor=\"let element of elementsArr\" class=\"m-1\" id=\"{{ element.key }}\">\n        <mdb-card-img *ngIf=\"element.value.image\" src=\"{{ element.value.image }}\" alt=\"Card image cap\"></mdb-card-img>\n        <mdb-card-title>\n          <h4>{{ element.value.heading }}</h4>\n        </mdb-card-title>\n        <button (click)=\"setElement(element.key, element.value)\" mdbBtn color=\"primary\" mdbWavesEffect>\n          Редактирай\n        </button>\n        <button (click)=\"deleteElement(element.key)\" mdbBtn color=\"danger\" mdbWavesEffect>\n          Изтрий\n        </button>\n      </mdb-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/home/home-controls/home-controls.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/controls/home/home-controls/home-controls.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Начални Елементи</h2>\n<div class=\"container-fluid\">\n  <div class=\"col-md-12 text-center buttons-container\">\n    <div>\n      <a class=\"btn btn-primary\" [routerLink]=\"[{ outlets: { controls: ['add'] } }]\">Добави</a>\n      <a class=\"btn bg-warning\" [routerLink]=\"[{ outlets: { controls: ['edit'] } }]\">Редактирай</a>\n    </div>\n  </div>\n  <router-outlet name=\"controls\" class=\"container-fluid\"></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/mdb-editable-table/mdb-editable-table.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/controls/mdb-editable-table/mdb-editable-table.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Editable table -->\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div id=\"table\" class=\"table-editable\">\n      <table class=\"table table-bordered table-responsive-md table-striped text-center\">\n        <tr>\n          <th scope=\"col\">Model</th>\n          <th scope=\"col\">Clearance</th>\n          <th scope=\"col\">Working Depth</th>\n          <th scope=\"col\">Productivity</th>\n          <th scope=\"col\">required HP</th>\n          <th scope=\"col\">Speed</th>\n          <th scope=\"col\">Weight</th>\n          <th scope=\"col\">Working Width</th>\n          <th scope=\"col\" class=\"btn-warning color-primary-0\">Изтриване</th>\n        </tr>\n        <tr id=\"{{ el.key }}\" *ngFor=\"let el of collection | keyValueFilter\">\n          <td>\n            <span\n              contenteditable=\"true\"\n              (paste)=\"changeValue($event, el.key)\"\n              (keyup)=\"changeValue($event, el.key)\"\n              (blur)=\"updateList(el.key, 'model', $event)\"\n              >{{ el.value.model }}</span\n            >\n          </td>\n          <td>\n            <span\n              contenteditable=\"true\"\n              (paste)=\"changeValue($event, el.key)\"\n              (keyup)=\"changeValue($event, el.key)\"\n              (blur)=\"updateList(el.key, 'clearance', $event)\"\n              >{{ el.value.clearance }}</span\n            >\n          </td>\n          <td>\n            <span\n              contenteditable=\"true\"\n              (paste)=\"changeValue($event, el.key)\"\n              (keyup)=\"changeValue($event, el.key)\"\n              (blur)=\"updateList(el.key, 'depthWork', $event)\"\n              >{{ el.value.depthWork }}</span\n            >\n          </td>\n          <td>\n            <span\n              contenteditable=\"true\"\n              (paste)=\"changeValue($event, el.key)\"\n              (keyup)=\"changeValue($event, el.key)\"\n              (blur)=\"updateList(el.key, 'productivity', $event)\"\n              >{{ el.value.productivity }}</span\n            >\n          </td>\n          <td>\n            <span\n              contenteditable=\"true\"\n              (paste)=\"changeValue($event, el.key)\"\n              (keyup)=\"changeValue($event, el.key)\"\n              (blur)=\"updateList(el.key, 'reqHP', $event)\"\n              >{{ el.value.reqHP }}</span\n            >\n          </td>\n          <td>\n            <span\n              contenteditable=\"true\"\n              (paste)=\"changeValue($event, el.key)\"\n              (keyup)=\"changeValue($event, el.key)\"\n              (blur)=\"updateList(el.key, 'speed', $event)\"\n              >{{ el.value.speed }}</span\n            >\n          </td>\n          <td>\n            <span\n              contenteditable=\"true\"\n              (paste)=\"changeValue($event, el.key)\"\n              (keyup)=\"changeValue($event, el.key)\"\n              (blur)=\"updateList(el.key, 'weight', $event)\"\n              >{{ el.value.weight }}</span\n            >\n          </td>\n          <td>\n            <span\n              contenteditable=\"true\"\n              (paste)=\"changeValue($event, el.key)\"\n              (keyup)=\"changeValue($event, el.key)\"\n              (blur)=\"updateList(el.key, 'widthWork', $event)\"\n              >{{ el.value.widthWork }}</span\n            >\n          </td>\n          <td>\n            <span class=\"table-remove\">\n              <button type=\"button\" mdbBtn color=\"danger\" rounded=\"true\" size=\"sm\" class=\"my-0\" (click)=\"remove(el.key)\">\n                X\n              </button>\n            </span>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n<!-- Editable table -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/news/add-news/add-news.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/controls/news/add-news/add-news.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"saveNewsElement(form.value)\">\n  <div class=\"form-group\">\n    <label for=\"heading\">Заглавие</label>\n    <input ngModel required class=\"form-control\" type=\"text\" id=\"heading\" name=\"heading\" />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"content\">Съдържание на новината</label>\n    <textarea ngModel required class=\"form-control\" name=\"content\" id=\"content\" cols=\"30\" rows=\"10\"></textarea>\n  </div>\n  <div class=\"form-control-plaintext\">\n    <label for=\"catImage\">Снимка</label>\n    <input\n      required\n      (change)=\"startUpload($event.target.files)\"\n      [disabled]=\"preventEdit\"\n      name=\"image\"\n      ngModel\n      class=\"form-control-file\"\n      type=\"file\"\n      accept=\"image/*\"\n      id=\"catImage\"\n    />\n    <div *ngIf=\"image\">\n      <img class=\"img-thumbnail col-md-4\" src=\"{{ [image] }}\" alt=\"award image preview\" />\n    </div>\n  </div>\n  <button [disabled]=\"!form.valid || this.imgService.preventEdit\" class=\"btn btn-primary\" type=\"submit\">\n    Запази\n  </button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/news/edit-news/edit-news.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/controls/news/edit-news/edit-news.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <form *ngIf=\"newsElement\" #form=\"ngForm\" (ngSubmit)=\"editNewsElement(newsElementId, form.value).then((newsElement = null))\">\n    <img class=\"img-thumbnail\" src=\"{{ newsElement.image }}\" alt=\"\" />\n    <div class=\"form-group\">\n      <label for=\"heading\">Заглавие</label>\n      <input [(ngModel)]=\"newsElement.heading\" required class=\"form-control\" type=\"text\" id=\"heading\" name=\"heading\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"content\">Съдържание на новината</label>\n      <textarea\n        [(ngModel)]=\"newsElement.content\"\n        required\n        class=\"form-control\"\n        name=\"content\"\n        id=\"content\"\n        cols=\"30\"\n        rows=\"10\"\n      ></textarea>\n    </div>\n    <div class=\"form-control-plaintext\">\n      <label for=\"catImage\">Качи нова Снимка?</label>\n      <input\n        (change)=\"startUpload($event.target.files)\"\n        [disabled]=\"this.imgService.preventEdit\"\n        name=\"image\"\n        ngModel\n        class=\"form-control-file\"\n        type=\"file\"\n        accept=\"image/*\"\n        id=\"catImage\"\n      />\n      <div>\n        <img *ngIf=\"image\" class=\"img-thumbnail col-md-4\" src=\"{{ image }}\" alt=\"news image preview\" />\n      </div>\n    </div>\n    <button [disabled]=\"!form.valid || this.imgService.preventEdit\" class=\"btn btn-primary\" type=\"submit\">\n      Запази\n    </button>\n  </form>\n  <div class=\"wrapper\" *ngIf=\"elements\">\n    <div class=\"card-group\" *ngFor=\"let elementsArr of elements | async | keyValueFilter | objectSplitToArray: 3\">\n      <mdb-card *ngFor=\"let element of elementsArr\" class=\"m-1\" id=\"{{ element.key }}\">\n        <mdb-card-img *ngIf=\"element.value.image\" src=\"{{ element.value.image }}\" alt=\"Card image cap\"></mdb-card-img>\n        <mdb-card-title>\n          <h4>{{ element.value.heading }}</h4>\n        </mdb-card-title>\n        <button (click)=\"setElement(element.key, element.value)\" mdbBtn color=\"primary\" mdbWavesEffect>\n          Редактирай\n        </button>\n        <button (click)=\"deleteElement(element.key)\" mdbBtn color=\"danger\" mdbWavesEffect>\n          Изтрий\n        </button>\n      </mdb-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/news/news-control/news-control.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/controls/news/news-control/news-control.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Новини</h2>\n<div class=\"container-fluid\">\n  <div class=\"col-md-12 text-center buttons-container\">\n    <div>\n      <a class=\"btn btn-primary\" [routerLink]=\"[{ outlets: { controls: ['add'] } }]\">Добави</a>\n      <a class=\"btn bg-warning\" [routerLink]=\"[{ outlets: { controls: ['edit'] } }]\">Редактирай</a>\n    </div>\n  </div>\n  <router-outlet name=\"controls\" class=\"container-fluid\"></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/ploughs/add-category/add-category.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/controls/ploughs/add-category/add-category.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--suppress HtmlUnknownTarget -->\n<div class=\"container-fluid\">\n  <form class=\"form\" #categoryDetails=\"ngForm\" (ngSubmit)=\"this.addPloughCategory(categoryDetails)\">\n    <div class=\"form-group\">\n      <label for=\"type\">Тип </label>\n      <select *ngIf=\"categories\" [(ngModel)]=\"category\" name=\"type\" id=\"type\" (change)=\"change($event.target.value)\">\n        <option *ngFor=\"let cat of categories\">{{ cat }}</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"categoryName\">Име на Категория</label>\n      <input required name=\"name\" ngModel class=\"form-control\" type=\"text\" id=\"categoryName\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Описание</label>\n      <textarea required name=\"description\" ngModel rows=\"4\" cols=\"50\" class=\"form-control\" id=\"description\"></textarea>\n    </div>\n    <div class=\"form-control-plaintext\">\n      <label for=\"catImage\">Снимка</label>\n      <input\n        required\n        (change)=\"startUpload($event.target.files)\"\n        [disabled]=\"this.imgService.preventEdit\"\n        name=\"image\"\n        ngModel\n        class=\"form-control-file\"\n        type=\"file\"\n        id=\"catImage\"\n      />\n    </div>\n    <div *ngIf=\"images\">\n      <div *ngFor=\"let image of images\">\n        <img class=\"img-thumbnail col-md-4\" src=\"{{ image }}\" alt=\"\" />\n      </div>\n    </div>\n    <button [disabled]=\"!categoryDetails.form.valid || this.imgService.preventEdit\" class=\"btn btn-primary\" type=\"submit\">\n      Запази\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/ploughs/add-plough/add-plough.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/controls/ploughs/add-plough/add-plough.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5 wrapper\">\n  <form #ploughData=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"category\">Категория</label>\n      <select (change)=\"onCategoryChange($event.target.value)\" class=\"form-control\" name=\"Изберете Категория\" id=\"category\">\n        <option *ngFor=\"let category of categories\">{{ category }}</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"subcategory\">Серия</label>\n      <select (change)=\"onSubCategoryChange($event.target.value)\" class=\"form-control\" name=\"Изберете Серия\" id=\"subcategory\">\n        <option *ngFor=\"let subCategory of subCategories\">{{ subCategory }}</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"model\">Модел</label>\n      <input required name=\"model\" ngModel class=\"form-control\" type=\"text\" id=\"model\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"width\">Брой Корпуси</label>\n      <input required name=\"workBodyCount\" ngModel class=\"form-control\" type=\"text\" id=\"width\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"hp\">Необх. HP</label>\n      <input required name=\"reqHP\" ngModel class=\"form-control\" type=\"text\" id=\"hp\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"mainBeam\">Основна Греда</label>\n      <input required name=\"mainBeam\" ngModel class=\"form-control\" type=\"text\" id=\"mainBeam\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"bodiesDistance\">Разс. м-у Корпусите</label>\n      <input required name=\"bodiesDistance\" ngModel class=\"form-control\" type=\"text\" id=\"bodiesDistance\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"widthWork\">Р-на ширина на корпусите</label>\n      <input required name=\"widthWork\" ngModel class=\"form-control\" type=\"text\" id=\"widthWork\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"clearance\">Просвет</label>\n      <input required name=\"clearance\" ngModel class=\"form-control\" type=\"text\" id=\"clearance\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"depthWork\">Дълбочина</label>\n      <input required name=\"depthWork\" ngModel class=\"form-control\" type=\"text\" id=\"depthWork\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"transportSpeed\">Транс.Скорост</label>\n      <input required name=\"transportSpeed\" ngModel class=\"form-control\" type=\"text\" id=\"transportSpeed\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"workSpeed\">Раб.Скорост</label>\n      <input required name=\"workSpeed\" ngModel class=\"form-control\" type=\"text\" id=\"workSpeed\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"productivity\">Производ.</label>\n      <input required name=\"productivity\" ngModel class=\"form-control\" type=\"text\" id=\"productivity\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"weight\">Тегло</label>\n      <input required name=\"weight\" ngModel class=\"form-control\" type=\"text\" id=\"weight\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Описание?</label>\n      <input name=\"description\" ngModel class=\"form-control\" type=\"text\" id=\"description\" />\n    </div>\n    <div class=\"form-control-plaintext\">\n      <label for=\"catImage\">Снимка</label>\n      <input\n        (change)=\"startUpload($event.target.files)\"\n        [disabled]=\"this.imgService.preventEdit\"\n        name=\"image\"\n        ngModel\n        class=\"form-control-file\"\n        type=\"file\"\n        id=\"catImage\"\n        multiple\n      />\n    </div>\n    <div class=\"form-group\">\n      <button\n        [disabled]=\"!ploughData.valid || this.imgService.preventEdit\"\n        (click)=\"this.savePlough(ploughData.value, this.category)\"\n        class=\"btn btn-primary\"\n      >\n        Запази\n      </button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/ploughs/edit-ploughs/edit-ploughs.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/controls/ploughs/edit-ploughs/edit-ploughs.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label for=\"category\">Категория</label>\n  <select\n    [disabled]=\"!categories\"\n    (change)=\"onCategoryChange($event.target.value)\"\n    class=\"form-control\"\n    name=\"Изберете Категория\"\n    id=\"category\"\n  >\n    <option disabled>Изберете Категория</option>\n    <option *ngFor=\"let category of categories\">{{ category }}</option>\n  </select>\n  <div *ngIf=\"series\">\n    <label for=\"subCat\">Серия</label\n    ><select [disabled]=\"!series\" (change)=\"onSetChange($event.target.value)\" class=\"form-control\" name=\"subCat\" id=\"subCat\">\n      <option disabled>Изберете Серия</option>\n      <option *ngFor=\"let subType of series\">{{ subType }}</option>\n    </select>\n  </div>\n  <div *ngIf=\"ploughList\">\n    <app-mdb-editable-table [category]=\"category\" [set]=\"set\" [collection]=\"ploughList\"></app-mdb-editable-table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/ploughs/plough-controls/plough-controls.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/controls/ploughs/plough-controls/plough-controls.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Плугове</h2>\n<div class=\"container-fluid\">\n  <div class=\"col-md-12 text-center buttons-container\">\n    <div>\n      <a class=\"btn btn-info\" [routerLink]=\"[{ outlets: { controls: ['addCategory'] } }]\">Добави Категория</a>\n      <a class=\"btn btn-primary\" [routerLink]=\"[{ outlets: { controls: ['add'] } }]\">Добави Плуг</a>\n      <a class=\"btn bg-warning\" [routerLink]=\"[{ outlets: { controls: ['edit'] } }]\">Редактирай</a>\n    </div>\n  </div>\n  <router-outlet name=\"controls\" class=\"container-fluid\"></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/projects/add-projects/add-projects.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/controls/projects/add-projects/add-projects.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"saveProjectElement(form.value)\">\n  <div class=\"form-group\">\n    <label for=\"heading\">Заглавие</label>\n    <input ngModel required class=\"form-control\" type=\"text\" id=\"heading\" name=\"heading\" />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"content\">Съдържание на наградата</label>\n    <textarea ngModel required class=\"form-control\" name=\"content\" id=\"content\" cols=\"30\" rows=\"10\"></textarea>\n  </div>\n  <div class=\"form-control-plaintext\">\n    <label for=\"catImage\">Снимка</label>\n    <input\n      (change)=\"startUpload($event.target.files)\"\n      [disabled]=\"preventEdit\"\n      name=\"image\"\n      ngModel\n      class=\"form-control-file\"\n      type=\"file\"\n      accept=\"image/*\"\n      id=\"catImage\"\n    />\n    <div>\n      <img *ngIf=\"image\" class=\"img-thumbnail col-md-4\" src=\"{{ image }}\" alt=\"news image preview\" />\n    </div>\n  </div>\n  <button [disabled]=\"!form.valid || this.imgService.preventEdit\" class=\"btn btn-primary\" type=\"submit\">\n    Запази\n  </button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/projects/edit-projects/edit-projects.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/controls/projects/edit-projects/edit-projects.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <form\n    *ngIf=\"projectElement\"\n    #form=\"ngForm\"\n    (ngSubmit)=\"editProjectElement(projectElementId, form.value).then((projectElement = null))\"\n  >\n    <img class=\"img-thumbnail\" src=\"{{ projectElement.image }}\" alt=\"\" />\n    <div class=\"form-group\">\n      <label for=\"heading\">Заглавие</label>\n      <input [(ngModel)]=\"projectElement.heading\" required class=\"form-control\" type=\"text\" id=\"heading\" name=\"heading\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"content\">Съдържание на новината</label>\n      <textarea\n        [(ngModel)]=\"projectElement.content\"\n        required\n        class=\"form-control\"\n        name=\"content\"\n        id=\"content\"\n        cols=\"30\"\n        rows=\"10\"\n      ></textarea>\n    </div>\n    <div class=\"form-control-plaintext\">\n      <label for=\"catImage\">Качи нова Снимка?</label>\n      <input\n        (change)=\"startUpload($event.target.files)\"\n        [disabled]=\"this.imgService.preventEdit\"\n        name=\"image\"\n        ngModel\n        class=\"form-control-file\"\n        type=\"file\"\n        accept=\"image/*\"\n        id=\"catImage\"\n      />\n      <div>\n        <img *ngIf=\"image\" class=\"img-thumbnail col-md-4\" src=\"{{ image }}\" alt=\"news image preview\" />\n      </div>\n    </div>\n    <button [disabled]=\"!form.valid || this.imgService.preventEdit\" class=\"btn btn-primary\" type=\"submit\">\n      Запази\n    </button>\n  </form>\n  <div class=\"wrapper\" *ngIf=\"elements\">\n    <div class=\"card-group\" *ngFor=\"let elementsArr of elements | async | keyValueFilter | objectSplitToArray: 3\">\n      <mdb-card *ngFor=\"let element of elementsArr\" class=\"m-1\" id=\"{{ element.key }}\">\n        <mdb-card-img *ngIf=\"element.value.image\" src=\"{{ element.value.image }}\" alt=\"Card image cap\"></mdb-card-img>\n        <mdb-card-title>\n          <h4>{{ element.value.heading }}</h4>\n        </mdb-card-title>\n        <button (click)=\"setElement(element.key, element.value)\" mdbBtn color=\"primary\" mdbWavesEffect>\n          Редактирай\n        </button>\n        <button (click)=\"deleteElement(element.key)\" mdbBtn color=\"danger\" mdbWavesEffect>\n          Изтрий\n        </button>\n      </mdb-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/projects/projects-control/projects-control.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/controls/projects/projects-control/projects-control.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Проекти</h2>\n<div class=\"container-fluid\">\n  <div class=\"col-md-12 text-center buttons-container\">\n    <div>\n      <a class=\"btn btn-primary\" [routerLink]=\"[{ outlets: { controls: ['add'] } }]\">Добави</a>\n      <a class=\"btn bg-warning\" [routerLink]=\"[{ outlets: { controls: ['edit'] } }]\">Редактирай</a>\n    </div>\n  </div>\n  <router-outlet name=\"controls\" class=\"container-fluid\"></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/admin/product-add-dialog/product-add-dialog.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/admin/product-add-dialog/product-add-dialog.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card container disk-dialog-container\">\n  <div class=\"row card-body justify-content-center\">\n    <mat-form-field class=\"col-3 mr-auto ml-auto\">\n      <mat-label>Type</mat-label>\n      <mat-select class=\"text-capitalize\" [value]=\"selectTypeFormControl.value\" [formControl]=\"selectTypeFormControl\">\n        <mat-option class=\"text-capitalize\" [value]=\"type\" *ngFor=\"let type of types\">{{ type }}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"col-3\" *ngIf=\"selectSeriesFormControl\">\n      <mat-label>Serie</mat-label>\n      <mat-select class=\"text-capitalize\" [value]=\"selectSeriesFormControl.value\" [formControl]=\"selectSeriesFormControl\">\n        <mat-option class=\"text-capitalize\" [value]=\"serie\" *ngFor=\"let serie of series\">{{ serie }}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-checkbox labelPosition=\"before\" [formControl]=\"autoCloseControl\">Auto Close ?</mat-checkbox>\n\n    <form class=\"row justify-content-center\" [formGroup]=\"productFormGroup\">\n      <mat-form-field class=\"col-3\" *ngFor=\"let formControlName of headers[matDialogData.type]\">\n        <input\n          autocomplete=\"new-password\"\n          matInput\n          [placeholder]=\"formControlName.value\"\n          [formControlName]=\"formControlName.key\"\n          type=\"text\"\n        />\n      </mat-form-field>\n    </form>\n  </div>\n  <hr />\n  <div class=\"row p-0 m-0 justify-content-end\">\n    <button class=\"btn btn-warning bnt-sm\" (click)=\"closeDialog()\">Close</button>\n    <button [disabled]=\"productFormGroup.invalid\" class=\"btn btn-success btn-lg ml-auto\" (click)=\"saveProduct()\">Save</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/home/home.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/home/home.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid home-wrapper p-0\">\n  <mdb-carousel class=\"carousel slide carousel-fade\" [animation]=\"'fade'\">\n    <mdb-carousel-item *ngFor=\"let product of homeProducts | async | keyValueFilter\">\n      <div class=\"view w-100\">\n        <img (contextmenu)=\"onRightClick($event)\" class=\"d-block w-100\" src=\"{{ product.value.image }}\" alt=\"First slide\" />\n        <a routerLink=\"/{{ product.value.href }}\" class=\"mask rgba-black-light waves-light\" mdbWavesEffect> </a>\n      </div>\n      <div class=\"carousel-caption\">\n        <a [href]=\"product.value.href\" target=\"_blank\">\n          <h3 class=\"h3-responsive\">{{ product.value.heading }}</h3>\n        </a>\n      </div>\n    </mdb-carousel-item>\n  </mdb-carousel>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/products/category-overview/category-overview.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/products/category-overview/category-overview.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid overview wrapper\">\n  <div class=\"row d-flex justify-content-center\">\n    <div class=\"col-md-12 py-5\">\n      <div class=\"accordion md-accordion accordion-1\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"false\">\n        <div class=\"card\" *ngFor=\"let set of series\">\n          <div class=\"z-depth-1\" role=\"tab\" id=\"heading-{{ set }}\">\n            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{ set }}\" aria-expanded=\"true\" [attr.aria-controls]=\"set\">\n              <div class=\"series-wrapper row d-flex\">\n                <div class=\"col-md-6\">\n                  <h4 class=\"mb-0 text-uppercase series-heading\">Series - {{ set }}</h4>\n                  <p class=\"series-description\">\n                    {{ data[set].description }}\n                  </p>\n                </div>\n                <div class=\"col-md-6 background-image\" [ngStyle]=\"{ backgroundImage: 'url(' + data[set].image + ')' }\"></div>\n              </div>\n            </a>\n          </div>\n\n          <div id=\"{{ set }}\" class=\"collapse\" role=\"tabpanel\" [attr.aria-labelledby]=\"'heading-' + set\" data-parent=\"#accordion\">\n            <div class=\"p-0 card-body mb-1 rgba-grey-light white-text\">\n              <app-product-table [type]=\"productType\" [data]=\"data\" [set]=\"set\"></app-product-table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/products/category/category.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/products/category/category.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-mdb-jumbotron [title]=\"category\" [productCategory]=\"data\"> </app-mdb-jumbotron>\n\n  <div *ngIf=\"data\" class=\"model-list\">\n    <div *ngFor=\"let category of categories\">\n      <app-mdb-accordion [type]=\"'Ploughs'\" [data]=\"data['types'][category]\" [category]=\"category\"> </app-mdb-accordion>\n      <!--<app-category-->\n      <!--[category]=\"category\"-->\n      <!--[collection]=\"data[category]\"-->\n      <!--&gt;</app-category>-->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/products/cultivators/cultivators.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/products/cultivators/cultivators.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>cultivators works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/products/mdb-accordion/mdb-accordion.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/products/mdb-accordion/mdb-accordion.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"accordion md-accordion\" id=\"accordionEx\" role=\"tablist\" aria-multiselectable=\"false\">\n  <div class=\"card\">\n    <div class=\"card-header\" role=\"tab\" id=\"headingOne1\">\n      <a\n        data-toggle=\"collapse\"\n        data-parent=\"#accordionEx\"\n        href=\"#collapse-{{ category }}\"\n        aria-expanded=\"false\"\n        aria-controls=\"collapse\"\n      >\n        <h5 class=\"mb-0\">{{ category }}</h5>\n      </a>\n    </div>\n\n    <div id=\"collapse-{{ category }}\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne1\" data-parent=\"#accordionEx\">\n      <div class=\"container-fluid \">\n        <div class=\"row sub-category\" *ngFor=\"let subCat of subCategories; let i = index\">\n          <app-mdb-section\n            [index]=\"i\"\n            [type]=\"type\"\n            [category]=\"category\"\n            [description]=\"data.collection[subCat].description\"\n            [image]=\"data.collection[subCat].image\"\n            [heading]=\"subCat\"\n          ></app-mdb-section>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/products/parts/parts.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/products/parts/parts.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>parts works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/products/product/product.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/products/product/product.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"item\" class=\"container-fluid\">\n  <!--Section: Blog v.4-->\n  <section class=\"my-5\">\n    <!--Grid row-->\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <!--Featured image-->\n        <mdb-card cascade=\"true\" wider=\"true\" reverse=\"true\">\n          <div class=\"view view-cascade overlay waves-light\" mdbWavesEffect>\n            <app-mdb-carousel class=\"img-fluid\" [images]=\"item.image\"></app-mdb-carousel>\n          </div>\n\n          <!--Post data-->\n          <mdb-card-body cascade=\"true\" class=\"text-center col-sm-10\">\n            <h2>\n              <a class=\"font-weight-bold\">Model: {{ item.model }}</a>\n            </h2>\n            <p class=\"text-capitalize\">{{ category }}</p>\n\n            <div class=\"social-counters \">\n              <a mdbBtn class=\"waves-light\" mdbWavesEffect>\n                <i class=\"fas fa-arrows-alt-v\"></i> Working Depth <br />\n                <span class=\"d-md-inline-block\">{{ item.depthWork }}</span>\n              </a>\n\n              <a mdbBtn class=\"btn-tw waves-light\" mdbWavesEffect>\n                <i class=\"fas fa-tractor\"></i> HP Required <br />\n                <span class=\"d-md-inline-block\">{{ item.reqHP }}</span>\n              </a>\n\n              <a mdbBtn class=\"btn-gplus waves-light\" mdbWavesEffect>\n                <i class=\"fas fa-running\"></i> Speed <br />\n                <span class=\"d-md-inline-block\">{{ item.speed }}+</span>\n              </a>\n\n              <a mdbBtn class=\"waves-light\" mdbWavesEffect>\n                <i class=\"fas fa-weight-hanging\"></i> Weight <br />\n                <span class=\"d-md-inline-block\">{{ item.weight }}</span>\n              </a>\n            </div>\n          </mdb-card-body>\n          <!--Post data-->\n        </mdb-card>\n        <!--Excerpt-->\n      </div>\n    </div>\n\n    <!--Grid row-->\n    <hr class=\"mb-5 mt-4\" />\n  </section>\n  <!--Section: Blog v.4-->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/products/products.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/products/products.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"catalog\" class=\"container products-container my-5\">\n  <div class=\"row d-flex justify-content-center\">\n    <div class=\"col-12 col-md-6 col-lg-4 category\">\n      <div class=\"wrapper\" [ngStyle]=\"{ backgroundImage: 'url(../../../assets/img/Kv_2500_S_iPlough_4787_kvg_large-1.jpg)' }\">\n        <div class=\"overlay ploughs\">\n          <h1>Ploughs</h1>\n          <ul>\n            <li class=\"capitalize\" *ngFor=\"let productType of catalog.ploughs\" [routerLink]=\"'overview/ploughs/' + productType\">\n              {{ productType }}\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 category\">\n      <div class=\"wrapper\" [ngStyle]=\"{ backgroundImage: 'url(../../../assets/img/Kv_2500_S_iPlough_4787_kvg_large-1.jpg)' }\">\n        <div class=\"overlay disks\">\n          <div>\n            <h1>Disks</h1>\n            <ul>\n              <li class=\"capitalize\" *ngFor=\"let productType of catalog.disks\" [routerLink]=\"'overview/disks/' + productType\">\n                {{ productType }}\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 category\">\n      <div class=\"wrapper\" [ngStyle]=\"{ backgroundImage: 'url(../../../assets/img/Kv_2500_S_iPlough_4787_kvg_large-1.jpg)' }\">\n        <div class=\"overlay cultivators\">\n          <div>\n            <h1>Cultivators</h1>\n            <ul>\n              <li\n                class=\"capitalize\"\n                *ngFor=\"let productType of catalog.disks\"\n                [routerLink]=\"'overview/cultivators/' + productType\"\n              >\n                {{ productType }}\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 category\">\n      <div class=\"wrapper\" [ngStyle]=\"{ backgroundImage: 'url(../../../assets/img/Kv_2500_S_iPlough_4787_kvg_large-1.jpg)' }\">\n        <div class=\"overlay rollers\">\n          <div>\n            <h1>Tillage Rollers</h1>\n            <ul>\n              <li class=\"capitalize\" *ngFor=\"let productType of catalog.rollers\" [routerLink]=\"'overview/rollers/' + productType\">\n                {{ productType }}\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 category\">\n      <div class=\"wrapper\" [ngStyle]=\"{ backgroundImage: 'url(../../../assets/img/Kv_2500_S_iPlough_4787_kvg_large-1.jpg)' }\">\n        <div class=\"overlay shredders\">\n          <div>\n            <h1>Shredders</h1>\n            <ul>\n              <li\n                class=\"capitalize\"\n                *ngFor=\"let productType of catalog.shredders\"\n                [routerLink]=\"'overview/shredders/' + productType\"\n              >\n                {{ productType }}\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 category\">\n      <div class=\"wrapper\" [ngStyle]=\"{ backgroundImage: 'url(../../../assets/img/Kv_2500_S_iPlough_4787_kvg_large-1.jpg)' }\">\n        <div class=\"overlay cultivators\">\n          <div>\n            <h1>Sprayers</h1>\n            <ul>\n              <li class=\"capitalize\" *ngFor=\"let productType of catalog.disks\" [routerLink]=\"'overview/sprayers/' + productType\">\n                {{ productType }}\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 category\">\n      <div class=\"wrapper\" [ngStyle]=\"{ backgroundImage: 'url(../../../assets/img/Kv_2500_S_iPlough_4787_kvg_large-1.jpg)' }\">\n        <div class=\"overlay special\">\n          <div>\n            <h1>Special Purpose</h1>\n            <ul>\n              <li class=\"capitalize\" *ngFor=\"let productType of catalog.special\" [routerLink]=\"'overview/special/' + productType\">\n                {{ productType }}\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 category\">\n      <div class=\"wrapper\" [ngStyle]=\"{ backgroundImage: 'url(../../../assets/img/Kv_2500_S_iPlough_4787_kvg_large-1.jpg)' }\">\n        <div class=\"overlay cultivators\">\n          <div>\n            <h1>Spare Parts</h1>\n            <ul>\n              <li class=\"capitalize\" *ngFor=\"let productType of catalog.parts\" [routerLink]=\"'overview/parts/' + productType\">\n                {{ productType }}\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 category\">\n      <div class=\"wrapper\" [ngStyle]=\"{ backgroundImage: 'url(../../../assets/img/Kv_2500_S_iPlough_4787_kvg_large-1.jpg)' }\">\n        <div class=\"overlay cultivators\">\n          <div>\n            <h1>Working Tools</h1>\n            <ul>\n              <li class=\"capitalize\" *ngFor=\"let productType of catalog.tools\" [routerLink]=\"'overview/tools/' + productType\">\n                {{ productType }}\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/products/rippers/rippers.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/products/rippers/rippers.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>rippers works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/products/rollers/rollers.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/products/rollers/rollers.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>rollers works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/products/shredders/shredders.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/products/shredders/shredders.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>shredders works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/products/special/special.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/products/special/special.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>special works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/products/subcategory/subcategory.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/products/subcategory/subcategory.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-product-table [data]=\"data\"></app-product-table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/products/tables/tables.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/products/tables/tables.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            <h4 class=\"title\">Striped Table with Hover</h4>\n            <p class=\"category\">Here is a subtitle for this table</p>\n          </div>\n          <div class=\"content table-responsive table-full-width\">\n            <table class=\"table table-hover table-striped\">\n              <thead>\n                <tr>\n                  <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let row of tableData1.dataRows\">\n                  <td *ngFor=\"let cell of row\">{{ cell }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"card card-plain\">\n          <div class=\"header\">\n            <h4 class=\"title\">Table on Plain Background</h4>\n            <p class=\"category\">Here is a subtitle for this table</p>\n          </div>\n          <div class=\"content table-responsive table-full-width\">\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th *ngFor=\"let cell of tableData2.headerRow\">{{ cell }}</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let row of tableData2.dataRows\">\n                  <td *ngFor=\"let cell of row\">{{ cell }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Features/products/tools/tools.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Features/products/tools/tools.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>tools works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Shared/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Shared/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\n  <p class=\"info\">\n    Welcome to Ralmoex, we hope you will enjoy our products and have good experience\n  </p>\n  <a href=\"mailto:temp@temp.bg\" class=\"email\"><i class=\"fas fa-at\"></i> temp@temp.bg</a>\n  <p class=\"phone\"><i class=\"fas fa-phone\"></i> Call Us:+3598888888</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Shared/mdb-carousel/mdb-carousel.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Shared/mdb-carousel/mdb-carousel.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isArray(images)\">\n  <mdb-carousel class=\"carousel slide carousel-fade\" [animation]=\"'fade'\">\n    <mdb-carousel-item *ngFor=\"let image of images\">\n      <img (contextmenu)=\"onRightClick($event)\" class=\"d-block w-100 img-fluid\" [src]=\"image\" alt=\"First slide\" />\n    </mdb-carousel-item>\n  </mdb-carousel>\n</div>\n<div *ngIf=\"!isArray(images)\" class=\"container-fluid\">\n  <mdb-carousel class=\"carousel slide carousel-fade\">\n    <mdb-carousel-item>\n      <img class=\"d-block w-100 img-fluid\" [src]=\"images\" alt=\"First slide\" />\n    </mdb-carousel-item>\n  </mdb-carousel>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Shared/mdb-footer/mdb-footer.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Shared/mdb-footer/mdb-footer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer success\">\n  <div class=\"container-fluid text-center p-4 w-auto\">\n    <div class=\"row\">\n      <div class=\"col-md-4 mt-md-0 mt-3\">\n        <h5 class=\"text-uppercase\">Раломекс АД</h5>\n        <hr />\n        <p>\n          Раломекс АД е водещ производител в България на машини за основна обработка на почвата - плугове, култиватори и дискови\n          брани.\n        </p>\n      </div>\n      <hr class=\"clearfix w-100 d-md-none pb-3\" />\n      <div class=\"col-md-4 mb-md-0 mb-3\">\n        <div class=\"wrapper\">\n          <div>\n            <p>\n              <a href=\"https://goo.gl/maps/p1zB3fmtgRB2\" target=\"_blank\">\n                <i class=\"fas fa-map-marker-alt\"></i> ул. Освобождение 3 <br />\n                Завет 7330 България</a\n              >\n            </p>\n            <hr />\n            <p>\n              <a target=\"_blank\" href=\"mailto:order@ralomex.com\"> <i class=\"fas fa-envelope\"></i> order@ralomex.com</a>\n            </p>\n            <br />\n            <p><i class=\"fas fa-phone\"></i> +359 889 385 523</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 mb-md-0 mb-3\">\n        <ul class=\"list-unstyled\">\n          <li>\n            <a target=\"_blank\" href=\"https://www.facebook.com/ralomex\"><i class=\"fab fa-facebook-square\"></i></a>\n          </li>\n          <li>\n            <a target=\"_blank\" href=\"https://plus.google.com/101566423806078497749\"><i class=\"fab fa-google-plus-square\"></i></a>\n          </li>\n          <li>\n            <a target=\"_blank\" href=\"https://www.linkedin.com/company/ralomex\"><i class=\"fab fa-linkedin-square\"></i></a>\n          </li>\n          <li>\n            <a target=\"_blank\" href=\"https://twitter.com/ralomex\"><i class=\"fab fa-twitter-square\"></i></a>\n          </li>\n          <li>\n            <a target=\"_blank\" href=\"https://www.youtube.com/channel/UCENd1JKaD3an8kJHZhesL7g\"><i class=\"fab fa-youtube\"></i></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-copyright text-center p-2 mb-3\">\n    <p>© 2019 Copyright: <a href=\"https://ralomex.com\">Ralomex.com</a></p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Shared/mdb-jumbotron/mdb-jumbotron.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Shared/mdb-jumbotron/mdb-jumbotron.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Jumbotron -->\n<div *ngIf=\"productCategory\" class=\"jumbotron text-center\">\n  <!-- Title -->\n  <h4 class=\"card-title h4 pb-2\">\n    <strong>{{ title }}</strong>\n  </h4>\n\n  <!-- Card image -->\n  <div class=\"view overlay my-4\">\n    <img src=\"{{ productCategory.image }}\" class=\"img-fluid\" alt=\"\" />\n    <div class=\"mask rgba-white-slight\"></div>\n  </div>\n\n  <p class=\"card-text\">{{ productCategory.description }}</p>\n</div>\n<!-- Jumbotron -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Shared/mdb-news/mdb-news.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Shared/mdb-news/mdb-news.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <section *ngIf=\"latestNewsElement\" class=\"magazine-section my-5\">\n    <h1 class=\"h1-responsive font-weight-bold text-center my-5\">Новини</h1>\n    <!--Latest News Row-->\n    <div class=\"row\">\n      <!--With image-->\n      <div *ngIf=\"latestNewsElement.image\" class=\"col-lg-6 col-md-12\">\n        <div class=\"single-news mb-lg-0 mb-4\">\n          <!-- Image -->\n          <div class=\"view overlay rounded z-depth-1-half mb-4\">\n            <img class=\"img-fluid\" src=\"{{ latestNewsElement.image }}\" alt=\"Latest news image\" />\n            <a routerLink=\"\"> <div class=\"mask rgba-white-slight\"></div> </a>\n          </div>\n          <!-- Data -->\n          <div class=\"news-data d-flex justify-content-between\">\n            <a routerLink=\"\" class=\"deep-orange-text\">\n              <h4 class=\"font-weight-bold h4-responsive\">\n                {{ latestNewsElement.heading }}\n              </h4>\n            </a>\n            <p class=\"font-weight-bold dark-grey-text\">\n              <i class=\"fas fa-clock-o pr-2\"></i>{{ latestNewsElement.timeStamp | date }}\n            </p>\n          </div>\n          <!-- Excerpt -->\n          <p class=\"dark-grey-text mb-lg-0 mb-md-5 mb-4 text-truncate\">\n            {{ latestNewsElement.content }}\n          </p>\n        </div>\n      </div>\n      <!--Without image-->\n      <div *ngIf=\"!latestNewsElement.image\" class=\"col-lg-6 col-md-12\">\n        <div class=\"single-news mb-lg-0 mb-4\">\n          <!-- Data -->\n          <div class=\"news-data d-flex justify-content-between\">\n            <a routerLink=\"\" class=\"deep-orange-text\">\n              <h4 class=\"font-weight-bold h4-responsive\">\n                {{ latestNewsElement.heading }}\n              </h4>\n            </a>\n            <p class=\"font-weight-bold dark-grey-text\">\n              <i class=\"fas fa-clock-o pr-2\"></i>{{ latestNewsElement.timeStamp | date }}\n            </p>\n          </div>\n          <!-- Excerpt -->\n          <p class=\"dark-grey-text mb-lg-0 mb-md-5 mb-4\">\n            {{ latestNewsElement.content }}\n          </p>\n        </div>\n      </div>\n      <!--Rest news elements-->\n      <div class=\"col-lg-6 col-md-12\">\n        <!--Single news Element-->\n        <div *ngFor=\"let newsElement of news\" class=\"single-news mb-4\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <!--Image-->\n              <div class=\"view overlay rounded z-depth-1 mb-4\">\n                <img class=\"img-fluid\" src=\"{{ newsElement.image }}\" alt=\"Sample image\" />\n                <a routerLink=\"\">\n                  <div class=\"mask rgba-white-slight\"></div>\n                </a>\n              </div>\n            </div>\n            <div class=\"col-md-9\">\n              <!-- Excerpt -->\n              <p class=\"font-weight-bold dark-grey-text\">\n                {{ newsElement.timeStamp | date }}\n              </p>\n              <div class=\"d-flex justify-content-between\">\n                <div class=\"col-11 pl-0 mb-3\">\n                  <a routerLink=\"\" class=\"dark-grey-text\">\n                    {{ newsElement.content.slice(0, 160) }}\n                  </a>\n                </div>\n                <a><i class=\"fas fa-angle-double-right\"></i></a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Shared/mdb-section/mdb-section.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Shared/mdb-section/mdb-section.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid sub-category\">\n  <section class=\"my-5 sub-category\">\n    <div *ngIf=\"left\" class=\"row\">\n      <div class=\"col-lg-7\">\n        <h3 class=\"font-weight-bold mb-3 heading\">\n          <strong>{{ heading }}</strong>\n        </h3>\n        <p>{{ description }}</p>\n        <!-- Read more button -->\n        <a\n          mdbBtn\n          routerLinkActive=\"active\"\n          routerLink=\"/details/{{ type }}/{{ category }}/{{ heading }}\"\n          mdbBtn\n          color=\"primary\"\n          mdbWavesEffect\n          >View Products</a\n        >\n      </div>\n      <div class=\"col-lg-5\">\n        <div class=\"view overlay rounded z-depth-2 mb-lg-0 mb-4 waves-light\" mdbWavesEffect>\n          <img class=\"img-fluid\" src=\"{{ image }}\" alt=\"Sample image\" />\n          <a>\n            <div\n              class=\"mask rgba-white-slight\"\n              routerLinkActive=\"active\"\n              routerLink=\"/details/{{ type }}/{{ category }}/{{ heading }}\"\n            ></div>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"!left\" class=\"row\">\n      <div class=\"col-lg-5\">\n        <div class=\"view overlay rounded z-depth-2 mb-lg-0 mb-4 waves-light\" mdbWavesEffect>\n          <img class=\"img-fluid\" src=\"{{ image }}\" alt=\"Sample image\" />\n          <a>\n            <div\n              routerLinkActive=\"active\"\n              routerLink=\"/details/{{ type }}/{{ category }}/{{ heading }}\"\n              class=\"mask rgba-white-slight\"\n            ></div>\n          </a>\n        </div>\n      </div>\n      <div class=\"col-lg-7\">\n        <h3 class=\"font-weight-bold mb-3 heading\">\n          <strong>{{ heading }}</strong>\n        </h3>\n        <p>{{ description }}</p>\n        <!-- Read more button -->\n        <a\n          mdbBtn\n          color=\"success\"\n          routerLinkActive=\"active\"\n          routerLink=\"/details/{{ type }}/{{ category }}/{{ heading }}\"\n          mdbBtn\n          color=\"primary\"\n          mdbWavesEffect\n          >View Products</a\n        >\n      </div>\n    </div>\n    <hr class=\"my-5\" />\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Shared/navbar/navbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Shared/navbar/navbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center bg-danger\" *ngIf=\"!(fireService.online | async)\">\n  <p class=\"m-0 p-0\">Offline :(</p>\n</div>\n<nav class=\"navbar navbar-expand-md navbar-dark\">\n  <a class=\"navbar-brand d-flex row justify-content-center ml-auto align-items-end\" routerLink=\"/\">\n    <img src=\"../../../assets/img/logo.png\" alt=\"Ralomex logo\" />\n    <h1 class=\"col text-capitalize\">раломекс <span class=\"registered col m-0 p-0\">&reg;</span></h1>\n  </a>\n\n  <button\n    class=\"ml-auto navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#main-nav\"\n    aria-controls=\"main-nav\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"main-nav\">\n    <ul class=\"col navbar-nav d-flex justify-content-around pr-0 pl-4\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link text-capitalize\" routerLink=\"products\">products</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link text-capitalize\" routerLink=\"news\">news</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a\n          class=\"nav-link text-capitalize\"\n          id=\"about-us-dropdown\"\n          role=\"button\"\n          data-toggle=\"dropdown\"\n          aria-haspopup=\"true\"\n          aria-expanded=\"false\"\n        >\n          about us\n        </a>\n        <div class=\"dropdown-menu text-capitalize\" aria-labelledby=\"about-us-dropdown\">\n          <a class=\"dropdown-item text-capitalize\" routerLink=\"about/еxpositions\">expositions</a>\n          <a class=\"dropdown-item text-capitalize\" routerLink=\"about/projects\">projects</a>\n          <a class=\"dropdown-item text-capitalize\" routerLink=\"about/history\">history</a>\n          <a class=\"dropdown-item text-capitalize\" routerLink=\"about/team\">the team</a>\n          <a class=\"dropdown-item text-capitalize\" routerLink=\"about/innovations\">innovations</a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a\n          class=\"nav-link text-capitalize\"\n          id=\"contacts-dropdown\"\n          role=\"button\"\n          data-toggle=\"dropdown\"\n          aria-haspopup=\"true\"\n          aria-expanded=\"false\"\n        >\n          contacts\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"contacts-dropdown\">\n          <a class=\"dropdown-item text-capitalize\" routerLink=\"maps\">maps</a>\n          <a class=\"dropdown-item text-capitalize\" routerLink=\"info\">info</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"row pr-4 justify-content-center justify-content-md-end justify-content-lg-end d-flex languages m-0\">\n  <h5>ENG</h5>\n  /\n  <h5>BG</h5>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Shared/productTables/headers/product-table-cultivators-headers/product-table-cultivators-headers.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Shared/productTables/headers/product-table-cultivators-headers/product-table-cultivators-headers.component.html ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<thead class=\"p-2 cultivators\">\n  <tr class=\"headers\">\n    <th class=\"text-capitalize\">\n      <p class=\"font-weight-bold\">{{ name }}</p>\n      <p>\n        series <span class=\"text-uppercase\">{{ set }}</span>\n      </p>\n    </th>\n    <th><img src=\"../../../../../assets/table-icons/cultivatorsWorkBodyCount1.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/reqHp.png\" alt=\"\" /></th>\n    <th class=\"scale-up\"><img src=\"../../../../../assets/table-icons/cultivatorsBodySpacing1.png\" alt=\"\" /></th>\n    <th class=\"scale-up\"><img src=\"../../../../../assets/table-icons/cultivatorsRowCount1.png\" alt=\"\" /></th>\n    <th class=\"scale-up\"><img src=\"../../../../../assets/table-icons/workingWidth.png\" alt=\"\" /></th>\n    <th class=\"scale-up\"><img src=\"../../../../../assets/table-icons/transportWidth.png\" alt=\"\" /></th>\n    <th *ngIf=\"set !== 'kkp'\" class=\"scale-up\">\n      <img src=\"../../../../../assets/table-icons/cultivatorsProtection.png\" alt=\"\" />\n    </th>\n    <th class=\"scale-up\"><img src=\"../../../../../assets/table-icons/cultivatorsDepthWork1.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/transportSpeed.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/workSpeed.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/productivity.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/weight.png\" alt=\"\" /></th>\n  </tr>\n</thead>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Shared/productTables/headers/product-table-disk-headers/product-table-disks-headers.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Shared/productTables/headers/product-table-disk-headers/product-table-disks-headers.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<thead class=\"p-2 disks\">\n  <tr class=\"headers\">\n    <th class=\"text-capitalize\">\n      <p class=\"font-weight-bold\">{{ name }}</p>\n      <p>\n        series <span class=\"text-uppercase\">{{ set }}</span>\n      </p>\n    </th>\n    <th>\n      <img\n        *ngIf=\"set === 'bdn' || set === 'bdn-tg' || set === 'bdp-tg'\"\n        src=\"../../../../../assets/table-icons/diskCount.png\"\n        alt=\"\"\n      />\n      <img *ngIf=\"set === 'bdp-pp'\" src=\"../../../../../assets/table-icons/diskCount2.png\" alt=\"\" />\n      <img *ngIf=\"set === 'bdp'\" src=\"../../../../../assets/table-icons/diskCount2.png\" alt=\"\" />\n    </th>\n    <th><img src=\"../../../../../assets/table-icons/reqHp.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/diskDiameter.png\" alt=\"\" /></th>\n    <th *ngIf=\"set === 'bdn' || set === 'bdp'\" class=\"scale-up\">\n      <img src=\"../../../../../assets/table-icons/axisSize.png\" alt=\"\" />\n    </th>\n    <th><img src=\"../../../../../assets/table-icons/workingWidth.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/transportWidth.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/diskWorkingDepth.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/transportSpeed.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/workSpeed.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/productivity.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/weightWithoutRotors.png\" alt=\"\" /></th>\n  </tr>\n</thead>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Shared/productTables/headers/product-table-ploughs-headers/product-table-ploughs-headers.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Shared/productTables/headers/product-table-ploughs-headers/product-table-ploughs-headers.component.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<thead class=\"p-2 ploughs\">\n  <tr class=\"headers\">\n    <th class=\"text-capitalize\">\n      <p class=\"font-weight-bold\">{{ name }}</p>\n      <p>\n        series <span class=\"text-uppercase\">{{ set }}</span>\n      </p>\n    </th>\n    <th><img src=\"../../../../../assets/table-icons/workBodyCount.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/reqHp.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/mainBeam.png\" alt=\"\" /></th>\n    <th class=\"scale-up\"><img src=\"../../../../../assets/table-icons/bodiesDistance.png\" alt=\"\" /></th>\n    <th class=\"scale-up\"><img src=\"../../../../../assets/table-icons/widthWork.png\" alt=\"\" /></th>\n    <th class=\"scale-up\"><img src=\"../../../../../assets/table-icons/clearance.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/depthWork.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/transportSpeed.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/workSpeed.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/productivity.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/weight.png\" alt=\"\" /></th>\n  </tr>\n</thead>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Shared/productTables/headers/product-table-rollers-headers/product-table-rollers-headers.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Shared/productTables/headers/product-table-rollers-headers/product-table-rollers-headers.component.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<thead class=\"p-2 rollers\">\n  <tr class=\"headers\">\n    <th class=\"text-capitalize\">\n      <p class=\"font-weight-bold\">{{ name }}</p>\n      <p>\n        series <span class=\"text-uppercase\">{{ set }}</span>\n      </p>\n    </th>\n    <th><img src=\"../../../../../assets/table-icons/reqHp.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/compactionDepth.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/workingWidth.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/transportWidth.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/transportSpeed.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/workSpeed.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/productivity.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/weight.png\" alt=\"\" /></th>\n  </tr>\n</thead>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Shared/productTables/headers/product-table-shredders-headers/product-table-shredders-headers.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Shared/productTables/headers/product-table-shredders-headers/product-table-shredders-headers.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<thead class=\"p-2 shredders\">\n  <tr class=\"headers\">\n    <th class=\"text-capitalize\">\n      <p class=\"font-weight-bold\">{{ name }}</p>\n      <p>\n        series <span class=\"text-uppercase\">{{ set }}</span>\n      </p>\n    </th>\n    <th><img src=\"../../../../../assets/table-icons/shreddersCount.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/reqHp.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/workingWidth.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/transportWidth.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/transportSpeed.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/workSpeed.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/productivity.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/weight.png\" alt=\"\" /></th>\n  </tr>\n</thead>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Shared/productTables/headers/product-table-sprayers-headers/product-table-sprayers-headers.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Shared/productTables/headers/product-table-sprayers-headers/product-table-sprayers-headers.component.html ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<thead class=\"p-2 sprayers\">\n  <tr class=\"headers\">\n    <th class=\"text-capitalize\">\n      <p class=\"font-weight-bold\">{{ name }}</p>\n      <p>\n        series <span class=\"text-uppercase\">{{ set }}</span>\n      </p>\n    </th>\n    <th><img src=\"../../../../../assets/table-icons/tankCapacity.png\" alt=\"\" /></th>\n    <th *ngIf=\"set === 'demetra'\"><img src=\"../../../../../assets/table-icons/workingWidth.png\" alt=\"\" /></th>\n    <th *ngIf=\"set === 'ralko'\"><img src=\"../../../../../assets/table-icons/fanDiameter.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/sprayersCount.png\" alt=\"\" /></th>\n    <th><img src=\"../../../../../assets/table-icons/pumpType.png\" alt=\"\" /></th>\n  </tr>\n</thead>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Shared/productTables/product-table/product-table.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Shared/productTables/product-table/product-table.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"data\" mdbTable hover=\"true\">\n  <disks-headers *ngIf=\"type === 'disks'\" [set]=\"set\" [name]=\"data[set].name\"></disks-headers>\n  <ploughs-headers *ngIf=\"type === 'ploughs'\" [set]=\"set\" [name]=\"data[set].name\"></ploughs-headers>\n  <cultivators-headers *ngIf=\"type === 'cultivators'\" [set]=\"set\" [name]=\"data[set].name\"></cultivators-headers>\n  <rollers-headers *ngIf=\"type === 'rollers'\" [set]=\"set\" [name]=\"data[set].name\"></rollers-headers>\n  <shredders-headers *ngIf=\"type === 'shredders'\" [set]=\"set\" [name]=\"data[set].name\"></shredders-headers>\n  <sprayers-headers *ngIf=\"type === 'sprayers'\" [set]=\"set\" [name]=\"data[set].name\"></sprayers-headers>\n  <tbody>\n    <tr\n      class=\"product-row\"\n      [ngClass]=\"type\"\n      *ngFor=\"let item of data[set].collection | keyValueFilter\"\n      [routerLink]=\"set + '/' + item.key\"\n    >\n      <td\n        [ngClass]=\"item.value[header.key] === 'n/a' ? 'hide' : ''\"\n        class=\"text-center {{ header.key }}\"\n        *ngFor=\"let header of headers\"\n      >\n        <span [ngClass]=\"header.key\" *ngIf=\"item.value[header.key] !== 'bolt' && item.value[header.key] !== 'spring'\">{{\n          item.value[header.key]\n        }}</span>\n        <img\n          class=\"bolt\"\n          *ngIf=\"item.value[header.key] === 'bolt'\"\n          src=\"../../../../assets/table-icons/threaded_bolt_T.png\"\n          alt=\"\"\n        />\n        <img class=\"spring\" *ngIf=\"item.value[header.key] === 'spring'\" src=\"../../../../assets/table-icons/spring.png\" alt=\"\" />\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"router\">\n  <router-outlet></router-outlet>\n</div>\n<app-mdb-footer></app-mdb-footer>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Features/about-us/about-innovations/about-innovations.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/Features/about-us/about-innovations/about-innovations.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2Fib3V0LXVzL2Fib3V0LWlubm92YXRpb25zL2Fib3V0LWlubm92YXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Features/about-us/about-innovations/about-innovations.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/Features/about-us/about-innovations/about-innovations.component.ts ***!
  \************************************************************************************/
/*! exports provided: AboutInnovationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutInnovationsComponent", function() { return AboutInnovationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutInnovationsComponent = class AboutInnovationsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutInnovationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-innovations',
        template: __webpack_require__(/*! raw-loader!./about-innovations.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/about-us/about-innovations/about-innovations.component.html"),
        styles: [__webpack_require__(/*! ./about-innovations.component.scss */ "./src/app/Features/about-us/about-innovations/about-innovations.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutInnovationsComponent);



/***/ }),

/***/ "./src/app/Features/about-us/awards/awards.component.css":
/*!***************************************************************!*\
  !*** ./src/app/Features/about-us/awards/awards.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2Fib3V0LXVzL2F3YXJkcy9hd2FyZHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Features/about-us/awards/awards.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Features/about-us/awards/awards.component.ts ***!
  \**************************************************************/
/*! exports provided: AwardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardsComponent", function() { return AwardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");



let AwardsComponent = class AwardsComponent {
    constructor(db) {
        this.db = db;
        this.awards = this.db.AdminUtils.getElements('awards');
    }
    ngOnInit() { }
};
AwardsComponent.ctorParameters = () => [
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"] }
];
AwardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-awards',
        template: __webpack_require__(/*! raw-loader!./awards.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/about-us/awards/awards.component.html"),
        styles: [__webpack_require__(/*! ./awards.component.css */ "./src/app/Features/about-us/awards/awards.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"]])
], AwardsComponent);



/***/ }),

/***/ "./src/app/Features/about-us/history/history.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Features/about-us/history/history.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2Fib3V0LXVzL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Features/about-us/history/history.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Features/about-us/history/history.component.ts ***!
  \****************************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HistoryComponent = class HistoryComponent {
    constructor() { }
    ngOnInit() { }
};
HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: __webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/about-us/history/history.component.html"),
        styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/Features/about-us/history/history.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HistoryComponent);



/***/ }),

/***/ "./src/app/Features/about-us/projects/projects.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/Features/about-us/projects/projects.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  display: none;\n}\nimg {\n  max-width: -webkit-fill-available;\n}\n.btn-primary {\n  width: 60%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRmVhdHVyZXMvYWJvdXQtdXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9GZWF0dXJlcy9hYm91dC11cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmltZyB7XG4gIG1heC13aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbn1cbi5idG4tcHJpbWFyeSB7XG4gIHdpZHRoOiA2MCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Features/about-us/projects/projects.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Features/about-us/projects/projects.component.ts ***!
  \******************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");



let ProjectsComponent = class ProjectsComponent {
    constructor(db) {
        this.db = db;
        this.projects = this.db.AdminUtils.getElements('projects');
    }
    ngOnInit() { }
};
ProjectsComponent.ctorParameters = () => [
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"] }
];
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/about-us/projects/projects.component.html"),
        styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/Features/about-us/projects/projects.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"]])
], ProjectsComponent);



/***/ }),

/***/ "./src/app/Features/about-us/the-team/team-card/team-card.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/Features/about-us/the-team/team-card/team-card.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-product {\n  margin-top: 30px;\n}\n\nimg {\n  max-width: 100%;\n  height: 350px;\n  border-radius: 12px;\n}\n\n.stats {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.stats a:visited, .stats a {\n  color: inherit;\n}\n\n.card-header {\n  border: none;\n  background: none;\n  text-align: center;\n}\n\n.card-header-image {\n  position: relative;\n  padding: 0;\n  z-index: 1;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: -30px;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXBvbWFnZS9Eb2N1bWVudHMvTXlQcm9qZWN0cy9yYWxvbWV4L3NyYy9hcHAvRmVhdHVyZXMvYWJvdXQtdXMvdGhlLXRlYW0vdGVhbS1jYXJkL3RlYW0tY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvRmVhdHVyZXMvYWJvdXQtdXMvdGhlLXRlYW0vdGVhbS1jYXJkL3RlYW0tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNHRjs7QURERTtFQUNFLGNBQUE7QUNHSjs7QURDQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2Fib3V0LXVzL3RoZS10ZWFtL3RlYW0tY2FyZC90ZWFtLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1wcm9kdWN0e1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuaW1ne1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4uc3RhdHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxuICBhOnZpc2l0ZWQsYXtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxufVxuXG4uY2FyZC1oZWFkZXJ7XG4gIGJvcmRlcjpub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkLWhlYWRlci1pbWFnZXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuIiwiLmNhcmQtcHJvZHVjdCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLnN0YXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zdGF0cyBhOnZpc2l0ZWQsIC5zdGF0cyBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC1oZWFkZXItaW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/Features/about-us/the-team/team-card/team-card.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Features/about-us/the-team/team-card/team-card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TeamCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamCardComponent", function() { return TeamCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TeamCardComponent = class TeamCardComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TeamCardComponent.prototype, "member", void 0);
TeamCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team-card',
        template: __webpack_require__(/*! raw-loader!./team-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/about-us/the-team/team-card/team-card.component.html"),
        styles: [__webpack_require__(/*! ./team-card.component.scss */ "./src/app/Features/about-us/the-team/team-card/team-card.component.scss")]
    })
], TeamCardComponent);



/***/ }),

/***/ "./src/app/Features/about-us/the-team/the-team.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/Features/about-us/the-team/the-team.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-product {\n  margin-top: 30px;\n}\n\n.card-header-image {\n  position: relative;\n  padding: 0;\n  z-index: 1;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: -30px;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXBvbWFnZS9Eb2N1bWVudHMvTXlQcm9qZWN0cy9yYWxvbWV4L3NyYy9hcHAvRmVhdHVyZXMvYWJvdXQtdXMvdGhlLXRlYW0vdGhlLXRlYW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0ZlYXR1cmVzL2Fib3V0LXVzL3RoZS10ZWFtL3RoZS10ZWFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvRmVhdHVyZXMvYWJvdXQtdXMvdGhlLXRlYW0vdGhlLXRlYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1wcm9kdWN0e1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uY2FyZC1oZWFkZXItaW1hZ2V7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbiIsIi5jYXJkLXByb2R1Y3Qge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uY2FyZC1oZWFkZXItaW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/Features/about-us/the-team/the-team.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Features/about-us/the-team/the-team.component.ts ***!
  \******************************************************************/
/*! exports provided: TheTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheTeamComponent", function() { return TheTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");



let TheTeamComponent = class TheTeamComponent {
    constructor(fireService) {
        this.fireService = fireService;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.teamMembers = (yield this.fireService.memberUtils.getMembers());
        });
    }
};
TheTeamComponent.ctorParameters = () => [
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"] }
];
TheTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-the-team',
        template: __webpack_require__(/*! raw-loader!./the-team.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/about-us/the-team/the-team.component.html"),
        styles: [__webpack_require__(/*! ./the-team.component.scss */ "./src/app/Features/about-us/the-team/the-team.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"]])
], TheTeamComponent);



/***/ }),

/***/ "./src/app/Features/admin/about/team-dialog/team-dialog.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/Features/admin/about/team-dialog/team-dialog.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL2Fib3V0L3RlYW0tZGlhbG9nL3RlYW0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Features/admin/about/team-dialog/team-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Features/admin/about/team-dialog/team-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: TeamDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDialogComponent", function() { return TeamDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tools_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../tools/services/config.service */ "./src/app/tools/services/config.service.ts");
/* harmony import */ var _tools_services_image_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../tools/services/image.service */ "./src/app/tools/services/image.service.ts");








let TeamDialogComponent = class TeamDialogComponent {
    constructor(matDialogData, dialogRef, fireService, imageService, toastrService) {
        this.matDialogData = matDialogData;
        this.dialogRef = dialogRef;
        this.fireService = fireService;
        this.imageService = imageService;
        this.toastrService = toastrService;
        this.fb = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]();
        this.teamMemberFG = this.fb.group({});
        this.uploading = false;
        this.inputFields = _tools_services_config_service__WEBPACK_IMPORTED_MODULE_6__["config"].objectSchemas.teamMember;
    }
    onFileChange(event) {
        this.memberAvatar = event.target.files;
        if (this.memberAvatar) {
            this.teamMemberFG.get('avatarUrl').setValue('valid');
        }
    }
    saveMember() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.teamMemberFG.disable();
            this.uploading = true;
            const imageUrl = yield this.imageService.uploadSingle(this.memberAvatar, 'team');
            this.teamMemberFG.patchValue({ avatarUrl: imageUrl });
            try {
                yield this.fireService.memberUtils.addMember(this.teamMemberFG.value);
            }
            catch (e) {
                this.toastrService.error(e.error.message);
            }
            this.dialogRef.close();
            this.toastrService.success('Member Added');
            this.uploading = false;
        });
    }
    ngOnInit() {
        _tools_services_config_service__WEBPACK_IMPORTED_MODULE_6__["config"].objectSchemas.teamMember.map(inputFields => {
            this.teamMemberFG.registerControl(inputFields.key, this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]));
        });
    }
};
TeamDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"] },
    { type: _tools_services_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
TeamDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team-dialog',
        template: __webpack_require__(/*! raw-loader!./team-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/about/team-dialog/team-dialog.component.html"),
        styles: [__webpack_require__(/*! ./team-dialog.component.scss */ "./src/app/Features/admin/about/team-dialog/team-dialog.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"],
        _tools_services_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], TeamDialogComponent);



/***/ }),

/***/ "./src/app/Features/admin/admin.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/Features/admin/admin.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#customBtn {\n  display: inline-block;\n  background: white;\n  color: #444;\n  width: 190px;\n  border-radius: 5px;\n  border: thin solid #888;\n  box-shadow: 1px 1px 1px grey;\n  white-space: nowrap;\n}\n\n#customBtn:hover {\n  cursor: pointer;\n}\n\nspan.label {\n  font-family: serif;\n  font-weight: normal;\n}\n\nspan.icon {\n  background: url('g-normal.png') transparent 5px 50% no-repeat;\n  display: inline-block;\n  vertical-align: middle;\n  width: 42px;\n  height: 42px;\n}\n\nspan.buttonText {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 42px;\n  padding-right: 42px;\n  font-size: 14px;\n  font-weight: bold;\n  /* Use the Roboto font that is loaded in the <head> */\n  font-family: \"Roboto\", sans-serif;\n}\n\n.admin-wrapper {\n  text-align: center;\n  margin: 0 auto;\n}\n\n.products-nav,\n.secondary-nav {\n  outline: 1px solid black;\n  margin-bottom: 5px;\n}\n\n.products-nav li a,\n.secondary-nav li a {\n  border-radius: 6px;\n}\n\n.products-nav li a:hover,\n.secondary-nav li a:hover {\n  cursor: pointer;\n  background: #227644;\n  color: white;\n}\n\n.products-nav li.active,\n.secondary-nav li.active {\n  font-weight: bold;\n  color: black;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXBvbWFnZS9Eb2N1bWVudHMvTXlQcm9qZWN0cy9yYWxvbWV4L3NyYy9hcHAvRmVhdHVyZXMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3ZpcG9tYWdlL0RvY3VtZW50cy9NeVByb2plY3RzL3JhbG9tZXgvc3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDREY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FERUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw2REFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtFQUNBLGlDQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNJRjs7QUREQTs7RUFFRSx3QkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FERkU7O0VBQ0Usa0JBQUE7QUNLSjs7QURISTs7RUFDRSxlQUFBO0VBQ0EsbUJFbkRTO0VGb0RULFlBQUE7QUNNTjs7QURGRTs7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvRmVhdHVyZXMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uL3ZhcmlhYmxlcyc7XG5cbiNjdXN0b21CdG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzQ0NDtcbiAgd2lkdGg6IDE5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjODg4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCBncmV5O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuI2N1c3RvbUJ0bjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbnNwYW4ubGFiZWwge1xuICBmb250LWZhbWlseTogc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5zcGFuLmljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvZy1ub3JtYWwucG5nJykgdHJhbnNwYXJlbnQgNXB4IDUwJSBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbn1cbnNwYW4uYnV0dG9uVGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiA0MnB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAvKiBVc2UgdGhlIFJvYm90byBmb250IHRoYXQgaXMgbG9hZGVkIGluIHRoZSA8aGVhZD4gKi9cbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuLmFkbWluLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucHJvZHVjdHMtbmF2LFxuLnNlY29uZGFyeS1uYXYge1xuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcblxuICBsaSBhIHtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5R3JlZW47XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgbGkuYWN0aXZlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cbiIsIiNjdXN0b21CdG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzQ0NDtcbiAgd2lkdGg6IDE5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjODg4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCBncmV5O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4jY3VzdG9tQnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zcGFuLmxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5zcGFuLmljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2ctbm9ybWFsLnBuZ1wiKSB0cmFuc3BhcmVudCA1cHggNTAlIG5vLXJlcGVhdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xufVxuXG5zcGFuLmJ1dHRvblRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctbGVmdDogNDJweDtcbiAgcGFkZGluZy1yaWdodDogNDJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLyogVXNlIHRoZSBSb2JvdG8gZm9udCB0aGF0IGlzIGxvYWRlZCBpbiB0aGUgPGhlYWQ+ICovXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uYWRtaW4td3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5wcm9kdWN0cy1uYXYsXG4uc2Vjb25kYXJ5LW5hdiB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnByb2R1Y3RzLW5hdiBsaSBhLFxuLnNlY29uZGFyeS1uYXYgbGkgYSB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5wcm9kdWN0cy1uYXYgbGkgYTpob3Zlcixcbi5zZWNvbmRhcnktbmF2IGxpIGE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMyMjc2NDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wcm9kdWN0cy1uYXYgbGkuYWN0aXZlLFxuLnNlY29uZGFyeS1uYXYgbGkuYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59IiwiJHByaW1hcnlHcmVlbjogcmdiKDM0LCAxMTgsIDY4KTtcbiRwcmltYXJ5T3JhbmdlOiByZ2JhKDIzMywgMTA2LCAyMywgMC45KTtcbiRwcmltYXJ5Qmx1ZTogcmdiYSgzMCwgMTQ0LCAyNTUsIDAuOTEpO1xuJHByaW1hcnlQdXJwbGU6IHJnYmEoMTQ3LCAxMTIsIDIxOSwgMC45KTtcbiRwcmltYXJ5UmVkOiByZ2JhKDEzOSwgMCwgMCwgMC45KTtcblxuJHRhYmxlQnJlYWtQb2ludDogNzY4cHg7XG4iXX0= */"

/***/ }),

/***/ "./src/app/Features/admin/admin.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Features/admin/admin.component.ts ***!
  \***************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tools/services/auth.service */ "./src/app/tools/services/auth.service.ts");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _product_add_dialog_product_add_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-add-dialog/product-add-dialog.component */ "./src/app/Features/admin/product-add-dialog/product-add-dialog.component.ts");
/* harmony import */ var _about_team_dialog_team_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/team-dialog/team-dialog.component */ "./src/app/Features/admin/about/team-dialog/team-dialog.component.ts");







let AdminComponent = class AdminComponent {
    constructor(authService, dialog, fireService) {
        this.authService = authService;
        this.dialog = dialog;
        this.fireService = fireService;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.fireService.initCategories();
        });
    }
    showAddProductDialog(type) {
        const dialogConfig = {
            width: '900px',
            closeOnNavigation: true,
            hasBackdrop: true,
            disableClose: true,
            data: { type },
        };
        this.dialog.open(_product_add_dialog_product_add_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ProductAddDialog"], dialogConfig);
    }
    showMemberDialog() {
        const dialogConfig = {
            width: '600px',
            closeOnNavigation: true,
            hasBackdrop: true,
            disableClose: true,
        };
        this.dialog.open(_about_team_dialog_team_dialog_component__WEBPACK_IMPORTED_MODULE_6__["TeamDialogComponent"], dialogConfig);
    }
};
AdminComponent.ctorParameters = () => [
    { type: _tools_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/Features/admin/admin.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"]])
], AdminComponent);



/***/ }),

/***/ "./src/app/Features/admin/admin.module.ts":
/*!************************************************!*\
  !*** ./src/app/Features/admin/admin.module.ts ***!
  \************************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/Features/admin/admin.component.ts");
/* harmony import */ var _controls_ploughs_plough_controls_plough_controls_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/ploughs/plough-controls/plough-controls.component */ "./src/app/Features/admin/controls/ploughs/plough-controls/plough-controls.component.ts");
/* harmony import */ var _controls_ploughs_edit_ploughs_edit_ploughs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/ploughs/edit-ploughs/edit-ploughs.component */ "./src/app/Features/admin/controls/ploughs/edit-ploughs/edit-ploughs.component.ts");
/* harmony import */ var _controls_ploughs_add_plough_add_plough_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls/ploughs/add-plough/add-plough.component */ "./src/app/Features/admin/controls/ploughs/add-plough/add-plough.component.ts");
/* harmony import */ var _controls_ploughs_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controls/ploughs/add-category/add-category.component */ "./src/app/Features/admin/controls/ploughs/add-category/add-category.component.ts");
/* harmony import */ var _controls_home_home_controls_home_controls_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls/home/home-controls/home-controls.component */ "./src/app/Features/admin/controls/home/home-controls/home-controls.component.ts");
/* harmony import */ var _controls_home_add_home_add_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls/home/add-home/add-home.component */ "./src/app/Features/admin/controls/home/add-home/add-home.component.ts");
/* harmony import */ var _controls_home_edit_home_edit_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controls/home/edit-home/edit-home.component */ "./src/app/Features/admin/controls/home/edit-home/edit-home.component.ts");
/* harmony import */ var _controls_awards_awards_controls_awards_controls_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./controls/awards/awards-controls/awards-controls.component */ "./src/app/Features/admin/controls/awards/awards-controls/awards-controls.component.ts");
/* harmony import */ var _controls_awards_add_awards_add_awards_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controls/awards/add-awards/add-awards.component */ "./src/app/Features/admin/controls/awards/add-awards/add-awards.component.ts");
/* harmony import */ var _controls_awards_edit_awards_edit_awards_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controls/awards/edit-awards/edit-awards.component */ "./src/app/Features/admin/controls/awards/edit-awards/edit-awards.component.ts");
/* harmony import */ var _controls_news_news_control_news_control_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controls/news/news-control/news-control.component */ "./src/app/Features/admin/controls/news/news-control/news-control.component.ts");
/* harmony import */ var _controls_news_add_news_add_news_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./controls/news/add-news/add-news.component */ "./src/app/Features/admin/controls/news/add-news/add-news.component.ts");
/* harmony import */ var _controls_news_edit_news_edit_news_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./controls/news/edit-news/edit-news.component */ "./src/app/Features/admin/controls/news/edit-news/edit-news.component.ts");
/* harmony import */ var _controls_projects_projects_control_projects_control_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./controls/projects/projects-control/projects-control.component */ "./src/app/Features/admin/controls/projects/projects-control/projects-control.component.ts");
/* harmony import */ var _controls_projects_add_projects_add_projects_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./controls/projects/add-projects/add-projects.component */ "./src/app/Features/admin/controls/projects/add-projects/add-projects.component.ts");
/* harmony import */ var _controls_projects_edit_projects_edit_projects_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./controls/projects/edit-projects/edit-projects.component */ "./src/app/Features/admin/controls/projects/edit-projects/edit-projects.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tools_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../tools/pipes/pipes.module */ "./src/app/tools/pipes/pipes.module.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _controls_mdb_editable_table_mdb_editable_table_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./controls/mdb-editable-table/mdb-editable-table.component */ "./src/app/Features/admin/controls/mdb-editable-table/mdb-editable-table.component.ts");
/* harmony import */ var _admin_routing__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin.routing */ "./src/app/Features/admin/admin.routing.ts");
/* harmony import */ var _product_add_dialog_product_add_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./product-add-dialog/product-add-dialog.component */ "./src/app/Features/admin/product-add-dialog/product-add-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _about_team_dialog_team_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./about/team-dialog/team-dialog.component */ "./src/app/Features/admin/about/team-dialog/team-dialog.component.ts");





























let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _product_add_dialog_product_add_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ProductAddDialog"],
            _about_team_dialog_team_dialog_component__WEBPACK_IMPORTED_MODULE_28__["TeamDialogComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"].forChild(_admin_routing__WEBPACK_IMPORTED_MODULE_25__["adminRoutes"]),
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__["MDBBootstrapModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _tools_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_21__["PipesModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatCheckboxModule"],
        ],
        declarations: [
            _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
            _controls_ploughs_plough_controls_plough_controls_component__WEBPACK_IMPORTED_MODULE_4__["PloughControlsComponent"],
            _controls_ploughs_edit_ploughs_edit_ploughs_component__WEBPACK_IMPORTED_MODULE_5__["EditPloughsComponent"],
            _controls_ploughs_add_plough_add_plough_component__WEBPACK_IMPORTED_MODULE_6__["AddPloughComponent"],
            _controls_ploughs_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__["AddCategoryComponent"],
            _controls_home_home_controls_home_controls_component__WEBPACK_IMPORTED_MODULE_8__["HomeControlsComponent"],
            _controls_home_add_home_add_home_component__WEBPACK_IMPORTED_MODULE_9__["AddHomeComponent"],
            _controls_home_edit_home_edit_home_component__WEBPACK_IMPORTED_MODULE_10__["EditHomeComponent"],
            _controls_awards_awards_controls_awards_controls_component__WEBPACK_IMPORTED_MODULE_11__["AwardsControlsComponent"],
            _controls_awards_add_awards_add_awards_component__WEBPACK_IMPORTED_MODULE_12__["AddAwardsComponent"],
            _controls_awards_edit_awards_edit_awards_component__WEBPACK_IMPORTED_MODULE_13__["EditAwardsComponent"],
            _controls_news_news_control_news_control_component__WEBPACK_IMPORTED_MODULE_14__["NewsControlComponent"],
            _controls_news_add_news_add_news_component__WEBPACK_IMPORTED_MODULE_15__["AddNewsComponent"],
            _controls_news_edit_news_edit_news_component__WEBPACK_IMPORTED_MODULE_16__["EditNewsComponent"],
            _controls_projects_projects_control_projects_control_component__WEBPACK_IMPORTED_MODULE_17__["ProjectsControlComponent"],
            _controls_projects_add_projects_add_projects_component__WEBPACK_IMPORTED_MODULE_18__["AddProjectsComponent"],
            _controls_projects_edit_projects_edit_projects_component__WEBPACK_IMPORTED_MODULE_19__["EditProjectsComponent"],
            _controls_mdb_editable_table_mdb_editable_table_component__WEBPACK_IMPORTED_MODULE_24__["MdbEditableTableComponent"],
            _product_add_dialog_product_add_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ProductAddDialog"],
            _about_team_dialog_team_dialog_component__WEBPACK_IMPORTED_MODULE_28__["TeamDialogComponent"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"]],
    })
], AdminModule);



/***/ }),

/***/ "./src/app/Features/admin/admin.routing.ts":
/*!*************************************************!*\
  !*** ./src/app/Features/admin/admin.routing.ts ***!
  \*************************************************/
/*! exports provided: adminRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminRoutes", function() { return adminRoutes; });
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.component */ "./src/app/Features/admin/admin.component.ts");
/* harmony import */ var _controls_ploughs_plough_controls_plough_controls_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls/ploughs/plough-controls/plough-controls.component */ "./src/app/Features/admin/controls/ploughs/plough-controls/plough-controls.component.ts");
/* harmony import */ var _controls_ploughs_edit_ploughs_edit_ploughs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/ploughs/edit-ploughs/edit-ploughs.component */ "./src/app/Features/admin/controls/ploughs/edit-ploughs/edit-ploughs.component.ts");
/* harmony import */ var _controls_ploughs_add_plough_add_plough_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/ploughs/add-plough/add-plough.component */ "./src/app/Features/admin/controls/ploughs/add-plough/add-plough.component.ts");
/* harmony import */ var _controls_ploughs_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/ploughs/add-category/add-category.component */ "./src/app/Features/admin/controls/ploughs/add-category/add-category.component.ts");
/* harmony import */ var _controls_home_home_controls_home_controls_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/home/home-controls/home-controls.component */ "./src/app/Features/admin/controls/home/home-controls/home-controls.component.ts");
/* harmony import */ var _controls_home_add_home_add_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls/home/add-home/add-home.component */ "./src/app/Features/admin/controls/home/add-home/add-home.component.ts");
/* harmony import */ var _controls_home_edit_home_edit_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controls/home/edit-home/edit-home.component */ "./src/app/Features/admin/controls/home/edit-home/edit-home.component.ts");
/* harmony import */ var _controls_awards_awards_controls_awards_controls_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls/awards/awards-controls/awards-controls.component */ "./src/app/Features/admin/controls/awards/awards-controls/awards-controls.component.ts");
/* harmony import */ var _controls_awards_add_awards_add_awards_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls/awards/add-awards/add-awards.component */ "./src/app/Features/admin/controls/awards/add-awards/add-awards.component.ts");
/* harmony import */ var _controls_awards_edit_awards_edit_awards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controls/awards/edit-awards/edit-awards.component */ "./src/app/Features/admin/controls/awards/edit-awards/edit-awards.component.ts");
/* harmony import */ var _controls_news_news_control_news_control_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./controls/news/news-control/news-control.component */ "./src/app/Features/admin/controls/news/news-control/news-control.component.ts");
/* harmony import */ var _controls_news_add_news_add_news_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controls/news/add-news/add-news.component */ "./src/app/Features/admin/controls/news/add-news/add-news.component.ts");
/* harmony import */ var _controls_news_edit_news_edit_news_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controls/news/edit-news/edit-news.component */ "./src/app/Features/admin/controls/news/edit-news/edit-news.component.ts");
/* harmony import */ var _controls_projects_projects_control_projects_control_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controls/projects/projects-control/projects-control.component */ "./src/app/Features/admin/controls/projects/projects-control/projects-control.component.ts");
/* harmony import */ var _controls_projects_add_projects_add_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./controls/projects/add-projects/add-projects.component */ "./src/app/Features/admin/controls/projects/add-projects/add-projects.component.ts");
/* harmony import */ var _controls_projects_edit_projects_edit_projects_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./controls/projects/edit-projects/edit-projects.component */ "./src/app/Features/admin/controls/projects/edit-projects/edit-projects.component.ts");

















const adminRoutes = [
    {
        path: 'admin',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_0__["AdminComponent"],
        children: [
            {
                path: 'ploughs',
                component: _controls_ploughs_plough_controls_plough_controls_component__WEBPACK_IMPORTED_MODULE_1__["PloughControlsComponent"],
                outlet: 'admin',
                children: [
                    { path: 'edit', component: _controls_ploughs_edit_ploughs_edit_ploughs_component__WEBPACK_IMPORTED_MODULE_2__["EditPloughsComponent"], outlet: 'controls' },
                    { path: 'add', component: _controls_ploughs_add_plough_add_plough_component__WEBPACK_IMPORTED_MODULE_3__["AddPloughComponent"], outlet: 'controls' },
                    {
                        path: 'addCategory',
                        component: _controls_ploughs_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__["AddCategoryComponent"],
                        outlet: 'controls',
                    },
                ],
            },
            {
                path: 'home',
                component: _controls_home_home_controls_home_controls_component__WEBPACK_IMPORTED_MODULE_5__["HomeControlsComponent"],
                outlet: 'admin',
                children: [
                    { path: 'add', component: _controls_home_add_home_add_home_component__WEBPACK_IMPORTED_MODULE_6__["AddHomeComponent"], outlet: 'controls' },
                    { path: 'edit', component: _controls_home_edit_home_edit_home_component__WEBPACK_IMPORTED_MODULE_7__["EditHomeComponent"], outlet: 'controls' },
                ],
            },
            {
                path: 'awards',
                component: _controls_awards_awards_controls_awards_controls_component__WEBPACK_IMPORTED_MODULE_8__["AwardsControlsComponent"],
                outlet: 'admin',
                children: [
                    { path: 'add', component: _controls_awards_add_awards_add_awards_component__WEBPACK_IMPORTED_MODULE_9__["AddAwardsComponent"], outlet: 'controls' },
                    { path: 'edit', component: _controls_awards_edit_awards_edit_awards_component__WEBPACK_IMPORTED_MODULE_10__["EditAwardsComponent"], outlet: 'controls' },
                ],
            },
            {
                path: 'news',
                component: _controls_news_news_control_news_control_component__WEBPACK_IMPORTED_MODULE_11__["NewsControlComponent"],
                outlet: 'admin',
                children: [
                    { path: 'add', component: _controls_news_add_news_add_news_component__WEBPACK_IMPORTED_MODULE_12__["AddNewsComponent"], outlet: 'controls' },
                    { path: 'edit', component: _controls_news_edit_news_edit_news_component__WEBPACK_IMPORTED_MODULE_13__["EditNewsComponent"], outlet: 'controls' },
                ],
            },
            {
                path: 'projects',
                component: _controls_projects_projects_control_projects_control_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsControlComponent"],
                outlet: 'admin',
                children: [
                    { path: 'add', component: _controls_projects_add_projects_add_projects_component__WEBPACK_IMPORTED_MODULE_15__["AddProjectsComponent"], outlet: 'controls' },
                    {
                        path: 'edit',
                        component: _controls_projects_edit_projects_edit_projects_component__WEBPACK_IMPORTED_MODULE_16__["EditProjectsComponent"],
                        outlet: 'controls',
                    },
                ],
            },
        ],
    },
];


/***/ }),

/***/ "./src/app/Features/admin/controls/awards/add-awards/add-awards.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/awards/add-awards/add-awards.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL2NvbnRyb2xzL2F3YXJkcy9hZGQtYXdhcmRzL2FkZC1hd2FyZHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Features/admin/controls/awards/add-awards/add-awards.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Features/admin/controls/awards/add-awards/add-awards.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddAwardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAwardsComponent", function() { return AddAwardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../tools/services/image.service */ "./src/app/tools/services/image.service.ts");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");




let AddAwardsComponent = class AddAwardsComponent {
    constructor(imgService, db) {
        this.imgService = imgService;
        this.db = db;
        this.preventEdit = this.imgService.preventEdit;
        this.startUpload = (files) => {
            this.imgService.prepToUploadSingle(files, 'awards').then((taskSnap) => {
                taskSnap.ref.getDownloadURL().then((imgUlr) => {
                    this.image = imgUlr;
                    this.imgService.preventEdit = false;
                });
            });
        };
        this.saveAwardElement = (formData) => {
            formData.image = this.image;
            this.db.AdminUtils.addElement(formData, 'awards').then(() => {
                //todo
                // saved notification
                // clear Form
            });
        };
    }
    ngOnInit() { }
};
AddAwardsComponent.ctorParameters = () => [
    { type: _tools_services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] },
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"] }
];
AddAwardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-awards',
        template: __webpack_require__(/*! raw-loader!./add-awards.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/awards/add-awards/add-awards.component.html"),
        styles: [__webpack_require__(/*! ./add-awards.component.css */ "./src/app/Features/admin/controls/awards/add-awards/add-awards.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"], _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"]])
], AddAwardsComponent);



/***/ }),

/***/ "./src/app/Features/admin/controls/awards/awards-controls/awards-controls.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/awards/awards-controls/awards-controls.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL2NvbnRyb2xzL2F3YXJkcy9hd2FyZHMtY29udHJvbHMvYXdhcmRzLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Features/admin/controls/awards/awards-controls/awards-controls.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/awards/awards-controls/awards-controls.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AwardsControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardsControlsComponent", function() { return AwardsControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AwardsControlsComponent = class AwardsControlsComponent {
    constructor() { }
    ngOnInit() { }
};
AwardsControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-awards-controls',
        template: __webpack_require__(/*! raw-loader!./awards-controls.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/awards/awards-controls/awards-controls.component.html"),
        styles: [__webpack_require__(/*! ./awards-controls.component.css */ "./src/app/Features/admin/controls/awards/awards-controls/awards-controls.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AwardsControlsComponent);



/***/ }),

/***/ "./src/app/Features/admin/controls/awards/edit-awards/edit-awards.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/awards/edit-awards/edit-awards.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL2NvbnRyb2xzL2F3YXJkcy9lZGl0LWF3YXJkcy9lZGl0LWF3YXJkcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Features/admin/controls/awards/edit-awards/edit-awards.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/awards/edit-awards/edit-awards.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EditAwardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAwardsComponent", function() { return EditAwardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");
/* harmony import */ var _tools_services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../tools/services/image.service */ "./src/app/tools/services/image.service.ts");




let EditAwardsComponent = class EditAwardsComponent {
    constructor(db, imgService) {
        this.db = db;
        this.imgService = imgService;
        this.elements = this.db.AdminUtils.getElements('awards');
        this.setElement = (id, element) => {
            this.awardElementId = id;
            this.awardElement = element;
        };
        this.deleteElement = (elementId) => {
            let confirm = window.confirm('Сигурни ли сте че искате да изтриете тази новина!');
            if (confirm) {
                window.document.getElementById(elementId).remove();
                return this.db.AdminUtils.deleteElementById(elementId, 'awards');
            }
        };
        this.startUpload = files => {
            try {
                this.imgService.images = [];
                this.imgService.startUpload(files);
                this.awardElement.image = this.imgService.images;
            }
            catch (e) {
                console.log(e.message);
                this.imgService.preventEdit = false;
            }
        };
        this.editAwardElement = (id, formData) => {
            if (this.imgService.images.length > 0) {
                formData.image = this.imgService.images[0];
            }
            else {
                if (this.awardElement.image)
                    formData.image = this.awardElement.image;
            }
            return this.db.AdminUtils.updateElementById(id, 'awards', formData);
        };
    }
    ngOnInit() { }
};
EditAwardsComponent.ctorParameters = () => [
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"] },
    { type: _tools_services_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"] }
];
EditAwardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-awards',
        template: __webpack_require__(/*! raw-loader!./edit-awards.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/awards/edit-awards/edit-awards.component.html"),
        styles: [__webpack_require__(/*! ./edit-awards.component.css */ "./src/app/Features/admin/controls/awards/edit-awards/edit-awards.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"], _tools_services_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]])
], EditAwardsComponent);



/***/ }),

/***/ "./src/app/Features/admin/controls/home/add-home/add-home.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/Features/admin/controls/home/add-home/add-home.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL2NvbnRyb2xzL2hvbWUvYWRkLWhvbWUvYWRkLWhvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Features/admin/controls/home/add-home/add-home.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Features/admin/controls/home/add-home/add-home.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHomeComponent", function() { return AddHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");



let AddHomeComponent = class AddHomeComponent {
    constructor(db) {
        this.db = db;
        this.saveHomeElement = (formData) => {
            this.db.AdminUtils.addElement(formData, 'homeProducts');
        };
    }
    ngOnInit() { }
};
AddHomeComponent.ctorParameters = () => [
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"] }
];
AddHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-home',
        template: __webpack_require__(/*! raw-loader!./add-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/home/add-home/add-home.component.html"),
        styles: [__webpack_require__(/*! ./add-home.component.css */ "./src/app/Features/admin/controls/home/add-home/add-home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"]])
], AddHomeComponent);



/***/ }),

/***/ "./src/app/Features/admin/controls/home/edit-home/edit-home.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/Features/admin/controls/home/edit-home/edit-home.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin-top: 25px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRmVhdHVyZXMvYWRtaW4vY29udHJvbHMvaG9tZS9lZGl0LWhvbWUvZWRpdC1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9GZWF0dXJlcy9hZG1pbi9jb250cm9scy9ob21lL2VkaXQtaG9tZS9lZGl0LWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/Features/admin/controls/home/edit-home/edit-home.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Features/admin/controls/home/edit-home/edit-home.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHomeComponent", function() { return EditHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");



let EditHomeComponent = class EditHomeComponent {
    constructor(db) {
        this.db = db;
        this.elements = this.db.AdminUtils.getElements('homeProducts');
        this.setElement = (id, element) => {
            this.homeElementId = id;
            this.homeElement = element;
        };
        this.deleteElement = (elementId) => {
            let confirm = window.confirm('Сигурни ли сте че искате да изтриете този елемент');
            if (confirm) {
                window.document.getElementById(elementId).remove();
                return this.db.AdminUtils.deleteElementById(elementId, 'homeProducts');
            }
        };
        this.editHomeElement = (id, formData) => this.db.AdminUtils.updateElementById(id, 'homeProducts', formData);
    }
    scrollToElement($element) {
        console.log($element);
        $element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    }
    ngOnInit() { }
};
EditHomeComponent.ctorParameters = () => [
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"] }
];
EditHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-home',
        template: __webpack_require__(/*! raw-loader!./edit-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/home/edit-home/edit-home.component.html"),
        styles: [__webpack_require__(/*! ./edit-home.component.css */ "./src/app/Features/admin/controls/home/edit-home/edit-home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"]])
], EditHomeComponent);



/***/ }),

/***/ "./src/app/Features/admin/controls/home/home-controls/home-controls.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/home/home-controls/home-controls.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL2NvbnRyb2xzL2hvbWUvaG9tZS1jb250cm9scy9ob21lLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Features/admin/controls/home/home-controls/home-controls.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/home/home-controls/home-controls.component.ts ***!
  \***************************************************************************************/
/*! exports provided: HomeControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeControlsComponent", function() { return HomeControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeControlsComponent = class HomeControlsComponent {
    constructor() { }
    ngOnInit() { }
};
HomeControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-controls',
        template: __webpack_require__(/*! raw-loader!./home-controls.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/home/home-controls/home-controls.component.html"),
        styles: [__webpack_require__(/*! ./home-controls.component.css */ "./src/app/Features/admin/controls/home/home-controls/home-controls.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeControlsComponent);



/***/ }),

/***/ "./src/app/Features/admin/controls/mdb-editable-table/mdb-editable-table.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/mdb-editable-table/mdb-editable-table.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th {\n  font-weight: bold;\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRmVhdHVyZXMvYWRtaW4vY29udHJvbHMvbWRiLWVkaXRhYmxlLXRhYmxlL21kYi1lZGl0YWJsZS10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL2NvbnRyb2xzL21kYi1lZGl0YWJsZS10YWJsZS9tZGItZWRpdGFibGUtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Features/admin/controls/mdb-editable-table/mdb-editable-table.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/mdb-editable-table/mdb-editable-table.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MdbEditableTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbEditableTableComponent", function() { return MdbEditableTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




let MdbEditableTableComponent = class MdbEditableTableComponent {
    constructor(toastR, db) {
        this.toastR = toastR;
        this.db = db;
        this.changeExist = false;
    }
    updateList(id, property, event) {
        const editField = event.target.textContent;
        let val = {};
        if (this.changeExist) {
            val[property] = editField;
            this.db.PloughUtils.updatePlough(val, this.category, this.set, id)
                .then(() => {
                this.collection[id][property] = editField;
                this.changeExist = false;
                this.updatedRow.removeAttribute('style');
                this.toastR.success(`${property.toUpperCase()}: ${editField}`, 'Saved!');
            })
                .catch(e => console.log(e.message));
        }
    }
    remove(id) {
        if (window.confirm('Сигурни ли сте че искате да изтриете този продукт?'))
            this.db.PloughUtils.deletePlough(this.category, this.set, id)
                .then(() => {
                this.toastR.info('Item Deleted!');
                delete this.collection[id];
                document.getElementById(id).remove();
            })
                .catch((e) => console.log(e.message));
    }
    changeValue(event, id) {
        this.editField = event.target.textContent;
        this.updatedRow = document.getElementById(id);
        this.updatedRow.setAttribute('style', 'background-color:#00ff75;');
        this.changeExist = true;
    }
};
MdbEditableTableComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MdbEditableTableComponent.prototype, "category", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MdbEditableTableComponent.prototype, "set", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MdbEditableTableComponent.prototype, "collection", void 0);
MdbEditableTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mdb-editable-table',
        template: __webpack_require__(/*! raw-loader!./mdb-editable-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/mdb-editable-table/mdb-editable-table.component.html"),
        styles: [__webpack_require__(/*! ./mdb-editable-table.component.css */ "./src/app/Features/admin/controls/mdb-editable-table/mdb-editable-table.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"]])
], MdbEditableTableComponent);



/***/ }),

/***/ "./src/app/Features/admin/controls/news/add-news/add-news.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/Features/admin/controls/news/add-news/add-news.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL2NvbnRyb2xzL25ld3MvYWRkLW5ld3MvYWRkLW5ld3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Features/admin/controls/news/add-news/add-news.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Features/admin/controls/news/add-news/add-news.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewsComponent", function() { return AddNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../tools/services/image.service */ "./src/app/tools/services/image.service.ts");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");




let AddNewsComponent = class AddNewsComponent {
    constructor(imgService, db) {
        this.imgService = imgService;
        this.db = db;
        this.image = this.imgService.downloadUrl;
        this.preventEdit = this.imgService.preventEdit;
        this.startUpload = (files) => {
            this.imgService.prepToUploadSingle(files, 'news').then((taskSnap) => {
                taskSnap.ref.getDownloadURL().then((imgUlr) => {
                    this.image = imgUlr;
                    this.imgService.preventEdit = false;
                });
            });
        };
        this.saveNewsElement = (formData) => {
            formData.timeStamp = Date.now();
            formData.image = this.image;
            this.db.AdminUtils.addElement(formData, 'news').then(() => {
                //todo
                // saved notification
                // clear Form
            });
        };
    }
    ngOnInit() { }
};
AddNewsComponent.ctorParameters = () => [
    { type: _tools_services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] },
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"] }
];
AddNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-news',
        template: __webpack_require__(/*! raw-loader!./add-news.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/news/add-news/add-news.component.html"),
        styles: [__webpack_require__(/*! ./add-news.component.css */ "./src/app/Features/admin/controls/news/add-news/add-news.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"], _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"]])
], AddNewsComponent);



/***/ }),

/***/ "./src/app/Features/admin/controls/news/edit-news/edit-news.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/Features/admin/controls/news/edit-news/edit-news.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL2NvbnRyb2xzL25ld3MvZWRpdC1uZXdzL2VkaXQtbmV3cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Features/admin/controls/news/edit-news/edit-news.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Features/admin/controls/news/edit-news/edit-news.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNewsComponent", function() { return EditNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");
/* harmony import */ var _tools_services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../tools/services/image.service */ "./src/app/tools/services/image.service.ts");




let EditNewsComponent = class EditNewsComponent {
    constructor(db, imgService) {
        this.db = db;
        this.imgService = imgService;
        this.elements = this.db.AdminUtils.getElements('news');
        this.setElement = (id, element) => {
            this.newsElementId = id;
            this.newsElement = element;
        };
        this.deleteElement = (elementId) => {
            let confirm = window.confirm('Сигурни ли сте че искате да изтриете тази новина!');
            if (confirm) {
                window.document.getElementById(elementId).remove();
                return this.db.AdminUtils.deleteElementById(elementId, 'news');
            }
        };
        this.startUpload = files => {
            try {
                this.imgService.images = [];
                this.imgService.startUpload(files);
                this.newsElement.image = this.imgService.images;
            }
            catch (e) {
                console.log(e.message);
                this.imgService.preventEdit = false;
            }
        };
        this.editNewsElement = (id, formData) => {
            if (this.imgService.images.length > 0) {
                formData.image = this.imgService.images[0];
            }
            else {
                if (this.newsElement.image)
                    formData.image = this.newsElement.image;
            }
            return this.db.AdminUtils.updateElementById(id, 'news', formData);
        };
    }
    ngOnInit() { }
};
EditNewsComponent.ctorParameters = () => [
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"] },
    { type: _tools_services_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"] }
];
EditNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-news',
        template: __webpack_require__(/*! raw-loader!./edit-news.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/news/edit-news/edit-news.component.html"),
        styles: [__webpack_require__(/*! ./edit-news.component.css */ "./src/app/Features/admin/controls/news/edit-news/edit-news.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"], _tools_services_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]])
], EditNewsComponent);



/***/ }),

/***/ "./src/app/Features/admin/controls/news/news-control/news-control.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/news/news-control/news-control.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL2NvbnRyb2xzL25ld3MvbmV3cy1jb250cm9sL25ld3MtY29udHJvbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Features/admin/controls/news/news-control/news-control.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/news/news-control/news-control.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NewsControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsControlComponent", function() { return NewsControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewsControlComponent = class NewsControlComponent {
    constructor() { }
    ngOnInit() { }
};
NewsControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news-control',
        template: __webpack_require__(/*! raw-loader!./news-control.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/news/news-control/news-control.component.html"),
        styles: [__webpack_require__(/*! ./news-control.component.css */ "./src/app/Features/admin/controls/news/news-control/news-control.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NewsControlComponent);



/***/ }),

/***/ "./src/app/Features/admin/controls/ploughs/add-category/add-category.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/ploughs/add-category/add-category.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL2NvbnRyb2xzL3Bsb3VnaHMvYWRkLWNhdGVnb3J5L2FkZC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Features/admin/controls/ploughs/add-category/add-category.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/ploughs/add-category/add-category.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../tools/services/image.service */ "./src/app/tools/services/image.service.ts");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");




let AddCategoryComponent = class AddCategoryComponent {
    constructor(db, imgService) {
        this.db = db;
        this.imgService = imgService;
        this.images = this.imgService.images;
        this.change = selectValue => {
            this.category = selectValue;
        };
        this.addPloughCategory = categoryDetails => {
            categoryDetails.value.image = this.images;
            return this.db.addPloughCategory(this.category, categoryDetails.value);
        };
        this.startUpload = event => this.imgService.startUpload(event);
    }
    ngOnInit() {
        this.db.getType('ploughs').subscribe(response => {
            this.categories = Object.keys(response['types']);
            this.category = this.categories[0];
        });
    }
};
AddCategoryComponent.ctorParameters = () => [
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"] },
    { type: _tools_services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] }
];
AddCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-category',
        template: __webpack_require__(/*! raw-loader!./add-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/ploughs/add-category/add-category.component.html"),
        styles: [__webpack_require__(/*! ./add-category.component.css */ "./src/app/Features/admin/controls/ploughs/add-category/add-category.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"], _tools_services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]])
], AddCategoryComponent);



/***/ }),

/***/ "./src/app/Features/admin/controls/ploughs/add-plough/add-plough.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/ploughs/add-plough/add-plough.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  vertical-align: bottom;\n  padding: 2px;\n  text-align: left;\n  display: inline-block;\n}\n.form-group label {\n  margin-right: 50px;\n  /*width: 170px;*/\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRmVhdHVyZXMvYWRtaW4vY29udHJvbHMvcGxvdWdocy9hZGQtcGxvdWdoL2FkZC1wbG91Z2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL2NvbnRyb2xzL3Bsb3VnaHMvYWRkLXBsb3VnaC9hZGQtcGxvdWdoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIHBhZGRpbmc6IDJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIC8qd2lkdGg6IDE3MHB4OyovXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Features/admin/controls/ploughs/add-plough/add-plough.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/ploughs/add-plough/add-plough.component.ts ***!
  \************************************************************************************/
/*! exports provided: AddPloughComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPloughComponent", function() { return AddPloughComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");
/* harmony import */ var _tools_services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../tools/services/image.service */ "./src/app/tools/services/image.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let AddPloughComponent = class AddPloughComponent {
    constructor(db, imgService, toastr) {
        this.db = db;
        this.imgService = imgService;
        this.toastr = toastr;
        this.images = this.imgService.images;
        this.onCategoryChange = selectValue => {
            this.category = selectValue;
            this.db.getSubCategories('ploughs', selectValue).subscribe(data => {
                this.subCategory = Object.keys(data)[0];
                this.subCategories = Object.keys(data);
            });
        };
        this.onSubCategoryChange = selectValue => {
            this.subCategory = selectValue;
        };
        this.savePlough = (data, category) => {
            data.image = this.images;
            this.db.PloughUtils.addPlough(data, category, this.subCategory)
                .then(() => {
                this.toastr.success('Добавен');
            })
                .catch(e => {
                console.log(e);
            });
        };
        this.startUpload = event => this.imgService.startUpload(event);
    }
    ngOnInit() {
        this.db.getType('ploughs/types').subscribe(data => {
            this.category = Object.keys(data)[0];
            this.categories = Object.keys(data);
            this.db.getSubCategories('ploughs', this.category).subscribe(data => {
                this.subCategory = Object.keys(data)[0];
                this.subCategories = Object.keys(data);
            });
        });
    }
};
AddPloughComponent.ctorParameters = () => [
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"] },
    { type: _tools_services_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
AddPloughComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-plough',
        template: __webpack_require__(/*! raw-loader!./add-plough.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/ploughs/add-plough/add-plough.component.html"),
        styles: [__webpack_require__(/*! ./add-plough.component.css */ "./src/app/Features/admin/controls/ploughs/add-plough/add-plough.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"],
        _tools_services_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], AddPloughComponent);



/***/ }),

/***/ "./src/app/Features/admin/controls/ploughs/edit-ploughs/edit-ploughs.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/ploughs/edit-ploughs/edit-ploughs.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: gray;\n  border: 1px solid red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRmVhdHVyZXMvYWRtaW4vY29udHJvbHMvcGxvdWdocy9lZGl0LXBsb3VnaHMvZWRpdC1wbG91Z2hzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvRmVhdHVyZXMvYWRtaW4vY29udHJvbHMvcGxvdWdocy9lZGl0LXBsb3VnaHMvZWRpdC1wbG91Z2hzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/Features/admin/controls/ploughs/edit-ploughs/edit-ploughs.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/ploughs/edit-ploughs/edit-ploughs.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EditPloughsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPloughsComponent", function() { return EditPloughsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");



let EditPloughsComponent = class EditPloughsComponent {
    constructor(db) {
        this.db = db;
        this.onCategoryChange = (selectValue) => {
            this.set = null;
            this.series = null;
            this.ploughList = null;
            this.category = selectValue;
            this.db.getType('ploughs/types/' + selectValue).subscribe(res => {
                this.data = res['series'];
                this.series = Object.keys(res['series']);
            });
        };
        this.onSetChange = (selectValue) => {
            this.set = selectValue;
            this.setData = this.data[this.set];
            this.ploughList = this.data[selectValue]['collection'];
        };
    }
    ngOnInit() {
        this.db.getType(`ploughs`).subscribe((res) => {
            this.categories = Object.keys(res.types);
        });
    }
};
EditPloughsComponent.ctorParameters = () => [
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"] }
];
EditPloughsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-ploughs',
        template: __webpack_require__(/*! raw-loader!./edit-ploughs.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/ploughs/edit-ploughs/edit-ploughs.component.html"),
        styles: [__webpack_require__(/*! ./edit-ploughs.component.css */ "./src/app/Features/admin/controls/ploughs/edit-ploughs/edit-ploughs.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"]])
], EditPloughsComponent);



/***/ }),

/***/ "./src/app/Features/admin/controls/ploughs/plough-controls/plough-controls.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/ploughs/plough-controls/plough-controls.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  margin: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRmVhdHVyZXMvYWRtaW4vY29udHJvbHMvcGxvdWdocy9wbG91Z2gtY29udHJvbHMvcGxvdWdoLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9GZWF0dXJlcy9hZG1pbi9jb250cm9scy9wbG91Z2hzL3Bsb3VnaC1jb250cm9scy9wbG91Z2gtY29udHJvbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICBtYXJnaW46IDVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Features/admin/controls/ploughs/plough-controls/plough-controls.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/ploughs/plough-controls/plough-controls.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PloughControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PloughControlsComponent", function() { return PloughControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PloughControlsComponent = class PloughControlsComponent {
    constructor() { }
    ngOnInit() { }
};
PloughControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-plough-controls',
        template: __webpack_require__(/*! raw-loader!./plough-controls.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/ploughs/plough-controls/plough-controls.component.html"),
        styles: [__webpack_require__(/*! ./plough-controls.component.css */ "./src/app/Features/admin/controls/ploughs/plough-controls/plough-controls.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PloughControlsComponent);



/***/ }),

/***/ "./src/app/Features/admin/controls/projects/add-projects/add-projects.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/projects/add-projects/add-projects.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL2NvbnRyb2xzL3Byb2plY3RzL2FkZC1wcm9qZWN0cy9hZGQtcHJvamVjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Features/admin/controls/projects/add-projects/add-projects.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/projects/add-projects/add-projects.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectsComponent", function() { return AddProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../tools/services/image.service */ "./src/app/tools/services/image.service.ts");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");




let AddProjectsComponent = class AddProjectsComponent {
    constructor(imgService, db) {
        this.imgService = imgService;
        this.db = db;
        this.preventEdit = this.imgService.preventEdit;
        this.startUpload = (files) => {
            this.imgService.prepToUploadSingle(files, 'projects').then((taskSnap) => {
                taskSnap.ref.getDownloadURL().then((imgUlr) => {
                    this.image = imgUlr;
                    this.imgService.preventEdit = false;
                });
            });
        };
        this.saveProjectElement = (formData) => {
            if (this.image) {
                formData.image = this.image;
            }
            else {
                delete formData.image;
            }
            this.db.AdminUtils.addElement(formData, 'projects').then(() => {
                //todo
                // saved notification
                // clear Form
            });
        };
    }
    ngOnInit() { }
};
AddProjectsComponent.ctorParameters = () => [
    { type: _tools_services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] },
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"] }
];
AddProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-projects',
        template: __webpack_require__(/*! raw-loader!./add-projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/projects/add-projects/add-projects.component.html"),
        styles: [__webpack_require__(/*! ./add-projects.component.css */ "./src/app/Features/admin/controls/projects/add-projects/add-projects.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"], _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"]])
], AddProjectsComponent);



/***/ }),

/***/ "./src/app/Features/admin/controls/projects/edit-projects/edit-projects.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/projects/edit-projects/edit-projects.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL2NvbnRyb2xzL3Byb2plY3RzL2VkaXQtcHJvamVjdHMvZWRpdC1wcm9qZWN0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Features/admin/controls/projects/edit-projects/edit-projects.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/projects/edit-projects/edit-projects.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProjectsComponent", function() { return EditProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");
/* harmony import */ var _tools_services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../tools/services/image.service */ "./src/app/tools/services/image.service.ts");




let EditProjectsComponent = class EditProjectsComponent {
    constructor(db, imgService) {
        this.db = db;
        this.imgService = imgService;
        this.elements = this.db.AdminUtils.getElements('projects');
        this.setElement = (id, element) => {
            this.projectElementId = id;
            this.projectElement = element;
        };
        this.deleteElement = (elementId) => {
            let confirm = window.confirm('Сигурни ли сте че искате да изтриете тази новина!');
            if (confirm) {
                window.document.getElementById(elementId).remove();
                return this.db.AdminUtils.deleteElementById(elementId, 'projects');
            }
        };
        this.startUpload = files => {
            try {
                this.imgService.images = [];
                this.imgService.startUpload(files);
                this.projectElement.image = this.imgService.images;
            }
            catch (e) {
                console.log(e.message);
                this.imgService.preventEdit = false;
            }
        };
        this.editProjectElement = (id, formData) => {
            if (this.imgService.images.length > 0) {
                formData.image = this.imgService.images[0];
            }
            else {
                if (this.projectElement.image)
                    formData.image = this.projectElement.image;
            }
            return this.db.AdminUtils.updateElementById(id, 'projects', formData);
        };
    }
    ngOnInit() { }
};
EditProjectsComponent.ctorParameters = () => [
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"] },
    { type: _tools_services_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"] }
];
EditProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-projects',
        template: __webpack_require__(/*! raw-loader!./edit-projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/projects/edit-projects/edit-projects.component.html"),
        styles: [__webpack_require__(/*! ./edit-projects.component.css */ "./src/app/Features/admin/controls/projects/edit-projects/edit-projects.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"], _tools_services_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]])
], EditProjectsComponent);



/***/ }),

/***/ "./src/app/Features/admin/controls/projects/projects-control/projects-control.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/projects/projects-control/projects-control.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL2NvbnRyb2xzL3Byb2plY3RzL3Byb2plY3RzLWNvbnRyb2wvcHJvamVjdHMtY29udHJvbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Features/admin/controls/projects/projects-control/projects-control.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/Features/admin/controls/projects/projects-control/projects-control.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProjectsControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsControlComponent", function() { return ProjectsControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsControlComponent = class ProjectsControlComponent {
    constructor() { }
    ngOnInit() { }
};
ProjectsControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects-control',
        template: __webpack_require__(/*! raw-loader!./projects-control.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/controls/projects/projects-control/projects-control.component.html"),
        styles: [__webpack_require__(/*! ./projects-control.component.css */ "./src/app/Features/admin/controls/projects/projects-control/projects-control.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProjectsControlComponent);



/***/ }),

/***/ "./src/app/Features/admin/product-add-dialog/product-add-dialog.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/Features/admin/product-add-dialog/product-add-dialog.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL2FkbWluL3Byb2R1Y3QtYWRkLWRpYWxvZy9wcm9kdWN0LWFkZC1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Features/admin/product-add-dialog/product-add-dialog.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Features/admin/product-add-dialog/product-add-dialog.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductAddDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddDialog", function() { return ProductAddDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _tools_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../tools/services/config.service */ "./src/app/tools/services/config.service.ts");







let ProductAddDialog = class ProductAddDialog {
    constructor(matDialogData, dialogRef, fireService, toastrService) {
        this.matDialogData = matDialogData;
        this.dialogRef = dialogRef;
        this.fireService = fireService;
        this.toastrService = toastrService;
        this.fb = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]();
        this.autoCloseControl = this.fb.control(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.headers = _tools_services_config_service__WEBPACK_IMPORTED_MODULE_6__["config"].headers;
    }
    initProductFormGroup(productType) {
        let fg = this.fb.group({});
        this.headers[productType].map(prop => {
            fg.addControl(prop.key, this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
        });
        return fg;
    }
    initProductTypeSelectFormControl(initialType) {
        return this.fb.control(initialType, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
    }
    initSeriesSelectFormControl(productType, newSeries) {
        this.series = Object.keys(this.fireService.productTypes[productType].types[newSeries].series);
        if (this.series) {
            return this.fb.control(this.series[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        }
    }
    closeDialog() {
        this.dialogRef.close();
    }
    saveProduct() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let productData = this.productFormGroup.value;
            yield this.fireService.addItem(productData, this.matDialogData.type, this.selectTypeFormControl.value, this.selectSeriesFormControl.value);
            this.toastrService.success('Saved');
            if (this.autoCloseControl.value) {
                this.closeDialog();
            }
        });
    }
    ngOnInit() {
        const productType = this.matDialogData.type;
        this.productFormGroup = this.initProductFormGroup(productType);
        this.types = Object.keys(this.fireService.productTypes[productType].types);
        if (this.types) {
            this.selectTypeFormControl = this.initProductTypeSelectFormControl(this.types[0]);
            this.selectSeriesFormControl = this.initSeriesSelectFormControl(productType, this.selectTypeFormControl.value);
            this.selectTypeFormControl.valueChanges.subscribe(selectedType => {
                this.selectSeriesFormControl = this.initSeriesSelectFormControl(productType, selectedType);
            });
        }
    }
};
ProductAddDialog.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_4__["FireService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
ProductAddDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-add-dialog',
        template: __webpack_require__(/*! raw-loader!./product-add-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/admin/product-add-dialog/product-add-dialog.component.html"),
        styles: [__webpack_require__(/*! ./product-add-dialog.component.scss */ "./src/app/Features/admin/product-add-dialog/product-add-dialog.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_4__["FireService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], ProductAddDialog);



/***/ }),

/***/ "./src/app/Features/features.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Features/features.module.ts ***!
  \*********************************************/
/*! exports provided: FeaturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModule", function() { return FeaturesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _features_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features.routing */ "./src/app/Features/features.routing.ts");
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.module */ "./src/app/Features/products/products.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/Features/admin/admin.module.ts");
/* harmony import */ var _about_us_awards_awards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-us/awards/awards.component */ "./src/app/Features/about-us/awards/awards.component.ts");
/* harmony import */ var _about_us_history_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-us/history/history.component */ "./src/app/Features/about-us/history/history.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/Features/home/home.component.ts");
/* harmony import */ var _about_us_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about-us/projects/projects.component */ "./src/app/Features/about-us/projects/projects.component.ts");
/* harmony import */ var _tools_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tools/pipes/pipes.module */ "./src/app/tools/pipes/pipes.module.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _about_us_the_team_the_team_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about-us/the-team/the-team.component */ "./src/app/Features/about-us/the-team/the-team.component.ts");
/* harmony import */ var _about_us_about_innovations_about_innovations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about-us/about-innovations/about-innovations.component */ "./src/app/Features/about-us/about-innovations/about-innovations.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _about_us_the_team_team_card_team_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about-us/the-team/team-card/team-card.component */ "./src/app/Features/about-us/the-team/team-card/team-card.component.ts");

















let FeaturesModule = class FeaturesModule {
};
FeaturesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _about_us_awards_awards_component__WEBPACK_IMPORTED_MODULE_7__["AwardsComponent"],
            _about_us_history_history_component__WEBPACK_IMPORTED_MODULE_8__["HistoryComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _about_us_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"],
            _about_us_the_team_the_team_component__WEBPACK_IMPORTED_MODULE_13__["TheTeamComponent"],
            _about_us_about_innovations_about_innovations_component__WEBPACK_IMPORTED_MODULE_14__["AboutInnovationsComponent"],
            _about_us_the_team_team_card_team_card_component__WEBPACK_IMPORTED_MODULE_16__["TeamCardComponent"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_features_routing__WEBPACK_IMPORTED_MODULE_4__["featureRoutes"]),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _products_products_module__WEBPACK_IMPORTED_MODULE_5__["ProductsModule"],
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__["AdminModule"],
            _tools_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
        ],
    })
], FeaturesModule);



/***/ }),

/***/ "./src/app/Features/features.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/Features/features.routing.ts ***!
  \**********************************************/
/*! exports provided: featureRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureRoutes", function() { return featureRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/Features/home/home.component.ts");
/* harmony import */ var _products_subcategory_subcategory_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products/subcategory/subcategory.component */ "./src/app/Features/products/subcategory/subcategory.component.ts");
/* harmony import */ var _about_us_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us/projects/projects.component */ "./src/app/Features/about-us/projects/projects.component.ts");
/* harmony import */ var _Shared_mdb_news_mdb_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/mdb-news/mdb-news.component */ "./src/app/Shared/mdb-news/mdb-news.component.ts");
/* harmony import */ var _about_us_history_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us/history/history.component */ "./src/app/Features/about-us/history/history.component.ts");
/* harmony import */ var _about_us_awards_awards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us/awards/awards.component */ "./src/app/Features/about-us/awards/awards.component.ts");
/* harmony import */ var _products_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/product/product.component */ "./src/app/Features/products/product/product.component.ts");
/* harmony import */ var _about_us_the_team_the_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-us/the-team/the-team.component */ "./src/app/Features/about-us/the-team/the-team.component.ts");
/* harmony import */ var _about_us_about_innovations_about_innovations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-us/about-innovations/about-innovations.component */ "./src/app/Features/about-us/about-innovations/about-innovations.component.ts");









const featureRoutes = [
    { path: 'product/:type/:category/:subCategory/:id', component: _products_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"] },
    { path: 'details/:type/:category/:subCategory', component: _products_subcategory_subcategory_component__WEBPACK_IMPORTED_MODULE_1__["SubcategoryComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'news', component: _Shared_mdb_news_mdb_news_component__WEBPACK_IMPORTED_MODULE_3__["MdbNewsComponent"] },
    { path: 'about', children: [
            { path: 'projects', component: _about_us_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"] },
            { path: 'history', component: _about_us_history_history_component__WEBPACK_IMPORTED_MODULE_4__["HistoryComponent"] },
            { path: 'team', component: _about_us_the_team_the_team_component__WEBPACK_IMPORTED_MODULE_7__["TheTeamComponent"] },
            { path: 'awards', component: _about_us_awards_awards_component__WEBPACK_IMPORTED_MODULE_5__["AwardsComponent"] },
            { path: 'innovations', component: _about_us_about_innovations_about_innovations_component__WEBPACK_IMPORTED_MODULE_8__["AboutInnovationsComponent"] },
        ] },
];
// about/projects
// about/history
// about/team
// about/innovations


/***/ }),

/***/ "./src/app/Features/home/home.component.scss":
/*!***************************************************!*\
  !*** ./src/app/Features/home/home.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-wrapper {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXBvbWFnZS9Eb2N1bWVudHMvTXlQcm9qZWN0cy9yYWxvbWV4L3NyYy9hcHAvRmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9GZWF0dXJlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9GZWF0dXJlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbiIsIi5ob21lLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Features/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/Features/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(db, activeRoute) {
        this.db = db;
        this.activeRoute = activeRoute;
        this.homeProducts = this.db.AdminUtils.getElements('homeProducts');
    }
    ngOnInit() {
        console.log(this.activeRoute);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/Features/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/Features/products/category-overview/category-overview.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/Features/products/category-overview/category-overview.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.card a {\n  text-underline: none;\n  text-decoration: none;\n  color: green;\n}\ndiv.card a .series-wrapper .series-heading {\n  padding: 10px;\n}\ndiv.card a .series-wrapper .series-description {\n  padding: 0 0 35px 30px;\n  color: black;\n}\ndiv.card a .series-wrapper div.background-image {\n  background-position: right;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXBvbWFnZS9Eb2N1bWVudHMvTXlQcm9qZWN0cy9yYWxvbWV4L3NyYy9hcHAvRmVhdHVyZXMvcHJvZHVjdHMvY2F0ZWdvcnktb3ZlcnZpZXcvY2F0ZWdvcnktb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0ZlYXR1cmVzL3Byb2R1Y3RzL2NhdGVnb3J5LW92ZXJ2aWV3L2NhdGVnb3J5LW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNBSjtBREdNO0VBQ0UsYUFBQTtBQ0RSO0FESU07RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNGUjtBREtNO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvRmVhdHVyZXMvcHJvZHVjdHMvY2F0ZWdvcnktb3ZlcnZpZXcvY2F0ZWdvcnktb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY2FyZCB7XG4gIGEge1xuICAgIHRleHQtdW5kZXJsaW5lOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogZ3JlZW47XG5cbiAgICAuc2VyaWVzLXdyYXBwZXIge1xuICAgICAgLnNlcmllcy1oZWFkaW5nIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIH1cblxuICAgICAgLnNlcmllcy1kZXNjcmlwdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAzNXB4IDMwcHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cblxuICAgICAgZGl2LmJhY2tncm91bmQtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImRpdi5jYXJkIGEge1xuICB0ZXh0LXVuZGVybGluZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogZ3JlZW47XG59XG5kaXYuY2FyZCBhIC5zZXJpZXMtd3JhcHBlciAuc2VyaWVzLWhlYWRpbmcge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuZGl2LmNhcmQgYSAuc2VyaWVzLXdyYXBwZXIgLnNlcmllcy1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDAgMCAzNXB4IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbmRpdi5jYXJkIGEgLnNlcmllcy13cmFwcGVyIGRpdi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/Features/products/category-overview/category-overview.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/Features/products/category-overview/category-overview.component.ts ***!
  \************************************************************************************/
/*! exports provided: CategoryOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryOverviewComponent", function() { return CategoryOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");




let CategoryOverviewComponent = class CategoryOverviewComponent {
    constructor(activeRoute, db) {
        this.activeRoute = activeRoute;
        this.db = db;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const params = this.activeRoute.snapshot.params;
            this.data = yield this.db.getSubCategories(params.type, params.category).toPromise();
            this.series = Object.keys(this.data);
            this.productType = params.type;
        });
    }
};
CategoryOverviewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"] }
];
CategoryOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-overview',
        template: __webpack_require__(/*! raw-loader!./category-overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/products/category-overview/category-overview.component.html"),
        styles: [__webpack_require__(/*! ./category-overview.component.scss */ "./src/app/Features/products/category-overview/category-overview.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"]])
], CategoryOverviewComponent);



/***/ }),

/***/ "./src/app/Features/products/category/category.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/Features/products/category/category.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Byb2R1Y3RzL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Features/products/category/category.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Features/products/category/category.component.ts ***!
  \******************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");



let CategoryComponent = class CategoryComponent {
    constructor(db) {
        this.db = db;
        //todo FIX TYPE!
    }
    ngOnInit() {
        this.db.getType(this.category).subscribe(response => {
            this.data = response;
            debugger;
            this.categories = Object.keys(response['types']);
        });
    }
};
CategoryComponent.ctorParameters = () => [
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoryComponent.prototype, "category", void 0);
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: __webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/products/category/category.component.html"),
        styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/Features/products/category/category.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"]])
], CategoryComponent);



/***/ }),

/***/ "./src/app/Features/products/cultivators/cultivators.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/Features/products/cultivators/cultivators.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Byb2R1Y3RzL2N1bHRpdmF0b3JzL2N1bHRpdmF0b3JzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Features/products/cultivators/cultivators.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Features/products/cultivators/cultivators.component.ts ***!
  \************************************************************************/
/*! exports provided: CultivatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CultivatorsComponent", function() { return CultivatorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CultivatorsComponent = class CultivatorsComponent {
    constructor() { }
    ngOnInit() {
        history.replaceState('', '', 'products/cultivators');
    }
};
CultivatorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cultivators',
        template: __webpack_require__(/*! raw-loader!./cultivators.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/products/cultivators/cultivators.component.html"),
        styles: [__webpack_require__(/*! ./cultivators.component.css */ "./src/app/Features/products/cultivators/cultivators.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CultivatorsComponent);



/***/ }),

/***/ "./src/app/Features/products/disks/disks.component.css":
/*!*************************************************************!*\
  !*** ./src/app/Features/products/disks/disks.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Byb2R1Y3RzL2Rpc2tzL2Rpc2tzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Features/products/disks/disks.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Features/products/disks/disks.component.ts ***!
  \************************************************************/
/*! exports provided: DisksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisksComponent", function() { return DisksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DisksComponent = class DisksComponent {
    constructor() { }
    ngOnInit() {
        //history.replaceState('', '', 'products/disks');
    }
};
DisksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-disks',
        template: '<app-category [category]="\'disks\'"></app-category>',
        styles: [__webpack_require__(/*! ./disks.component.css */ "./src/app/Features/products/disks/disks.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DisksComponent);



/***/ }),

/***/ "./src/app/Features/products/mdb-accordion/mdb-accordion.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/Features/products/mdb-accordion/mdb-accordion.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header {\n  text-align: center;\n  font-size: 1.5rem;\n  text-transform: capitalize;\n}\n.card {\n  text-align: center;\n}\n.row {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRmVhdHVyZXMvcHJvZHVjdHMvbWRiLWFjY29yZGlvbi9tZGItYWNjb3JkaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvRmVhdHVyZXMvcHJvZHVjdHMvbWRiLWFjY29yZGlvbi9tZGItYWNjb3JkaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/Features/products/mdb-accordion/mdb-accordion.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Features/products/mdb-accordion/mdb-accordion.component.ts ***!
  \****************************************************************************/
/*! exports provided: MdbAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbAccordionComponent", function() { return MdbAccordionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MdbAccordionComponent = class MdbAccordionComponent {
    constructor() {
        this.multiple = true;
    }
    ngOnInit() {
        this.subCategories = Object.keys(this.data);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MdbAccordionComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MdbAccordionComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MdbAccordionComponent.prototype, "category", void 0);
MdbAccordionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mdb-accordion',
        template: __webpack_require__(/*! raw-loader!./mdb-accordion.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/products/mdb-accordion/mdb-accordion.component.html"),
        styles: [__webpack_require__(/*! ./mdb-accordion.component.css */ "./src/app/Features/products/mdb-accordion/mdb-accordion.component.css")]
    })
], MdbAccordionComponent);



/***/ }),

/***/ "./src/app/Features/products/parts/parts.component.css":
/*!*************************************************************!*\
  !*** ./src/app/Features/products/parts/parts.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Byb2R1Y3RzL3BhcnRzL3BhcnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Features/products/parts/parts.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Features/products/parts/parts.component.ts ***!
  \************************************************************/
/*! exports provided: PartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartsComponent", function() { return PartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PartsComponent = class PartsComponent {
    constructor() { }
    ngOnInit() {
        history.replaceState('', '', 'products/parts');
    }
};
PartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parts',
        template: __webpack_require__(/*! raw-loader!./parts.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/products/parts/parts.component.html"),
        styles: [__webpack_require__(/*! ./parts.component.css */ "./src/app/Features/products/parts/parts.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PartsComponent);



/***/ }),

/***/ "./src/app/Features/products/ploughs/ploughs.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Features/products/ploughs/ploughs.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Byb2R1Y3RzL3Bsb3VnaHMvcGxvdWdocy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Features/products/ploughs/ploughs.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Features/products/ploughs/ploughs.component.ts ***!
  \****************************************************************/
/*! exports provided: PloughsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PloughsComponent", function() { return PloughsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PloughsComponent = class PloughsComponent {
};
PloughsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ploughs',
        template: '<app-category [category]="\'ploughs\'"></app-category>',
        styles: [__webpack_require__(/*! ./ploughs.component.css */ "./src/app/Features/products/ploughs/ploughs.component.css")]
    })
], PloughsComponent);



/***/ }),

/***/ "./src/app/Features/products/product/product.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Features/products/product/product.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-body {\n  z-index: 16;\n  position: relative;\n  bottom: 100px;\n  overflow: hidden;\n  background: white;\n  border: 1px solid #e4e4e4;\n  box-shadow: 20px 19px 20px 0px grey;\n  border-radius: 5px;\n  padding-bottom: 15px;\n  margin-bottom: -75px;\n}\n@media only screen and (max-width: 600px) {\n  .card-body {\n    z-index: 16;\n    position: relative;\n    bottom: 0px;\n    overflow: hidden;\n    background: white;\n    border: 1px solid #e4e4e4;\n    box-shadow: 20px 19px 20px 0px grey;\n    border-radius: 5px;\n    padding-bottom: 15px;\n    margin-bottom: -3px;\n    height: 270px;\n  }\n}\n/*div.card-cascade{*/\n/*padding-bottom: 50px;*/\n/*}*/\n/*div.view-cascade{*/\n/*margin-top: 0px;*/\n/*margin-bottom: 120px;*/\n/*}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGFBQWE7RUFDZjtBQUNGO0FBQ0Esb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4QixJQUFJO0FBQ0osb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIsSUFBSSIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYm9keSB7XG4gIHotaW5kZXg6IDE2O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xuICBib3gtc2hhZG93OiAyMHB4IDE5cHggMjBweCAwcHggZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogLTc1cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jYXJkLWJvZHkge1xuICAgIHotaW5kZXg6IDE2O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgYm94LXNoYWRvdzogMjBweCAxOXB4IDIwcHggMHB4IGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gICAgaGVpZ2h0OiAyNzBweDtcbiAgfVxufVxuLypkaXYuY2FyZC1jYXNjYWRleyovXG4vKnBhZGRpbmctYm90dG9tOiA1MHB4OyovXG4vKn0qL1xuLypkaXYudmlldy1jYXNjYWRleyovXG4vKm1hcmdpbi10b3A6IDBweDsqL1xuLyptYXJnaW4tYm90dG9tOiAxMjBweDsqL1xuLyp9Ki9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Features/products/product/product.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Features/products/product/product.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");




let ProductComponent = class ProductComponent {
    constructor(route, db) {
        this.route = route;
        this.db = db;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.type = this.route.snapshot.params.type;
            this.category = this.route.snapshot.params.category;
            this.series = this.route.snapshot.params.series;
            this.id = this.route.snapshot.params.id;
            this.item = yield this.db
                .getSingleItem(this.type, this.category, this.series, this.id)
                .toPromise();
        });
    }
};
ProductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/products/product/product.component.html"),
        styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/Features/products/product/product.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"]])
], ProductComponent);



/***/ }),

/***/ "./src/app/Features/products/products.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/Features/products/products.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products-container {\n  text-align: center;\n}\n.products-container .category {\n  padding: 20px 20px 0;\n}\n.products-container .category .wrapper {\n  border-radius: 15px;\n  height: 100%;\n  min-height: 250px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.products-container .category .wrapper .overlay {\n  border-radius: 0 0 15px 15px;\n  position: absolute;\n  bottom: 0;\n  top: 230px;\n  left: 20px;\n  right: 20px;\n  -webkit-transition: 0.5s ease;\n  transition: 0.5s ease;\n  overflow: hidden;\n}\n.products-container .category .wrapper .overlay h1 {\n  font-size: 1.5rem;\n  margin: 5px auto;\n}\n.products-container .category .wrapper .overlay ul {\n  -webkit-transition: 1.5s ease;\n  transition: 1.5s ease;\n  padding: 60px 0;\n  display: none;\n}\n.products-container .category .wrapper .overlay.ploughs {\n  background-color: rgba(10, 103, 48, 0.9);\n}\n.products-container .category .wrapper .overlay.cultivators {\n  background-color: rgba(30, 144, 255, 0.91);\n}\n.products-container .category .wrapper .overlay.rollers, .products-container .category .wrapper .overlay.shredders {\n  background-color: rgba(147, 112, 219, 0.9);\n}\n.products-container .category .wrapper .overlay.disks {\n  background-color: rgba(179, 62, 0, 0.9);\n}\n.products-container .category .wrapper .overlay.sprayers {\n  background-color: rgba(139, 0, 0, 0.9);\n}\n.products-container .category .wrapper:hover .overlay {\n  padding-top: 40px;\n  top: 20px;\n  border-radius: 15px;\n  color: white;\n}\n.products-container .category .wrapper:hover .overlay ul {\n  -webkit-transition: 1.5s ease;\n  transition: 1.5s ease;\n  padding: 50px 0;\n  display: block;\n  margin: auto;\n  color: black;\n}\n.products-container .category .wrapper:hover .overlay ul li {\n  opacity: 1;\n  padding: 12px 0;\n  margin: 0 auto;\n  -webkit-transition: 0.2s ease-in;\n  transition: 0.2s ease-in;\n}\n.products-container .category .wrapper:hover .overlay ul li:hover {\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.8);\n}\na {\n  text-decoration: none;\n}\na:hover,\na:visited,\na:active {\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXBvbWFnZS9Eb2N1bWVudHMvTXlQcm9qZWN0cy9yYWxvbWV4L3NyYy9hcHAvRmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0ZlYXR1cmVzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjtBRENFO0VBQ0Usb0JBQUE7QUNDSjtBRENJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNDTjtBRENNO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBRENRO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0NWO0FERVE7RUFDRSw2QkFBQTtFQUFBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNBVjtBREdRO0VBQ0Usd0NBQUE7QUNEVjtBREdRO0VBQ0UsMENBQUE7QUNEVjtBREdRO0VBRUUsMENBQUE7QUNGVjtBRElRO0VBQ0UsdUNBQUE7QUNGVjtBRElRO0VBQ0Usc0NBQUE7QUNGVjtBRE9NO0VBQ0UsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDTFI7QURPUTtFQUNFLDZCQUFBO0VBQUEscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDTFY7QURPVTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7QUNMWjtBRE9VO0VBQ0UsZUFBQTtFQUNBLDBDQUFBO0FDTFo7QURhQTtFQUNFLHFCQUFBO0FDVkY7QURZQTs7O0VBR0UsbUJBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RzLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAuY2F0ZWdvcnkge1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAwO1xuXG4gICAgLndyYXBwZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHRvcDogMjMwcHg7XG4gICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIG1hcmdpbjogNXB4IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMS41cyBlYXNlO1xuICAgICAgICAgIHBhZGRpbmc6IDYwcHggMDtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5wbG91Z2hzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAxMDMsIDQ4LCAwLjkpO1xuICAgICAgICB9XG4gICAgICAgICYuY3VsdGl2YXRvcnMge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDE0NCwgMjU1LCAwLjkxKTtcbiAgICAgICAgfVxuICAgICAgICAmLnJvbGxlcnMsXG4gICAgICAgICYuc2hyZWRkZXJzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NywgMTEyLCAyMTksIDAuOSk7XG4gICAgICAgIH1cbiAgICAgICAgJi5kaXNrcyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzksIDYyLCAwLCAwLjkpO1xuICAgICAgICB9XG4gICAgICAgICYuc3ByYXllcnMge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM5LCAwLCAwLCAwLjkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC53cmFwcGVyOmhvdmVyIHtcbiAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAxLjVzIGVhc2U7XG4gICAgICAgICAgcGFkZGluZzogNTBweCAwO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG5cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgcGFkZGluZzogMTJweCAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6aG92ZXIsXG5hOnZpc2l0ZWQsXG5hOmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4iLCIucHJvZHVjdHMtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2R1Y3RzLWNvbnRhaW5lciAuY2F0ZWdvcnkge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMDtcbn1cbi5wcm9kdWN0cy1jb250YWluZXIgLmNhdGVnb3J5IC53cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLnByb2R1Y3RzLWNvbnRhaW5lciAuY2F0ZWdvcnkgLndyYXBwZXIgLm92ZXJsYXkge1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiAyMzBweDtcbiAgbGVmdDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcm9kdWN0cy1jb250YWluZXIgLmNhdGVnb3J5IC53cmFwcGVyIC5vdmVybGF5IGgxIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbjogNXB4IGF1dG87XG59XG4ucHJvZHVjdHMtY29udGFpbmVyIC5jYXRlZ29yeSAud3JhcHBlciAub3ZlcmxheSB1bCB7XG4gIHRyYW5zaXRpb246IDEuNXMgZWFzZTtcbiAgcGFkZGluZzogNjBweCAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuLnByb2R1Y3RzLWNvbnRhaW5lciAuY2F0ZWdvcnkgLndyYXBwZXIgLm92ZXJsYXkucGxvdWdocyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDEwMywgNDgsIDAuOSk7XG59XG4ucHJvZHVjdHMtY29udGFpbmVyIC5jYXRlZ29yeSAud3JhcHBlciAub3ZlcmxheS5jdWx0aXZhdG9ycyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDE0NCwgMjU1LCAwLjkxKTtcbn1cbi5wcm9kdWN0cy1jb250YWluZXIgLmNhdGVnb3J5IC53cmFwcGVyIC5vdmVybGF5LnJvbGxlcnMsIC5wcm9kdWN0cy1jb250YWluZXIgLmNhdGVnb3J5IC53cmFwcGVyIC5vdmVybGF5LnNocmVkZGVycyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ3LCAxMTIsIDIxOSwgMC45KTtcbn1cbi5wcm9kdWN0cy1jb250YWluZXIgLmNhdGVnb3J5IC53cmFwcGVyIC5vdmVybGF5LmRpc2tzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzksIDYyLCAwLCAwLjkpO1xufVxuLnByb2R1Y3RzLWNvbnRhaW5lciAuY2F0ZWdvcnkgLndyYXBwZXIgLm92ZXJsYXkuc3ByYXllcnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzOSwgMCwgMCwgMC45KTtcbn1cbi5wcm9kdWN0cy1jb250YWluZXIgLmNhdGVnb3J5IC53cmFwcGVyOmhvdmVyIC5vdmVybGF5IHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnByb2R1Y3RzLWNvbnRhaW5lciAuY2F0ZWdvcnkgLndyYXBwZXI6aG92ZXIgLm92ZXJsYXkgdWwge1xuICB0cmFuc2l0aW9uOiAxLjVzIGVhc2U7XG4gIHBhZGRpbmc6IDUwcHggMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgY29sb3I6IGJsYWNrO1xufVxuLnByb2R1Y3RzLWNvbnRhaW5lciAuY2F0ZWdvcnkgLndyYXBwZXI6aG92ZXIgLm92ZXJsYXkgdWwgbGkge1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XG59XG4ucHJvZHVjdHMtY29udGFpbmVyIC5jYXRlZ29yeSAud3JhcHBlcjpob3ZlciAub3ZlcmxheSB1bCBsaTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyLFxuYTp2aXNpdGVkLFxuYTphY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Features/products/products.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Features/products/products.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");



let ProductsComponent = class ProductsComponent {
    constructor(db) {
        this.db = db;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.catalog = yield this.db.getCatalog();
        });
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/products/products.component.html"),
        styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/Features/products/products.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"]])
], ProductsComponent);



/***/ }),

/***/ "./src/app/Features/products/products.module.ts":
/*!******************************************************!*\
  !*** ./src/app/Features/products/products.module.ts ***!
  \******************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _products_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products.routing */ "./src/app/Features/products/products.routing.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category/category.component */ "./src/app/Features/products/category/category.component.ts");
/* harmony import */ var _cultivators_cultivators_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cultivators/cultivators.component */ "./src/app/Features/products/cultivators/cultivators.component.ts");
/* harmony import */ var _disks_disks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./disks/disks.component */ "./src/app/Features/products/disks/disks.component.ts");
/* harmony import */ var _mdb_accordion_mdb_accordion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mdb-accordion/mdb-accordion.component */ "./src/app/Features/products/mdb-accordion/mdb-accordion.component.ts");
/* harmony import */ var _parts_parts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parts/parts.component */ "./src/app/Features/products/parts/parts.component.ts");
/* harmony import */ var _ploughs_ploughs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ploughs/ploughs.component */ "./src/app/Features/products/ploughs/ploughs.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/product.component */ "./src/app/Features/products/product/product.component.ts");
/* harmony import */ var _rippers_rippers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rippers/rippers.component */ "./src/app/Features/products/rippers/rippers.component.ts");
/* harmony import */ var _rollers_rollers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rollers/rollers.component */ "./src/app/Features/products/rollers/rollers.component.ts");
/* harmony import */ var _shredders_shredders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shredders/shredders.component */ "./src/app/Features/products/shredders/shredders.component.ts");
/* harmony import */ var _special_special_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./special/special.component */ "./src/app/Features/products/special/special.component.ts");
/* harmony import */ var _subcategory_subcategory_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./subcategory/subcategory.component */ "./src/app/Features/products/subcategory/subcategory.component.ts");
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tools/tools.component */ "./src/app/Features/products/tools/tools.component.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./products.component */ "./src/app/Features/products/products.component.ts");
/* harmony import */ var _Shared_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../Shared/shared.module */ "./src/app/Shared/shared.module.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _tools_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../tools/pipes/pipes.module */ "./src/app/tools/pipes/pipes.module.ts");
/* harmony import */ var _category_overview_category_overview_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./category-overview/category-overview.component */ "./src/app/Features/products/category-overview/category-overview.component.ts");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tables/tables.component */ "./src/app/Features/products/tables/tables.component.ts");
























let ProductsModule = class ProductsModule {
};
ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _tables_tables_component__WEBPACK_IMPORTED_MODULE_23__["TablesComponent"],
            _products_component__WEBPACK_IMPORTED_MODULE_18__["ProductsComponent"],
            _category_category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"],
            _cultivators_cultivators_component__WEBPACK_IMPORTED_MODULE_6__["CultivatorsComponent"],
            _disks_disks_component__WEBPACK_IMPORTED_MODULE_7__["DisksComponent"],
            _mdb_accordion_mdb_accordion_component__WEBPACK_IMPORTED_MODULE_8__["MdbAccordionComponent"],
            _parts_parts_component__WEBPACK_IMPORTED_MODULE_9__["PartsComponent"],
            _ploughs_ploughs_component__WEBPACK_IMPORTED_MODULE_10__["PloughsComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
            _rippers_rippers_component__WEBPACK_IMPORTED_MODULE_12__["RippersComponent"],
            _rollers_rollers_component__WEBPACK_IMPORTED_MODULE_13__["RollersComponent"],
            _shredders_shredders_component__WEBPACK_IMPORTED_MODULE_14__["ShreddersComponent"],
            _special_special_component__WEBPACK_IMPORTED_MODULE_15__["SpecialComponent"],
            _subcategory_subcategory_component__WEBPACK_IMPORTED_MODULE_16__["SubcategoryComponent"],
            _tools_tools_component__WEBPACK_IMPORTED_MODULE_17__["ToolsComponent"],
            _category_overview_category_overview_component__WEBPACK_IMPORTED_MODULE_22__["CategoryOverviewComponent"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_products_routing__WEBPACK_IMPORTED_MODULE_4__["productsRouting"]),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["CardsFreeModule"],
            _tools_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_21__["PipesModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["TableModule"],
        ],
        exports: [
            _products_component__WEBPACK_IMPORTED_MODULE_18__["ProductsComponent"],
            _category_category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"],
            _cultivators_cultivators_component__WEBPACK_IMPORTED_MODULE_6__["CultivatorsComponent"],
            _disks_disks_component__WEBPACK_IMPORTED_MODULE_7__["DisksComponent"],
            _mdb_accordion_mdb_accordion_component__WEBPACK_IMPORTED_MODULE_8__["MdbAccordionComponent"],
            _parts_parts_component__WEBPACK_IMPORTED_MODULE_9__["PartsComponent"],
            _ploughs_ploughs_component__WEBPACK_IMPORTED_MODULE_10__["PloughsComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
            _rippers_rippers_component__WEBPACK_IMPORTED_MODULE_12__["RippersComponent"],
            _rollers_rollers_component__WEBPACK_IMPORTED_MODULE_13__["RollersComponent"],
            _shredders_shredders_component__WEBPACK_IMPORTED_MODULE_14__["ShreddersComponent"],
            _special_special_component__WEBPACK_IMPORTED_MODULE_15__["SpecialComponent"],
            _subcategory_subcategory_component__WEBPACK_IMPORTED_MODULE_16__["SubcategoryComponent"],
            _tools_tools_component__WEBPACK_IMPORTED_MODULE_17__["ToolsComponent"],
        ],
    })
], ProductsModule);



/***/ }),

/***/ "./src/app/Features/products/products.routing.ts":
/*!*******************************************************!*\
  !*** ./src/app/Features/products/products.routing.ts ***!
  \*******************************************************/
/*! exports provided: productsRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsRouting", function() { return productsRouting; });
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.component */ "./src/app/Features/products/products.component.ts");
/* harmony import */ var _rippers_rippers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rippers/rippers.component */ "./src/app/Features/products/rippers/rippers.component.ts");
/* harmony import */ var _cultivators_cultivators_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cultivators/cultivators.component */ "./src/app/Features/products/cultivators/cultivators.component.ts");
/* harmony import */ var _shredders_shredders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shredders/shredders.component */ "./src/app/Features/products/shredders/shredders.component.ts");
/* harmony import */ var _ploughs_ploughs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ploughs/ploughs.component */ "./src/app/Features/products/ploughs/ploughs.component.ts");
/* harmony import */ var _special_special_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./special/special.component */ "./src/app/Features/products/special/special.component.ts");
/* harmony import */ var _rollers_rollers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rollers/rollers.component */ "./src/app/Features/products/rollers/rollers.component.ts");
/* harmony import */ var _disks_disks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./disks/disks.component */ "./src/app/Features/products/disks/disks.component.ts");
/* harmony import */ var _parts_parts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parts/parts.component */ "./src/app/Features/products/parts/parts.component.ts");
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tools/tools.component */ "./src/app/Features/products/tools/tools.component.ts");
/* harmony import */ var _category_overview_category_overview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category-overview/category-overview.component */ "./src/app/Features/products/category-overview/category-overview.component.ts");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tables/tables.component */ "./src/app/Features/products/tables/tables.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product/product.component */ "./src/app/Features/products/product/product.component.ts");













const productsRouting = [
    {
        path: 'products',
        children: [
            { path: 'test', component: _tables_tables_component__WEBPACK_IMPORTED_MODULE_11__["TablesComponent"] },
            { path: '', component: _products_component__WEBPACK_IMPORTED_MODULE_0__["ProductsComponent"] },
            {
                path: 'overview/:type/:category/:series/:id',
                component: _product_product_component__WEBPACK_IMPORTED_MODULE_12__["ProductComponent"],
                pathMatch: 'full',
            },
            { path: 'overview/:type/:category', component: _category_overview_category_overview_component__WEBPACK_IMPORTED_MODULE_10__["CategoryOverviewComponent"], pathMatch: 'full' },
            { path: 'rippers', component: _rippers_rippers_component__WEBPACK_IMPORTED_MODULE_1__["RippersComponent"], outlet: 'products' },
            { path: 'cultivators', component: _cultivators_cultivators_component__WEBPACK_IMPORTED_MODULE_2__["CultivatorsComponent"], outlet: 'products' },
            { path: 'shredders', component: _shredders_shredders_component__WEBPACK_IMPORTED_MODULE_3__["ShreddersComponent"], outlet: 'products' },
            { path: 'ploughs', component: _ploughs_ploughs_component__WEBPACK_IMPORTED_MODULE_4__["PloughsComponent"], outlet: 'products' },
            { path: 'special', component: _special_special_component__WEBPACK_IMPORTED_MODULE_5__["SpecialComponent"], outlet: 'products' },
            { path: 'rollers', component: _rollers_rollers_component__WEBPACK_IMPORTED_MODULE_6__["RollersComponent"], outlet: 'products' },
            { path: 'disks', component: _disks_disks_component__WEBPACK_IMPORTED_MODULE_7__["DisksComponent"], outlet: 'products' },
            { path: 'parts', component: _parts_parts_component__WEBPACK_IMPORTED_MODULE_8__["PartsComponent"], outlet: 'products' },
            { path: 'tools', component: _tools_tools_component__WEBPACK_IMPORTED_MODULE_9__["ToolsComponent"], outlet: 'products' },
        ],
    },
];


/***/ }),

/***/ "./src/app/Features/products/rippers/rippers.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Features/products/rippers/rippers.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Byb2R1Y3RzL3JpcHBlcnMvcmlwcGVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Features/products/rippers/rippers.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Features/products/rippers/rippers.component.ts ***!
  \****************************************************************/
/*! exports provided: RippersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippersComponent", function() { return RippersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RippersComponent = class RippersComponent {
    constructor() { }
    ngOnInit() {
        history.replaceState('', '', 'products/rippers');
    }
};
RippersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rippers',
        template: __webpack_require__(/*! raw-loader!./rippers.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/products/rippers/rippers.component.html"),
        styles: [__webpack_require__(/*! ./rippers.component.css */ "./src/app/Features/products/rippers/rippers.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RippersComponent);



/***/ }),

/***/ "./src/app/Features/products/rollers/rollers.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Features/products/rollers/rollers.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Byb2R1Y3RzL3JvbGxlcnMvcm9sbGVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Features/products/rollers/rollers.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Features/products/rollers/rollers.component.ts ***!
  \****************************************************************/
/*! exports provided: RollersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollersComponent", function() { return RollersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RollersComponent = class RollersComponent {
    constructor() { }
    ngOnInit() {
        history.replaceState('', '', 'products/rollers');
    }
};
RollersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rollers',
        template: __webpack_require__(/*! raw-loader!./rollers.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/products/rollers/rollers.component.html"),
        styles: [__webpack_require__(/*! ./rollers.component.css */ "./src/app/Features/products/rollers/rollers.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RollersComponent);



/***/ }),

/***/ "./src/app/Features/products/shredders/shredders.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/Features/products/shredders/shredders.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Byb2R1Y3RzL3NocmVkZGVycy9zaHJlZGRlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Features/products/shredders/shredders.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Features/products/shredders/shredders.component.ts ***!
  \********************************************************************/
/*! exports provided: ShreddersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShreddersComponent", function() { return ShreddersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShreddersComponent = class ShreddersComponent {
    constructor() { }
    ngOnInit() {
        history.replaceState('', '', 'products/shredders');
    }
};
ShreddersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shredders',
        template: __webpack_require__(/*! raw-loader!./shredders.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/products/shredders/shredders.component.html"),
        styles: [__webpack_require__(/*! ./shredders.component.css */ "./src/app/Features/products/shredders/shredders.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ShreddersComponent);



/***/ }),

/***/ "./src/app/Features/products/special/special.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Features/products/special/special.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Byb2R1Y3RzL3NwZWNpYWwvc3BlY2lhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Features/products/special/special.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Features/products/special/special.component.ts ***!
  \****************************************************************/
/*! exports provided: SpecialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialComponent", function() { return SpecialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpecialComponent = class SpecialComponent {
    constructor() { }
    ngOnInit() {
        history.replaceState('', '', 'products/special');
    }
};
SpecialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-special',
        template: __webpack_require__(/*! raw-loader!./special.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/products/special/special.component.html"),
        styles: [__webpack_require__(/*! ./special.component.css */ "./src/app/Features/products/special/special.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SpecialComponent);



/***/ }),

/***/ "./src/app/Features/products/subcategory/subcategory.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/Features/products/subcategory/subcategory.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Byb2R1Y3RzL3N1YmNhdGVnb3J5L3N1YmNhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Features/products/subcategory/subcategory.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Features/products/subcategory/subcategory.component.ts ***!
  \************************************************************************/
/*! exports provided: SubcategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryComponent", function() { return SubcategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");




let SubcategoryComponent = class SubcategoryComponent {
    constructor(activeRoute, db) {
        this.activeRoute = activeRoute;
        this.db = db;
    }
    ngOnInit() {
        this.type = this.activeRoute.snapshot.params.type;
        this.category = this.activeRoute.snapshot.params.category;
        this.subCategory = this.activeRoute.snapshot.params.subCategory;
        this.db.getseriesData(this.type, this.category, this.subCategory).subscribe(data => {
            this.data = data;
        });
    }
};
SubcategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"] }
];
SubcategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subcategory',
        template: __webpack_require__(/*! raw-loader!./subcategory.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/products/subcategory/subcategory.component.html"),
        styles: [__webpack_require__(/*! ./subcategory.component.css */ "./src/app/Features/products/subcategory/subcategory.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"]])
], SubcategoryComponent);



/***/ }),

/***/ "./src/app/Features/products/tables/tables.component.css":
/*!***************************************************************!*\
  !*** ./src/app/Features/products/tables/tables.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Byb2R1Y3RzL3RhYmxlcy90YWJsZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Features/products/tables/tables.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Features/products/tables/tables.component.ts ***!
  \**************************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TablesComponent = class TablesComponent {
    constructor() { }
    ngOnInit() {
        this.tableData1 = {
            headerRow: ['ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615'],
            ],
        };
        this.tableData2 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten'],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester'],
            ],
        };
    }
};
TablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tables',
        template: __webpack_require__(/*! raw-loader!./tables.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/products/tables/tables.component.html"),
        styles: [__webpack_require__(/*! ./tables.component.css */ "./src/app/Features/products/tables/tables.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TablesComponent);



/***/ }),

/***/ "./src/app/Features/products/tools/tools.component.css":
/*!*************************************************************!*\
  !*** ./src/app/Features/products/tools/tools.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3Byb2R1Y3RzL3Rvb2xzL3Rvb2xzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Features/products/tools/tools.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Features/products/tools/tools.component.ts ***!
  \************************************************************/
/*! exports provided: ToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsComponent", function() { return ToolsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToolsComponent = class ToolsComponent {
    constructor() { }
    ngOnInit() {
        history.replaceState('', '', 'products/tools');
    }
};
ToolsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tools',
        template: __webpack_require__(/*! raw-loader!./tools.component.html */ "./node_modules/raw-loader/index.js!./src/app/Features/products/tools/tools.component.html"),
        styles: [__webpack_require__(/*! ./tools.component.css */ "./src/app/Features/products/tools/tools.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ToolsComponent);



/***/ }),

/***/ "./src/app/Shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/Shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-container {\n  padding: 10px;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  margin: 0 auto;\n  background: #f2f3f5;\n  outline: 1px solid #b7b7b7;\n}\n.info {\n  margin: 0 auto;\n}\n.email {\n  padding: 0 25px;\n}\n.phone {\n  padding: 0 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9TaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZjJmM2Y1O1xuICBvdXRsaW5lOiAxcHggc29saWQgI2I3YjdiNztcbn1cbi5pbmZvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uZW1haWwge1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG4ucGhvbmUge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/Shared/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/Shared/header/header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/Shared/mdb-carousel/mdb-carousel.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Shared/mdb-carousel/mdb-carousel.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-fluid {\n  background-size: cover;\n  margin: 0 auto;\n  padding: 20px 10px;\n}\n.carousel-indicators {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2hhcmVkL21kYi1jYXJvdXNlbC9tZGItY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9TaGFyZWQvbWRiLWNhcm91c2VsL21kYi1jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1mbHVpZCB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Shared/mdb-carousel/mdb-carousel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Shared/mdb-carousel/mdb-carousel.component.ts ***!
  \***************************************************************/
/*! exports provided: MdbCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbCarouselComponent", function() { return MdbCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MdbCarouselComponent = class MdbCarouselComponent {
    constructor() {
        this.isArray = val => Array.isArray(val);
        this.onRightClick = () => {
            return false;
        };
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MdbCarouselComponent.prototype, "images", void 0);
MdbCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mdb-carousel',
        template: __webpack_require__(/*! raw-loader!./mdb-carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/Shared/mdb-carousel/mdb-carousel.component.html"),
        styles: [__webpack_require__(/*! ./mdb-carousel.component.css */ "./src/app/Shared/mdb-carousel/mdb-carousel.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MdbCarouselComponent);



/***/ }),

/***/ "./src/app/Shared/mdb-footer/mdb-footer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/Shared/mdb-footer/mdb-footer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-footer {\n  border-radius: 10px 10px 0 0;\n  padding: 30px;\n  color: white;\n}\n.page-footer * {\n  background-color: #227644;\n}\n.page-footer .container-fluid {\n  border-radius: 5px 5px 0 0;\n}\n.page-footer .footer-copyright {\n  border-radius: 0 0 5px 5px;\n}\n.page-footer li {\n  display: inline-block;\n  margin: 10px;\n  text-align: center;\n  font-size: 30px;\n}\n.page-footer li a {\n  color: white;\n  font-size: 50px;\n  margin: 10px;\n  line-height: 0.5rem;\n}\n.page-footer li a:hover {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXBvbWFnZS9Eb2N1bWVudHMvTXlQcm9qZWN0cy9yYWxvbWV4L3NyYy9hcHAvU2hhcmVkL21kYi1mb290ZXIvbWRiLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvU2hhcmVkL21kYi1mb290ZXIvbWRiLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy92aXBvbWFnZS9Eb2N1bWVudHMvTXlQcm9qZWN0cy9yYWxvbWV4L3NyYy9hcHAvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDREY7QURFRTtFQUNFLHlCRVBXO0FET2Y7QURHRTtFQUNFLDBCQUFBO0FDREo7QURHRTtFQUNFLDBCQUFBO0FDREo7QURJRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FESUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0ZOO0FESU07RUFDRSxZQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9TaGFyZWQvbWRiLWZvb3Rlci9tZGItZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzJztcblxuLnBhZ2UtZm9vdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgcGFkZGluZzogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUdyZWVuO1xuICB9XG5cbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gIH1cbiAgLmZvb3Rlci1jb3B5cmlnaHQge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICB9XG5cbiAgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcblxuICAgIGEge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDAuNXJlbTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5wYWdlLWZvb3RlciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wYWdlLWZvb3RlciAqIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyNzY0NDtcbn1cbi5wYWdlLWZvb3RlciAuY29udGFpbmVyLWZsdWlkIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG59XG4ucGFnZS1mb290ZXIgLmZvb3Rlci1jb3B5cmlnaHQge1xuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbn1cbi5wYWdlLWZvb3RlciBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5wYWdlLWZvb3RlciBsaSBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDUwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDAuNXJlbTtcbn1cbi5wYWdlLWZvb3RlciBsaSBhOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufSIsIiRwcmltYXJ5R3JlZW46IHJnYigzNCwgMTE4LCA2OCk7XG4kcHJpbWFyeU9yYW5nZTogcmdiYSgyMzMsIDEwNiwgMjMsIDAuOSk7XG4kcHJpbWFyeUJsdWU6IHJnYmEoMzAsIDE0NCwgMjU1LCAwLjkxKTtcbiRwcmltYXJ5UHVycGxlOiByZ2JhKDE0NywgMTEyLCAyMTksIDAuOSk7XG4kcHJpbWFyeVJlZDogcmdiYSgxMzksIDAsIDAsIDAuOSk7XG5cbiR0YWJsZUJyZWFrUG9pbnQ6IDc2OHB4O1xuIl19 */"

/***/ }),

/***/ "./src/app/Shared/mdb-footer/mdb-footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Shared/mdb-footer/mdb-footer.component.ts ***!
  \***********************************************************/
/*! exports provided: MdbFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbFooterComponent", function() { return MdbFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MdbFooterComponent = class MdbFooterComponent {
};
MdbFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mdb-footer',
        template: __webpack_require__(/*! raw-loader!./mdb-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/Shared/mdb-footer/mdb-footer.component.html"),
        styles: [__webpack_require__(/*! ./mdb-footer.component.scss */ "./src/app/Shared/mdb-footer/mdb-footer.component.scss")]
    })
], MdbFooterComponent);



/***/ }),

/***/ "./src/app/Shared/mdb-jumbotron/mdb-jumbotron.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Shared/mdb-jumbotron/mdb-jumbotron.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  text-align: center;\n  text-transform: capitalize;\n  font-size: 2rem;\n}\n.jumbotron {\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2hhcmVkL21kYi1qdW1ib3Ryb24vbWRiLWp1bWJvdHJvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9TaGFyZWQvbWRiLWp1bWJvdHJvbi9tZGItanVtYm90cm9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5qdW1ib3Ryb24ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/Shared/mdb-jumbotron/mdb-jumbotron.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Shared/mdb-jumbotron/mdb-jumbotron.component.ts ***!
  \*****************************************************************/
/*! exports provided: MdbJumbotronComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbJumbotronComponent", function() { return MdbJumbotronComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MdbJumbotronComponent = class MdbJumbotronComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MdbJumbotronComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MdbJumbotronComponent.prototype, "productCategory", void 0);
MdbJumbotronComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mdb-jumbotron',
        template: __webpack_require__(/*! raw-loader!./mdb-jumbotron.component.html */ "./node_modules/raw-loader/index.js!./src/app/Shared/mdb-jumbotron/mdb-jumbotron.component.html"),
        styles: [__webpack_require__(/*! ./mdb-jumbotron.component.css */ "./src/app/Shared/mdb-jumbotron/mdb-jumbotron.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MdbJumbotronComponent);



/***/ }),

/***/ "./src/app/Shared/mdb-news/mdb-news.component.css":
/*!********************************************************!*\
  !*** ./src/app/Shared/mdb-news/mdb-news.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".single-news {\n  padding-bottom: 10px;\n  border-bottom: 1px solid gray;\n}\nimg {\n  border-radius: 0.25rem !important;\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15) !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2hhcmVkL21kYi1uZXdzL21kYi1uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMseUZBQXlGO0FBQzNGIiwiZmlsZSI6InNyYy9hcHAvU2hhcmVkL21kYi1uZXdzL21kYi1uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2luZ2xlLW5ld3Mge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG59XG5pbWcge1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/Shared/mdb-news/mdb-news.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Shared/mdb-news/mdb-news.component.ts ***!
  \*******************************************************/
/*! exports provided: MdbNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbNewsComponent", function() { return MdbNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");



let MdbNewsComponent = class MdbNewsComponent {
    constructor(db) {
        this.db = db;
    }
    ngOnInit() {
        this.db.AdminUtils.getElements('news').subscribe(res => {
            this.news = Object.values(res).sort((a, b) => b.timeStamp - a.timeStamp);
            this.latestNewsElement = this.news.shift();
        });
    }
};
MdbNewsComponent.ctorParameters = () => [
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"] }
];
MdbNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mdb-news',
        template: __webpack_require__(/*! raw-loader!./mdb-news.component.html */ "./node_modules/raw-loader/index.js!./src/app/Shared/mdb-news/mdb-news.component.html"),
        styles: [__webpack_require__(/*! ./mdb-news.component.css */ "./src/app/Shared/mdb-news/mdb-news.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"]])
], MdbNewsComponent);



/***/ }),

/***/ "./src/app/Shared/mdb-section/mdb-section.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Shared/mdb-section/mdb-section.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-fluid {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.heading {\n  text-align: center;\n  font-size: 1.8rem;\n  text-transform: capitalize;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2hhcmVkL21kYi1zZWN0aW9uL21kYi1zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvU2hhcmVkL21kYi1zZWN0aW9uL21kYi1zZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWZsdWlkIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Shared/mdb-section/mdb-section.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Shared/mdb-section/mdb-section.component.ts ***!
  \*************************************************************/
/*! exports provided: MdbSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbSectionComponent", function() { return MdbSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MdbSectionComponent = class MdbSectionComponent {
    constructor() { }
    get left() {
        return this._left;
    }
    set left(newValue) {
        this._left = newValue;
    }
    ngOnInit() {
        this.left = this.index % 2 === 0 || this.index === 0;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MdbSectionComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MdbSectionComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MdbSectionComponent.prototype, "category", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MdbSectionComponent.prototype, "heading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MdbSectionComponent.prototype, "image", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MdbSectionComponent.prototype, "description", void 0);
MdbSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mdb-section',
        template: __webpack_require__(/*! raw-loader!./mdb-section.component.html */ "./node_modules/raw-loader/index.js!./src/app/Shared/mdb-section/mdb-section.component.html"),
        styles: [__webpack_require__(/*! ./mdb-section.component.css */ "./src/app/Shared/mdb-section/mdb-section.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MdbSectionComponent);



/***/ }),

/***/ "./src/app/Shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/Shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav.navbar {\n  background-color: #227644;\n  padding-top: 0;\n  padding-right: 0;\n  padding-bottom: 0;\n}\nnav.navbar .navbar-brand h1 {\n  top: 15px;\n}\nnav.navbar .navbar-brand h1 span {\n  font-size: 24px;\n  top: -10px;\n}\nnav.navbar .navbar-collapse {\n  background-color: white;\n  min-height: 75px;\n  border-radius: 0 0 0 150px;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n@media screen and (max-width: 768px) {\n  nav.navbar .navbar-collapse {\n    border-radius: 15px 0 0 15px;\n  }\n}\nnav.navbar .navbar-collapse .nav-link {\n  font-size: 23px;\n  color: #227644;\n  font-weight: 700;\n  padding-left: 0;\n}\n.languages {\n  color: white;\n  font-size: 24px;\n  margin-top: -1px;\n  background-color: #227644;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.languages h5 {\n  padding: 0 5px;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 0;\n}\n.languages h5:hover {\n  cursor: pointer;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXBvbWFnZS9Eb2N1bWVudHMvTXlQcm9qZWN0cy9yYWxvbWV4L3NyYy9hcHAvU2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvdmlwb21hZ2UvRG9jdW1lbnRzL015UHJvamVjdHMvcmFsb21leC9zcmMvYXBwL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9TaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQ0hhO0VESWIsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUVERjtBRklJO0VBQ0UsU0FBQTtBRUZOO0FGSU07RUFDRSxlQUFBO0VBQ0EsVUFBQTtBRUZSO0FGT0U7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0FFTEo7QUZPSTtFQU5GO0lBT0ksNEJBQUE7RUVKSjtBQUNGO0FGTUk7RUFDRSxlQUFBO0VBQ0EsY0MvQlM7RURnQ1QsZ0JBQUE7RUFDQSxlQUFBO0FFSk47QUZRQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkN6Q2E7RUQwQ2IsMkJBQUE7VUFBQSxxQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUVMRjtBRk1FO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FFSko7QUZNSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FFSk4iLCJmaWxlIjoic3JjL2FwcC9TaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcblxubmF2Lm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5R3JlZW47XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcblxuICAubmF2YmFyLWJyYW5kIHtcbiAgICBoMSB7XG4gICAgICB0b3A6IDE1cHg7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIHRvcDogLTEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWluLWhlaWdodDogNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMCAxNTBweDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweCAwIDAgMTVweDtcbiAgICB9XG5cbiAgICAubmF2LWxpbmsge1xuICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgY29sb3I6ICRwcmltYXJ5R3JlZW47XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cbiAgfVxufVxuLmxhbmd1YWdlcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUdyZWVuO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGg1IHtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuICB9XG59XG4iLCIkcHJpbWFyeUdyZWVuOiByZ2IoMzQsIDExOCwgNjgpO1xuJHByaW1hcnlPcmFuZ2U6IHJnYmEoMjMzLCAxMDYsIDIzLCAwLjkpO1xuJHByaW1hcnlCbHVlOiByZ2JhKDMwLCAxNDQsIDI1NSwgMC45MSk7XG4kcHJpbWFyeVB1cnBsZTogcmdiYSgxNDcsIDExMiwgMjE5LCAwLjkpO1xuJHByaW1hcnlSZWQ6IHJnYmEoMTM5LCAwLCAwLCAwLjkpO1xuXG4kdGFibGVCcmVha1BvaW50OiA3NjhweDtcbiIsIm5hdi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjI3NjQ0O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5uYXYubmF2YmFyIC5uYXZiYXItYnJhbmQgaDEge1xuICB0b3A6IDE1cHg7XG59XG5uYXYubmF2YmFyIC5uYXZiYXItYnJhbmQgaDEgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdG9wOiAtMTBweDtcbn1cbm5hdi5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiA3NXB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCAxNTBweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgbmF2Lm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDAgMCAxNXB4O1xuICB9XG59XG5uYXYubmF2YmFyIC5uYXZiYXItY29sbGFwc2UgLm5hdi1saW5rIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogIzIyNzY0NDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubGFuZ3VhZ2VzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjc2NDQ7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbi5sYW5ndWFnZXMgaDUge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmxhbmd1YWdlcyBoNTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");



let NavbarComponent = class NavbarComponent {
    constructor(fireService) {
        this.fireService = fireService;
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/Shared/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/Shared/navbar/navbar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tools_services_fire_service__WEBPACK_IMPORTED_MODULE_2__["FireService"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/Shared/productTables/headers/product-table-cultivators-headers/product-table-cultivators-headers.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/Shared/productTables/headers/product-table-cultivators-headers/product-table-cultivators-headers.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: ProductTableCultivatorsHeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTableCultivatorsHeadersComponent", function() { return ProductTableCultivatorsHeadersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductTableCultivatorsHeadersComponent = class ProductTableCultivatorsHeadersComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductTableCultivatorsHeadersComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductTableCultivatorsHeadersComponent.prototype, "set", void 0);
ProductTableCultivatorsHeadersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cultivators-headers',
        template: __webpack_require__(/*! raw-loader!./product-table-cultivators-headers.component.html */ "./node_modules/raw-loader/index.js!./src/app/Shared/productTables/headers/product-table-cultivators-headers/product-table-cultivators-headers.component.html"),
        styles: [__webpack_require__(/*! ./../product-table-headers.scss */ "./src/app/Shared/productTables/headers/product-table-headers.scss")]
    })
], ProductTableCultivatorsHeadersComponent);



/***/ }),

/***/ "./src/app/Shared/productTables/headers/product-table-disk-headers/product-table-disks-headers.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/Shared/productTables/headers/product-table-disk-headers/product-table-disks-headers.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ProductTableDisksHeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTableDisksHeadersComponent", function() { return ProductTableDisksHeadersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductTableDisksHeadersComponent = class ProductTableDisksHeadersComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductTableDisksHeadersComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductTableDisksHeadersComponent.prototype, "set", void 0);
ProductTableDisksHeadersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'disks-headers',
        template: __webpack_require__(/*! raw-loader!./product-table-disks-headers.component.html */ "./node_modules/raw-loader/index.js!./src/app/Shared/productTables/headers/product-table-disk-headers/product-table-disks-headers.component.html"),
        styles: [__webpack_require__(/*! ./../product-table-headers.scss */ "./src/app/Shared/productTables/headers/product-table-headers.scss")]
    })
], ProductTableDisksHeadersComponent);



/***/ }),

/***/ "./src/app/Shared/productTables/headers/product-table-headers.scss":
/*!*************************************************************************!*\
  !*** ./src/app/Shared/productTables/headers/product-table-headers.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: contents;\n}\n@media screen and (max-width: 768px) {\n  :host {\n    margin: 0;\n    width: 22%;\n  }\n}\n.table th {\n  padding: 0.25rem;\n  vertical-align: middle !important;\n}\n@media screen and (max-width: 768px) {\n  thead {\n    width: auto;\n    display: inline-table;\n  }\n  thead tr.headers {\n    display: grid;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXBvbWFnZS9Eb2N1bWVudHMvTXlQcm9qZWN0cy9yYWxvbWV4L3NyYy9hcHAvU2hhcmVkL3Byb2R1Y3RUYWJsZXMvaGVhZGVycy9wcm9kdWN0LXRhYmxlLWhlYWRlcnMuc2NzcyIsInNyYy9hcHAvU2hhcmVkL3Byb2R1Y3RUYWJsZXMvaGVhZGVycy9wcm9kdWN0LXRhYmxlLWhlYWRlcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0FDREY7QURHRTtFQUhGO0lBSUksU0FBQTtJQUNBLFVBQUE7RUNBRjtBQUNGO0FERUE7RUFDRSxnQkFBQTtFQUNBLGlDQUFBO0FDQ0Y7QURFQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLHFCQUFBO0VDQ0Y7RURDRTtJQUNFLGFBQUE7RUNDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvU2hhcmVkL3Byb2R1Y3RUYWJsZXMvaGVhZGVycy9wcm9kdWN0LXRhYmxlLWhlYWRlcnMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBjb250ZW50cztcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkdGFibGVCcmVha1BvaW50KSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAyMiU7XG4gIH1cbn1cbi50YWJsZSB0aCB7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHRhYmxlQnJlYWtQb2ludCkge1xuICB0aGVhZCB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuXG4gICAgdHIuaGVhZGVycyB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDIyJTtcbiAgfVxufVxuXG4udGFibGUgdGgge1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIHRoZWFkIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gIH1cbiAgdGhlYWQgdHIuaGVhZGVycyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Shared/productTables/headers/product-table-ploughs-headers/product-table-ploughs-headers.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/Shared/productTables/headers/product-table-ploughs-headers/product-table-ploughs-headers.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ProductTablePloughsHeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTablePloughsHeadersComponent", function() { return ProductTablePloughsHeadersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductTablePloughsHeadersComponent = class ProductTablePloughsHeadersComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductTablePloughsHeadersComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductTablePloughsHeadersComponent.prototype, "set", void 0);
ProductTablePloughsHeadersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ploughs-headers',
        template: __webpack_require__(/*! raw-loader!./product-table-ploughs-headers.component.html */ "./node_modules/raw-loader/index.js!./src/app/Shared/productTables/headers/product-table-ploughs-headers/product-table-ploughs-headers.component.html"),
        styles: [__webpack_require__(/*! ./../product-table-headers.scss */ "./src/app/Shared/productTables/headers/product-table-headers.scss")]
    })
], ProductTablePloughsHeadersComponent);



/***/ }),

/***/ "./src/app/Shared/productTables/headers/product-table-rollers-headers/product-table-rollers-headers.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/Shared/productTables/headers/product-table-rollers-headers/product-table-rollers-headers.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ProductTableRollersHeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTableRollersHeadersComponent", function() { return ProductTableRollersHeadersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductTableRollersHeadersComponent = class ProductTableRollersHeadersComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductTableRollersHeadersComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductTableRollersHeadersComponent.prototype, "set", void 0);
ProductTableRollersHeadersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'rollers-headers',
        template: __webpack_require__(/*! raw-loader!./product-table-rollers-headers.component.html */ "./node_modules/raw-loader/index.js!./src/app/Shared/productTables/headers/product-table-rollers-headers/product-table-rollers-headers.component.html"),
        styles: [__webpack_require__(/*! ./../product-table-headers.scss */ "./src/app/Shared/productTables/headers/product-table-headers.scss")]
    })
], ProductTableRollersHeadersComponent);



/***/ }),

/***/ "./src/app/Shared/productTables/headers/product-table-shredders-headers/product-table-shredders-headers.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/Shared/productTables/headers/product-table-shredders-headers/product-table-shredders-headers.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ProductTableShreddersHeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTableShreddersHeadersComponent", function() { return ProductTableShreddersHeadersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductTableShreddersHeadersComponent = class ProductTableShreddersHeadersComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductTableShreddersHeadersComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductTableShreddersHeadersComponent.prototype, "set", void 0);
ProductTableShreddersHeadersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'shredders-headers',
        template: __webpack_require__(/*! raw-loader!./product-table-shredders-headers.component.html */ "./node_modules/raw-loader/index.js!./src/app/Shared/productTables/headers/product-table-shredders-headers/product-table-shredders-headers.component.html"),
        styles: [__webpack_require__(/*! ./../product-table-headers.scss */ "./src/app/Shared/productTables/headers/product-table-headers.scss")]
    })
], ProductTableShreddersHeadersComponent);



/***/ }),

/***/ "./src/app/Shared/productTables/headers/product-table-sprayers-headers/product-table-sprayers-headers.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/Shared/productTables/headers/product-table-sprayers-headers/product-table-sprayers-headers.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ProductTableSprayersHeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTableSprayersHeadersComponent", function() { return ProductTableSprayersHeadersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductTableSprayersHeadersComponent = class ProductTableSprayersHeadersComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductTableSprayersHeadersComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductTableSprayersHeadersComponent.prototype, "set", void 0);
ProductTableSprayersHeadersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sprayers-headers',
        template: __webpack_require__(/*! raw-loader!./product-table-sprayers-headers.component.html */ "./node_modules/raw-loader/index.js!./src/app/Shared/productTables/headers/product-table-sprayers-headers/product-table-sprayers-headers.component.html"),
        styles: [__webpack_require__(/*! ./../product-table-headers.scss */ "./src/app/Shared/productTables/headers/product-table-headers.scss")]
    })
], ProductTableSprayersHeadersComponent);



/***/ }),

/***/ "./src/app/Shared/productTables/product-table/product-table.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/Shared/productTables/product-table/product-table.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep thead {\n  vertical-align: unset !important;\n}\n::ng-deep thead.disks {\n  background-color: rgba(233, 106, 23, 0.9);\n}\n::ng-deep thead.ploughs {\n  background-color: #227644;\n}\n::ng-deep thead.cultivators {\n  background-color: rgba(30, 144, 255, 0.91);\n}\n::ng-deep thead.rollers, ::ng-deep thead.shredders {\n  background-color: rgba(147, 112, 219, 0.9);\n}\n::ng-deep thead.sprayers {\n  background-color: rgba(139, 0, 0, 0.9);\n}\n::ng-deep .headers th {\n  color: white;\n  text-align: center;\n  vertical-align: middle;\n  padding: 0.25rem;\n  height: 4rem;\n  width: 100px;\n}\n::ng-deep .headers th p {\n  margin: 0;\n}\n::ng-deep .headers th img {\n  height: 2.5rem;\n  vertical-align: middle;\n  margin: 8px auto;\n}\n::ng-deep .headers th.scale-up img {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\ntbody {\n  display: contents;\n  -webkit-box-pack: start;\n          justify-content: start;\n  min-width: -webkit-fill-available;\n  overflow: scroll;\n  width: 14vh;\n}\ntbody tr {\n  width: inherit;\n  border-bottom: 2px solid black;\n}\ntbody tr.disks {\n  border-color: rgba(233, 106, 23, 0.9);\n}\ntbody tr.ploughs {\n  border-color: #227644;\n}\ntbody tr.cultivators {\n  border-color: rgba(30, 144, 255, 0.91);\n}\ntbody tr.rollers, tbody tr.shredders {\n  border-color: rgba(147, 112, 219, 0.9);\n}\ntbody tr.sprayers {\n  border-color: rgba(139, 0, 0, 0.9);\n}\ntbody tr td {\n  height: 4rem;\n  width: 100px;\n}\ntbody tr td.model {\n  font-weight: 700;\n}\ntbody tr:hover {\n  cursor: pointer;\n}\ntbody td span.transportSpeed::before {\n  content: \"max \";\n}\ntbody td.hide {\n  display: none;\n}\n.table td {\n  padding: 0.25rem;\n  vertical-align: middle !important;\n}\n.spring {\n  height: 1rem;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.bolt {\n  height: 1rem;\n}\n@media screen and (max-width: 768px) {\n  table {\n    display: -webkit-box;\n    display: flex;\n    margin-bottom: 0;\n  }\n\n  tbody {\n    display: -webkit-box;\n    display: flex;\n    margin-right: 99px;\n  }\n  tbody tr {\n    border-bottom: none;\n  }\n  tbody tr td {\n    border-right: 1px solid;\n  }\n\n  .product-row {\n    display: grid;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXBvbWFnZS9Eb2N1bWVudHMvTXlQcm9qZWN0cy9yYWxvbWV4L3NyYy9hcHAvU2hhcmVkL3Byb2R1Y3RUYWJsZXMvcHJvZHVjdC10YWJsZS9wcm9kdWN0LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9TaGFyZWQvcHJvZHVjdFRhYmxlcy9wcm9kdWN0LXRhYmxlL3Byb2R1Y3QtdGFibGUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvdmlwb21hZ2UvRG9jdW1lbnRzL015UHJvamVjdHMvcmFsb21leC9zcmMvYXBwL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0NBQUE7QUNERjtBREdFO0VBQ0UseUNFTFk7QURJaEI7QURHRTtFQUNFLHlCRVRXO0FEUWY7QURHRTtFQUNFLDBDRVZVO0FEU2Q7QURHRTtFQUVFLDBDRWJZO0FEV2hCO0FESUU7RUFDRSxzQ0VmUztBRGFiO0FETUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNISjtBREtJO0VBQ0UsU0FBQTtBQ0hOO0FETUk7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0pOO0FET0k7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDTE47QURTQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDTkY7QURRRTtFQUNFLGNBQUE7RUFDQSw4QkFBQTtBQ05KO0FEUUk7RUFDRSxxQ0V6RFU7QURtRGhCO0FEUUk7RUFDRSxxQkU3RFM7QUR1RGY7QURRSTtFQUNFLHNDRTlEUTtBRHdEZDtBRFFJO0VBRUUsc0NFakVVO0FEMERoQjtBRFNJO0VBQ0Usa0NFbkVPO0FENERiO0FEVUk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ1JOO0FEVU07RUFDRSxnQkFBQTtBQ1JSO0FEWUk7RUFDRSxlQUFBO0FDVk47QURlSTtFQUNFLGVBQUE7QUNiTjtBRGlCRTtFQUNFLGFBQUE7QUNmSjtBRG1CQTtFQUNFLGdCQUFBO0VBQ0EsaUNBQUE7QUNoQkY7QURtQkE7RUFDRSxZQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ2hCRjtBRGtCQTtFQUNFLFlBQUE7QUNmRjtBRGtCQTtFQUNFO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsZ0JBQUE7RUNmRjs7RURrQkE7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSxrQkFBQTtFQ2ZGO0VEaUJFO0lBQ0UsbUJBQUE7RUNmSjtFRGlCSTtJQUNFLHVCQUFBO0VDZk47O0VEb0JBO0lBQ0UsYUFBQTtFQ2pCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvU2hhcmVkL3Byb2R1Y3RUYWJsZXMvcHJvZHVjdC10YWJsZS9wcm9kdWN0LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcblxuOjpuZy1kZWVwIHRoZWFkIHtcbiAgdmVydGljYWwtYWxpZ246IHVuc2V0ICFpbXBvcnRhbnQ7XG5cbiAgJi5kaXNrcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlPcmFuZ2U7XG4gIH1cbiAgJi5wbG91Z2hzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUdyZWVuO1xuICB9XG4gICYuY3VsdGl2YXRvcnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5Qmx1ZTtcbiAgfVxuICAmLnJvbGxlcnMsXG4gICYuc2hyZWRkZXJzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeVB1cnBsZTtcbiAgfVxuICAmLnNwcmF5ZXJzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeVJlZDtcbiAgfVxufVxuOjpuZy1kZWVwIC5oZWFkZXJzIHtcbiAgdGgge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgIGhlaWdodDogNHJlbTtcbiAgICB3aWR0aDogMTAwcHg7XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgbWFyZ2luOiA4cHggYXV0bztcbiAgICB9XG5cbiAgICAmLnNjYWxlLXVwIGltZyB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgfVxuICB9XG59XG50Ym9keSB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBtaW4td2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHdpZHRoOiAxNHZoO1xuXG4gIHRyIHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG5cbiAgICAmLmRpc2tzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnlPcmFuZ2U7XG4gICAgfVxuICAgICYucGxvdWdocyB7XG4gICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5R3JlZW47XG4gICAgfVxuICAgICYuY3VsdGl2YXRvcnMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeUJsdWU7XG4gICAgfVxuICAgICYucm9sbGVycyxcbiAgICAmLnNocmVkZGVycyB7XG4gICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5UHVycGxlO1xuICAgIH1cbiAgICAmLnNwcmF5ZXJzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnlSZWQ7XG4gICAgfVxuXG4gICAgdGQge1xuICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuXG4gICAgICAmLm1vZGVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICB0ZCBzcGFuIHtcbiAgICAmLnRyYW5zcG9ydFNwZWVkOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ21heCAnO1xuICAgIH1cbiAgfVxuXG4gIHRkLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnRhYmxlIHRkIHtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xufVxuXG4uc3ByaW5nIHtcbiAgaGVpZ2h0OiAxcmVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4uYm9sdCB7XG4gIGhlaWdodDogMXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHRhYmxlQnJlYWtQb2ludCkge1xuICB0YWJsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgdGJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXJpZ2h0OiA5OXB4O1xuXG4gICAgdHIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcblxuICAgICAgdGQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucHJvZHVjdC1yb3cge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gIH1cbn1cbiIsIjo6bmctZGVlcCB0aGVhZCB7XG4gIHZlcnRpY2FsLWFsaWduOiB1bnNldCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIHRoZWFkLmRpc2tzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzMsIDEwNiwgMjMsIDAuOSk7XG59XG46Om5nLWRlZXAgdGhlYWQucGxvdWdocyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjc2NDQ7XG59XG46Om5nLWRlZXAgdGhlYWQuY3VsdGl2YXRvcnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMwLCAxNDQsIDI1NSwgMC45MSk7XG59XG46Om5nLWRlZXAgdGhlYWQucm9sbGVycywgOjpuZy1kZWVwIHRoZWFkLnNocmVkZGVycyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ3LCAxMTIsIDIxOSwgMC45KTtcbn1cbjo6bmctZGVlcCB0aGVhZC5zcHJheWVycyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM5LCAwLCAwLCAwLjkpO1xufVxuXG46Om5nLWRlZXAgLmhlYWRlcnMgdGgge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICB3aWR0aDogMTAwcHg7XG59XG46Om5nLWRlZXAgLmhlYWRlcnMgdGggcCB7XG4gIG1hcmdpbjogMDtcbn1cbjo6bmctZGVlcCAuaGVhZGVycyB0aCBpbWcge1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiA4cHggYXV0bztcbn1cbjo6bmctZGVlcCAuaGVhZGVycyB0aC5zY2FsZS11cCBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbnRib2R5IHtcbiAgZGlzcGxheTogY29udGVudHM7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIG1pbi13aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgd2lkdGg6IDE0dmg7XG59XG50Ym9keSB0ciB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG59XG50Ym9keSB0ci5kaXNrcyB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMzMsIDEwNiwgMjMsIDAuOSk7XG59XG50Ym9keSB0ci5wbG91Z2hzIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjI3NjQ0O1xufVxudGJvZHkgdHIuY3VsdGl2YXRvcnMge1xuICBib3JkZXItY29sb3I6IHJnYmEoMzAsIDE0NCwgMjU1LCAwLjkxKTtcbn1cbnRib2R5IHRyLnJvbGxlcnMsIHRib2R5IHRyLnNocmVkZGVycyB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNDcsIDExMiwgMjE5LCAwLjkpO1xufVxudGJvZHkgdHIuc3ByYXllcnMge1xuICBib3JkZXItY29sb3I6IHJnYmEoMTM5LCAwLCAwLCAwLjkpO1xufVxudGJvZHkgdHIgdGQge1xuICBoZWlnaHQ6IDRyZW07XG4gIHdpZHRoOiAxMDBweDtcbn1cbnRib2R5IHRyIHRkLm1vZGVsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbnRib2R5IHRyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxudGJvZHkgdGQgc3Bhbi50cmFuc3BvcnRTcGVlZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJtYXggXCI7XG59XG50Ym9keSB0ZC5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRhYmxlIHRkIHtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xufVxuXG4uc3ByaW5nIHtcbiAgaGVpZ2h0OiAxcmVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5ib2x0IHtcbiAgaGVpZ2h0OiAxcmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICB0YWJsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgdGJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXJpZ2h0OiA5OXB4O1xuICB9XG4gIHRib2R5IHRyIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG4gIHRib2R5IHRyIHRkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcbiAgfVxuXG4gIC5wcm9kdWN0LXJvdyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgfVxufSIsIiRwcmltYXJ5R3JlZW46IHJnYigzNCwgMTE4LCA2OCk7XG4kcHJpbWFyeU9yYW5nZTogcmdiYSgyMzMsIDEwNiwgMjMsIDAuOSk7XG4kcHJpbWFyeUJsdWU6IHJnYmEoMzAsIDE0NCwgMjU1LCAwLjkxKTtcbiRwcmltYXJ5UHVycGxlOiByZ2JhKDE0NywgMTEyLCAyMTksIDAuOSk7XG4kcHJpbWFyeVJlZDogcmdiYSgxMzksIDAsIDAsIDAuOSk7XG5cbiR0YWJsZUJyZWFrUG9pbnQ6IDc2OHB4O1xuIl19 */"

/***/ }),

/***/ "./src/app/Shared/productTables/product-table/product-table.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Shared/productTables/product-table/product-table.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTableComponent", function() { return ProductTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tools_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../tools/services/config.service */ "./src/app/tools/services/config.service.ts");



let ProductTableComponent = class ProductTableComponent {
    ngOnInit() {
        this.headers = _tools_services_config_service__WEBPACK_IMPORTED_MODULE_2__["config"].headers[this.type];
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductTableComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductTableComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductTableComponent.prototype, "set", void 0);
ProductTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-table',
        template: __webpack_require__(/*! raw-loader!./product-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/Shared/productTables/product-table/product-table.component.html"),
        styles: [__webpack_require__(/*! ./product-table.component.scss */ "./src/app/Shared/productTables/product-table/product-table.component.scss")]
    })
], ProductTableComponent);



/***/ }),

/***/ "./src/app/Shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/Shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/Shared/header/header.component.ts");
/* harmony import */ var _mdb_carousel_mdb_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mdb-carousel/mdb-carousel.component */ "./src/app/Shared/mdb-carousel/mdb-carousel.component.ts");
/* harmony import */ var _mdb_footer_mdb_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mdb-footer/mdb-footer.component */ "./src/app/Shared/mdb-footer/mdb-footer.component.ts");
/* harmony import */ var _mdb_jumbotron_mdb_jumbotron_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mdb-jumbotron/mdb-jumbotron.component */ "./src/app/Shared/mdb-jumbotron/mdb-jumbotron.component.ts");
/* harmony import */ var _mdb_news_mdb_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mdb-news/mdb-news.component */ "./src/app/Shared/mdb-news/mdb-news.component.ts");
/* harmony import */ var _mdb_section_mdb_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mdb-section/mdb-section.component */ "./src/app/Shared/mdb-section/mdb-section.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/Shared/navbar/navbar.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tools_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tools/pipes/pipes.module */ "./src/app/tools/pipes/pipes.module.ts");
/* harmony import */ var _productTables_product_table_product_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./productTables/product-table/product-table.component */ "./src/app/Shared/productTables/product-table/product-table.component.ts");
/* harmony import */ var _productTables_headers_product_table_disk_headers_product_table_disks_headers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./productTables/headers/product-table-disk-headers/product-table-disks-headers.component */ "./src/app/Shared/productTables/headers/product-table-disk-headers/product-table-disks-headers.component.ts");
/* harmony import */ var _productTables_headers_product_table_ploughs_headers_product_table_ploughs_headers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./productTables/headers/product-table-ploughs-headers/product-table-ploughs-headers.component */ "./src/app/Shared/productTables/headers/product-table-ploughs-headers/product-table-ploughs-headers.component.ts");
/* harmony import */ var _productTables_headers_product_table_cultivators_headers_product_table_cultivators_headers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./productTables/headers/product-table-cultivators-headers/product-table-cultivators-headers.component */ "./src/app/Shared/productTables/headers/product-table-cultivators-headers/product-table-cultivators-headers.component.ts");
/* harmony import */ var _productTables_headers_product_table_rollers_headers_product_table_rollers_headers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./productTables/headers/product-table-rollers-headers/product-table-rollers-headers.component */ "./src/app/Shared/productTables/headers/product-table-rollers-headers/product-table-rollers-headers.component.ts");
/* harmony import */ var _productTables_headers_product_table_shredders_headers_product_table_shredders_headers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./productTables/headers/product-table-shredders-headers/product-table-shredders-headers.component */ "./src/app/Shared/productTables/headers/product-table-shredders-headers/product-table-shredders-headers.component.ts");
/* harmony import */ var _productTables_headers_product_table_sprayers_headers_product_table_sprayers_headers_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./productTables/headers/product-table-sprayers-headers/product-table-sprayers-headers.component */ "./src/app/Shared/productTables/headers/product-table-sprayers-headers/product-table-sprayers-headers.component.ts");




















let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _mdb_carousel_mdb_carousel_component__WEBPACK_IMPORTED_MODULE_4__["MdbCarouselComponent"],
            _mdb_footer_mdb_footer_component__WEBPACK_IMPORTED_MODULE_5__["MdbFooterComponent"],
            _mdb_jumbotron_mdb_jumbotron_component__WEBPACK_IMPORTED_MODULE_6__["MdbJumbotronComponent"],
            _mdb_news_mdb_news_component__WEBPACK_IMPORTED_MODULE_7__["MdbNewsComponent"],
            _mdb_section_mdb_section_component__WEBPACK_IMPORTED_MODULE_8__["MdbSectionComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
            _productTables_product_table_product_table_component__WEBPACK_IMPORTED_MODULE_13__["ProductTableComponent"],
            _productTables_headers_product_table_disk_headers_product_table_disks_headers_component__WEBPACK_IMPORTED_MODULE_14__["ProductTableDisksHeadersComponent"],
            _productTables_headers_product_table_ploughs_headers_product_table_ploughs_headers_component__WEBPACK_IMPORTED_MODULE_15__["ProductTablePloughsHeadersComponent"],
            _productTables_headers_product_table_cultivators_headers_product_table_cultivators_headers_component__WEBPACK_IMPORTED_MODULE_16__["ProductTableCultivatorsHeadersComponent"],
            _productTables_headers_product_table_rollers_headers_product_table_rollers_headers_component__WEBPACK_IMPORTED_MODULE_17__["ProductTableRollersHeadersComponent"],
            _productTables_headers_product_table_shredders_headers_product_table_shredders_headers_component__WEBPACK_IMPORTED_MODULE_18__["ProductTableShreddersHeadersComponent"],
            _productTables_headers_product_table_sprayers_headers_product_table_sprayers_headers_component__WEBPACK_IMPORTED_MODULE_19__["ProductTableSprayersHeadersComponent"],
        ],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _mdb_carousel_mdb_carousel_component__WEBPACK_IMPORTED_MODULE_4__["MdbCarouselComponent"],
            _mdb_footer_mdb_footer_component__WEBPACK_IMPORTED_MODULE_5__["MdbFooterComponent"],
            _mdb_jumbotron_mdb_jumbotron_component__WEBPACK_IMPORTED_MODULE_6__["MdbJumbotronComponent"],
            _mdb_news_mdb_news_component__WEBPACK_IMPORTED_MODULE_7__["MdbNewsComponent"],
            _mdb_section_mdb_section_component__WEBPACK_IMPORTED_MODULE_8__["MdbSectionComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
            _productTables_product_table_product_table_component__WEBPACK_IMPORTED_MODULE_13__["ProductTableComponent"],
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["MDBBootstrapModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _tools_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["PipesModule"]],
    })
], SharedModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".router {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.background-green {\n  background-color: #227644;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXBvbWFnZS9Eb2N1bWVudHMvTXlQcm9qZWN0cy9yYWxvbWV4L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvdmlwb21hZ2UvRG9jdW1lbnRzL015UHJvamVjdHMvcmFsb21leC9zcmMvYXBwL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNERjs7QURHQTtFQUNFLHlCRVBhO0FET2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4ucm91dGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmJhY2tncm91bmQtZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUdyZWVuO1xufVxuIiwiLnJvdXRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJhY2tncm91bmQtZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjI3NjQ0O1xufSIsIiRwcmltYXJ5R3JlZW46IHJnYigzNCwgMTE4LCA2OCk7XG4kcHJpbWFyeU9yYW5nZTogcmdiYSgyMzMsIDEwNiwgMjMsIDAuOSk7XG4kcHJpbWFyeUJsdWU6IHJnYmEoMzAsIDE0NCwgMjU1LCAwLjkxKTtcbiRwcmltYXJ5UHVycGxlOiByZ2JhKDE0NywgMTEyLCAyMTksIDAuOSk7XG4kcHJpbWFyeVJlZDogcmdiYSgxMzksIDAsIDAsIDAuOSk7XG5cbiR0YWJsZUJyZWFrUG9pbnQ6IDc2OHB4O1xuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Ralomex.com';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools/services/fire.service */ "./src/app/tools/services/fire.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _tools_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/services/config.service */ "./src/app/tools/services/config.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tools_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tools/pipes/pipes.module */ "./src/app/tools/pipes/pipes.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _Features_features_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Features/features.module */ "./src/app/Features/features.module.ts");
/* harmony import */ var _Shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Shared/shared.module */ "./src/app/Shared/shared.module.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_14__["applicationRouting"], { enableTracing: false }),
            _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__["AngularFireDatabaseModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_19__["AngularFireStorageModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthModule"],
            _Features_features_module__WEBPACK_IMPORTED_MODULE_15__["FeaturesModule"],
            _Shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot(),
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["CardsFreeModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(_tools_services_config_service__WEBPACK_IMPORTED_MODULE_5__["config"].toastr),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _tools_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
        providers: [_tools_services_fire_service__WEBPACK_IMPORTED_MODULE_3__["FireService"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: applicationRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationRouting", function() { return applicationRouting; });
const applicationRouting = [{ path: '**', redirectTo: 'home', pathMatch: 'full' }];


/***/ }),

/***/ "./src/app/tools/pipes/array-sort.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/tools/pipes/array-sort.pipe.ts ***!
  \************************************************/
/*! exports provided: ArraySortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArraySortPipe", function() { return ArraySortPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArraySortPipe = class ArraySortPipe {
    transform(obj, field) {
        Object.values(obj).sort((a, b) => {
            if (a[field] < b[field]) {
                return -1;
            }
            else if (a[field] > b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return obj;
    }
};
ArraySortPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sort',
    })
], ArraySortPipe);



/***/ }),

/***/ "./src/app/tools/pipes/key-value-filter.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/tools/pipes/key-value-filter.pipe.ts ***!
  \******************************************************/
/*! exports provided: keyValueFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyValueFilterPipe", function() { return keyValueFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let keyValueFilterPipe = class keyValueFilterPipe {
    transform(map, ...parameters) {
        if (!map)
            return undefined;
        return Object.keys(map).map(key => ({ key: key, value: map[key] }));
    }
};
keyValueFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'keyValueFilter',
    })
], keyValueFilterPipe);



/***/ }),

/***/ "./src/app/tools/pipes/pipes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tools/pipes/pipes.module.ts ***!
  \*********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _key_value_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key-value-filter.pipe */ "./src/app/tools/pipes/key-value-filter.pipe.ts");
/* harmony import */ var _array_sort_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array-sort.pipe */ "./src/app/tools/pipes/array-sort.pipe.ts");
/* harmony import */ var _split_array_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./split-array.pipe */ "./src/app/tools/pipes/split-array.pipe.ts");






let PipesModule = class PipesModule {
};
PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_key_value_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["keyValueFilterPipe"], _array_sort_pipe__WEBPACK_IMPORTED_MODULE_4__["ArraySortPipe"], _split_array_pipe__WEBPACK_IMPORTED_MODULE_5__["objectSplitToArray"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_key_value_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["keyValueFilterPipe"], _array_sort_pipe__WEBPACK_IMPORTED_MODULE_4__["ArraySortPipe"], _split_array_pipe__WEBPACK_IMPORTED_MODULE_5__["objectSplitToArray"]],
    })
], PipesModule);



/***/ }),

/***/ "./src/app/tools/pipes/split-array.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/tools/pipes/split-array.pipe.ts ***!
  \*************************************************/
/*! exports provided: objectSplitToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectSplitToArray", function() { return objectSplitToArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let objectSplitToArray = class objectSplitToArray {
    transform(obj, chunks) {
        if (!obj)
            return;
        let array = Object.values(obj);
        let final = [];
        while (array.length > 0) {
            final.push(array.splice(0, chunks));
        }
        return final;
    }
};
objectSplitToArray = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'objectSplitToArray',
    })
], objectSplitToArray);



/***/ }),

/***/ "./src/app/tools/services/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/tools/services/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");





let AuthService = class AuthService {
    constructor(toastR, firebaseAuth) {
        this.toastR = toastR;
        this.firebaseAuth = firebaseAuth;
        this.oAuthProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
        this.user = firebaseAuth.authState;
    }
    signIn() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const persistence = this.remember
                ? firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].Auth.Persistence.NONE
                : firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].Auth.Persistence.SESSION;
            try {
                yield firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().setPersistence(persistence);
                yield this.firebaseAuth.auth.signInWithPopup(this.oAuthProvider);
            }
            catch (e) {
                this.toastR.error('Something Went Wrong!');
            }
            this.toastR.success('Login Success!');
        });
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.firebaseAuth.auth.signOut();
            this.toastR.warning('Logout Success');
        });
    }
};
AuthService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])
], AuthService);



/***/ }),

/***/ "./src/app/tools/services/config.service.ts":
/*!**************************************************!*\
  !*** ./src/app/tools/services/config.service.ts ***!
  \**************************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const config = {
    headers: {
        disks: [
            { key: 'model', value: 'Model' },
            { key: 'diskCount', value: 'Disk count' },
            { key: 'reqHP', value: 'Required HP' },
            { key: 'diskDiameter', value: 'Disk Diameter' },
            { key: 'axisSize', value: 'Axis Size' },
            { key: 'workWidth', value: 'Working Width' },
            { key: 'transportWidth', value: 'Transporting Width' },
            { key: 'diskWorkingDepth', value: 'Disk Working Width' },
            { key: 'transportSpeed', value: 'Transport Speed' },
            { key: 'workSpeed', value: 'Work Speed' },
            { key: 'productivity', value: 'Productivity' },
            { key: 'weightWoRotors', value: 'Weight' },
        ],
        ploughs: [
            { key: 'model', value: 'Model' },
            { key: 'workBodyCount', value: 'Body count' },
            { key: 'reqHP', value: 'Required HP' },
            { key: 'mainBeam', value: 'Main Beam Size' },
            { key: 'bodiesDistance', value: 'Body Distance' },
            { key: 'widthWork', value: 'Width Work' },
            { key: 'clearance', value: 'Clearance' },
            { key: 'depthWork', value: 'Depth Work' },
            { key: 'transportSpeed', value: 'Transport Speed' },
            { key: 'workSpeed', value: 'Work Speed' },
            { key: 'productivity', value: 'Productivity' },
            { key: 'weight', value: 'Weight' },
        ],
        cultivators: [
            { key: 'model', value: 'Model' },
            { key: 'workBodyCount', value: 'Body count' },
            { key: 'reqHP', value: 'Required HP' },
            { key: 'bodySpacing', value: 'Body spacing' },
            { key: 'rowCount', value: 'Row count' },
            { key: 'widthWork', value: 'Working Width' },
            { key: 'transportWidth', value: 'Transporting Width' },
            { key: 'bodyProtection', value: 'Protection' },
            { key: 'depthWork', value: 'Working Depth' },
            { key: 'transportSpeed', value: 'Transport Speed' },
            { key: 'workSpeed', value: 'Work Speed' },
            { key: 'productivity', value: 'Productivity' },
            { key: 'weight', value: 'Weight' },
        ],
        rollers: [
            { key: 'model', value: 'Model' },
            { key: 'reqHP', value: 'Required HP' },
            { key: 'depthWork', value: 'Compacting Depth' },
            { key: 'widthWork', value: 'Working Width' },
            { key: 'transportWidth', value: 'Transporting Width' },
            { key: 'transportSpeed', value: 'Transport Speed' },
            { key: 'workSpeed', value: 'Work Speed' },
            { key: 'productivity', value: 'Productivity' },
            { key: 'weight', value: 'Weight' },
        ],
        shredders: [
            { key: 'model', value: 'Model' },
            { key: 'shreddersCount', value: 'Shredders Count' },
            { key: 'reqHp', value: 'Required HP' },
            { key: 'workingWidth', value: 'Working Width' },
            { key: 'transportWidth', value: 'Transporting Width' },
            { key: 'transportSpeed', value: 'Transport Speed' },
            { key: 'workSpeed', value: 'Work Speed' },
            { key: 'productivity', value: 'Productivity' },
            { key: 'weight', value: 'Weight' },
        ],
        sprayers: [
            { key: 'model', value: 'Model' },
            { key: 'tankCapacity', value: 'Tank Capacity' },
            { key: 'widthWork', value: 'Working Width' },
            { key: 'fanDiameter', value: 'Fan Diameter' },
            { key: 'sprayersCount', value: 'Sprayers count' },
            { key: 'pumpType', value: 'Pump Type' },
        ],
    },
    objectSchemas: {
        teamMember: [
            { key: 'name', value: 'Name' },
            { key: 'description', value: 'Description' },
            { key: 'duty', value: 'Duty' },
            { key: 'email', value: 'E-Mail' },
            { key: 'phone', value: 'Phone' },
            { key: 'avatarUrl', value: 'Avatar' },
        ],
    },
    toastr: {
        timeOut: 4000,
        disableTimeOut: false,
        closeButton: false,
    },
};


/***/ }),

/***/ "./src/app/tools/services/fire.service.ts":
/*!************************************************!*\
  !*** ./src/app/tools/services/fire.service.ts ***!
  \************************************************/
/*! exports provided: FireService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireService", function() { return FireService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/tools/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config.service */ "./src/app/tools/services/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");










let FireService = class FireService {
    constructor(auth, db, http, toastrService) {
        this.auth = auth;
        this.db = db;
        this.http = http;
        this.toastrService = toastrService;
        this.databaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].firebase.databaseURL;
        this.memberUtils = {
            addMember: (memberData) => this.db.database.ref('team').push(memberData),
            getMembers: () => this.http.get(`${this.databaseUrl}/team.json`).toPromise()
        };
        this.AdminUtils = {
            addElement: (data, dbLocation) => this.db.database
                .ref(dbLocation)
                .push(data)
                .then(() => {
                //Notification
            }),
            getElements: (elementType) => this.http.get(`${this.databaseUrl}/${elementType}.json`),
            deleteElementById: (id, elementType) => this.db.database
                .ref(`${elementType}/${id}`)
                .remove()
                .then(() => {
                //Notification
            }),
            updateElementById: (id, elementType, newValue) => this.db.database
                .ref(`${elementType}/${id}`)
                .update(newValue)
                .then(() => {
                //Notification
            }),
        };
        this.PloughUtils = {
            getPlough: (category, series, id) => this.getSingleItem('ploughs', category, series, id),
            getPloughSubcategories: (category) => this.getSubCategories('ploughs', category),
            getPloughTypes: () => this.getType('ploughs'),
            deletePlough: (category, series, id) => this.removeItem('ploughs', category, series, id),
            addPlough: (data, category, series) => this.addItem(data, 'ploughs', category, series),
            updatePlough: (data, category, series, id) => this.updateItem(data, 'ploughs', category, series, id),
            getCategorySet: (category, series) => this.http.get(`${this.databaseUrl}/ploughs/types/${category}/series/${series}.json`),
        };
        this.ProductUtils = {
            getProduct: (product, category, series, id) => this.getSingleItem(product, category, series, id),
            addItem: (product, data, category, series) => this.addItem(data, product, category, series),
            getPloughSubcategories: (category) => this.getSubCategories('ploughs', category),
            getPloughTypes: () => this.getType('ploughs'),
            deletePlough: (category, series, id) => this.removeItem('ploughs', category, series, id),
            updatePlough: (data, category, series, id) => this.updateItem(data, 'ploughs', category, series, id),
            getCategorySet: (category, series) => this.http.get(`${this.databaseUrl}/ploughs/types/${category}/series/${series}.json`),
        };
        this.getSingleItem = (type, category, series, id) => this.http.get(`${this.databaseUrl}/${type}/types/${category}/series/${series}/collection/`.toLocaleLowerCase() + `${id}.json`);
        this.getType = (type) => this.http.get(`${this.databaseUrl}/${type}.json`);
        this.getSubCategories = (type, category) => this.http.get(`${this.databaseUrl}/${type}/types/${category}/series.json`);
        this.getseriesData = (type, category, series) => this.http.get(`${this.databaseUrl}/${type}/types/${category}/series/${series}/collection.json`.toLocaleLowerCase());
        this.addItem = (data, productType, type, series) => this.db.database.ref(`${productType}/types/${type}/series/${series}/collection`).push(data);
        this.addPloughCategory = (type, categoryDetails) => this.db.database
            .ref(`ploughs/types/${type}/collection/${categoryDetails.name.toLowerCase()}`)
            .set({
            collection: [],
            description: categoryDetails.description,
            image: categoryDetails.image,
            name: categoryDetails.name,
        });
        this.updateItem = (data, type, category, series, id) => this.db.database
            .ref(`${type}/types/${category}/series/${series}/collection/${id}`)
            .update(data);
        this.removeItem = (type, category, series, id) => this.db.database.ref(`${type}/types/${category}/series/${series}/collection/${id}`).remove();
        this.online = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(navigator.onLine), Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'online').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mapTo"])(true)), Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'offline').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mapTo"])(false)));
        this.networkStatus();
    }
    networkStatus() {
        this.online.subscribe(status => {
            if (!status) {
                this.toastrService.info('Lost internet connection');
            }
            this.internetStatus = status;
        });
    }
    initCategories() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.DATABASE) {
                this.DATABASE = yield this.initDB();
            }
            const products = Object.keys(_config_service__WEBPACK_IMPORTED_MODULE_7__["config"].headers);
            const newObj = {};
            products.map((productType) => {
                newObj[productType] = this.DATABASE[productType];
            });
            this.productTypes = newObj;
        });
    }
    initDB() {
        return this.http.get(`${this.databaseUrl}/.json`).toPromise();
    }
    getCatalog() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const cat = {};
            Object.keys(_config_service__WEBPACK_IMPORTED_MODULE_7__["config"].headers).map((productType) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                cat[productType] = Object.keys(yield this.http.get(`${this.databaseUrl}/${productType}/types.json`).toPromise());
            }));
            return cat;
        });
    }
};
FireService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }
];
FireService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]])
], FireService);



/***/ }),

/***/ "./src/app/tools/services/image.service.ts":
/*!*************************************************!*\
  !*** ./src/app/tools/services/image.service.ts ***!
  \*************************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/tools/services/auth.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");





let ImageService = class ImageService {
    constructor(auth, http, storage) {
        this.auth = auth;
        this.http = http;
        this.storage = storage;
        this.preventEdit = false;
        this.images = [];
        this.disableFileUpload = () => {
            this.preventEdit = !this.preventEdit;
        };
        this.startUpload = (event) => {
            this.status = 'Uploading please wait!';
            this.disableFileUpload();
            // The File object
            for (let i = 0; i < event.length; i++) {
                const file = event.item(i);
                // Client-side validation
                if (file.type.split('/')[0] !== 'image') {
                    this.preventEdit = false;
                    throw new TypeError('Unsupported File Type!');
                }
                // The storage path
                const date = new Date().getTime();
                const path = `images/${date}_${file.name}`;
                //Upload To StorageAsFile
                this.task = this.storage.upload(path, file);
                //Get link to uploaded file and upload it userCollection in DB
                this.task.then(data => {
                    data.ref
                        .getDownloadURL()
                        .then(imgUrl => {
                        this.downloadUrl = imgUrl;
                        this.images.push(imgUrl);
                        this.preventEdit = false;
                    })
                        .catch(e => {
                        this.preventEdit = false;
                        console.error(e.message);
                    });
                });
                //Progress monitoring
                this.percentage = this.task.percentageChanges();
                this.snapshot = this.task.snapshotChanges();
            }
        };
        this.prepToUploadSingle = (event, location) => {
            const file = event.item(0);
            this.preventEdit = true;
            if (file.type.split('/')[0] !== 'image') {
                this.preventEdit = false;
                throw new TypeError('Unsupported File Type!');
            }
            const date = new Date().getTime();
            const path = `${location}/${date}_${file.name}`;
            return this.storage.upload(path, file);
        };
    }
    uploadSingle(files, path = 'images') {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const image = files.item(0);
            let imageUrl;
            if (image.type.split('/')[0] !== 'image') {
                throw new TypeError('Unsupported File Type!');
            }
            const imageName = `${new Date().getTime()}_${image.name}`;
            this.task = this.storage.upload(`${path}/${imageName}`, image);
            imageUrl = yield this.task.then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                return yield data.ref.getDownloadURL();
            }));
            return imageUrl;
        });
    }
};
ImageService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }
];
ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
], ImageService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBHMLRn7jsgPDKN3RYcK1LUexL_Ztjemwo',
        authDomain: 'ralomex-34693.firebaseapp.com',
        databaseURL: 'https://ralomex-34693.firebaseio.com',
        projectId: 'ralomex-34693',
        storageBucket: 'ralomex-34693.appspot.com',
        messagingSenderId: '130489209852',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vipomage/Documents/MyProjects/ralomex/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map