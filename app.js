const POINTS = [
  {
    id: "p1",
    name: "Καστρίτσας 61 & Εθνικής Αντιστάσεως 84, Κηφισιά",
    lat: 38.107865562783786,
    lng: 23.826081768339108
  },

  {
    id: "p2",
    name: "Λεωφόρος Μαραθώνος 176, Αγία Παρασκευή",
    lat: 38.005852193495976,
    lng: 23.866813024897635
  },

  {
    id: "p3",
    name: "Αγίου Ιωάννου 71, Αγία Παρασκευή",
    lat: 38.0064608458746,
    lng: 23.82803330955627
  },

  {
    id: "p4",
    name: "Δερβενάκιον 99, Αγία Παρασκευή",
    lat: 38.0201737185087,
    lng: 23.829900753733586
    
  },

  {
    id: "p5",
    name: "Γαρυττού 106, Αγία Παρασκευή",
    lat: 38.019678028532375,
    lng: 23.819209240345486
    
  },

  {
    id: "p6",
    name: "Τροίας 8, Αθήνα",
    lat: 37.996020250293384, 
    lng: 23.735375409555772
  },

  {
    id: "p7",
    name: "Μεσογείων 483, Αγία Παρασκευή",
    lat: 38.01448637207119,
    lng: 23.82723936165244
    
  },

  {
    id: "p8",
    name: "Μακεδονίας 8, Αγία Παρασκευή",
    lat: 38.00582931707868,
    lng: 23.819491896062292
    
  },

  {
    id: "p9",
    name: "Αγίου Ιωάννου 43, Αγία Παρασκευή",
    lat: 38.00915219987881,
    lng: 23.825787682568446
  
    
  },

  {
    id: "p10",
    name: "Σκύρου 21, Αγία Παρασκευή",
    lat: 38.01088323567478,
    lng:23.833409180721198
    
  },

  {
    id: "p11",
    name: "Αλέκου Παναγούλη 63, Αγία Παρασκευή",
    lat: 38.01597076087198, 
    lng: 23.84192385188599
  },

  {
    id: "p12",
    name: "Γιαβάση 11 & Ηρώων Πολυτεχνείου, Αγία Παρασκευή",
    lat: 38.01253828486973, 
    lng: 23.820194167227168
  },

  {
    id: "p13",
    name: "Γαρυττού 142, Αγία Παρασκευή",
    lat: 38.02203179342005, 
    lng: 23.826505991912626
  },

  {
    id: "p14",
    name: "Ελ. Βενιζέλου 31, Αγία Παρασκευή",
    lat: 38.00583056773143, 
    lng: 23.812473073296164
  },

  {
    id: "p15",
    name: "Βασιλέως Γεωργίου Λαμπράκη Γρηγορίου 2, Άγιος Στέφανος",
    lat: 38.14007393131758, 
    lng: 23.859405474167616
  },

  {
    id: "p16",
    name: "Μαραθώνος 12, Άγιος Στέφανος",
    lat: 38.13909454755918, 
    lng: 23.858916067233086
  },

  {
    id: "p17",
    name: "Κοιμήσεως Θεοτόκου 26, Άγιος Στέφανος",
    lat: 38.14186723311911, 
    lng: 23.855520780727137
  },

  {
    id: "p18",
    name: "Λεωφόρος Αρτέμιδος 70, Αρτέμιδα",
    lat: 37.97575998765755, 
    lng: 24.008440851884185
  },

  {
    id: "p19",
    name: "Λεωφόρος Βραυρώνος 7η στάση, Αρτέμιδα",
    lat: 37.94649050145932, 
    lng: 24.007655586165903
  },

  {
    id: "p20",
    name: "Λεωφόρος Αρτέμιδος 30, Αρτέμιδα",
    lat: 37.97359223919938, 
    lng: 24.008505167225362
  },

  {
    id: "p21",
    name: "Λεωφόρος Καραμανλή 5 & Μακρυγιάννη, Αρτέμιδα",
    lat: 37.969836794861266, 
    lng: 24.00397541930861
  },

  {
    id: "p22",
    name: "Λεωφόρος Καραμανλή 42, Αρτέμιδα",
    lat: 37.96920566773925,
    lng: 24.00100663654245
    
  },

  {
    id: "p23",
    name: "Λεωφόρος Αρτέμιδος 161Α, Αρτέμιδα",
    lat: 37.983193399521745,
    lng: 24.010251809555143
    
  },

  {
    id: "p24",
    name: "Αθηνάς 20, Βουλιαγμένη",
    lat: 37.82869925170733,
    lng: 23.77333513838338
  },

  {
    id: "p25",
    name: "Λητούς & Ακτής 1, Βουλιαγμένη",
    lat: 37.817604282280236,
    lng: 23.771721048094584
    
  },

  {
    id: "p26",
    name: "Χρυσής Σμύρνης 19, Γλυκά Νερά",
    lat: 37.98777420931814,
    lng: 23.84914110076044
    
  },

  {
    id: "p27",
    name: "Λεωφόρος Λαυρίου 222, Γλυκά Νερά",
    lat: 37.97782814085378, 
    lng: 23.852586667225573
    
  },

  {
    id: "p28",
    name: "Κανάρη 10, Γλυκά Νερά",
    lat: 37.98456307142491,
    lng: 23.850157982567296
    
  },

  {
    id: "p29",
    name: "Λεωφόρος Λαυρίου 154, Γλυκά Νερά",
    lat: 37.987865347363325,
    lng: 23.850061830720005
  },

  {
    id: "p30",
    name: "Γούναρη 194, Γλυφάδα",
    lat: 37.870443836585046,
    lng: 23.765013424891382
  },

  {
    id: "p31",
    name: "Α. Παπανδρέου 3, Γλυφάδα",
    lat: 37.86280463868287,
    lng: 23.748042011397025
  },

  {
    id: "p32",
    name: "Πρίγκιπος Πέτρου 33, Γλυφάδα",
    lat: 37.85421329640187,
    lng: 23.759300738384592
    
  },

  {
    id: "p33",
    name: "Γούναρη 222, Γλυφάδα",
    lat: 37.86592248992775,
    lng: 23.76781888071455
  
  },

  {
    id: "p34",
    name: "Γούναρη 251, Γλυφάδα",
    lat: 37.863972803852896,
    lng: 23.768921438385135
  },

  {
    id: "p35",
    name: "Λεωφόρος Βουλιαγμένης 109, Γλυφάδα",
    lat: 37.866582507601294,
    lng: 23.761111024891164
    
  },

  {
    id: "p36",
    name: "Βενεζουέλας 27, Γλυφάδα",
    lat: 37.875664872006844, 
    lng: 23.76358788256232
  },

  {
    id: "p37",
    name: "Λεωφόρος Βουλιαγμένης 85, Γλυφάδα",
    lat: 37.87208604776994, 
    lng: 23.759359738385438
  },

  {
    id: "p38",
    name: "Αιγύπτου 86, Γλυφάδα",
    lat: 37.895941800447055,
    lng: 23.7688169672218
  },

  {
    id: "p39",
    name: "Βασ. Κωνσταντίνου 172, Κορωπί",
    lat: 37.900711823582085, 
    lng: 23.87256883838678
  },

  {
    id: "p40",
    name: "Λεωφόρος Σουνίου 34ο χλμ, Κορωπί",
    lat: 37.8191450331246, 
    lng: 23.842040300738958
  },

  {
    id: "p41",
    name: "Κρωπίας Αγία Μαρίνα, Ανατολική Αττική",
    lat: 37.91962,
    lng: 23.88743
  },

  {
    id: "p42",
    name: "Λεωφόρος Αθηνών-Σουνίου 52, Κορωπί",
    lat: 37.81052267302793,
    lng: 23.846055967217932
    
  },

  {
    id: "p43",
    name: "Λεωφόρος Αθηνών-Σουνίου 52, Κορωπί (δεύτερο σημείο)",
    lat: 37.81044638686809, 
    lng: 23.845980865370525
  },

  {
    id: "p44",
    name: "Ανδριανού 25, Κορωπί",
    lat: 37.90537550552761, 
    lng: 23.86974819605758
  },

  {
    id: "p45",
    name: "Βασ. Κωνσταντίνου 294, Κορωπί",
    lat: 37.895550034320266, 
    lng: 23.877832851880427
  },

  {
    id: "p46",
    name: "Δημοσθένους 2, Μαραθώνας",
    lat: 38.118249987736945, 
    lng: 23.990002938396714
  },

  {
    id: "p47",
    name: "Λεωφόρος Μαραθώνος 5, Μαραθώνας",
    lat: 38.15962079204284, 
    lng: 23.958341009563288
  },

  {
    //να το σιγουρεψω 
    id: "p48",
    name: "Λεωφόρος Μαραθώνος 237, Μαραθώνας",
    lat: 38.13291003706214, 
    lng: 23.968527942785478
  },

  {
    id: "p49",
    name: "Δημοσθένους 2 (δεύτερο σημείο), Μαραθώνας",
    lat: 38.1205838282138, 
    lng: 23.989761539727272
  },

  {
    id: "p50",
    name: "Λεωφόρος Μαραθώνος 136, Μαραθώνας",
    lat: 38.15348466950954, 
    lng: 23.961929567233707
  },

  {
    id: "p51",
    name: "Λεωφόρος Πόρτο Ράφτη 63, Μαρκόπουλο",
    lat: 37.89007084550019, 
    lng: 23.94438160955093
  },

  {
    id: "p52",
    name: "Ευαγγελίστριας 2, Μαρκόπουλο",
    lat: 37.88356029679203, 
    lng: 23.934938053727357
  },

  {
    id: "p53",
    name: "Πλατεία Δ. Σωτηρίου, Μαρκόπουλο",
    lat: 37.91354920905539, 
    lng: 23.97409399605799
  },

  {
    //δε βρηηκα
    id: "p54",
    name: "Λαυρακίου 86, Πόρτο Ράφτη",
    lat: 37.89174,
    lng: 24.02231
  },

  {
    id: "p55",
    name: "Λεωφόρος Πόρτο Ράφτη 44, Πόρτο Ράφτη",
    lat: 37.89341170646462, 
    lng: 23.97950346722179
  },

  {
    id: "p56",
    name: "Στρατάρχου Αλεξάνδρου Παπάγου 31Α, Μαρούσι",
    lat: 38.055942335687405, 
    lng: 23.830502909558625
  },

  {
    //δεν ειμαι σιγουρος 
    id: "p57",
    name: "Κισσάβου 41, Μοσχάτο",
    lat: 37.95465197015849, 
    lng: 23.675794196059908 
  },

  {
    id: "p58",
    name: "Θησέως τέρμα, Νέα Μάκρη",
    lat: 38.06337615118939, 
    lng: 23.98345648211933
  },

  {
    id: "p59",
    name: "Λεωφόρος Μαραθώνος & Αεροπορίας 1, Νέα Μάκρη",
    lat: 38.066444335714706, 
    lng: 23.982234297757888
  },

  {
    id: "p60",
    name: "Λεωφόρος Μαραθώνος 33, Νέα Μάκρη",
    lat: 38.078427726068256,
    lng: 23.98092735982579
    
  },

  {
    id: "p61",
    name: "Πλάτωνος 2, Νέα Μάκρη",
    lat: 38.07801800799772, 
    lng: 23.95748146723025
  },

  {
    id: "p62",
    name: "Λεωφόρος Μαραθώνος 97, Νέα Μάκρη",
    lat: 38.08274189016853,
    lng: 23.978646109559786
  },

  {
    id: "p63",
    name: "Λεωφόρος Μαραθώνος 135, Νέα Μάκρη",
    lat: 38.08488270345367,
    lng: 23.977605917498504
  },

  {
    id: "p64",
    name: "Λεωφόρος Διονύσου 1, Νέα Μάκρη",
    lat: 38.08776578088273, 
    lng: 23.97585796723068
  },

  {
    id: "p65",
    name: "Διονύσου 0, Νέα Μάκρη",
    lat: 38.08816022443449,
    lng: 23.975674538395435
  },

  {
    id: "p66",
    name: "Λεωφόρος Μαραθώνος 74, Νέα Μάκρη",
    lat: 38.043474761590836,
    lng: 23.98929122489933
  },

  {
    id: "p67",
    name: "Ελευθερίου Βενιζέλου 37, Νέα Σμύρνη",
    lat: 37.94674372291377, 
    lng: 23.71543795373033
  },

  {
    id: "p68",
    name: "Αιγαίου 63, Νέα Σμύρνη",
    lat: 37.950044674848876,
    lng: 23.720100709553634
  },

  {
    id: "p69",
    name: "Μουσών 25, Νέα Φιλοθέη, Αθήνα",
    lat: 38.00045179652026, 
    lng: 23.766381567226688
  },

  {
    id: "p70",
    name: "Λεωφόρος Λαυρίου 80, Παιανία",
    lat: 37.95571,
    lng: 23.87264
  },

  {
    id: "p71",
    name: "Λεωφόρος Σπάτων 160, Παιανία",
    lat: 37.96030521614814, 
    lng: 23.85583876722476
  },

  {
    id: "p72",
    name: "Αγίας Τριάδος 59, Παιανία",
    lat: 37.95532572532574,
    lng: 23.855285067224557
  },

  {
    id: "p73",
    name: "Λεωφόρος Λαυρίου 67Α, Παιανία",
    lat: 37.961119891452995,
    lng: 23.85619816722483
  },

  {
    id: "p74",
    name: "Βασιλίσσης Φρειδερίκης & Διαδόχου Κωνσταντίνου, Παιανία",
    lat: 37.96620030528192, 
    lng: 23.853202138389722
  },

  {
    //ΔΕΝ ΤΟ ΒΡΗΚΑ
    id: "p75",
    name: "Διαδόχου Κωνσταντίνου & Βαλαωρίτου 1, Παιανία",
    lat: 37.96273794171477,
    lng: 23.85113473838957
  },

  {
    id: "p76",
    name: "Καραολή Δημητρίου 23, Παιανία",
    lat: 37.951100093201525,
    lng: 23.857033038389023
  },

  {
    id: "p77",
    name: "Λεωφόρος Λαυρίου 125, Παιανία",
    lat: 37.95368026752921,
    lng: 23.86059219605989
  },

  {
    id: "p78",
    name: "Διαδόχου Κωνσταντίνου 46, Παιανία",
    lat: 37.960339457061686,
    lng: 23.850050767224804
  },

  {
    //τσεκαρετο
    id: "p79",
    name: "Αμαζόνος 4, Παλλήνη",
    lat: 37.995038797078635,
    lng: 23.90066499606174
  }
  ,
    {
    id: "p80",
    name: "Κλεισθένους 226, Γέρακας",
    lat: 38.02813373741109, 
    lng: 23.852061838392626
  },

  {
    id: "p81",
    name: "Ανθούσας 9, Γέρακας",
    lat: 38.00768155382764, 
    lng: 23.869815390520166
  },

  {
    id: "p82",
    name: "Λεωφόρος Σπάτων 74, Γέρακας",
    lat: 38.00253500076349, 
    lng: 23.857954867226795
  },

  {
    id: "p83",
    name: "Ηρώων Πολυτεχνείου 27, Γέρακας",
    lat: 38.01008258492588, 
    lng: 23.859289080721116
  },

  {
    id: "p84",
    name: "Καστοριάς 3, Γέρακας",
    lat: 38.007011232710134, 
    lng: 23.86462723839159
  },

  {
    id: "p85",
    name: "Κλεισθένους 162, Γέρακας",
    lat: 38.023722888885686, 
    lng: 23.848946567227774
  },

  {
    id: "p86",
    name: "Ευρυτανίας 4, Γέρακας",
    lat: 38.008576545984596,
    lng: 23.85644249606246

  },

  {
    id: "p87",
    name: "Λεωφόρος Γέρακα & Ξενοφώντα (15344), Γέρακας",
    lat: 38.02400458520319, 
    lng: 23.859629624898382
  },

  {
    id: "p88",
    name: "Καζαντζάκη 49, Γέρακας",
    lat: 38.00076311536754, 
    lng: 23.85832776722672
  },

  {
    id: "p89",
    name: "Κλεισθένους 86, Γέρακας",
    lat: 38.01788744800321, 
    lng: 23.8454255383921
  },

  {
    id: "p90",
    name: "Μιαούλη 31, Γέρακας",
    lat: 38.01241410193086,
    lng: 23.84852596722722
  },

  {
    id: "p91",
    name: "Κλεισθένους 10, Γέρακας",
    lat: 38.01229010813736, 
    lng: 23.843629167227242
  },

  {
    //στο περιπο δε το βρισκω ακριβωσ 
    id: "p92",
    name: "Θέση Άνω Καρέλας, Κορωπί",
    lat: 37.937205773432375, 
    lng: 23.84869657026871
  },

  {
    id: "p93",
    name: "4ο χλμ Κορωπίου-Βάρης, Κορωπί",
    lat: 37.907175283899804, 
    lng: 23.87910673558233
  },

  {
    id: "p94",
    name: "Λεωφόρος Σπάτων 65, Παλλήνη",
    lat: 38.00286647529836, 
    lng: 23.857654238391476
  },

  {
    id: "p95",
    name: "Πύλου 8, Παλλήνη",
    lat: 38.00031821588055, 
    lng: 23.91759736722656
  },

  {
    id: "p96",
    name: "Αγ. Αθανασίου 12, Παλλήνη",
    lat: 38.009440605360496, 
    lng: 23.872033838391673
  },

  {
    id: "p97",
    name: "Εντισον 12, Παλλήνη",
    lat: 38.00551755607371, 
    lng: 23.876217367226932
  },

  {
    id: "p98",
    name: "Λεονταρίου 80, Κάντζα",
    lat: 37.98892184047168, 
    lng: 23.857810567226213
  }
  ,
  {
    //δεν ειμαστε σιγουροι
  id: "p99",
  name: "Πλαστήρα 22 & Καραϊσκάκη 0, Ραφήνα",
  lat: 38.020282218980626, 
  lng: 24.00739804476984
},

{
  id: "p100",
  name: "Λεωφόρος Μαραθώνος & Ευβοίας (Διασταύρωση), Ραφήνα",
  lat: 38.01680863432614,
  lng: 23.978208767227464
},

{
  //θα το δουμε 
  id: "p101",
  name: "Αχαιών & Δωριέων 0, Ραφήνα",
  lat: null,
  lng: null
},

{
  id: "p102",
  name: "Λεωφόρος Μαραθώνος 44, Ραφήνα",
  lat: 38.01656068700288,
  lng: 23.978076396062754
},

{
  id: "p103",
  name: "Λεωφόρος Σπάτων Λούτσας (Θέση Ντερέζα), Σπάτα",
  lat: 37.96005996704606,
  lng: 23.930887767201956
},

{
  id: "p104",
  name: "Αγ. Θωμά 11, Σπάτα",
  lat: 37.96386531006451, 
  lng: 23.90551637512994
},

{
  id: "p105",
  name: "Αγ. Δημητρίου 30, Σπάτα",
  lat: 37.964843822781226, 
  lng: 23.908593438389783
},

{
  id: "p106",
  name: "Βασιλέως Παύλου 86, Σπάτα",
  lat: 37.962164407027856,
  lng: 23.913086696060272
},

{
  //τσεκαρετο
  id: "p107",
  name: "Λεωφόρος Σπάτων Λούτσας 1ο χλμ, Σπάτα",
  lat: 37.95963444772669, 
  lng: 23.930995535582323
},

{
  id: "p108",
  name: "Αναστάσεως Χριστού 1, Σπάτα",
  lat: 37.96609028027143,
  lng: 23.906533696060418
},

{
  id: "p109",
  name: "Βασ. Παύλου 177, Σπάτα",
  lat: 37.96089534341317, 
  lng: 23.919946367224803
},

{
  id: "p110",
  name: "Δημήτρας 18, Ταύρος",
  lat: 37.97304930200939, 
  lng: 23.69263713839012
},

{
  id: "p111",
  name: "Μεταμορφώσεως 22, Χαλάνδρι",
  lat: 38.02800417423076, 
  lng: 23.819244267227933
},

{
  id: "p112",
  name: "Υδρας 2 & Παλλάδος Αθηνάς 0, Παλλήνη",
  lat: 38.00280708828325, 
  lng: 23.884910896062127
},

{
  id: "p113",
  name: "Πειραιώς 74Α, Πειραιάς",
  lat: 37.9521253795016,
  lng: 23.66579464629086
},

{
  id: "p114",
  name: "Λεωφόρος Βασιλίσσης Αμαλίας 38, Πλάκα",
  lat: 37.97132810280297, 
  lng: 23.73291976722536
},

{
  id: "p115",
  name: "Λεωφόρος Πόρτο Ράφτη 235, Πόρτο Ράφτη",
  lat: 37.88607970963185, 
  lng: 24.005387096056744
},

{
  id: "p116",
  name: "Λεωφόρος Πόρτο Ράφτη 712, Πόρτο Ράφτη",
  lat: 37.887350441488074, 
  lng: 24.003373709550733
},

{
  id: "p120",
  name: "Λεωφόρος Μαραθώνος 130, Πικέρμι",
  lat: 38.00537824856681, 
  lng: 23.953189809556207
},

{
  id: "p121",
  name: "Λεωφόρος Μαραθώνος 61, Ραφήνα",
  lat: 38.01654488194341,
  lng: 23.97806626722736
},

{
  //διευκρινηση
  id: "p122",
  name: "Λιμάνι Ραφήνας 0, Ραφήνα",
  lat: 38.02291605876368,
  lng: 24.01033011747848
},

{
  //διευκρινηση
  id: "p123",
  name: "Λεωφόρος Φλέμινγκ 59, Ραφήνα",
  lat: 38.0189106331134, 
  lng: 23.986401767227466
},
{
  //διευκρινηση
  id: "p124",
  name: "Λεωφόρος Πόρτο Ράφτη 86, Μαρκόπουλο",
  lat: 37.8899160731904, 
  lng: 23.945060438386257 
},

{
  id: "p125",
  name: "Μ. Αλεξάνδρου & Εθνικής Αντιστάσεως 0, Παλλήνη",
  lat: 38.00250101366503, 
  lng: 23.88074484869441
},
{
  id: "p126",
  name: "Λ. Γρεγού 35, Πόρτο Ράφτη",
  lat: 37.89347500000441, 
  lng: 24.010076975107133
},
{
  id: "p127",
  name: "Μουσών 1, Αθήνα",
  lat: 37.9672528375529, 
  lng: 23.72362140955445
},
{
  //τσεκαρετο
  id: "p128",
  name: "Πλατεία Εθνικής Αντιστάσεως 0, Αρτέμιδα",
  lat: 37.97287741444546, 
  lng: 24.001477807759265
},
{
  id: "p129",
  name: "Λεωφόρος Βραυρώνος 9η στάση, Αρτέμιδα",
  lat: 37.94138934037956, 
  lng: 24.00879401285915
},
{
  id: "p130",
  name: "Λεωφόρος Λαυρίου 158, Γλυκά Νερά",
  lat: 37.98714239550994, 
  lng: 23.850376996061513
},
{
  id: "p131",
  name: "Λεωφόρος Λαυρίου 31, Γλυκά Νερά",
  lat: 38.00691609367822, 
  lng: 23.84624159606228
},
{
  //αυτο ειναι διπλα σιγουρα αλλα στο περιπου 
  id: "p132",
  name: "Δημοκρατίας (Θέση Αγ. Αθανασίου 52), Μαραθώνας",
  lat: 38.150203342759255, 
  lng: 23.967244780727537
},
{
  //τσεκαρετο κ αυτο 
  id: "p133",
  name: "Λεωφόρος Κάτω Σουλίου (Θέση 30), Μαραθώνας",
  lat: 38.14364314037398, 
  lng: 23.976285875188456
},
{
  id: "p134",
  name: "Λεωφόρος Καλυβίων 34, Καλύβια",
  lat: 37.7898488793853,
  lng: 23.88754758071092
},
{
  id: "p135",
  name: "Γρηγορίου Λαμπράκη 24, Καλύβια",
  lat: 37.79446772802827, 
  lng: 23.906008067217208
},
{
  id: "p136",
  name: "37ο χλμ Λεωφόρος Σουνίου 0, Καλύβια",
  lat: 37.798172116916135, 
  lng: 23.870788720249333
},
{
  id: "p137",
  name: "Πολυκράτους 37, Κολωνός, Αθήνα",
  lat: 37.990823849311916,
  lng: 23.705397038390934
},
{
  id: "p138",
  name: "Λεωφόρος Μαραθώνος & Χαλκίδος 0, Άνοιξη",
  lat: 38.132903607977475, 
  lng: 23.85961414634947
},
{
  id: "p139",
  name: "Λεγραινών 0, Λεγραινά",
  lat: 37.668317342046095, 
  lng: 23.99561376721136
}

,
{
  //ΔΕ ΕΙΑΙ ΣΙΓΟΡΟΣ
  id: "p140",
  name: "Λ. Βάρης-Κορωπίου (Πάτημα Χερώμα), Βάρη",
  lat: 37.83992387214938, 
  lng: 23.79563067469556
},
{
  id: "p141",
  name: "Άρβης & Σχολής Ευελπίδων, Βάρη",
  lat: 37.84482178748388,
  lng: 23.816955022591532
},
{
  id: "p142",
  name: "Λ. Βάρης-Κορωπίου 133, Βάρη",
  lat: 37.842958906939195,
  lng: 23.818363451877957
},
{
  id: "p143",
  name: "Λεωφόρος Αναγυρούντος 39, Βάρη",
  lat: 37.83370066616429, 
  lng: 23.8018025383837
},
{
  id: "p144",
  name: "Λεωφόρος Βάρης-Κορωπίου 15, Βάρη",
  lat: 37.83399699248452,
  lng: 23.803675138383607
},
{
  id: "p145",
  name: "Θεμιδός 1, Βάρη",
  lat: 37.81815559940275, 
  lng: 23.801451067218252
},
{
  id: "p146",
  name: "Βάκχου 22, Βάρη",
  lat: 37.83143297377796,
  lng: 23.802354175087046
},
{
  id: "p147",
  name: "Λεωφ. Ευελπίδων 8-12, Βούλα",
  lat: 37.8335050870602,
  lng: 23.774543667218975
},
{
  id: "p148",
  name: "Πλατεία Ελευθερίας 13, Παλαιά Φώκαια/Ανάβυσσος",
  lat: 37.71906596570946,
  lng: 23.946989809543133
},
{
  id: "p149",
  name: "Αραφήνος 7, Ραφήνα",
  lat: 37.9959848390359,
  lng: 24.005481546305127
},
{
  id: "p150",
  name: "Ανδρέα Παπανδρέου (Διασταύρωση Ραφήνας) 0, Ραφήνα",
  lat: 38.01872293322175,
  lng: 23.9800751248983
},
{
  //τσεκαρε γτ εχω κ αλλο ενα κ αν ειναι σωστα 
  id: "p151",
  name: "Κοινόχρηστος Χώρος Λιμένος 0, Ραφήνα",
  lat: 38.022949625518116,
  lng: 24.010359562408652
},
{
  id: "p152",
  name: "Φλέμινγκ & Δημοκρατίας 0, Ραφήνα",
  lat: 38.018693890104736,
  lng: 23.996604024898318
},
{
  id: "p153",
  name: "Βασ. Γεωργίου 13, Ραφήνα",
  lat: 38.02087747994367,
  lng: 24.007472967227677
},
{
  id: "p154",
  name: "Εθνικής Αντιστάσεως & Προποντίδος 1, Ραφήνα",
  lat: 38.02447852990102, 
  lng: 24.003804067227826
},
{
  id: "p155",
  name: "Λ. Φλέμινγκ 54, Ραφήνα",
  lat: 38.019854436877765, 
  lng: 23.99186476722754
},
{
  id: "p156",
  name: "25 χλμ Λεωφόρος Μαραθώνος, Ραφήνα",
  lat: 38.0185797215544,
  lng: 23.980744989898636
},
{
  id: "p157",
  name: "Αγ. Κυριακής & Θεσσαλίας 1, Αρτέμιδα",
  lat: 37.963932213164625,
  lng: 23.982736562964494
},

{
  id: "p158",
  name: "Λεωφ. Πόρτο Ράφτη & Ελληνικής Δημοκρατίας 1, Μαρκόπουλο",
  lat: 37.888282177597404, 
  lng: 23.943371067221527
},
{
  id: "p159",
  name: "ELCOP ΑΝΩΝΥΜΗ ΒΙΟΤΕΧΝΙΚΗ ΕΜΠΟΡ, ΘΕΣΗ ΛΕΚΑΝΗ ΜΑΡΚΟΠΟΥΛΟΥ 0, Μαρκόπουλο",
  lat: 37.84850326574071, 
  lng: 23.936451121195553
},






];
;

