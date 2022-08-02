const LONOClAUSE_SET = new Set([
	'0xC8C2b727d864CC75199f5118F0943d2087fB543b',
	'0x42f9134E9d3Bf7eEE1f8A5Ac2a4328B059E7468c',
	'0xdCB7e8f1B586c94dDE9b430557E4Df6727779ACA',
	'0xBbb33d2e7bD7ddC722E53Da9cA8ee97Df41CfaBF',
	'0xE51231DAA306aCF16EAc34A864564cA36B262A1f',
	'0xE2e4F2A725E42D0F0EF6291F46c430F963482001',
	'0xf88d3412764873872aB1FdED5F168a6c1A3bF7bB',
	'0x215B67D707cEd250c3803a19348E9C565E42d7A3',
	'0x4a8B9E2C2940fdd39aceb384654dc59aCB58C337',
	'0xDFaB977372A039e78839687b8c359465f0f17532',
	'0xa33c7f924399b59A8Ee627388A108beAb5E12EaF',
	'0x7476D1e9659a49B92C3f65F0A6De00a18fc3D6fA',
	'0x1d5E65a087eBc3d03a294412E46CE5D6882969f4',
	'0x7a0dff2a955B72159650300a9aCeF97146dd12e6',
	'0x2db6F5e838eD2BaD993E9FF2D3d7A5c1Cc35704C',
	'0x1Ddb367720Ed4B2D79D6EaAB82c14B70aE1253Bc',
	'0xC05320F54075452fF1a5ce420D64c9D025A452BB',
	'0xc53351FC5762E6EAFB8DdAC98851D59C4Ea7B7d4',
	'0x1B89a08D82079337740e1cef68c571069725306e',
	'0x9a027B64d6Fc4A77E34AE40F5e6F9310C457737F',
	'0xeC0B8A38D1f217984a5a22f4d1938D474902f984',
	'0xBb1e599e15f2bf248732ef060cadFFeB6363cC4C',
	'0x0b0e3Ebe78b965Bd0AE25a7C5C1cc8cFF23a07E7',
	'0x764f4909251F81976A0A2DCeBcE95333e4C27517',
	'0x0F45156F109e474295913D78036FA213b1745D5A',
	'0x3a20D6cde0f85303F0fD623D3Dc5755D41f7Ab41',
	'0xF7B10D603907658F690Da534E9b7dbC4dAB3E2D6',
	'0x8322C00CaB37c8a00b127A3aAAC08d49c7Fa0025',
	'0x5Cec084Ab54CFC07785c766a74aB8e921BC6eAEe',
	'0x917b4B0E86fC7766695095dD1A5292B3BE8b2D14',
	'0xC54570b8EB8138aCE95132b944b7b6Bb391976Dc',
	'0xd87EcC6C74F486B044824a222326A96F696fCfA2',
	'0xF60595B5Bb6fa8135C0Feef89543521FF38Ba83E',
	'0xe88857D67CF8E0031cA1674fFE17f72578e566eE',
	'0xf055BBC8cA7253eAeebc3Ae6c3ee0eF7BEf04368',
	'0x098d818816f0427d513d5AE66b4d55fDF55a89c9',
	'0x473C6494180ad9Cd726f8a7a51cF8e88Bbf72bc6',
	'0x72c2c890625F7e2eC82A49a5B0D6438C36FC1bB5',
	'0x7fd8A3e656C90A0e3cd703e4bA46aa4C9d9e84fB',
	'0x8be60fe9F7C8d940D8DA9d5dDD0D8E0c15A4288B',
	'0xd8e80c06f9F3A41c85cAd28117e01ebD50fd535e',
	'0xCb926F497763eA5CF993912A442431E6a91d5A64',
	'0x579C5CE071691aec2EBfe45737D487860eB6F3f5',
	'0xafa306dBB13Beb550511FFbd304D97461E71603c',
	'0x2E26fbfd06f0C691Ce8F2e399fC920cD804CdE3d',
	'0x521d155cee171DAD885eAE47a97A8c489c3C70C9',
	'0xD83D6f32D0e7D498D513f4b9DDb029Bc0b151612',
	'0x7ccf173012bfE53F16F4D6A2a4aea32abAfcD04C',
	'0x0E9d6Ae20c982b43c219E9bEFd94ce2302264068',
	'0x81Ba93B26bCe8cA5d649B6607DF15E6D45462D8F',
	'0xC6a8f0f8379f06Ca34F2f9a76864278105A6b2f3',
	'0x6fbD0505147Fb7Bf06d21b9379d6afCcfA282Ad4',
	'0x9F07A0233Abc178428Aa9A18Baef3188F093A7d0',
	'0xbfad818EdB25DC4eebac8Cc44a7533bE4652AD6C',
	'0x7173CE51D1B494320229e06bbDbE0da258b9b547',
	'0xAb7Ab9b6495072c1136F96E301bD8f8DE900f119',
	'0xD7925984736824B4Aecf8301c9aEE211Cd976494',
	'0x71D87aabB42de94a7214976a05134935F73e64aa',
	'0x3CE623b0573d2b0677cb3b13343b3978c6C6ce86',
	'0x706D961Ab69d54a0FCbaa13E77842279A5724139',
	'0x559160997EB3eFF9190ED62d7b4F3caFFf9408F4',
	'0x00Ae7Fe77AB7C4e77F894C76c167DC310766c57a',
	'0x4e65175f05B4140a0747c29cce997CD4BB7190d4',
	'0x138Dd537D56F2F2761a6fC0A2A0AcE67D55480FE',
	'0x3877b93D5411bf5F5CB92D7e7650935FD0212D8a',
	'0x3f491c542a449243C7a33457847245445C747F48',
	'0x86AABcD459587bC1A347aE1E2d15223856354EC9',
	'0x1B5a75086461D7896250f236B9433e7379Dc7FDB',
	'0xd062aB63Bb4f7af7e59B85DeFc3C90bfA9B81E6E',
	'0x00803232cC216eef9b396D6CfFFD4b51E09F29da',
	'0x86b86392E693077EC58E27331db02563752440A0',
	'0x2548D5e8AeAdd45367F010B3d013272221908D71',
	'0x65F570384d6cC157A15eac9Bfd9DA88364D59b7F',
	'0x63B461A9577cdAea028f25D059868d9Abe6EddBF',
	'0x5950dc5C3d7820937478F9312539B2e953f62e33',
	'0x1FC310f45B5B22a8e95a8F0e1FcfF9D3c825eDC6',
	'0xb5F2949aADDd62C07AB10FFd39964fAF60887560',
	'0xfba381fB57D1f1efDc12661e5bE59425E545e649',
	'0x71FBFe41A9ddEDd13Ef25a337faE01438064a08d',
	'0x90C6577Fb57edF1921ae3F7F45dF7A31e46b9155',
	'0x0ef25ad333a465910A0c469627523903A28e320a',
	'0x9c4d592042F959254485d443bBc337d29572264F',
	'0x97ca60A08b2d2c38F14AB18fCA6d77457DdA0eAe',
	'0xB5fD34D19d34977fA0a0426C8058Fc32fC091e28',
	'0x34Dab9a3e3b68C82CA933c0A4c4e0c30dA794722',
	'0x77a13bE3e954c4370aeFE93BB5634283DB5e3D87',
	'0xA91F4ad4E2740939B858a2Ef728254F1CFB7CD20',
	'0x0b98c377b62702748898c5c4C9Ccc2E2F35f084D',
	'0x6a9b84ef6d76908C6ea6F47465F73c69557283F6',
	'0x369c54B1E66c5B0c0f7d983F9DaE9e427b88eDD6',
	'0x8482a0F31050416AD4344C98bcdb938e9cD3DEa2',
	'0x953E35d4361D0E748cf90e47624E4659D2E22a38',
	'0x57ab005AC11e2A5565333ccC995Ac364AdB47216',
	'0xc874901C1aa292781110118Ee4D3731c74E05b16',
	'0xbD84c4e420a22D7639ec14CeEDC39aaBdcb2094e',
	'0xDfb9bc53b37b3bd28836917eF6AbFab01F974421',
	'0x976FdC5DfA145E3cbc690E9fef4a408642732952',
	'0x51e432dF264c3315Bb0D1aA70D265cDF0792c679',
	'0xcE005CB1994c59bE3acCc909c6Dd2237119D399d',
	'0x265B1827f8b33B1ff1ABAdAAF6BF15E7F6967204',
	'0xe519f4cd2803BA53A40E6377E82406e548418660',
	'0x0F3d8cf628F2bbe6e7CAFe6890FC6CD5Ba7e8DF1',
	'0xfC9f6BB19C91D6490D8D73F2353d395Fa0892736',
	'0x2cc96F1a3e55882DE61B965b668AE3A5326f4CE0',
	'0x1A59e9C02ec869065e301CfCC0cE7835e94eC07f',
	'0x1eFe03B911d97Cf5D86Da4a70500eA9F6E8bcFCb',
	'0xDf5fa32B726a5118281e74aD3B7C707423e28F8B',
	'0xB74B4347DffdB17E70e0dd3EB192f498844F56F7',
	'0x66B259B9E072E1ae256e738Dac2EBc25044178DE',
	'0xEa04a9Fe2CEf51B504e7da8cf1b859454AE27030',
	'0x6B3b856e974c61D141521725a73a58b916FBA49a',
	'0x767A60F295AEDd958932088F9Cd6a4951D8739b6',
	'0x42D29E6fFfEf7D2df66bA652242Eeff2B01822B1',
	'0xCB2A9c2CE7e3d060700d72Cfe5E6d2BB9959f2f4',
	'0xC9C1bD8E37e7cFf20aa8Df2a1D1bEFf02721E771',
	'0xe0654ABC5FB4917AC59237F8B9f75316982cF0bf',
	'0x5170c6Bb6033F757CE22Bad0C6130059e4bFB817',
	'0xB69e74324bc030F1B5409236EFA461496D439116',
	'0x71226c538679eD4A72E803b3E2C93aD7403DA094',
	'0x55DdB502ae181921168D465b89D905242267F229',
	'0x2A7051d7CBbEF7B6889f8e14774020b1653b94C1',
	'0xf56036f6a5D9b9991c209DcbC9C40b2C1cD46540',
	'0xcAc59F91E4536Bc0E79aB816a5cD54e89f10433C',
	'0x0f26eE29803059899C0e112E4bD43291574dbc49',
	'0x3aF1f5E855b50D4B2D02FFa657D503349C2a0903',
	'0x951f5E167f6171aAAA3F88cF62e4B25000336D76',
	'0xAB12253171A0d73df64B115cD43Fe0A32Feb9dAA',
	'0xBD1f7d88C76A86C60d41bDDD4819fAe404e7151E',
	'0x865FC5C542280C9Dba0D559f67112179e20574D2',
	'0x24aa1Ad305F8e6dE8E0fA2F4c249AC278FBa9D7F',
	'0x24fC7A0751BBF53C239cC1D21d2951A5b21f733d',
	'0xFe1a00487DD9EB84a7363a1c827a6f045fB121E4',
	'0x00929C5c2c4f00B540e429247669Eb6fcd8b1DBF',
	'0xBcA143600d9718f30022B2463D597996Bc410E5e',
	'0x3903fa6c5D09B18AccbdC43dfc604D7e68bbE45F',
	'0xE551388B683BB1E34e27E5a7b00eaBE79b080Bf7',
	'0xF5a701D13Be654a534D14DE8Cd6a328293712405',
	'0xbA743394ca6c38886c066E45bb9980A09AeC7A65',
	'0x969031086507C84207f41ffd37566F3902713188',
	'0xDb9918673D782a8116f583937f2f4A32352F11A2',
	'0x85447824d5dc10B9fb75928f8104890Eb54E7Ce1',
	'0x6Fd5a849cc4BB26fdE7737395E3b4A91F3B78A5a',
	'0x1A92E2b2Db688D5Ce3d24b58dbcC7716912873D0',
	'0xB811934C23db295e00683eB602679199e232210f',
	'0xF420B8148D70d86FfD945c61ee0c0d0678bdF08E',
	'0x130FFD7485A0459fB34B9adbeCf1a6dDa4A497d5',
	'0xA03218F18B26E124d1D0BeB0B0f8Dd12b25bE47e',
	'0xE4710cE7CC0D87873244673445A0CB49C9DCad81',
	'0x1c175ce4f8f3E8a16dF7165F15057a82a88C025c',
	'0xF26E5B93453a69a0297Dc66e7bbD750d2B28160B',
	'0xEceE5497b9dbB82E1804E3224F67D00d8d891c69',
	'0xE70113f891ab6167769E76ec20926EEbE3BFa91b',
	'0x3bDb6119802EF01EAb4E2A74BEDB5e0227BeD49A',
	'0x9b815DD3e2D30CFEf33266fA4c6A7B37Bd99edFE',
	'0xBA1b35Eb69052aEF4CE95abC0c38e0Ff67410aEf',
	'0x2c68e09d3a87626d61Cd9ed647d08d1DEA280338',
	'0xBC1DdF1f4E7a2B5B8C9A46C627539d896560b045',
	'0xA6B49397ce21bb62200e914F41BF371E5940Bb41',
	'0x401BF7e9e4D1F95305E4bE928957eC6Dcc1d72c7',
	'0x0f8361eF329B43fA48aC66A7cD8F619C517274f1',
	'0xa61301A5199671aB6C5d2E21c718fdDBDAB778E3',
	'0x09a60649F4d29Abf919dc130E7D517352f988087',
	'0xA785581e242Bce7Fa721790de29F45A8C7F7c968',
	'0xc6c654Cbe8ed820C8CF270C5De479647b15C917E',
	'0x0067eEC7AD35e72613d760E917890D1B7E876e4E',
	'0xF1A0c1723b4791638382F479C16222De4201f9c2',
	'0x171D6eF55701f1918E44b2dCa3F7309f344B5Bb1',
	'0x2067BEd542762D26E2755Ce7d8776728F3429f48',
	'0x5Ea073C5F546E0012F8840224266718404E48eE5',
	'0xaadb7CC8587cA5aE3e5c98B9e78F6024953C0Bd0',
	'0xea96EDdF997B45E22dd7cdB0EE45744f53e33693',
	'0xdceb0Bb3311342e3ce9e49f57aFfCE9dEac40bA1',
	'0x49a5492FDFe5AcC966dD5f41310dfDfe8dAA349C',
	'0x12579783fBe8C2645D7a634B238DA748405975A2',
	'0xae9402b1FB5736b05Dd8bC98cE4Ff608BDe3c564',
	'0x310a3CEA42F93d55584c4361565aA0994912fF0D',
	'0x21cf6dA2126E87192a5a3DaecDed90c1c296b227',
	'0xbE4896c3acB7FC415E2e69108333ED431Eb38993',
	'0x03C8060E6e38097EA6ABB22242F7E2280485c438',
	'0xBFe2867dF4e99E4028afA19075F295f325563cb3',
	'0xCB1919E276e0647d64f8eD38e1A0C0DC0cF4F679',
	'0x2814c361BF1289cEf2958dB2fd9dE154f37a8963',
	'0x915C4580dFFD112db25a6cf06c76cDd9009637b7',
	'0x96d2dF0Bd28DF0ffafbCe7065E03638b4CF7648B',
	'0xD82a92991dF76F59fd0C3c1De786f03d8a01e7Fc',
	'0xECD02810Db92Ff027ea1b0850d46BdA963676D74',
	'0x2c640AC98E293Daa246F98D2828E328A06FA6936',
	'0xc8E2806A97413b5496A1ba6050b517CC98D0EfCA',
	'0x453e692bEa81E32CAa6AE385CeCF8c9cb85d443e',
	'0xc5cf8D4bef8C4897BB596c8e2a671767AD691964',
	'0x90AA5c7a67081409d0b826faCD34600463778a48',
	'0xff5144b6D2aAa53eAdE50C308c23D5C2151582D2',
	'0x7f5Fe0Cf45aD50b4E80Fe66a87f692B7c006bc3e',
	'0x510A4cBd16B65ddc32E3392B246Eb19005332a80',
	'0xCabb32bc7832fC5bD51dA6E4DeF3933Ec0b0a1A1',
	'0xc53012a0f8e4D9df4478d9a5386291617A191A43',
	'0xf3fEfb661a19Dc87E7E6a6B012efafF12fbE1E41',
	'0x2eD88964f096C4311e6F47164821aDe7d3B1C7A4',
	'0xD1FB4d140aa11097838C296369c989aa2317BC04',
	'0x8bF0083ECEA9bBE0b6cA47BDB3Cd1c39F10bDf02',
	'0xb436141073EFE6C21aC6BE9A5Bb0D1D74F0ce87C',
	'0x97579172749e2Bc672e204891a43cBC0F87c8374',
	'0x81312Ad57EF129a6Cc8C3Ffc16816f7B512e0636',
	'0x628D896988f2C56921F09dF2AED3549CaC359774',
	'0x509aaF71f59b61F6e2184F8c2dB7dA0BaCF6d53a',
	'0x95121B5cf1C451331734593B2d3DeD7254667605',
	'0x32ffC2374fA900FDe59D7B7388Bb4a9A9Dbe6123',
	'0x8fA5ebb986fA6Db89291a383142BB756aB88428E',
	'0xCfCE3Eeb6bB6526C2FAddf28036741B0eD09f829',
	'0xd48f1A44e56526e96A983FF750559aa365810D5A',
	'0x63e62588330657c99BA79139e7C21aF0c0DB1E7e',
	'0x2407Ae4297D548CFFd44b34048Bd835f486F5135',
	'0xf4f5Ff88733aCe4C7155577436956810BE216673',
	'0x02062B8727CDde62Cd784382C60D738FCDBB736d',
	'0x410e08B3e64aAc18AE18F2c5066D26e848AC8B9C',
	'0x7f9C8843926De4b2eA6cBf9381F9f2FA81C58ed6',
	'0x1b90B46F9Bd6BDcF0adDc4D0601dFAD832FDB1bD',
	'0x60D25D3428BFF3A3435191BE88F2EE923dBe1751',
	'0x63dd696cd80d9473299F79373bFFEB6a6F40f55D',
	'0xe9a93302f4A5195F8d5c0fd7de853F39c07e5279',
	'0x268Cb4c8B97DA9d146702D84501A64F597A3aa14',
	'0xA00c99F5f955552742F1089deD88ABDC74E67Bac',
	'0x74F8744020f5900a2C3A3289C6c2182F56A6901f',
	'0x64Af258F8522Bb9dD2c2B648B9CBBCDbe986B0BF',
]);

export default LONOClAUSE_SET;
