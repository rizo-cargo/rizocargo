
    // Массив с примерными трек-номерами
    const validTrackNumbers = ['JT5332583026218', 'JT5332253264434', '8291146358705', '78466428729755', '78466695247686',  
    '78466779759477', '78466753451187', '78466610793221', '78466345060923', '78466179308093',  
    '78466154941374', '78466775495152', '9803538788816', '9803517467812', '9803540791831',  
    '9803523338861', '9803553677833', '9803555742156', '9803512248398', '9803535696951',  
    '464032608257758', '464020778139281', '464028244769195', '464032559800402', '464028923353104',  
    '464027880610204', '464030494748297', '464029470464131', '464029684214874', '464031069871827',  
    '464027563465468', 'JT5333397983411', 'JT5332722472780', 'JT5333042875456', 'JT5332563959448',  
    'JT5332617418330', 'JT5332625119941', 'JT5332652878220', 'JT5332530394245', 'JT5333091762404',  
    'JT5332793459549', 'JT5332597553161', 'JT5332789587279', 'JT5332331784868', 'JT5332541408816',  
    'JT5332253264434', 'JT5332583026218', '464027209620729', '464029645155586', '464029645155586',  
    '464029975275658', '464026909919122', '78466366791761', 'JT5332232750360', 'JT5332541399015',  
    'JT5332765410647', 'JT5332705215993', 'JT5332747878067', 'JT5332338845922', 'JT5332738419104',  
    'JT5332715278062', 'JT5332307837688', 'JT5332227224540', 'JT5332320073225', 'JT5332683211103',  
    'JT5333051639923', '464028215388879', '464021509360359', '464020296679639', '464027094093076',  
    '464020610549750', '464019977754102', '464022435230330', '434308370386429', '464028520259798',  
    '464021186034887', '464026855819519', '464022964907950', '464022265373466', '464021259046853',  
    '464029265662521', '464029909667058', '9803504983049', '9803494642756', 
    'JT5332693471066', '78466552757550','9803543514969', '9803544437358', '9803454313298', '9803512225324', '9803547189036', '9803506870748', '9803529694019', '78466230265348', 'JT5332990743484', 'JT5333093338846', '464032713391081', '464031037938125', '464031037938125', '464032647466981',
    '9803429087167','9803623024091', '9803540335022', '9803621308403', '9803612621223',
  '9803539886120', '9803594938891', '9803595692365', '9803527101558',
  '9803512553757', '78467072673668', '78466644166465', '78466961705968',
  '78464123071060', '78466399165244', '78466963331784', '78466963331784',
  '78467048474012', '78466270642550', '464030353803914', '78466893049909',
  '464031397170346', '464032643147715', '464030480360311', '464030835525114',
  '464032599719641', '464031039555338', '464031353301821', '464031411767488',
  '464032559795633', '464030616296994', '464027145159709', '78466785299466',
  '464030720924865', '464032801409231', '464030253409761', '464030387715446',
  '464030545162521', '464032220604144', '464031532645114', '78466812348450',
  '78862875284633', '78466663063205', '78467059731033', '78466873936126',
  '78466656861456', '78466672011190', '78466573253503', '78467066429412',
  '78466814492550', '78466814492550', '8295383512505', '8286317695505', '8286778445705', '8295383512505', '8286317695505', '9802770327109',
  'JT5332913945501', 'JT5332968853243', 'JT5334003389265', 'JT5333065633740',
  'JT5333449924367', 'JT5333382357073', 'JT5332909860547', 'JT5333003081282',
  'JT5332972762134', '9803416244106', '9802770327109','9803617080782', '9803617787129', '9803541787352', 
  '9803621022896', '9803526788712','78466850248860', 'JT5333409834278', 'JT5332950460325', 
  'JT5333475000055', 'JT5333429405959', '464035862873339', 
  '464036137478344', '464032982387018', '464036654897167', 
  '464035717784246', '464036362601429', '464028985968774',   '8299450947405', 
    'JT5334095408825', 
    'JT5334153424684', 
    'JT5334200563011', 
    'JT5333901767689', 
    'JT5333491671032', 
    'JT5333684080784', 
    'JT5334093928458', 
    'JT5334185879620', 
    'JT5333919511044', 
    'JT5334057914896', 
    'JT5333935632770', 
    'JT5333919597362', 
    '464033732433711', 
    '464032411840142', 
    '464034849780326', 
    '78467057964787', 
    '78467142006957', 
    '78467025797685', 
    '78467219078378', 
    '78467175753027', 
    '78467302161591', 
    '78466948476623', 
    '78467226780687', 
    '78467087808360', 
    '464035802450223', 
    '464036169668570', 
    '464031828374977', 
    '464032459428847', 
    '464034764819963', 
    '464034395851046', 
    '464033207388793', 
    '464032826368046', 
    '78466728400946', 
    '78467103690646', 
    '464034682937327', 
    '78467240182967', 
    '78467223804476', 
    '78467062817228', 
    '78467208122891', 
    '78467110616804', 
    '464035054991971', 
    '464032284961091', 
    '464031808011343', 
    '9803616476786', 
    '78467134534596', 
    '78467212981486', 
    '9803618163989', 
    '78467269591171', 
    '9803559580164', 
    '464035805104933', 
    '434316522098949', 
    '9803567974167', 
    '9803572787025', 
    '78467184720618', 
    '78466747634910', 
    '9803563947000', 
    '78467217532028', 
    '78467117993087', 
    '78467214201772', 
    '9803609759946', 
    '78466887532890', 
    '9803557534127', 
    '9803561474016', 
    '9803568074081', 
    '464034658568118', 
    '9803623205476', 
    '9803610156737', 
    '9803562639906', 
    '9803613823245', 
    '9803573474449', 
    '9803564219278', 
    '8298049352205', 
    '8293763463805', 
    '8293805969905', 
    'JT5334172968385', 
    'JT5333972600311', 
    'JT5333502661493', 
    'JT5334021046273', 
    'JT5333988898929', 
    'JT5333868023385', 
    'JT5334165108649', 
    'JT5333928771093', 
    'JT5333456751842', 
    'JT5334089797447', 
    'JT5333345250473', 
    'JT5334179942486', 
    'JT5333488984160', 
    'JT5333280668766', 
    'JT5333953780954', 
    'JT5333977918612', 
    'JT5333262353578', 
    'JT5333959645313', 
    'JT5334132166765', 
    'JT5333638534758', 
    'JT5334022195677', 
    'JT5333955235802', 
    'JT5333907670199', 
    'JT5334134833397', 
    'JT5334005436839', 
    'JT5333265556376', 
    'JT5333657857369', 
    'JT5333980580407', 
    'JT5334081573585', 
    'JT5333970368602', 
    '78467327809477', 
    '78467351614993', 
    '78466900089078', 
    '78467361053689', 
    '78467078686339', 
    '78467227110003', 
    'YT8723013967128',    '78467277088658',
    '9803618565775',
    '78467247615407',
    '78466949028844',
    '78467208696372',
    '9803618262317',
    '9803611959629',
    '78467273743495',
    '78467066581659',
    '424032319002737',
    '464034763692666',
    '464035172417783',    '464039542248407',
    '464034729727833',
    '464033448106849',
    '434316400720691',
    '464037304994782',
    '464035652476600',
    '464033617521575',
    '464034875931488',
    '464034653846061',
    '464035165214001',
    '464034045653436',
    '78467550533010',
    '78467618197557',
    '78467374023640',
    '78467201718935',
    '78467918195291',
    '78467211999356',
    '78467211999326',
    '78467364343674',
    '78467237139238',
    '78467274242551',
    '78467237263783',
    '78467284995400',
    '78467284995400',
    '78467323799429',
    '78467323799429',
    '78467454556681',
    '784673692023352',
    '78467191662206',
    '78467191662206',
    '78467405536668',
    '78467274242551',
    '78467237047234',
    '78467412421434',
    '78467507001206',
    '78467454556681',
    '78467324592480',
    '78467124754622',
    '78467196349606',
    '78467280561612',
    '78467304695352',
    '78467197671011',
    '78467288017289',
    '78467332310128',
    '78467531399919',
    '78467305304034',
    '78467628854382',
    '78467363404489',
    '78467195602442',
    '78467307931809',
    '78467233185308',
    '78467203855466',
    '78467298716116',
    '78467332615329',
    '78467219766562',
    '78467401015072',
    '9803570156502',
    '9803572649220',
    '9803609941514',
    '9803687673745',
    '9803607847940',
    '9803570724513',
    '9803570724513',
    '9803573913657',
    '9803569025357',
    '9803566267938',
    '9803607603111',
    '9803609844627',
    '9803560771871',
    '9803619841522',
    '9803609700318',
    '9803560753889',
    '9803570582308',
    '9803688783632',
    '9803570723816','JT5334111835316',
    'JT5334163355660',
    'JT5333583407547',
    'JT5334145848763',
    'JT5334113458317',
    'JT5334036534479',
    'JT5333930823114',
    'JT5334113684508',
    'JT5333874095728',
    'JT5333837621478',
    'JT5334175855316',
    'JT5333947370628',
    'JT5334159286766',
    'JT5334182847081',
    'JT5334105050809',
    'JT5334005008519',
    'JT5334117519181',
    'JT5333721818159',
    'JT5333568400661',
    'JT5333690745346',
    '9803562274237',
    '9803621358915',
    '9803612159375',
    '9803575316500',
    '9803589134459',
    '9803568534007',
    '9803591683552',
    '9803610632652',
    '9803572995590',
    '9803562025583',
    '9803559773733',
    '9803611024356',
    '9803570718290',
    '9803569386072',
    '9803557932003',
    '9803557932003',
    '9803564763765',
    '9803565612443',
    '9803572607268',
    '9803572607268',
    '9803548148817',
    '9803566495281',
    '9803612332630',
    '9803561936853',
    '9803615010038',
    '9803597717180',
    '9803569382130',
    '9803564087380',
    '9803569365545',
    '9803615887822',
    '9803563703806',
    '9803618367634',
    '8267524221406',
    'JT5334042787633',
    'JT5334141211540',
    'JT5333763780964',
    'JT5333915852681',
    'JT5333871736628',
    'JT5333688067709',
    'JT5334163333940',
    'JT5333674633995',
    'JT5334175221658',
    'JT5334117126793',
    'JT5333635853330',
    'JT5333635853330',
    'JT5333798349329',
    'JT5334100111601',
    'JT5334161184796',
    'JT5333666709885',
    'JT5333641805775',
    'JT5333932101634',
    'JT5333932101634',
    'JT5334193816419',
    'JT5333938631772',
    'JT5333531709153',
    'JT5334120041089',
    'JT5334064949599',
    'JT5334105217642',
    '78467478072947',
    '78467554829056',
    '78467531690866',
    '78467531690866',
    '9803558018663',
    '9803606881605',
    '9803606881605',
    '9803609538751',
    '9803563303847',
    '9803563303847',
    '9803563303847',
    '9803608206070',
    '9803582634723',
    '9803566687813',
    '9803568403641',
    '9803559765070',
    '9803563343593',
    '9803690693406',
    '9803571029697',
    '9803569400370',
    '9803688675144',
    'JT5333764824905',
    'JT3102205964878',
    'JT5334056514453',
    'JT5334197560168',
    'JT5334151411307',
    'JT5333937626654',
    'JT5334091607933',
    'JT5333927832657',
    'JT5333941519345',
    'JT5333628574962',
    'JT3102138848684',
    'JT5333954118075',
    'JT5334197830395',
    'JT5334141744289',
    'JT5334117278486',
    'JT5334076241130',
    'JT5333929624297',
    'JT5334105217642',
    'JT5334093750812',
    'JT5333895193178',
    'JT5334481053710', '78467711886158',
    '78467644447298',
    '78467616476817',
    '78467395324983',
    '78467511824075',
    '78467748513780',
    '78467645282978',
    '78467906951294',
    '78467466584885',
    '78467771195031',
    '9803669574461',
    '9803588991547',
    '9803574045955',
    '9803580979291',
    '9803679846068',
    '9803568786713',
    '9803578824360',
    '9803675155800',
    '9803616320818',
    '9803690408608',
    '9803581737735',
    '9803676324116',
    '9803685655807',
    '9803669733422',
    '9803572486733',
    '9803671021621',
    '9803667326226',
    '464037727543464',
    '464039252796007',
    '464039100415520',
    '464038253762850',
    '464038320109305',
    '464035090888586',
    '464037550049154',
    '464037090852301',
    '464035074026318',
    '464036961340361',
    '464036908007049',
    '464046256329906',
    '464044383800723',
    '464045017800899',
    'JT5333711977511',
    'JT5333619519632',
    'JT5334860951808',
    'JT5334537140282',
    'JT5334520754815',
    'JT5334514963771',
    'JT5333760281939',
    'JT5333898994996',
    'JT5333593457464',
    'JT5333783456597',
    'JT5333626442675',
    'JT5333841408765',
    'JT5333696218729',
    'JT5333809099486',
    'JT5334052850324',
    'JT5333726429995',
    'JT5334443000075',
    'JT5334150814794',
    'JT5334479932821',
    'JT5334511129630',
    'JT5334534634070',
    'JT5333606049665',
    'JT5334293027059',
    'JT5334374079237',
    'JT5334444657984',
    'JT5393593169611',
    'JT5333549287930',
    'JT5333820991294',
    'JT5333603233826',
    'JT5333533080263',
    'JT5334479424016',
    '8270475422106',
    '9803669732232',
    '9803680116011',
    '9803675474160',
    '9803664200442',
    '9803669049242',
    '9803679769566',
    '9803669733411',
    '9803665349017',
    '78467553036761',
    '78467881594594',
    '78467719887040',
    '78467825531576',
    '78467726844475',
    'JT5333764824905',
    '78467238703933',
    'JT5334858406373',
    '9806682022259',
    '9803674475544',
    '78467333034026','78467721556193',
    '78467781313344',
    '78467648534960',
    '78467813547989',
    '78467736634856',
    '78467876066274',
    '78468065364646',
    '78467943426181',
    '78467964062410',
    '78466959279968',
    '78467870422691',
    '78468133857581',
    '78468029397289',
    '78467773831387',
    '78467883751806',
    '78468178219381',
    '78467871048947',
    '78467753876672',
    '78467888091096',
    '78467265656604',
    '78467772211796',
    '78467759492389',
    '78864542257322',
    '464040709698627',
    '464045326117704',
    '464045087488808',
    '464045326117704',
    '464046389340184',
    '464046696290529',
    '464045562027780',
    '464037305242082',
    '464040955252448',
    '464045233381794',
    '464041442144993',
    '78468072167603',
    '78467946982425',
    '78467393783856',
    '78467737134166',
    '9803662305372',
    '9803684325590',
    '9803687279171',
    '9803678182040',
    '9803585573929',
    '9803640016922',
    '9803677622245',
    '9803674424702',
    '9803648651275',
    '9803647503044',
    '9803673335367',
    '9803666406353',
    '9803588401197',
    'JT5334229553061',
    'JT5334232287452',
    'JT5334258545649',
    'JT5334802243866',
    'JT5333708806230',
    'JT5334448666021',
    'JT5334570084405',
    'JT5334782309698',
    'JT5334331085850',
    'JT5334623414731',
    'JT5334350927686',
    'JT5334905171986',
    'JT5334267230924',
    'JT5334368982444',
    'JT5334303400472',
    'JT5334847725050',
    'JT5334803890151',
    'JT5334840284965',
    'JT5334605865292',
    'JT5334593483850',
    '9803640612536',
    '9803653847057',
    '9803673638516',
    '9803670337320',
    '9803681873883',
    '78467681472701',
    '78468089781678',
    'JT5334284450816',
    'JT5334764750206',
    'JT5334694063270',
    'JT5334703620996',
    '777267433960791',
    '78467943426181','9803629967383',
    '9803739008758',
    '9803737936311',
    '9803646358726',
    '9803637958685',
    '9803626492260',
    'JT5335003687851',
    'JT5335048388140',
    'JT5334577260602',
    'JT5334761566692',
    'JT5335040680580',
    'JT5334938126705',
    'JT5334904296240',
    'JT5334624574825',
    'JT5334615985462',
    'JT5335098126272',
    'JT5335046859232',
    'JT5334898278742',
    'JT5334906271601',
    'JT5334809827007',
    'JT5335138433049',
    'JT5334921750303',
    'JT5334713723372',
    'JT3102446724391',
    '78468103799889',
    '9803733987846',
    '9803671487253',
    '9803658062488',
    '9803734851764',
    '9803730205390',
    '9803733251447',
    '9803625655126',
    '9803679272508',
    '9803658065018',
    '9803631843672',
    '9803737071017',
    '9803730469546',
    '9803638440250',
    '78468138625176',
    '464042063772267',
    '464052518458208',
    '464006812930514',
    '464043073094565',
    '464040115121752',
    '464040119149356',
    '464043132848673',
    '464040905390698',
    '464041977877250',
    '464041031576651',
    '464040129239755',
    '78468392149542',
    '78468124986551',
    '75937710469730',
    '78468075005312',
    '78468331812949',
    '78468121509004',
    '78468162952823',
    '78468078915071',
    '78468002996260',
    '78468153835398',
    '78467538133261',
    '78468407784026',
    '78468080358816',
    '78468121670736',
    '78467707141510',
    '78468310259074',
    '78468157190410',
    '8279379081506',
    '78468205542645',
    'JT5334651753102',
    'JT5335182427713',
    '464053368076307',
    '464040570521117',
    '464041857766264',
    '464043070724142',];

    // Добавляем обработчик на кнопку
    document.getElementById('check-button').addEventListener('click', function () {
      const trackNumber = document.getElementById('track-number').value.trim(); // Получаем введённый номер
      const result = document.getElementById('result'); // Элемент для вывода результата

      if (!trackNumber) { // Если поле пустое
        result.textContent = 'Введите трек-номер!';
        result.style.color = 'red';
        return;
      }

      // Проверяем, есть ли трек-номер в списке
      if (validTrackNumbers.includes(trackNumber)) {
        result.textContent = `Трек-номер ${trackNumber} найден!`; // Используем обратные кавычки
        result.style.color = 'orange';
      } else {
        result.textContent = 'Трек-номер не найден!';
        result.style.color = 'orange';
      }
    });
  