// =========================
// 2) ΧΑΡΤΗΣ / UI (fixed to match index.html ids)
// =========================

// ---- Map init ----
const map = L.map("map", { zoomControl: false }).setView([38.02, 23.84], 11);
L.control.zoom({ position: "bottomright" }).addTo(map);

// Tiles
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);


// ---- Icons / markers ----
const markersById = new Map();

// Pointer (pin) icons
const normalIcon = L.icon({
  iconUrl: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2228%22%20height%3D%2240%22%20viewBox%3D%220%200%2028%2040%22%3E%0A%3Cpath%20d%3D%22M14%200C6.268%200%200%206.268%200%2014c0%2010.5%2014%2026%2014%2026s14-15.5%2014-26C28%206.268%2021.732%200%2014%200z%22%20fill%3D%22%231e90ff%22%20stroke%3D%22white%22%20stroke-width%3D%222%22/%3E%0A%3Ccircle%20cx%3D%2214%22%20cy%3D%2214%22%20r%3D%225.5%22%20fill%3D%22white%22/%3E%0A%3C/svg%3E",
  iconSize: [28, 40],
  iconAnchor: [14, 40],
  popupAnchor: [0, -36],
});

const closestIcon = L.icon({
  iconUrl: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2228%22%20height%3D%2240%22%20viewBox%3D%220%200%2028%2040%22%3E%0A%3Cpath%20d%3D%22M14%200C6.268%200%200%206.268%200%2014c0%2010.5%2014%2026%2014%2026s14-15.5%2014-26C28%206.268%2021.732%200%2014%200z%22%20fill%3D%22%231e90ff%22%20stroke%3D%22white%22%20stroke-width%3D%222%22/%3E%0A%3Ccircle%20cx%3D%2214%22%20cy%3D%2214%22%20r%3D%225.5%22%20fill%3D%22white%22/%3E%0A%3C/svg%3E",
  iconSize: [28, 40],
  iconAnchor: [14, 40],
  popupAnchor: [0, -36],
});

