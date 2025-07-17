'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "55a98d2f133bb742c384632fefda4f24",
".git/config": "7378651874505068ecd4461015a712c4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9fe38447f22adf6069d0d6f31ffb8b0c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "27f77ef76bc8e3f6572539f364be9976",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6e612b727659b2e24ec0677847437d63",
".git/logs/refs/heads/main": "1214ae4ed9217e071af4f1cf93a534ac",
".git/logs/refs/remotes/origin/main": "5bc83221a361a046e3321c8b832c563f",
".git/objects/00/a55915abde4ad66f5dd59ea27b83b39fb2fbc1": "180e183424c6116f936f295635b183d7",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/7eb2990173afc4bf3aa4f9a7f6db0a5f0bf677": "7e0ead06938f8ab5eaad6f6a74d5c268",
".git/objects/04/7276e8ae37e86b1ec1198ffd0f9d8408a5d8be": "d3622df9516d459d5f5810a5badec9f8",
".git/objects/04/75428871cef4b0072844be5ef3b274fad617fb": "b4458a173ccd511d3e4a3b923f8e3436",
".git/objects/04/e57b60e8adcf4a6102c6b7805ac36978d6feb4": "7685205164eb1d52034af80719185e94",
".git/objects/05/33128a27dfd1b65d92f9b79a743528baf643ee": "1bcfe4cb6092f8b346a61b1a622c9bee",
".git/objects/05/430b306676c113e9e23a66cd850803bff838ac": "62c0e6789aedab7ae410483c5eaec58e",
".git/objects/06/48a53cba3f8c6a36cada78745ddd3eab3997e9": "eb2da9707e396ca5e732bf1ed3d52613",
".git/objects/08/dd60a1a6ca4471cbefc5acb8cb7272b8ea628c": "252a312b96d4da9b37abb36d8b5bace8",
".git/objects/09/573ee08dad531880e5fb7e1c74f085c7755427": "999ad13d1898ac03fe00e27c3b610d63",
".git/objects/0a/6dedbaa95c8711c247f3719b0df185b961b1b0": "181b075c039334c40c08cb960f93e0f7",
".git/objects/0a/8a7e7efd6758f901f5ea36846bc14dd1f503a0": "05b7e595f7fe4fcd6c6897d5339e4121",
".git/objects/0b/1efbc56fecd60593ee7b5fbaf8df8b970d3306": "9c81d2070fa8be9209e75f66f8e9c0c1",
".git/objects/0b/74a4a1d5898c01ecd3170a46e8dfc59b780643": "08e6f3942d13e280d0022c4a2b5fe5a0",
".git/objects/0d/54cf23ed88a820d8182ffae7058ccd56e56c2e": "1945424e6b8172ef734464c41d878c0b",
".git/objects/0d/6f157306a9f24a6ad4c2249bae8b0a24fce350": "6f9d1a5a894f79d60a24b73b79520069",
".git/objects/0d/c6cccd83762199adae5aa6a120bd88cd0c2f85": "abb28291b4a439050ed5eded7ee28f6d",
".git/objects/0e/872139d17d89ac0e73be45f81e7cde70e57e68": "03b7ff2d4fbb3a5743f755fc243e052b",
".git/objects/0f/9bcc5fd645da6c3177fbaefc825e848da5871a": "0bffa538bb09240cb73c3de20eb1ba1a",
".git/objects/10/3ac866e0e0e944ad3cae4605e76a09c6361d82": "b0cb00b8ec00abc4c2c63c98d960fcf3",
".git/objects/12/a160304f04d886529dc4f08349a3579cc1f7fe": "51bd8d0e295870098f0863ea7f2ab9be",
".git/objects/18/51ae4736d881e893e090f96be03a8e2d3632bf": "7b26f13ae22f73ed4af35454257c39f3",
".git/objects/18/b68bb5b2c43836abf32aa5da8bb755a3619d0e": "447dd163af8a3234725c4b6b73affe52",
".git/objects/19/7c6ecccc57e0e04b89c34978a64edeba44e789": "2b8b49bb3fb5616240ed8c51375148c2",
".git/objects/19/e5c18670dcd3a9b42426000e5b361948ba8e83": "c49c21d147e487a6b2b065afc1ac51f9",
".git/objects/1a/e282d0fc01155775439ee60b7d7f984395e140": "0f33a389bfc04309d7ab8de22d9f8c9e",
".git/objects/1b/c102af39559dbf39fc82d7977d6152752fa0e3": "2768c85a8ddf992fa659617af6cbd864",
".git/objects/1c/44a20e452ea78cd8b3eaceb7aec07ae0c9fbdb": "ac261b4622346454ebc18a6d6aa932e6",
".git/objects/1c/a9a6e8d913caae16271dcda9be178fa05d6d47": "efeea4bd52f6efd52fece6f04f73f5d6",
".git/objects/1c/d88a7be3de1875e3f04b5b67eabf85e8ace228": "bb9b8c97e4cb083b3335378c4b255625",
".git/objects/1c/dbaf31b499f73d54a9b1467dd21d5c08ed86a0": "ab468d3c137de5ce0216c0a2d6ae1836",
".git/objects/1c/fdf72b7f87f2993c0211b55be4388f9c11d4a0": "f0d04f133f3f9c8ee92e839d00c89d0c",
".git/objects/1e/268e45d4e826d5e971cbede3a8d0834ad0e1ed": "1408c9fd45f51df8c5cbeb7fc04f04c5",
".git/objects/1e/4339f52b712a1d8d94db5d52b30a78030a8324": "c7e71402f7fa56aad256408465e63b0e",
".git/objects/1e/516cb0bf580c28b40f7f16d8b484d732157b68": "2489e3f4808929d9114bdbb30bddf264",
".git/objects/1e/ef5602e6b0752fd9f56ab7fb1d29083948f2ed": "ec552b4a066060f6bb0724724208b1d0",
".git/objects/1f/9323a3a4d88e812a92601f8500783a1d709065": "c18c135cb3f39a50fd6e1bd6140a70a6",
".git/objects/1f/fecf7821c61590af019c37e7b6dacc3fd8d00e": "d2450341985cd7a119d6277868907c0e",
".git/objects/20/eb1c7d354e611eeb280df9cf0bcd972d6ad568": "dab1127b32e5e51c80bb30145e33412d",
".git/objects/24/645cdc5e4195f9d444964c0468c2ff887cee26": "99ffdc019df1c1165af01aab4e8d6c50",
".git/objects/24/a16e3ff14b8e363424f93b1ed74c5438ad91db": "ffbfca92ffc9658648079c4054d06dea",
".git/objects/24/cc4f62fa46f6623e4a61c839f0a91876efeca7": "0f5f0205432e35a526d34683c7411666",
".git/objects/25/ac649cac01bec44b51b7ea83f824f369ffdf97": "af1fe469a2a5e76bb3c7124f7382b928",
".git/objects/26/278d7e5c49e995d2ff23601575b4a5d4e45dfe": "9b5290ab7a6869bbc6dd2a24c7ec6d08",
".git/objects/26/60bce2a0485e9fe5d5b59a1425488f7a74cf4d": "3479c800ab0902e3161e95fdb7f76da2",
".git/objects/27/a85fa3f71b732df51559c6c7ef17814a3262d3": "1c1b08fafdf6ba104214b75c59c272b8",
".git/objects/28/4e702cb6fd4ee15c6c78a9973e770e3373bec6": "70fd3bb267ac75968d5e7142eb4b8418",
".git/objects/29/6595d1c3a833b2f5d912c6eef01fd5dbed2f1d": "55333bfb4e8e3a5fafa957dc01ebab4c",
".git/objects/29/d383045229fcdfdb1ae274cc694efc2eb4d706": "048d038f2499a028f11547170884353f",
".git/objects/29/d43e5b62caddc1837c99555af1810bab588e00": "3475b51e17a507159a7c1aefa7d7aaa7",
".git/objects/2a/f0ba80bb13c2b511089fb630a8e7d26d0a32fd": "8015d90da7a4e57e6ddb2419b8f26044",
".git/objects/2b/a432bce5bdbce87215574a6851e6096442d201": "e5e81ea24aba0ad65ec86f569b65922e",
".git/objects/2b/f5561ad5230662addaa7780b013f92d7592571": "80c0fa730fdb5a39e3991162ac506d2d",
".git/objects/2c/49b2503962793af46287a3a949a8f492dd04a7": "43429196f1bf9777ae1a395e26b16513",
".git/objects/2d/957a7908eacd5f2ae40bd60903d6d3af4ed20a": "4d6392f6083b4adbf182d9a10d3fde96",
".git/objects/2e/2cb116c1505e23b66daa4298f6284e6278dc9c": "ea7e33eef8f20f3955ac27bc79919c80",
".git/objects/2e/6a2467e0ab304e30460124aebfeda5e7515c4d": "45814e6cd1d3193fc86f030dff171550",
".git/objects/2e/a58545898f9be7976f2d280fa0167a35eee45a": "f939461732b249122220ae3cb936dec9",
".git/objects/2f/b9c22ecfcdc1c3e676b1d7335fd95774299538": "91ab6b90a9f11139c099f86726d4930c",
".git/objects/30/264e1912187eb20494ab77601ce325f1b424e7": "1e7813d6ef928d740071a4207586e1bf",
".git/objects/30/9c96524180c7b5287c6a1904c8e1bdd2542951": "9cd50ee888dcf67e462d46f0ff50c7ce",
".git/objects/31/0af6afba4373a5fc5df41c26d7a4a40119e11a": "dc91098b1e893262975221d4795f02d1",
".git/objects/31/5cdd6bb5a83e14efb68fab9d52964d873d329a": "7125318960ace2ac074b64ff0c9f90fc",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/8b3d003a542da98a409d558646d7d4574ab7c6": "85bbd2cd4b4ff5b432495d811e555797",
".git/objects/33/cbc8e83d88cc382c62708a1974a5a51acccd3f": "4eacd2a9dd0f44ecb95fff05aea1ac3c",
".git/objects/33/e2b5fab4ea42c6f04dfa6b233ed5c6d4f0ad1a": "90f4e526f21d773af107883b692f8567",
".git/objects/35/2c3d06055564a25a2526065701436d281195e7": "bbe2829f5efb90adf35d502eb8d7b25d",
".git/objects/35/872ad9d857ee9fb8ce16a98c00c9ecf1cddfe2": "e0e85078176ac48875c36192887bd8a9",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/b2ea697f9c37eebcf3a15c01220b307dc26678": "a4d86a983065a54a3dc483d87667554e",
".git/objects/35/f1161bfb6d9256c532201670d293568a18f1b4": "ebf51a643fa46d2373f6cbb145f8eefa",
".git/objects/36/c4a538b41b5a1f511792b26d1012318a1d4995": "02bd6218549a4a8479c8f431ee6b0816",
".git/objects/39/075d73a5120e6bb2527859d9d3577df3f98271": "9f10786d08a009aba1d45c0e5d39ca20",
".git/objects/39/7a45a9fcd84dd1526e14721f7630a01709ddfb": "0ebc51f9482b6598e8ff870662cf09af",
".git/objects/3b/7236c99bf1ab519527d0e8c48f2c7021b4c3d3": "de440b96585e3743627d71f2842ae3b5",
".git/objects/3b/b3d551c0a2779e863fba68c3ebf383dd036a30": "4f15fb1d6608017e3e036501f5acdb77",
".git/objects/3c/ed7d2f9b387ee83d94932157bb313c504f6d26": "b1e224af9338345e0a59200b30bfd073",
".git/objects/3c/fa4e6a9dcfb77e851787f5e90f8deb7d94dbaf": "32fee61abcbee1d2f0e5e3696a556972",
".git/objects/3c/fd6bb0cf76dcbba7f7cbbb1bffdcd95e5e57b2": "67d101ef79b22a18aa3ba4dfaec2f750",
".git/objects/3d/0796b2973c10e0ad6737d3bcc14a4dd3d78682": "4c5aaf1d9f4c558e9718393a3dfb91ee",
".git/objects/3d/26b28c40f7367098616a9302ee129e12714b86": "ba565443265df71f55ee461a086b8a1c",
".git/objects/3d/dcfc89f5b5ef00616efd572b10f59770a45f58": "1ea71536b8cb52deb81d201b5dfa2d32",
".git/objects/3d/e3a1e7b2201b50251a0a23ac148fe8e519c5e5": "0e149283b67393d9b9bed50039671395",
".git/objects/3e/74988a03365a60a540dff37f86c44f9f3aabfa": "8afa58c6c582481951d54cca751840e1",
".git/objects/3f/7590730aa6541c4e3faffc2c099c4297251574": "3f81b6255af2c274f1b0a2411359e8ab",
".git/objects/3f/c41b20323069a8479a47fc13489646492f3d77": "6fb75ee7ad8e8ea03fb1a92749831dfd",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/aafa51224a097d2c82e32269e54a58332a2f33": "f2a88dd48f782cb6ae4143a651bbc646",
".git/objects/42/1d9b95c5115dc17afc19c0c580c00b54e3b9c5": "6d23b85ad88058e124450de4189356e4",
".git/objects/42/98874cfe040820538e906ab36bed53b016a8a7": "c271c0366fd9a33d992c99f82e4ae8cd",
".git/objects/46/312b0befa182c817a2915a16bffea47a950361": "060c1ef458da1190f8ce725d0fbf816b",
".git/objects/46/966203b750405448cd948bdf7272c76c1cac66": "ea06b7338c5ab55650833d1bfdad9d27",
".git/objects/47/01f4bb1902d62821d959c3120723e1ae3d11d8": "7509acb92abbbbef421ad5584768f41d",
".git/objects/47/5bc4fe1084e0e8aa559c830f2a1c3aec429f36": "dc119c1968280724ae78638f370e1458",
".git/objects/47/cf7577a4d7848e356783bd09ec28763d1567e2": "6b81a4f9f127c70a6d5b3aa97c9a5495",
".git/objects/48/f79f518a2bb0ccecf9d24f3103ca5523a70546": "cfd87f67459411f2679f6677f0f21174",
".git/objects/49/4acede0c520f847f75982ca1f671fc6eaa889e": "c4a42624eaa20c8a64455bab6edd0908",
".git/objects/4b/3a41a85241af97d21a5153dc0b34d1e1c4f7dc": "371a0c564fe0be25ed18fc61b4cf51f7",
".git/objects/4b/eb8cad225538192d59b45ac3e62d95dfec69c5": "ad12347346efb1e555beb7475b5feb7f",
".git/objects/4c/177df203a55ef1fbc9a4b81b63964813dea053": "328bec93b143fe7385d9a1d20e0b6c2a",
".git/objects/4c/b60f42aeccc05ea7752bcef499dbfe33d68a30": "bee5dc2ba19e4a117faae49369560389",
".git/objects/4d/34aff55cecc056426e049c2165d72cedc577dc": "a877c53a94258f03d492475ed47c6382",
".git/objects/4d/ac4bc59ae57778a0d7170841deed42a72cb10b": "68005a74f9050ddb57548e9ac8b754bd",
".git/objects/4e/2af0d1650327af6603631928e71000da8f1a20": "ed062dcf4fd125896bb28b41b93c12b2",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/744d6abfdc58ef5b86b7f955067788470dff42": "d2f325f12d62d48835674d3b07f14da9",
".git/objects/51/f4ff0bdeed79e2842fba0c33b12940a22d2b1d": "abb527e30b1415313a461302e592a498",
".git/objects/52/a6ef59e12d0582a9a5bf5e3c4eb850bc9bdcb6": "f216e3599174078c8a61236fc08f6ddd",
".git/objects/52/e40418b4bcbfc0f87b480db287e257f5cdb547": "b70cb2e8bab08eb0669845385b0facc5",
".git/objects/53/12523d05267bf27708b9590ee067d556865326": "9d4ffa2f4ec0cb9b5cee7882e96a6cc5",
".git/objects/53/2738e208061d2c7cd80e8fecabb527a01bb03b": "95c0a736c6823aa2a78c028dc47d5862",
".git/objects/54/85c8b76b389a9f8095970ac49666c259854327": "4f826340e887e20c06603f4b367d9e3f",
".git/objects/55/210d9ed709690506b6f240a3fb5da6267aed1a": "5b31fddd74c1f4e49688296893cbf134",
".git/objects/55/b93bc10f2a255a0287e935724e195e52e13181": "5f935a510744a0958ae6288bb0dc30aa",
".git/objects/55/f8d54ca90a5f13821d5e7d282e316329f527e1": "8684db872c386ea76b24f7bff9ce0253",
".git/objects/56/b414777ed4f13ec45ef4a382bcbf0b31d2e2d9": "84add399c1691194fe5e28603170a6e9",
".git/objects/56/efe658bc37dc4f2186ed00302b65c31119d982": "baa55b41e5b1ca61362f2b590f3fd87f",
".git/objects/57/31d09f4ac50934922e401a69f97c505a2a1f0c": "1b9ad77ee0d8c1087f9e776fb639b279",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/775bdb959da6993ff65baf4134b431c5928571": "f0a6d71b74c9ecb16f2a7ff74822ded0",
".git/objects/5a/538ddfb915c0de4a68563a413c41524c8dc0e1": "68ead26e1b5706b1af955796f6876b96",
".git/objects/5a/fd6231ffb94b64af2344b3b83c4e0d262329dc": "be0785f0501dc2d6bc4492e724957b9b",
".git/objects/5b/c8192d204ce8031111fb428fd00b8233189385": "f6625d5b4910dd35483a41532d14bdce",
".git/objects/5c/01a5791affc0d5a227d0a167bd1e93dd92b454": "f9c0ec36597893aee299e5946a57b79d",
".git/objects/5d/dc95be2769385aa49d7c87c18d0e8bae20af62": "4377c7d65527da64a3920f09b7619b75",
".git/objects/5e/0586fcdb9462f7fb7fbbf935586b0dd2675ed9": "7701c5225a5e0496aa9023828a449f99",
".git/objects/5e/6f759f9a07b7710587e5abbcd4ac7026ab417b": "36e41e1938d7349307827e759dca2a63",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/b551e50b1a0fe7dc3894a436f8c9c620af7165": "93612fcbbdd7527bed9362fd6cae4e39",
".git/objects/61/65bb803825279f14223001acdd7d7c04850ed1": "ba1768570764978d86758586ffcb71ce",
".git/objects/62/a14370d976e041d8f2763a4f6d47b15b328eff": "de04ce8e94d5718256974b09a50054d8",
".git/objects/62/bf59a6e708737d1d0958a170c8992db62a781f": "0fe7a436c3cb9d0cedff3bdad687b5d1",
".git/objects/62/f3654413ae93c0c2824ef0ede76418d58540f4": "f5462b8d7b2d6436fd2adec4885b2518",
".git/objects/63/f4640321c1475e9f73e628d8c3402981235379": "1c6815a917bd32fbb6a47b10dfaa756f",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/60b4a9bd03ede979748c36aac7d647f3aa7c1b": "3d4d1aa38b64b2cae27ebfd781f97919",
".git/objects/64/6a019528321aa3787b0623ef8d31749b0e4707": "bff757c90b4f5a0c2369726d3a29cb63",
".git/objects/64/8e9fb56a7613eed16356b677490f629176b1a4": "74398f490aafd4863395804270804857",
".git/objects/66/d7a1a53b50ea153a2cd9df84c04a221fccd9e1": "6859b28be6158787674e0dfa4038286f",
".git/objects/66/fcd041dd94ce423514537401c836fc81ab2968": "479aba9305464005fb62d9d25b7a2d76",
".git/objects/67/605f8195146881b3efadc0006d4718e939badf": "645651a05960c99a5e958dbe0d43def3",
".git/objects/6a/2a5c74d3cbe99410aa14f100b4cc828f65f394": "6dbcc8e4c9f1b9ce39970a1a553506cc",
".git/objects/6a/d93acf743fb000a25e0535241c32222b3f6447": "e3a01043c1deac97c5cfdffdd4442761",
".git/objects/6b/3a8902dac42b844399f4febaf9bcadaa96591a": "4ccaf97178a47e526811eb63c74bd47e",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/26364e0868fb55326c5fa3e11b728866b752b1": "25da666f8f9ceef0a23beb20b6d3b0ab",
".git/objects/6d/6a442547d38bd5c8829d63d82c434926b7b940": "7db9b36c2c43fef5eb10de9f8727fa8f",
".git/objects/6d/9eda914aa5c9c17aed4f8054ac5a376fae82a0": "157c22af577750659a1fc2bb106927f3",
".git/objects/6f/ae755d5b1d78d754f9356384d6d1ddc74a603b": "6f002ebdc6a3d2bb0b65c289fd99e53e",
".git/objects/6f/b3c60b107282e092a108f866c3accb60b942ae": "008e65751d424d8baf05cff68055f81f",
".git/objects/70/43f02eec0b2486502cebdd5499bc4918e25d47": "879fb46302d4221eed4fcb281f9c083f",
".git/objects/70/62743fbb69f9b4905829b69ad84e13fba330bb": "74bc132c35fd265c61dc53e284015367",
".git/objects/70/69e7d5564f017ce9adbda4431a80c3b1cb976f": "2f68aa12b7b979bf1bc91285c7367e01",
".git/objects/71/9d292b7fad7d7e826f1f069bb0167d6f251e0b": "fb2b3d42d7d858e9e635e009ba154b38",
".git/objects/72/0072674da5cf5072d6c934059d25038ecb20e2": "1dce36870763451785ef9318645f1a3c",
".git/objects/72/27e7a11f77bc89525352e487060cffa2b0af8b": "18ae12a463f0be224d63ea1d2bbd714a",
".git/objects/72/990b4aeaa7a3c6de775cc96e9361fe4ed5deb9": "4ff78b543a774fe72f8f53859153a8cc",
".git/objects/73/288fefb42a449a530e41927bb1423cfa6bed1a": "b96abfe2870526c36ee6fd8b5989c1dd",
".git/objects/73/64e98368452914eb3e6bfff60f08d9673da1de": "5b9fdf7ada3c764e6f8acb21bb32a663",
".git/objects/73/6a87a3cf5e451028cf524ba251ac4d066c6396": "972eb78f822fc46e3105c57cd9a10e89",
".git/objects/73/ac216e904646aede25dbfb2d320acfb11faba4": "34a44b8358ca7635479355c1b1d1b703",
".git/objects/75/065d97c9ba476b0c942e66f5188d6aadbdc5d3": "e68d13cc24bda2b2c7c5a8182202e3db",
".git/objects/75/12c408c187220fcef6e4d6ef5a43db6adeef9f": "f8ee626bb8d8a55aaec3644ddc547821",
".git/objects/75/9f13eea494c6800040094304be072e81944a6f": "532fcab24d824a50d144a3f892b1d3aa",
".git/objects/75/deb850be8f14a71d74c1368b193dd7f581f747": "251cebe10faac0752d5a2c7983612dc3",
".git/objects/77/e51fe9aad6cfe3590bd5e557d06b70d8b6f67c": "51adae0942042273814973eabcf99b43",
".git/objects/79/3d83de054fd0255ed74017c04e3d1077107975": "0526e037eaf5d6e9c813cd3e9b7602c5",
".git/objects/79/7333d9bae384c9d33b4bbe5ba0ae5c33112901": "5a043138dca6c65cb30cee7c3d1b94aa",
".git/objects/7a/627cb581b2d4fc4fe095c8b167b8ce92ab01ca": "3ca0a719f617958a338dc806d9ea744c",
".git/objects/7b/2ccc5d8652a4999860e7610a00bc62a563db10": "c0e846dcf59e151c0bae73dd4b01ae32",
".git/objects/7c/25e2577627bbd9c4b66e461b96dfaf8437dd94": "416a177e58de4e7b56adf38c65e6a07a",
".git/objects/7c/901222bccf59edd0fc8437eda699e68ce7dc21": "4c1b4b0ecefcffb9c074e15777fced8b",
".git/objects/7c/cccadd964dc10daabeb14454e094d14bcbdcc8": "2383dc720a35eb93d0f8a4f10c9f5fb3",
".git/objects/7d/d1215ccc6c64e3b4a76519b1dd2cb8846af950": "ceef47f4c236067ae55b750879edff3f",
".git/objects/80/44354880ae3f420a3bb3695b3a257a8775adef": "1196bacd69e5c72794023f18b33eb6fb",
".git/objects/82/18c45ebdec141d45c21d1a70683f53ac2599a3": "71d5fb6f0df2a12cd7d2706dbb020d97",
".git/objects/83/7a152c339b9e44a378c965fa315fb031024596": "1466e23d4750b971ac7b038c0b85838d",
".git/objects/83/e4b9e8fc15a8e8a628898ab91be3fe1e809822": "b2ed80c673db53b5715abe7c4fcc53e0",
".git/objects/85/9fb47d3c896ff3ae719272746e438ec075cce9": "1c244664918b6f5c46ecc56c229ef93f",
".git/objects/85/cbf3ab961782ac84ecd4ffc900e0d549bdb397": "e1ddcde57a878fec2d2b428ee2e5f76f",
".git/objects/85/fbb6a6d3f639ccf35358002506797aff239994": "879ab6d309b064811a29b69ba51bac18",
".git/objects/86/745a7c2384ace787df1088537411ef4bb0c1c9": "26b809ee9cf9ecc8c94b14a351478fa0",
".git/objects/87/ad458ea7c572dd4d50f26f2cb1775930e2a4ac": "46b839bc40eb3335fd48f8798e5f9e6f",
".git/objects/88/2c5506ac92b898bf7103972edd44264fa9e422": "100d4a880880846035cdcad5bce2cecc",
".git/objects/88/af97af34981db4dcc4333b5bb2e5e078922905": "0ddb52e870e0af1bfe3160c0d29f992e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f18a8216da81c4dbbdf41851d7fd606d06418c": "197de0cc0eb108d7b1696497034e58fd",
".git/objects/89/05b3432c5390538362178183709c83c9646834": "f988524290c007379478e36932a32a76",
".git/objects/89/4156686b87e82da11a6271ffafb5e448c4b6bb": "7d45a4a01869c7dc19d6e0105c0079ec",
".git/objects/89/d72f9fd4fc499526a302f2aeef3e645c1876ae": "ba79a9b427f26d1a4b53a92f9eefd6ca",
".git/objects/8a/06334a45e34cd1ff500be2346686810f79f36c": "1e7520d76790aaa842461d66ea56aa5b",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bc6f60c21064e3af09db44b9723ef0a2ef866c": "6da48974f3cb0d7c71864b51df4ef75a",
".git/objects/8a/c28ada54593e12ecbf52dedb8141f2a85ce7b5": "44bd5634fac9b52ee9af7a58f5714700",
".git/objects/8a/cfa2750d1c674d71dfbfc6c41bb8737cadb9fa": "f7c03246ccef79cfed28fdc3821b54db",
".git/objects/8b/239816491db496878e89cc8d72047a2fc56647": "65f4f057081fd585ed26d161a2c885e8",
".git/objects/8b/7524c9f22b3f0f68b5d8b339242e2a4cb9d6dc": "64276af31241ca4d740ad0af9ac504d5",
".git/objects/8d/9207112ee419f0a3a75458a4034e164a70d675": "cdac7c6b2f283445f8cad56159463531",
".git/objects/8d/b5d6bb140c7a9c3e5b90f45897ad3793daa89b": "2b9fb654fcf57a0a003efaa72b48bd8b",
".git/objects/8d/e82332d7d73157d8d9cef2ba2058e108bee434": "1750c11c8d672fd06e69b0c6f897afd6",
".git/objects/8e/3a14a4da72617ca417bbaf02bb5ed3ddaa49bb": "91125301e65d9a13239c87016e393783",
".git/objects/8e/521a372668d630008573c049605314748f54c4": "0a5617355dd7c1ebabed47e9c33943cf",
".git/objects/90/c19008e792fffda1f66457c2a419212a1acfc9": "bae6814e047f475663450269d57dae20",
".git/objects/91/3dc1b8890d1825c229251339e7df77397695de": "d2496cedc4cbca3dea6f070fff9c4d14",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/94/a4002ca774415fe820de57cbfb5c1e49a6d907": "ccb1aafe7c4cbd78870703ee8f46bf38",
".git/objects/95/e6b3d1e56e8b5ee74fcbe8c911631fcb1504cb": "aa594d19db2cedcbfd705516ac756afb",
".git/objects/96/8ce7457f1f99b50c221738a1ab7c23f7eb6499": "488fd793a1eee30ad81672d55c17da59",
".git/objects/96/eb0c865f0ff55c11327ed011191ee428e20f54": "4d85bb63ddd08e25fca9a33770a7b31f",
".git/objects/97/1d88e0599c50246fdc5236c1dff714ef6ffa05": "6ca711579773dc44649f946934f2dcdd",
".git/objects/97/387f9d21f8f50910c8417e968cad3b3dc232b7": "032b1eeefa209199086652c43e26c769",
".git/objects/97/94918d75ee753878e084b8dbfbf46cd85f3b02": "025fd87c32aafd44a0e0f18bbab29034",
".git/objects/98/bfd3fce4b6525e1b372d6112ec92014111c7ee": "86bb055c11ced1194dd54034c9af54fc",
".git/objects/98/c0f9e0339c8fe9611db6c9881b5d975b5224cf": "7b31ab45761cdaafeeef295120857647",
".git/objects/9b/0cbce5381d22a38c92eab5ec396efc5a50dca3": "25c1611bcbc9da2767b2259f9563130d",
".git/objects/9b/399fc6f700719fd46c5af61af1d24fbefdd8a1": "a9cbe8f8cf67590769736cd86ec556d3",
".git/objects/9b/5d915105dc9ff5689ddc9c530d9bcb878e51c9": "fa3e2223f684444a7321e986351c9170",
".git/objects/9c/1f131f87363b5aa35bee45a237c23e9f01ae04": "47b00b42685af281742478e547e7d282",
".git/objects/9c/554453eb6abdf81d895ae8ff47cf30a8fea9fd": "22e81446f1726f43a0b5f05fa212bbb4",
".git/objects/9c/b286250f982ee80545f730774bb0bf1c4fbde8": "8193cf56f56cb710d700aa68257006f2",
".git/objects/9d/9bb9c5ab8257c4beaa74e4bedd0227615fa00c": "25af4119e46b1770a2eb76d023cd9ad0",
".git/objects/9e/8ffdadc73ea59d6c79e4f54920648f3b892bc3": "76cd24ec6b458defab68e4317c5431ba",
".git/objects/9f/21b1fb2bdf9c41dd929d8d5d9c127216335a4b": "2d14a1fe702b487e7fa2d886cf89edab",
".git/objects/9f/abc2f5a0e68260b015349833209797291adb70": "ccc872e29fbe79bfe605cd4517414855",
".git/objects/a2/bf972855269e4cd6c19bc566652e128b4cd5a3": "96cad9a68770ea769281c0a2d08b7643",
".git/objects/a2/cd5aa09dd62668f26826ff2ebedad133ee0df1": "3d1d8b56c1f7e0f2f6c5c540f8a5a364",
".git/objects/a3/cf7a546750efab83264da8e80bc8521ae1ad81": "9a943a4fb77a3281a821a85d47df12a1",
".git/objects/a4/c45e469af24965a6a8b4c770435b4a942921a0": "b51572232b0b53b7436a3400e103ff38",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/b3d5b60f1950810890e0a3f099981b228a7ea5": "f073dc7d351e5583f251156fa3622445",
".git/objects/a7/ea1df00679ea8b983cab1c1a8ced7b47b20289": "4516c6f0bf09dd8e6c6c629678b0812c",
".git/objects/a8/22128e44f42fefbf46ad103f9f37d0f4b4c543": "55c3e5b03cdd7b74d4e794bac4eba22c",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/a7aa2fa91e596ecdc70a1f93acddbac616329a": "a4c8df4165938acc05812c92adf9e2bc",
".git/objects/a8/daa36c20c4f05d43a5d94b5fa9245ac4e94574": "de68cb888e6e1e2f5a38a239a5ccc007",
".git/objects/a9/22b01b1891ba2b01788f80162ce29a9ec08ceb": "bb3b9d4bb3711e6d7adc255b0e05743a",
".git/objects/a9/df2682a070354a4b3bb5e0688c6eac4cb26dbb": "639c950c79e6dd4c7b1356fe412ca080",
".git/objects/aa/2dac81af82ec27a3ca922a83463302a447762a": "19e262d45a42de3c188f2b82f06c41e8",
".git/objects/aa/9af6f8cda0a53e6c42893fae7c3ffa5ded15dd": "ee66097cada71c4b542d020b6dd6d875",
".git/objects/ab/1b5009e55b3c605f1cad9fdf7a4ca2f226db52": "a08a634bb1e620cd3d11054409baa938",
".git/objects/ab/2a565b85e6382e6aedd5ffd9a33b5ed0105d52": "9391ba0d18370db85d9ef0438c827065",
".git/objects/ab/80a2cbe4fdd6e16171668afceab9179f052846": "842fc8a55d527d95da762e17f4178dc9",
".git/objects/ab/e10b4535e9716eed7a8fddf253be31711b28a5": "1803713c00ead84db47a81edeae48bea",
".git/objects/ac/082b92310d20ebd954efd6e3957ff12c0836b3": "5c1455e1413f8a48ad6c72c4641fc279",
".git/objects/ac/736f2793f55fdb1e9160a3209ce1d0718a1b69": "9f874b57097eccedd21689e56c708371",
".git/objects/ad/499ce975038e7e87668f3e606086d036c4f516": "f8d8efbb91efc9567a0befbb70939534",
".git/objects/ad/b4cd4f23f381946c9591261f6709b855bf07a0": "9aa60a69f9b416c61f925e335465c714",
".git/objects/ae/6f0c9df33f86117229b52288c483a76b4b67fc": "f1fe903a33f6d3cf8d9869ca90cd0c1f",
".git/objects/b0/6f5db635bbbc1d2b9e1f9fedf189679ae490a7": "4237ebc0d0b578579a12b9cadaaaa142",
".git/objects/b1/16655baeb845667fa2c0ebe7b74ac71a81b439": "7f25a6fe4143364bd8b6fdf9c8575c74",
".git/objects/b2/2849e0d151e119833bfff04a73b5e1e5042a72": "0111022b7a30cb1e4c8cadbeee1a9b14",
".git/objects/b2/466eb126277b60add2cc3fab4aa5766e24f733": "509e307c0d91cfbd02ec42b729e56a2b",
".git/objects/b3/958e1b22b9bac937604a4dceb63a1b821f6b31": "56b74d1cfaeee62cc6c1499d914560a2",
".git/objects/b3/c5fd7f2b37bd2a7f8c6b2a17838ffeff7b1908": "28b0aff15c3bb5fde51d5f525c989fbb",
".git/objects/b4/198466d5007d2b989fb96933a3ecf7996477f5": "916426ee61570fe3b944d2454a6bb8f5",
".git/objects/b5/eadb7f205b17d7fcabb0c1ef3b0e18029444f5": "873cb447473a5364d89e977ff3ca061d",
".git/objects/b6/096eab909538f43c4925e4b7ac18ed13e9afbb": "6c5b8a6d9857e21cd7d8abecff507390",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/50857a210c174bbf43fb81a3973a02dd8b4830": "78f97e90ef454d8630fb7b14f69ca7bc",
".git/objects/b7/641ca63149a6a064a69383556441bd2d69cc3a": "c3a17e17b513543ff52875593752dc9c",
".git/objects/b7/841b1b5153657eba93931f7038c00814b2fcfa": "cdbcd1cc9c63ba1b3b454edb966aba14",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/59afc7e8b20791e48a38f1017b2422a471c08f": "59cc8b65863dfb1eddd9beb10e3aca3d",
".git/objects/b9/d0ed4246a2a235d4d37d70b4841928ea307fd9": "db9a68afc02e2b9f8abc35ecd0a31223",
".git/objects/bb/58cdbbab8472353e33fba3e48f930799c50ad5": "049c9597b3cca471536479b861edeb92",
".git/objects/bd/08fce9c9c79eaf00fa9c1f39430cd1e8766171": "337a1277492d1ec429c83e8a52ea3e6c",
".git/objects/bd/1e582d8c917c53d27bebb6454f33127bd364dd": "025398dcd60778b2623a2504c3227429",
".git/objects/bf/50a2f6538814d83f3649cc1a1909baa8224d9e": "dfb3dc0c1b566deea0fcfdf0714a2ca0",
".git/objects/c2/1fee78c15839c8f5d5e36cff0d591daffba33c": "6107186dc3b991268b4176351b9d8149",
".git/objects/c2/83ad66d4bfec2b5920ca53fb14a6f15b458374": "9423df713f100f8278edfafd0c71355d",
".git/objects/c2/c6a97391f169c389128a7626bc1751b00168ed": "9746db0e9267e1a6497527c4e310339c",
".git/objects/c2/f2375fb8240ab30edf5f40709d6e8b35ceebe8": "9265308d066c673232390a923472a4bb",
".git/objects/c3/176fc7e1743d5348d15234062f4ef46a6c35e0": "19596345bdace42f57185178a804a78c",
".git/objects/c4/e9424488d7007cdb8c15efd3e024f199aa1c37": "942619630f9be1a7b69ca111a805c6f6",
".git/objects/c5/67f8a2a201109a80e77a8fb1ed6007cc2f67ce": "1b27e06e647a495403f6d61e6dee3dfc",
".git/objects/c5/68915955b42d4d8faeabdd2dd388343b8136f4": "2756fadaeb69fc6a9e2e7930d1ed68b4",
".git/objects/c5/c9e2847aef60cfdb215828e61321740c195687": "a4fd15ae839c51d42beb537f88ca108a",
".git/objects/c8/118f3891a5e9640eb2ffa00754f8de3bc10a2d": "04edb7457bbc9883784d1d1aaf0bbd6e",
".git/objects/c8/8f633d56c8b5bcdbe94dbb57d27f236f66ac1f": "a7cddbd22d47f3aeba2906f539e70dc8",
".git/objects/c9/6fa1f8b828989518fa9bdd92b7fbe6fd899071": "1139ff8db315bdba17fc75c0555d9f0c",
".git/objects/ca/5513a3438f45fb62177a7bc4624c79d725bfae": "804a7b9d7e89d5bba20a9fd7eb39901a",
".git/objects/cb/15c7463156ca5dc5d8d91a8c9a7ef73ab3d33f": "078ab9a29c223dce31b0164358c7b41a",
".git/objects/cb/2076de77a6b3de0d1a1d7af19ac058e3372617": "ed43602692159adf6e15b54c12582351",
".git/objects/cb/c8a2dcb7ce418ba1b061e60215d9e91627f0c5": "8f60d8de2f670ae6532466cde05f03f0",
".git/objects/cc/cfde02870624bcd49df01278eaf1469f5817cc": "60cb9f6ea030e9e24ab0a6ec23228da8",
".git/objects/ce/29f8c6ec2ad5253a3d73b8324ef6a4b3b82839": "6e5d29842e8c59d3d346aa20e2a8dc19",
".git/objects/cf/906b71925cfff347a65afce54249474969c0aa": "ca89e3601a37896caba3d4fa8f7ef3ae",
".git/objects/cf/a23f7843372610f33703c0ff71f691af21177e": "c0b488cba667f81088b87a75ce38d693",
".git/objects/cf/cb49445b82f610bd8ec93bfefb407d7698109f": "ea7f0472422ddc74d61667f1269242ff",
".git/objects/d0/634e92454a1e261e5268d2f012c7243c701648": "72007f6435c3b9dcd27be51232f80e87",
".git/objects/d0/705ed89958c1b9bd8e5218985b092c6be3ad17": "d83363aa02105295ebec3c7db19d3723",
".git/objects/d1/439a36f888e1ceefb1592cb25cd38c1adeafa8": "9d88a4f12362a2546f8bced60ed1f250",
".git/objects/d2/a653a310786fbc8641e8b7417647728bf0becd": "5eb65aa82fc1c62525201543d5005eaf",
".git/objects/d3/a576d4edadd9b3ead2813a8c7e95c9d16bc18d": "7ecdb5f2295c1ad55d0c3218ba661c4c",
".git/objects/d4/25a7b913e1b84f35ae172b988c8528ba12cc2f": "e6262234b8fa7b4e4e1d1eaf504b62a5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/73873a17fad231f4950096fd0b72307af5d54b": "890bc126cc18e4fd7d0328f97fd5c854",
".git/objects/d5/2a16b2a357f1324ceb852d034248535d6e402f": "8a673121a4104bd6ea303dc62a17e02c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d00a284eb570846bbc6df65969a9abc7fa83e6": "1f456a80b71e976e078669958994554b",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/cd7ec35839d1415eee7d090f7a6bb79166db9e": "416aefc228744e8c5e648afbbebe7f1a",
".git/objects/d8/218cf9d7a8f27cd61dc8c43c5ea0b7bd0d4d44": "e1d4ab3561dda2968c1efe61c5ec5914",
".git/objects/d9/0408f45f5841266ee0d369d99a8afc5cc0c3de": "31e2f300bbd9e772d25c8172f39cc09c",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/afcb23acddf53951288c45c5931af427bfa37b": "0f1f3c55ae26c1556b032198c40f809c",
".git/objects/db/cb0bc5807f221b91e5b0ed0a237cf47014ca92": "46f8faf506b52e89eda6a84dfa5492b0",
".git/objects/dc/3f3cacba726302ed0226cea1d089c854b92103": "728e6fe0a8f381e14b75294133be1e29",
".git/objects/dc/96e4a6a131b9d6ddf6e38aba11fbb3ec3d4037": "f40ed0649aeb5d49de9177b605007974",
".git/objects/dd/a94c76bfb5acbfc924569106252a0b41af5b71": "a19592797042ea5d16af0ae13eacf89f",
".git/objects/de/3728339d0584e519285cecd90152b95a1eb5f2": "1e104e053b15381ef06e2a43ed6f8817",
".git/objects/df/f42c5aa495d94b7078025156b015558b8e4b0b": "6e9bbac1e20485de9709972d18bcd554",
".git/objects/e0/c7e1858a5a969647ad0e3fa6526bcf55dbebdf": "f3e2ccde73ab741996ea62e1c393414f",
".git/objects/e1/55a487741516224cb0e1b573c47fd35c05b473": "31ea3c885bafd3bba4475442eae2322b",
".git/objects/e1/b41a70ad6f91c01a27c019798491430f7558fb": "2306b24408438d2a8915429b93a0682f",
".git/objects/e2/511fd7f3df941ec461b139b8cc7cdcbc9ef000": "c9c204cc217c1c07d42d5b89bbaf4a52",
".git/objects/e3/b29f3a379d0eb181b3c0bb4701a1b17decb947": "26a5dda22e139fc0fb43b990eb963bb8",
".git/objects/e5/f34b2f342ffcd820a8a0956af3ab36bb1f9e1f": "a168a4ac30c495e1f866872cbd5aa35c",
".git/objects/e8/d052e65bef3c5f8578a316a4d35daf29704fde": "ea6dccd57065e91ea844eaa4646bdd4d",
".git/objects/e9/477d9d074c9fbb1f51f9211b19cb17305e2956": "9deffa9274cfcb5fe405bc2498313452",
".git/objects/e9/897dfdb36ea099970970397b6967c3009f45fb": "993d47fbb600aa855a925229761df594",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/c124c93b9acb61f86232189efd3b6bb49ca2b9": "a35bf9ca72cdfba4bc6fbf1f32126f3e",
".git/objects/eb/4df7b3e5eed40bb920e0fe7226dc5b0d93632f": "08f698d648838755b71230f928cb9c75",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/58a09e02350175d7c8b01501411118ebb06b76": "59b878ac1c531ecd5c91417907c607a9",
".git/objects/ec/c37a1aa0facc2f62d7edf453722ed2e695c63f": "37788829f4ebdb26d551dea43e657478",
".git/objects/ed/792c401fee4892b6e25dd25c67f1db8924febf": "d29ae68b500457e343ede5825c40e336",
".git/objects/ed/c05a58ee0adb8690466e778e5ecd5015317af5": "16da446f93f39bc02f77cee19ee4e567",
".git/objects/ee/febaca6ca98851b76eca44448599487a09e4ef": "93d9b0c2da58f5248642cd75c6c7b879",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/5a123ae04aff2ec090340340b75f0dcb4e345d": "5146457b9f8ab109a32d166485d58464",
".git/objects/f0/d7000cd9ab6078fa01f8241b8ff6074dfd07ba": "a1f7e45369a4b564ff804ed095257a03",
".git/objects/f0/fe5a28334e8af26311fbd2374576946f9c00ce": "99467465ccf0a145a1a0f87b63171a50",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c1358a41da86796886416f9b14fafcb294248d": "72c8a9fe7c8d34a44df02f3d732ac983",
".git/objects/f3/3ad3542cea45689c684fa62dfb3cd2eb3e03f5": "f471d05f7f1cf99132e7c8408e597e6d",
".git/objects/f3/5b9edf2234148ee0307293ffecc4fdacfd90ed": "2b136648f2d92077b62f1cfb40c3a091",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/d2043b8453b93ca5a6ed4ab814f53082122219": "9db2028c68f15a9928ee3800611fdda8",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/edacaa312c8b7e0a97ef866de49ef20e5cf932": "5529e8b0bfbc4e97da32b3de74b50310",
".git/objects/f7/d4b4844a595d1d34a3fdc8b57e82bf40eb654c": "f12b814877695d5feae8d6cfeb331c73",
".git/objects/f8/41cb2310c1b8292acd0a6e41c135a5426f6c52": "66388119e7e54ba46572c04bb634e178",
".git/objects/fc/39003646dabd00518f76d8c0d0eeb8f9cdf6f3": "9fdebc5b1183006bf3b02f6aca2fb17f",
".git/objects/fc/e3f92da252111a2aa9393921e2f191ddbd9acc": "e5db03de0f9dd88f37c9974a09e4a153",
".git/objects/fd/06113a04163358450695fe30b43615c837943b": "ffd6ac4ab66d0431a92859194d95ff6d",
".git/objects/fd/ac72e3ea50a7bcc634b04b084add5e90808fe0": "aed7928ce0cb1562b96000d644ff62cf",
".git/objects/fe/d29b482e79074d8e504049e0c9196838441df3": "0a79882017ca2db42bea1a2f6e31ab70",
".git/ORIG_HEAD": "d66a652e71e006be2e3ba53dd920c313",
".git/refs/heads/main": "ddf0a0cf2f4f489d29c8970259d4c03f",
".git/refs/remotes/origin/main": "ddf0a0cf2f4f489d29c8970259d4c03f",
"assets/AssetManifest.bin": "4a33676fd8c2a0870d77ec579bd9404b",
"assets/AssetManifest.bin.json": "a664f03df6d1d2d17fb96a1baf5f72c5",
"assets/AssetManifest.json": "89343f7f25951087d9aa7ba68be9cf1b",
"assets/assets/animations/Hint.json": "d9b9b756829de8fce03038c7c1afc020",
"assets/assets/animations/Logo.json": "6203eeb32f97bc0cd8ce1533509813f6",
"assets/assets/animations/MathStormAnimation.json": "b91eeb2418eefe48061eba32b614ea6c",
"assets/assets/animations/MrSquareCastle1.json": "63dde541b19c32a706f509c6adbbad3d",
"assets/assets/animations/MrSquareCastle2.json": "eb2e89ca6fc0e91bf62ae57ce6f944f8",
"assets/assets/animations/MrSquareCorrect.json": "9b4d27a12035d1ab4c1acb6e5d760a8c",
"assets/assets/animations/MrSquareCrying.json": "e112134b44c14cf82a4dae7916f16906",
"assets/assets/animations/MrSquareFire1.json": "77daf72e72850ecc1b16caaa887669f4",
"assets/assets/animations/MrSquareFire2.json": "b59402b5aabbd26958d732a6a29b24e3",
"assets/assets/animations/MrSquareHi.json": "3e759cadd41e34542776f46915496aca",
"assets/assets/animations/MrSquareIncorrect.json": "f4714fd5f54e764cf8f8a420151f08b3",
"assets/assets/animations/MrSquareProfile.json": "0a102bfd3b5ab63b5cce56609b1a79de",
"assets/assets/animations/MrSquareSalom.json": "fbbe8b4a274d8f7e8082e5673e1ce476",
"assets/assets/animations/MrSquareStartButton.json": "7d1aa9baa4506743bb75727d4cb95e42",
"assets/assets/animations/MrSquareStreak.json": "3cef1c04eaedcfdc794de26b683acc48",
"assets/assets/animations/MrSquareStrong.json": "d45ed250d4a1b9f338df7efd0cb8047e",
"assets/assets/animations/MrSquareWaiting.json": "1f000ea1101d2b5e68cfb85450b09ba0",
"assets/assets/animations/piramids1.json": "915f15468436f9d5d3e3599ef051b6f8",
"assets/assets/animations/piramids2.json": "df1cbcea839f50def83aed7f99d5c5eb",
"assets/assets/animations/SquareCastle.json": "818a580f0b85aa9d445e20d6f1f0354a",
"assets/assets/animations/SquareCastle1.json": "90eed0a85d1cd4171dfee6fef1d99bd3",
"assets/assets/fonts/BerlinSans.ttf": "b6539b6d3432c623d8d4f9cc2a29589e",
"assets/assets/icons/ArifmeticStorm.png": "75c4ab51eb3014192604ddd48319829b",
"assets/assets/icons/Diamond.png": "c01ea38a5885b82ad3d32c43fac6ab89",
"assets/assets/icons/Exit.png": "d09afb04955abe5edbb2141b8275275d",
"assets/assets/icons/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/assets/icons/Heart.png": "f2a9dfba479f844b0f46ba81429c53ab",
"assets/assets/icons/HeartInfinity.png": "2ca0c491cc7b723ab28816a43a93be3a",
"assets/assets/icons/Home.png": "d04cabd9a90120a8218c70116374da6c",
"assets/assets/icons/Lightining.png": "d379b2a0667710a9da5c163e383ec6a9",
"assets/assets/icons/Logo.png": "d7f9e2f0b5fa19fb1b6f42db3b239f54",
"assets/assets/icons/LogoScreen.png": "0716bc25412704f6094f44cec0622a12",
"assets/assets/icons/PremiumIcon.png": "af105ebad12bc71f4fa70c9400aab229",
"assets/assets/icons/Profile.png": "405a0d6492022b490d2d79c2c991a91e",
"assets/assets/icons/Ring.png": "44b4ec86967ec3164ee085d41b5363c2",
"assets/assets/icons/Store.png": "3988faa48893b347d9747db3dfb4a7dc",
"assets/assets/icons/StormInfinity.png": "f63d64aee0026813372f148b3289bb5c",
"assets/assets/icons/StormTime.png": "a7fd6573b0cf26d700719d0c274f8117",
"assets/assets/images/1.png": "7865169b1cc7dc98b50ac308ee19bc0b",
"assets/assets/images/1progress.png": "e7f2c2147cb01c209bad6a3527c522e1",
"assets/assets/images/2.png": "efa8eae27ece2f9cf51e66d829a9276b",
"assets/assets/images/2progress.png": "82a91c590beb659ad274a43952899af5",
"assets/assets/images/3.png": "e9af79e35cdc5169863b436f6400225a",
"assets/assets/images/3progress.png": "f5d455759d65cf1d930fdbcc3fccd9c0",
"assets/assets/images/4.png": "513cb301b48eb5d470fec0aede6463c6",
"assets/assets/images/4progress.png": "a9778470512ce101a5e0f09b9af6cc86",
"assets/assets/images/5.png": "062dc7ada75dd99b3be97a9606ed8e81",
"assets/assets/images/5progress.png": "86646f6313484f02dd42f0b5de474cec",
"assets/assets/images/Hint1.png": "d00e6a2a681895140527c9d9b1e29d2f",
"assets/assets/images/Hint2.png": "783e1cf0bfb9fdd3a7f7728ed82e3d5b",
"assets/assets/images/KvadratQasri.png": "90b3c6308c0c24dfa0fa7aeaf4ec2909",
"assets/assets/images/MathStorm.png": "072970fef1005cac81468baa499f1096",
"assets/assets/images/MrCircleBanner.png": "ff2637923b99ff9ce3d767c294dc58d1",
"assets/assets/images/MrSquareBanner.png": "b5e936851f4b956c107ff751efda6a99",
"assets/assets/images/MrSquareBoxBanner.png": "e91581e45155af1c7b42f78b5312bea0",
"assets/assets/images/MrTriangleBanner.png": "5aadda3db617b138110f1033d07e8547",
"assets/assets/images/MrTriangleBoxBanner.png": "cb64ecb88144c9601006ec08200c1ff5",
"assets/assets/images/PremiumAlochiInfinity.png": "116307abaf0a53c568c36971a6698de2",
"assets/assets/images/UchburchakPiramidasi.png": "0180255169d24b9335b5c29b5cf3e1b0",
"assets/assets/images/Welcome1.png": "c8086b8ba10d2e93a06b0a31ab279e51",
"assets/assets/images/Welcome2.png": "f1bf923cc2a335297fce48871255b63d",
"assets/assets/images/Welcome3.png": "e8c90a8f683f7c0598104cca3812558e",
"assets/assets/items/MrCircleBox.png": "62b1da5c3208a84c35d20201c94ea80d",
"assets/assets/items/MrSquareBoost.png": "b8549166fac3d1f58759c962c63be3f4",
"assets/assets/items/MrSquareBox.png": "0baf6cf3bb0f3533395712f240f90fa0",
"assets/assets/items/MrSquareTime.png": "42ab5714debe5098b833d8c1780034e0",
"assets/assets/items/MrTriangleBoost.png": "838bafb41746449164050585e8cf4fe6",
"assets/assets/items/MrTriangleBox.png": "7043a042b17d25fd28de5084dcef9c39",
"assets/assets/items/MrTriangleTime.png": "0c85614388ca5b46face95b5e0c0f985",
"assets/assets/items/SandiqHeart.png": "3a78945a89419d7ecca42456eb0b8030",
"assets/assets/items/SavatHeart.png": "9dda30ff390fc03ac92705ef50f59f60",
"assets/assets/medals/LockMedal.png": "0f3951bfa63945e7ace4b614df4eb8fa",
"assets/assets/medals/MrCircleTimer.png": "c2cc7bf2440f11cab6aa815ae0412a7f",
"assets/assets/medals/MrSquareMedal.png": "e198c6dbec67a8e9ff8183b17d89eebc",
"assets/assets/medals/MrTriangleLightining.png": "cdde583ecc3a6815cbc23e1646971a44",
"assets/assets/question2_images/10coin.png": "61a0a4b3758ff6e1ed8ecf53441a29a0",
"assets/assets/question2_images/1coin.png": "76cc8a076e7a1879d7de7cb6c888c9c5",
"assets/assets/question2_images/1figure(correct).png": "859569d97c0f6811c4993bfd86b0e51d",
"assets/assets/question2_images/1figure(selected).png": "c107e0274868174bde9467f0a49f7431",
"assets/assets/question2_images/1figure.png": "de820c011076ceed22fb56a5f5b8cf92",
"assets/assets/question2_images/1strawberry.png": "a95120afd35efc9a21689e137f86c8bc",
"assets/assets/question2_images/20coin.png": "f2e12450f26ecfbeea69fd8ae2b3efe7",
"assets/assets/question2_images/2coin.png": "e7e219877a3888715d1ee75013b52aff",
"assets/assets/question2_images/2figure(selected).png": "f2160ce448311d6ad502d274750a33df",
"assets/assets/question2_images/2figure(wrong).png": "03e02546249d04f55e29a2f137db4d20",
"assets/assets/question2_images/2figure.png": "f87944b267bb3a1cc87001bb9335e44c",
"assets/assets/question2_images/2strawberry.png": "7761cf9eb76fa9c0b47c309a111c9cb6",
"assets/assets/question2_images/3figure(correct).png": "5ca7b7e8d390668e4cc3a90f9b1e77c3",
"assets/assets/question2_images/3figure(selected).png": "f555ac17d0c211ca7b44c491ea95c8b6",
"assets/assets/question2_images/3figure.png": "aecca82cea6567fb3c28bbd86cff37d9",
"assets/assets/question2_images/4figure(selected).png": "dc31f2f544a42d706a2e0f73b41cd9dd",
"assets/assets/question2_images/4figure(wrong).png": "21eb404a24deacc8cdcfd22ba9f279ac",
"assets/assets/question2_images/4figure.png": "12d8e8758e2445bae230fd9990130700",
"assets/assets/question2_images/5coin.png": "61d31ab24d4220a38fd62082ff778524",
"assets/assets/question2_images/basketball.png": "dfec322ef4fb445bea3b310481208aa7",
"assets/assets/question2_images/Burger.png": "54eeda5548ca8548236da16402f72e10",
"assets/assets/question2_images/coin1.png": "879d1db98bec99d89ea53b5477fab156",
"assets/assets/question2_images/coin10.png": "e44fcf359d825d61852afe9d83182ef1",
"assets/assets/question2_images/coin2.png": "54e0f7f70781263d6898a8d949cb7298",
"assets/assets/question2_images/coin5.png": "6d2b4aac527cc58299e1a150f6661003",
"assets/assets/question2_images/football.png": "431fb7920f7b600686f5561f9857fd2c",
"assets/assets/question2_images/IceCream.png": "711b7120287884856eaadd7ee9ce483e",
"assets/assets/question2_images/Q13.png": "27c76d1e88ee6a4e545f71b3278b32e6",
"assets/assets/question2_images/Q13_1(selected).png": "464a928d5cadaa840fc5cd4fcc9df1b4",
"assets/assets/question2_images/Q13_1(wrong).png": "d8391fc824f3b9d3298019bf87a596c4",
"assets/assets/question2_images/Q13_1.png": "df64f58f74cffdef55654d612c476ee7",
"assets/assets/question2_images/Q13_2(selected).png": "667558336c7ee7413a59f61e2f236f56",
"assets/assets/question2_images/Q13_2(wrong).png": "3923a52ac8276dfaffc86c5bc0e9a97d",
"assets/assets/question2_images/Q13_2.png": "f7114e74d069a86536c361c402feb3c4",
"assets/assets/question2_images/Q13_3(selected).png": "36b9d19a5f121f225383ff77c4e765a9",
"assets/assets/question2_images/Q13_3(wrong).png": "8da6d714035966faaa2c2aae36cdcf72",
"assets/assets/question2_images/Q13_3.png": "f3fd9a64a1fb349615451ae92f8cd28a",
"assets/assets/question2_images/Q13_4(correct).png": "f689e1a1e3daacffae07f74e89d7a1a0",
"assets/assets/question2_images/Q13_4(selected).png": "231ba223c8a17e946073acc2fbea01fc",
"assets/assets/question2_images/Q13_4.png": "7b15154b4c62d36dc9fc6e1f4aa5e280",
"assets/assets/question2_images/Q16.png": "58dcd7175fb8232909534118ede7806a",
"assets/assets/question3_images/apple24.png": "169f3b10f4620aa0b2ee4ded7130012f",
"assets/assets/question3_images/burger24.png": "f0d2164b879bb20f17e4d716e7fffa2a",
"assets/assets/question3_images/grape24.png": "631f686841a03e06b72a15b7f16cfefb",
"assets/assets/question3_images/Q21.png": "665b63d1d3f381a159ae30202c21b899",
"assets/assets/question3_images/Q22.png": "bc9d304c267651fb5a3d3f298d1de22c",
"assets/assets/question3_images/Q24.png": "e345a6a671df49e771e64dd3b2fded3a",
"assets/assets/question3_images/Q25.png": "879663d268164cf19db9f85ae7982121",
"assets/assets/question3_images/Q26.png": "01ce1217d939faed0effd30b2572738a",
"assets/assets/question3_images/Q27.png": "480a875c981b7d979ca0314e04de9a0d",
"assets/assets/question3_images/Q28.png": "7a2e35b54bd87c4b907d052d9dc65859",
"assets/assets/question3_images/strawberry24.png": "900b08aebd29482dc4034c8ee1d7fc03",
"assets/assets/question_images/Burger.png": "8c4756b7f83953451d293f52bb8213bc",
"assets/assets/question_images/Cheese.png": "7c3a781cd45c9cbe070ee6df2927e815",
"assets/assets/question_images/Grape.png": "c127d865fc194161c60cced2c0e92646",
"assets/assets/question_images/IceCream1.png": "a762d2674e5776ffedc9934f691d00ed",
"assets/assets/question_images/IceCream2.png": "1389208d16791cf60a11623ba8e9ed50",
"assets/assets/question_images/knight.png": "ffc602c4e1879dbab7cf67662d479fa1",
"assets/assets/question_images/Pizza.png": "adb35d5be1632a73ab3cd2a21fc33a7e",
"assets/assets/question_images/Q1.png": "8a6ccd4ed81baf548074077f3e2293b5",
"assets/assets/question_images/Q10.png": "3bbc0c4d247f5442c1c1e83b46981a45",
"assets/assets/question_images/Q2(1).png": "1d5047224ca7bf9a6b60f3d28c66761d",
"assets/assets/question_images/Q2(2).png": "6d72babcb087416787e7283f87ebfeeb",
"assets/assets/question_images/Q6.png": "ddca251a370e7e1d7f985d98b5abcdd1",
"assets/assets/question_images/Q7(circleDefault).png": "002066c349fcca831862f337a1a48c2b",
"assets/assets/question_images/Q7(circleIncorrect).png": "4be2d1e4f623602c9d73466f73b35a05",
"assets/assets/question_images/Q7(circleSelected).png": "fd4c4dc0be56d338181dfa8680fb47f1",
"assets/assets/question_images/Q7(fiveDefault).png": "36c5286d37fab45826b4bf5c1ede25d7",
"assets/assets/question_images/Q7(fiveIncorrect).png": "a23e1c7a85c5e7bb72d2968909e98d3b",
"assets/assets/question_images/Q7(fiveSelected).png": "a9f7ec0e1f615a9420a7452a2cb1d838",
"assets/assets/question_images/Q7(squareDefault).png": "f62f43b8704575ad6db90d99347c6fa4",
"assets/assets/question_images/Q7(squareIncorrect).png": "71c4fa84956e27b137471568ff780631",
"assets/assets/question_images/Q7(squareSelected).png": "20dd598623d51e7fb932e8534b116d5a",
"assets/assets/question_images/Q7(triangleCorrect).png": "5cb8c3fb9e8769ffa5b1aa9bf0b8e0d7",
"assets/assets/question_images/Q7(triangleDefault).png": "75e090415e6278a9236e84ac087f196a",
"assets/assets/question_images/Q7(triangleSelected).png": "02b4ab2568c95d5e746a7809845d6ba5",
"assets/assets/question_images/Strawberry.png": "406ae48a25d49bd80d1d0471673065f6",
"assets/FontManifest.json": "435ca1e5119a2b6dd8c662f4962b3f9d",
"assets/fonts/MaterialIcons-Regular.otf": "880eaa9ac6e879c4d6726ed29d1a0a92",
"assets/NOTICES": "12b31dcef27e78bea96976f0a3322e3c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "4c4f5cfa9412c8a568ef0f23cc334723",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "aefda09f2fb367d6fe62b8481f5a7b84",
"/": "aefda09f2fb367d6fe62b8481f5a7b84",
"main.dart.js": "44566a1efb35ea51fac66785d0c0a24c",
"manifest.json": "f976201962078d162ef8afe34430e222",
"splash/img/dark-1x.png": "f522dea6563f145896f8c6e0b06ae26c",
"splash/img/dark-2x.png": "9d5cd9f9ee25c8645698bcf36c423020",
"splash/img/dark-3x.png": "357305f7b6d10fd1ebc05a90f38f88e9",
"splash/img/dark-4x.png": "a1e757748929105db23b3f87ce478cf2",
"splash/img/light-1x.png": "f522dea6563f145896f8c6e0b06ae26c",
"splash/img/light-2x.png": "9d5cd9f9ee25c8645698bcf36c423020",
"splash/img/light-3x.png": "357305f7b6d10fd1ebc05a90f38f88e9",
"splash/img/light-4x.png": "a1e757748929105db23b3f87ce478cf2",
"version.json": "e07b10ec1e0b7322fd52ef2d0c517dc6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
