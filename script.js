
    // Массив с примерными трек-номерами
    const validTrackNumbers = ['78482856755066', '78482847407861', 'JT5351002738799', 'JT5351754793412', 'JT5351239219163',
    'JT5351740749037', 'JT5351740749037', 'JT5351499986728', 'JT5351225171571', 'JT5351260139685',
    'JT5351130147945', 'JT5351493862224', 'JT5351140445073', 'JT5351942306921', 'JT5351873056302',
    'JT5351509730557', 'JT5350988801367', 'JT5351204860186', 'JT5351897827343', 'JT5351829181422',
    'JT5351280341609', 'JT5351114949234', 'JT5351073774695', 'JT5350984418468', '777282474838321',
    'JT5351140445073', 'JT5351942306921', 'JT5351873056302', 'JT5351509730557', 'JT5350988801367',
    'JT5351204860186', 'JT5351897827343', 'JT5351829181422', 'JT5351280341609', 'JT5351114949234',
    'JT5351073774695', 'JT5351239219163', '777282768513848', 'YT8738186310275', 'JT5351074859806',
    'JT5351375556998', 'JT5350433548958', 'JT5350433548958', 'JT5351114968693', 'JT5350443721476',
    'JT5350464825211', 'JT5351566172370', 'JT5351371724589', 'JT5351106303513', 'JT5351251662446',
    'JT5351375556998', 'JT5351251662446', 'JT5351375556998', 'JT5351206333489', 'JT5351655745776', '9805063631268', 'JT5351207191020', 'JT5351888591361', 
    'JT5351842846553', 'JT5352243905445', 'JT5351965000793', 'JT5352271834521', 'JT5351652886763', 
    'JT5351970929274', '78482902538421', '78482762675046', '78482833149610', '78482713584482', 
    '78482736153265', '78482637004520', 'JT5351177931517', 'JT5351792084648', '9805068441642', 
    '9805055662173', '78482763176153', '78482844321494', '78482736153265', '78482630588698', 
    '78881209179099', '78482813126795', '78482863008638', '78482993040030', 'JT5351675876713', 
    '9805078677171', '9805063059828', '78482861637855', '9805052912451', '9805045589340', 
    'JT5351948498176', '9805024271099', 'JT5352289838768', '9805041719199', '9805058151164', 
    '78482682973653', '78482872643714', '9805090590460', 'JT5351825821915', 'JT5351893102693', 
    '9805058569718', '9805083350836', '9805069997507', '9805090590460', '78482813588353', 
    '78483108997225', '9805089030803', '9805024271099', '9805054796910', '78482644029404', 
    '78482899465595', '9805057596549', '9805068238590', '78482960001491', '78482845387866', 
    '9805084045737', '9805045194261', '9805074024086', '78482562170150', '9805072991578', 
    '9805078891836', '78482682724149', '9805081741156', '78482807098862', '9805051089355', 
    '78482905306026', '78482686884535', '5351777304229', '9805072950341', '78500046307733', 
    '9805056373436', '78500004950009', '9805069198506', '9805021939861', '9805061641379', 
    '78500061415330', '78500057307918', '9805045388857', '9805043084930', '920512310703', 
    '78500015616359', '78500057307918', '78500061415330', 'JT5351777304229', '9805072950341', 
    '78500046307733', '9805056373436', '78500004950009', '9805051884453', '9805045388857', 
    '9805056373436', '9805072950341', '920512310703', '78482976435156', '9805063342695', '9805042668209', '9805050449023', '9805094738028', 
    '9805081713095', '9805068257790', '9805054582919', '9805044043934', '78482829079796', 
    '78482994167430', '78483070219931', '78482747568716', '78482765011645', '78483102772486', 
    '78482884480936', '78482815311537', '78482991088848', '78482717891198', '78482929729886', 
    '78482631112670', '78272820848008', '78482788315363', '78482793379995', '78482755011090', 
    '78482828849363', '78482991061899', '78482904266664', '78482727400107', '78483077835805', 
    '78500022980520', '777283826448141', '78483060079018', 'JT5351978952651', 'JT5351956111861', 
    'JT5351676523160', 'JT5351223595895', 'JT5351674410914', 'JT5352279998032', 'JT5351839842979', 
    '9805071013250', '9805076443733', '9805057446502', '9805058249460', '78482870933156', 
    '78482658248141', '78482805581171', '78483010667721', '9805060317437', '9805054695889', 
    'JT5351839842979', 'JT5351687024358', 'JT5351715073004', 'JT5352189429159', 'JT5351799963864', 
    'JT5351903624513', 'JT3109119722846', '9805050653490', '9805042960844', '9805080316075', 
    'JT5351757298467', 'JT5351811491794', 'JT5351705247323', '78483074713715', '78482930714785', 
    '78483020969024', '78483060567060', '78483086821063', '78482896123969', 'JT5352167427353', 
    'JT5352267527254', 'JT5352257422850', 'JT5351905115523', 'JT5352189367382', 'JT5351690660381', 
    'JT5352176762314', 'JT5351387051036', 'JT5352286327802', 'JT5352297615964', 'JT5351682428884', 
    'JT5351863105066', 'JT5351882375130', 'JT5352252997950', 'JT5351742126274', 'JT5351722770152', 
    'JT5351823307891', 'JT5351947212764', 'JT5351662573458', 'JT5351978515987', 'JT5351926528792', 
    'JT5351878903611'
];

    // Добавляем обработчик на кнопку
    document.getElementById('check-button').addEventListener('click', function () {
      const trackNumber = document.getElementById('track-number').value.trim(); // Получаем введённый номер
      const result = document.getElementById('result'); // Элемент для вывода результата

      if (!trackNumber) { // Если поле пустое
        result.textContent = 'Трек номератонро нависед!';
        result.style.color = 'red';
        return;
      }

      // Проверяем, есть ли трек-номер в списке
      if (validTrackNumbers.includes(trackNumber)) {
        result.textContent = `Қабул ${trackNumber} шудааст!`; // Используем обратные кавычки
        result.style.color = 'orange';
      } else {
        result.textContent = 'Трек-номери шумо нест!';
        result.style.color = 'orange';
      }
    });
  