const skippedIcon = L.icon({
  iconUrl: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2228%22%20height%3D%2240%22%20viewBox%3D%220%200%2028%2040%22%3E%0A%3Cpath%20d%3D%22M14%200C6.268%200%200%206.268%200%2014c0%2010.5%2014%2026%2014%2026s14-15.5%2014-26C28%206.268%2021.732%200%2014%200z%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.35%29%22%20stroke%3D%22rgba%28255%2C255%2C255%2C0.7%29%22%20stroke-width%3D%222%22/%3E%0A%3Ccircle%20cx%3D%2214%22%20cy%3D%2214%22%20r%3D%225.5%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.7%29%22/%3E%0A%3C/svg%3E",
  iconSize: [28, 40],
  iconAnchor: [14, 40],
  popupAnchor: [0, -36],
});


// ---- UI refs (MATCH index.html) ----
const closestInfoEl = document.getElementById("closestInfo");
const gpsStatusEl = document.getElementById("gpsStatus");
const skipInfoEl = document.getElementById("skipInfo");

const searchBox = document.getElementById("searchBox");
const suggestionsEl = document.getElementById("suggestions");

const btnLocate = document.getElementById("btnLocate");
const btnTrack = document.getElementById("btnTrack");
const btnFit = document.getElementById("btnFit");
const btnNav = document.getElementById("btnNav");
const btnSkip = document.getElementById("btnSkip");
const btnUndo = document.getElementById("btnUndo");

// ---- State ----
let userMarker = null;
let watchId = null;
let closestId = null;

// Skip state
let lastPos = null; // {lat, lng}
const skippedSet = new Set(); // ids που έγιναν "Δεν θέλω"
const skipHistory = []; // stack για undo

function updateSkipInfo() {
  if (skipInfoEl) skipInfoEl.textContent = `Skipped: ${skippedSet.size}`;
  if (btnUndo) btnUndo.disabled = skipHistory.length === 0;
}

function setGpsStatus(msg) {
  if (gpsStatusEl) gpsStatusEl.textContent = `GPS: ${msg}`;
  else console.log("[GPS]", msg);
}

// ---- Map interaction flag ----
map._userInteracted = false;
map.on("dragstart zoomstart", () => {
  map._userInteracted = true;
});

// =========================
// 2.1) Validations (fix για lat/lng null)
// =========================
function isValidCoord(v) {
  return typeof v === "number" && Number.isFinite(v);
}

// =========================
// 2.2) Markers
// =========================
function makeMarker(p) {
  if (!isValidCoord(p.lat) || !isValidCoord(p.lng)) {
    console.warn("Σημείο με άκυρα lat/lng (αγνοείται):", p.id, p.name, p.lat, p.lng);
    return;
  }

  const m = L.marker([p.lat, p.lng], { icon: normalIcon });

  const latTxt = p.lat.toFixed(6);
  const lngTxt = p.lng.toFixed(6);

  m.bindPopup(
    `<b>${escapeHtml(p.name)}</b><br><span class="small">${latTxt}, ${lngTxt}</span>`
  );

  m.addTo(map);
  markersById.set(p.id, m);
}

// Render all point markers
POINTS.forEach(makeMarker);

// =========================
// Navigation helpers (Google Maps)
// =========================
function getPointById(id) {
  return POINTS.find((p) => p.id === id) || null;
}

function openNavigationTo(lat, lng) {
  const dest = `${lat},${lng}`;
  const origin = lastPos ? `${lastPos.lat},${lastPos.lng}` : null;

  let url =
    `https://www.google.com/maps/dir/?api=1` +
    `&destination=${encodeURIComponent(dest)}` +
    `&travelmode=driving`;

  if (origin) url += `&origin=${encodeURIComponent(origin)}`;

  location.href = url;
}

// =========================
// 3) ΛΟΓΙΚΗ ΚΟΝΤΙΝΟΤΕΡΟΥ
// =========================
function setUserPosition(lat, lng, accuracy) {
  lastPos = { lat, lng };

  if (!userMarker) {
    userMarker = L.circleMarker([lat, lng], {
      radius: 8,
      weight: 2,
      fillOpacity: 0.6,
    }).addTo(map);
  }
  userMarker.setLatLng([lat, lng]);

  const accTxt = Number.isFinite(accuracy) ? `±${Math.round(accuracy)}m` : "—";
  setGpsStatus(`OK ${accTxt}`);

  const { id, distMeters } = findClosest(lat, lng);
  setClosest(id, distMeters);

  if (!map._userInteracted) {
    map.setView([lat, lng], Math.max(map.getZoom(), 14));
  }
}

function clearClosestGlow(marker) {
  const el = marker && marker.getElement && marker.getElement();
  if (el) el.classList.remove("closest-glow");
}

function applyClosestGlow(marker) {
  const el = marker && marker.getElement && marker.getElement();
  if (el) el.classList.add("closest-glow");
}

function setClosest(id, distMeters) {
  if (closestId && markersById.has(closestId)) {
    const oldM = markersById.get(closestId);
    clearClosestGlow(oldM);
    if (skippedSet.has(closestId)) oldM.setIcon(skippedIcon);
    else oldM.setIcon(normalIcon);
  }

  closestId = id;

  if (id && markersById.has(id)) {
    const m = markersById.get(id);

    if (skippedSet.has(id)) {
      m.setIcon(skippedIcon);
      clearClosestGlow(m);
    } else {
      m.setIcon(closestIcon);
      applyClosestGlow(m);
    }

    const p = getPointById(id);
    const km = Number.isFinite(distMeters) ? (distMeters / 1000).toFixed(2) : "—";
    if (closestInfoEl) closestInfoEl.textContent = p ? `${p.name}  •  ${km} km` : "—";
  } else {
    if (closestInfoEl) closestInfoEl.textContent = "—";
  }
}

function findClosest(lat, lng) {
  let bestId = null;
  let bestD = Infinity;

  for (const p of POINTS) {
    if (skippedSet.has(p.id)) continue;
    if (!isValidCoord(p.lat) || !isValidCoord(p.lng)) continue;

    const d = haversineMeters(lat, lng, p.lat, p.lng);
    if (d < bestD) {
      bestD = d;
      bestId = p.id;
    }
  }

  return { id: bestId, distMeters: bestD };
}

function updateClosestFromLastPos() {
  if (!lastPos) return;
  const { id, distMeters } = findClosest(lastPos.lat, lastPos.lng);
  setClosest(id, distMeters);
}

// =========================
// 4) GEOLOCATION
// =========================
function locateOnce() {
  if (!navigator.geolocation) {
    setGpsStatus("Δεν υποστηρίζεται");
    return;
  }

  setGpsStatus("Εντοπίζω...");
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude, accuracy } = pos.coords;
      setUserPosition(latitude, longitude, accuracy);
    
      // Πάντα ζουμ στη θέση μου όταν πατάω Εντοπισμός
      map.setView([latitude, longitude], Math.max(map.getZoom(), 16));
    },
    (err) => {
      setGpsStatus("Σφάλμα: " + err.message);
    },
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0,
    }
  );
}

function startWatch() {
  if (!navigator.geolocation) {
    setGpsStatus("Δεν υποστηρίζεται");
    return;
  }

  setGpsStatus("Παρακολούθηση ON...");
  if (btnTrack) btnTrack.textContent = "Συνεχής: ON";

  watchId = navigator.geolocation.watchPosition(
    (pos) => {
      const { latitude, longitude, accuracy } = pos.coords;
      setUserPosition(latitude, longitude, accuracy);
    },
    (err) => {
      setGpsStatus("Σφάλμα: " + err.message);
    },
    {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 2000,
    }
  );
}

function stopWatch() {
  navigator.geolocation.clearWatch(watchId);
  watchId = null;
  if (btnTrack) btnTrack.textContent = "Συνεχής: OFF";
  setGpsStatus("OFF");
}

// =========================
// 5) BUTTONS
// =========================
if (btnLocate) btnLocate.addEventListener("click", () => locateOnce());

if (btnTrack) {
  btnTrack.addEventListener("click", () => {
    if (watchId) stopWatch();
    else startWatch();
  });
}

if (btnFit) btnFit.addEventListener("click", () => fitAll());

if (btnNav) {
  btnNav.addEventListener("click", () => {
    if (!closestId) {
      alert("Δεν έχω κοντινότερο σημείο ακόμη. Πάτα πρώτα Εντοπισμός.");
      return;
    }
    const p = getPointById(closestId);
    if (!p || !isValidCoord(p.lat) || !isValidCoord(p.lng)) {
      alert("Το κοντινότερο σημείο δεν έχει σωστό lat/lng.");
      return;
    }
    openNavigationTo(p.lat, p.lng);
  });
}

if (btnSkip) {
  btnSkip.addEventListener("click", () => {
    if (!closestId) return;

    skippedSet.add(closestId);
    skipHistory.push(closestId);

    const cur = markersById.get(closestId);
    if (cur) {
      clearClosestGlow(cur);
      cur.setIcon(skippedIcon);
    }

    updateSkipInfo();
    updateClosestFromLastPos();
  });
}

if (btnUndo) {
  btnUndo.addEventListener("click", () => {
    const last = skipHistory.pop();
    if (!last) return;

    skippedSet.delete(last);
    const m = markersById.get(last);
    if (m) {
      clearClosestGlow(m);
      m.setIcon(normalIcon);
    }

    updateSkipInfo();
    updateClosestFromLastPos();
  });
}

// =========================
// 6) SEARCH / SUGGESTIONS
// =========================
let suggestions = [];

function buildSuggestions(query) {
  const q = (query || "").trim().toLowerCase();
  if (!q) return [];
  return POINTS
    .filter((p) => p && typeof p.name === "string" && p.name.toLowerCase().includes(q))
    .slice(0, 12);
}

function renderSuggestions(items) {
  if (!suggestionsEl) return;

  suggestionsEl.innerHTML = "";
  if (!items.length) {
    suggestionsEl.style.display = "none";
    return;
  }

  const frag = document.createDocumentFragment();
  items.forEach((p) => {
    const div = document.createElement("div");
    div.className = "sugg-item";
    div.textContent = p.name;
    div.addEventListener("click", () => chooseSuggestion(p));
    frag.appendChild(div);
  });

  suggestionsEl.appendChild(frag);
  suggestionsEl.style.display = "block";
}

function hideSuggestions() {
  if (!suggestionsEl) return;
  suggestionsEl.style.display = "none";
  suggestionsEl.innerHTML = "";
}

function chooseSuggestion(p) {
  if (!p) return;

  if (isValidCoord(p.lat) && isValidCoord(p.lng)) {
    map.setView([p.lat, p.lng], Math.max(map.getZoom(), 16));
    const m = markersById.get(p.id);
    if (m) m.openPopup();
  } else {
    alert("Αυτό το σημείο δεν έχει σωστό lat/lng.");
  }

  if (searchBox) searchBox.value = p.name;
  hideSuggestions();
}

if (searchBox) {
  searchBox.addEventListener("input", (e) => {
    suggestions = buildSuggestions(e.target.value);
    renderSuggestions(suggestions);
  });

  searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideSuggestions();
  });
}

// click outside closes suggestions
document.addEventListener("click", (e) => {
  const inside = e.target.closest("#searchBox") || e.target.closest("#suggestions");
  if (!inside) hideSuggestions();
});

// =========================
// Fit all
// =========================
function fitAll() {
  const latlngs = [];

  if (userMarker) latlngs.push(userMarker.getLatLng());

  for (const p of POINTS) {
    if (!p) continue;
    if (skippedSet.has(p.id)) continue;
    if (!isValidCoord(p.lat) || !isValidCoord(p.lng)) continue;
    latlngs.push([p.lat, p.lng]);
  }

  if (!latlngs.length) return;
  const bounds = L.latLngBounds(latlngs);
  map.fitBounds(bounds.pad(0.2));
}

// =========================
// Utils
// =========================
function haversineMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const toRad = (x) => (x * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => {
    return (
      {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[m] || m
    );
  });
}

// =========================
// START + PWA SW
// =========================
updateSkipInfo();
setGpsStatus("—");
if (closestInfoEl) closestInfoEl.textContent = "—";
fitAll();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((err) => {
      console.warn("SW register failed:", err);
    });
  });
}
