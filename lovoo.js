
// // // // // // // // // // // // // // // // // // // // //
// this code/tool was developed by thirtysix				//
// discord contact: ThirtySix#6977							//
// all rights reserved to the owner of the code/tool		//
// // // // // // // // // // // // // // // // // // // // //

//const file = "https://notificationsounds.com/soundfiles/ab817c9349cf9c4f6877e1894a1faa00/file-sounds-767-arpeggio.mp3"
const file = "https://notificationsounds.com/soundfiles/58ae749f25eded36f486bc85feb3f0ab/file-sounds-1094-intuition.mp3"
const audio = new Audio(file);

function play() {
	setTimeout(function(){ 
		audio.pause();
		audio.currentTime = 0;
		}, 1000);
	audio.play();
}


const targetNode = document.getElementsByClassName("navbar")[0];

const config = { attributes: true, childList: true, subtree: true };


const callback = function(mutationsList, observer) {
	for(let mutation of mutationsList) {
		if (mutation.type === 'childList') {
			console.log('A child node has been added or removed.');
			play();
		}
		else if (mutation.type === 'attributes') {
			console.log('The ' + mutation.attributeName + ' attribute was modified.');
			play();
		}
	}
};


const observer = new MutationObserver(callback);


observer.observe(targetNode, config);

console.log('custom notification startet by 36');
console.log(audio);
console.log(targetNode);


// var emojis = [	
	// "1f600","1f603","1f604","1f601","1f606","1f605","1f923","1f602","1f642","1f643","1f609","1f60a","1f607","1f970","1f60d","1f929","1f618","1f617","263a","1f61a","1f619","1f60b","1f61b","1f61c","1f92a","1f61d","1f911","1f917","1f92d",
	// "1f92b","1f914","1f910","1f928","1f610","1f611","1f636","1f60f","1f612","1f644","1f62c","1f925","1f60c","1f614","1f62a","1f924","1f634","1f637","1f912","1f915","1f922","1f92e","1f927","1f975","1f976","1f974","1f635","1f92f","1f920",
	// "1f973","1f60e","1f913","1f9d0","1f615","1f61f","1f641","2639","1f62e","1f62f","1f632","1f633","1f97a","1f626","1f627","1f628","1f630","1f625","1f622","1f62d","1f631","1f616","1f623","1f61e","1f613","1f629","1f62b","1f624","1f621",
	// "1f620","1f92c","1f608","1f47f","1f480","2620","1f4a9","1f921","1f479","1f47a","1f47b","1f47d","1f47e","1f916","1f63a","1f638","1f639","1f63b","1f63c","1f63d","1f640","1f63f","1f63e","1f648","1f649","1f64a","1f48b","1f48c","1f498",
	// "1f49d","1f496","1f497","1f493","1f49e","1f495","1f49f","2763","1f494","2764","1f9e1","1f49b","1f49a","1f499","1f49c","1f5a4","1f4af","1f4a2","1f4a5","1f4ab","1f4a6","1f4a8","1f573","1f4a3","1f4ac","1f441","fe0f","200d","1f5e8","fe0f","1f5e8",
	// "1f5ef","1f4ad","1f4a4","1f44b","1f91a","1f590","270b","1f596","1f44c","270c","1f91e","1f91f","1f918","1f919","1f448","1f449","1f446","1f595","1f447","261d","1f44d","1f44e","270a","1f44a","1f91b","1f91c","1f44f","1f64c","1f450","1f932",
	// "1f91d","1f64f","270d","1f485","1f933","1f4aa","1f9b5","1f9b6","1f442","1f443","1f9e0","1f9b7","1f9b4","1f440","1f441","1f445","1f444","1f476","1f9d2","1f466","1f467","1f9d1","1f471","1f468","1f9d4","1f471","200d","2642","fe0f","1f468","200d","1f9b0",
	// "1f468","200d","1f9b1","1f468","200d","1f9b3","1f468","200d","1f9b2","1f469","1f471","200d","2640","fe0f","1f469","200d","1f9b0","1f469","200d","1f9b1","1f469","200d","1f9b3","1f469","200d","1f9b2","1f9d3","1f474","1f475","1f64d","1f64d","200d","2642","fe0f","1f64d","200d","2640","fe0f",
	// "1f64e","1f64e","200d","2642","fe0f","1f64e","200d","2640","fe0f","1f645","1f645","200d","2642","fe0f","1f645","200d","2640","fe0f","1f646","1f646","200d","2642","fe0f","1f646","200d","2640","fe0f","1f481","1f481","200d","2642","fe0f","1f481","200d","2640","fe0f","1f64b","1f64b","200d","2642","fe0f",
	// "1f64b","200d","2640","fe0f","1f647","1f647","200d","2642","fe0f","1f647","200d","2640","fe0f","1f926","1f926","200d","2642","fe0f","1f926","200d","2640","fe0f","1f937","1f937","200d","2642","fe0f","1f937","200d","2640","fe0f","1f468","200d","2695","fe0f","1f469","200d","2695","fe0f","1f468","200d","1f393",
	// "1f469","200d","1f393","1f468","200d","1f3eb","1f469","200d","1f3eb","1f468","200d","2696","fe0f","1f469","200d","2696","fe0f","1f468","200d","1f33e","1f469","200d","1f33e","1f468","200d","1f373","1f469","200d","1f373","1f468","200d","1f527","1f469","200d","1f527","1f468","200d","1f3ed",
	// "1f469","200d","1f3ed","1f468","200d","1f4bc","1f469","200d","1f4bc","1f468","200d","1f52c","1f469","200d","1f52c","1f468","200d","1f4bb","1f469","200d","1f4bb","1f468","200d","1f3a4","1f469","200d","1f3a4","1f468","200d","1f3a8","1f469","200d","1f3a8","1f468","200d","2708","fe0f",
	// "1f469","200d","2708","fe0f","1f468","200d","1f680","1f469","200d","1f680","1f468","200d","1f692","1f469","200d","1f692","1f46e","1f46e","200d","2642","fe0f","1f46e","200d","2640","fe0f","1f575","1f575","fe0f","200d","2642","fe0f","1f575","fe0f","200d","2640","fe0f","1f482","1f482","200d","2642","fe0f",
	// "1f482","200d","2640","fe0f","1f477","1f477","200d","2642","fe0f","1f477","200d","2640","fe0f","1f934","1f478","1f473","1f473","200d","2642","fe0f","1f473","200d","2640","fe0f","1f472","1f9d5","1f935","1f470","1f930","1f931","1f47c","1f385","1f936","1f9b8","1f9b8","200d","2642","fe0f",
	// "1f9b8","200d","2640","fe0f","1f9b9","1f9b9","200d","2642","fe0f","1f9b9","200d","2640","fe0f","1f9d9","1f9d9","200d","2642","fe0f","1f9d9","200d","2640","fe0f","1f9da","1f9da","200d","2642","fe0f","1f9da","200d","2640","fe0f","1f9db","1f9db","200d","2642","fe0f","1f9db","200d","2640","fe0f","1f9dc",
	// "1f9dc","200d","2642","fe0f","1f9dc","200d","2640","fe0f","1f9dd","1f9dd","200d","2642","fe0f","1f9dd","200d","2640","fe0f","1f9de","1f9de","200d","2642","fe0f","1f9de","200d","2640","fe0f","1f9df","1f9df","200d","2642","fe0f","1f9df","200d","2640","fe0f","1f486","1f486","200d","2642","fe0f","1f486","200d","2640","fe0f",
	// "1f487","1f487","200d","2642","fe0f","1f487","200d","2640","fe0f","1f6b6","1f6b6","200d","2642","fe0f","1f6b6","200d","2640","fe0f","1f3c3","1f3c3","200d","2642","fe0f","1f3c3","200d","2640","fe0f","1f483","1f57a","1f574","1f46f","1f46f","200d","2642","fe0f","1f46f","200d","2640","fe0f","1f9d6",
	// "1f9d6","200d","2642","fe0f","1f9d6","200d","2640","fe0f","1f9d7","1f9d7","200d","2642","fe0f","1f9d7","200d","2640","fe0f","1f93a","1f3c7","26f7","1f3c2","1f3cc","1f3cc","fe0f","200d","2642","fe0f","1f3cc","fe0f","200d","2640","fe0f","1f3c4","1f3c4","200d","2642","fe0f","1f3c4","200d","2640","fe0f",
	// "1f6a3","1f6a3","200d","2642","fe0f","1f6a3","200d","2640","fe0f","1f3ca","1f3ca","200d","2642","fe0f","1f3ca","200d","2640","fe0f","26f9","26f9","fe0f","200d","2642","fe0f","26f9","fe0f","200d","2640","fe0f","1f3cb","1f3cb","fe0f","200d","2642","fe0f","1f3cb","fe0f","200d","2640","fe0f","1f6b4","1f6b4","200d","2642","fe0f",
	// "1f6b4","200d","2640","fe0f","1f6b5","1f6b5","200d","2642","fe0f","1f6b5","200d","2640","fe0f","1f938","1f938","200d","2642","fe0f","1f938","200d","2640","fe0f","1f93c","1f93c","200d","2642","fe0f","1f93c","200d","2640","fe0f","1f93d","1f93d","200d","2642","fe0f","1f93d","200d","2640","fe0f","1f93e",
	// "1f93e","200d","2642","fe0f","1f93e","200d","2640","fe0f","1f939","1f939","200d","2642","fe0f","1f939","200d","2640","fe0f","1f9d8","1f9d8","200d","2642","fe0f","1f9d8","200d","2640","fe0f","1f6c0","1f6cc","1f46d","1f46b","1f46c","1f48f","1f469","200d","2764","fe0f","200d","1f48b","200d","1f468",
	// "1f468","200d","2764","fe0f","200d","1f48b","200d","1f468","1f469","200d","2764","fe0f","200d","1f48b","200d","1f469","1f491","1f469","200d","2764","fe0f","200d","1f468","1f468","200d","2764","fe0f","200d","1f468","1f469","200d","2764","fe0f","200d","1f469","1f46a","1f468","200d","1f469","200d","1f466",
	// "1f468","200d","1f469","200d","1f467","1f468","200d","1f469","200d","1f467","200d","1f466","1f468","200d","1f469","200d","1f466","200d","1f466","1f468","200d","1f469","200d","1f467","200d","1f467","1f468","200d","1f468","200d","1f466","1f468","200d","1f468","200d","1f467","1f468","200d","1f468","200d","1f467","200d","1f466",
	// "1f468","200d","1f468","200d","1f466","200d","1f466","1f468","200d","1f468","200d","1f467","200d","1f467","1f469","200d","1f469","200d","1f466","1f469","200d","1f469","200d","1f467","1f469","200d","1f469","200d","1f467","200d","1f466","1f469","200d","1f469","200d","1f466","200d","1f466",
	// "1f469","200d","1f469","200d","1f467","200d","1f467","1f468","200d","1f466","1f468","200d","1f466","200d","1f466","1f468","200d","1f467","1f468","200d","1f467","200d","1f466","1f468","200d","1f467","200d","1f467","1f469","200d","1f466","1f469","200d","1f466","200d","1f466","1f469","200d","1f467",
	// "1f469","200d","1f467","200d","1f466","1f469","200d","1f467","200d","1f467","1f5e3","1f464","1f465","1f463","1f9b0","1f9b1","1f9b3","1f9b2","1f435","1f412","1f98d","1f436","1f415","1f429","1f43a","1f98a","1f99d","1f431","1f408","1f981","1f42f","1f405","1f406","1f434",
	// "1f40e","1f984","1f993","1f98c","1f42e","1f402","1f403","1f404","1f437","1f416","1f417","1f43d","1f40f","1f411","1f410","1f42a","1f42b","1f999","1f992","1f418","1f98f","1f99b","1f42d","1f401","1f400","1f439","1f430","1f407","1f43f","1f994","1f987","1f43b",
	// "1f428","1f43c","1f998","1f9a1","1f43e","1f983","1f414","1f413","1f423","1f424","1f425","1f426","1f427","1f54a","1f985","1f986","1f9a2","1f989","1f99a","1f99c","1f438","1f40a","1f422","1f98e","1f40d","1f432","1f409","1f995","1f996","1f433","1f40b","1f42c",
	// "1f41f","1f420","1f421","1f988","1f419","1f41a","1f40c","1f98b","1f41b","1f41c","1f41d","1f41e","1f997","1f577","1f578","1f982","1f99f","1f9a0","1f490","1f338","1f4ae","1f3f5","1f339","1f940","1f33a","1f33b","1f33c","1f337","1f331","1f332","1f333","1f334",
	// "1f335","1f33e","1f33f","2618","1f340","1f341","1f342","1f343","1f347","1f348","1f349","1f34a","1f34b","1f34c","1f34d","1f96d","1f34e","1f34f","1f350","1f351","1f352","1f353","1f95d","1f345","1f965","1f951","1f346","1f954","1f955","1f33d","1f336","1f952",
	// "1f96c","1f966","1f344","1f95c","1f330","1f35e","1f950","1f956","1f968","1f96f","1f95e","1f9c0","1f356","1f357","1f969","1f953","1f354","1f35f","1f355","1f32d","1f96a","1f32e","1f32f","1f959","1f95a","1f373","1f958","1f372","1f963","1f957","1f37f","1f9c2",
	// "1f96b","1f371","1f358","1f359","1f35a","1f35b","1f35c","1f35d","1f360","1f362","1f363","1f364","1f365","1f96e","1f361","1f95f","1f960","1f961","1f980","1f99e","1f990","1f991","1f366","1f367","1f368","1f369","1f36a","1f382","1f370","1f9c1","1f967","1f36b",
	// "1f36c","1f36d","1f36e","1f36f","1f37c","1f95b","2615","1f375","1f376","1f37e","1f377","1f378","1f379","1f37a","1f37b","1f942","1f943","1f964","1f962","1f37d","1f374","1f944","1f52a","1f3fa","1f30d","1f30e","1f30f","1f310","1f5fa","1f5fe","1f9ed","1f3d4",
	// "26f0","1f30b","1f5fb","1f3d5","1f3d6","1f3dc","1f3dd","1f3de","1f3df","1f3db","1f3d7","1f9f1","1f3d8","1f3da","1f3e0","1f3e1","1f3e2","1f3e3","1f3e4","1f3e5","1f3e6","1f3e8","1f3e9","1f3ea","1f3eb","1f3ec","1f3ed","1f3ef","1f3f0","1f492","1f5fc","1f5fd",
	// "26ea","1f54c","1f54d","26e9","1f54b","26f2","26fa","1f301","1f303","1f3d9","1f304","1f305","1f306","1f307","1f309","2668","1f30c","1f3a0","1f3a1","1f3a2","1f488","1f3aa","1f682","1f683","1f684","1f685","1f686","1f687","1f688","1f689","1f68a","1f69d","1f69e",
	// "1f68b","1f68c","1f68d","1f68e","1f690","1f691","1f692","1f693","1f694","1f695","1f696","1f697","1f698","1f699","1f69a","1f69b","1f69c","1f3ce","1f3cd","1f6f5","1f6b2","1f6f4","1f6f9","1f68f","1f6e3","1f6e4","1f6e2","26fd","1f6a8","1f6a5","1f6a6","1f6d1",
	// "1f6a7","2693","26f5","1f6f6","1f6a4","1f6f3","26f4","1f6e5","1f6a2","2708","1f6e9","1f6eb","1f6ec","1f4ba","1f681","1f69f","1f6a0","1f6a1","1f6f0","1f680","1f6f8","1f6ce","1f9f3","231b","23f3","231a","23f0","23f1","23f2","1f570","1f55b","1f567","1f550",
	// "1f55c","1f551","1f55d","1f552","1f55e","1f553","1f55f","1f554","1f560","1f555","1f561","1f556","1f562","1f557","1f563","1f558","1f564","1f559","1f565","1f55a","1f566","1f311","1f312","1f313","1f314","1f315","1f316","1f317","1f318","1f319","1f31a","1f31b",
	// "1f31c","1f321","2600","1f31d","1f31e","2b50","1f31f","1f320","2601","26c5","26c8","1f324","1f325","1f326","1f327","1f328","1f329","1f32a","1f32b","1f32c","1f300","1f308","1f302","2602","2614","26f1","26a1","2744","2603","26c4","2604","1f525","1f4a7","1f30a",
	// "1f383","1f384","1f386","1f387","1f9e8","2728","1f388","1f389","1f38a","1f38b","1f38d","1f38e","1f38f","1f390","1f391","1f9e7","1f380","1f381","1f397","1f39f","1f3ab","1f396","1f3c6","1f3c5","1f947","1f948","1f949","26bd","26be","1f94e","1f3c0","1f3d0","1f3c8",
	// "1f3c9","1f3be","1f94f","1f3b3","1f3cf","1f3d1","1f3d2","1f94d","1f3d3","1f3f8","1f94a","1f94b","1f945","26f3","26f8","1f3a3","1f3bd","1f3bf","1f6f7","1f94c","1f3af","1f3b1","1f52e","1f9ff","1f3ae","1f579","1f3b0","1f3b2","1f9e9","1f9f8","2660","2665","2666",
	// "2663","265f","1f0cf","1f004","1f3b4","1f3ad","1f5bc","1f3a8","1f9f5","1f9f6","1f453","1f576","1f97d","1f97c","1f454","1f455","1f456","1f9e3","1f9e4","1f9e5","1f9e6","1f457","1f458","1f459","1f45a","1f45b","1f45c","1f45d","1f6cd","1f392","1f45e","1f45f","1f97e",
	// "1f97f","1f460","1f461","1f462","1f451","1f452","1f3a9","1f393","1f9e2","26d1","1f4ff","1f484","1f48d","1f48e","1f507","1f508","1f509","1f50a","1f4e2","1f4e3","1f4ef","1f514","1f515","1f3bc","1f3b5","1f3b6","1f399","1f39a","1f39b","1f3a4","1f3a7","1f4fb","1f3b7",
	// "1f3b8","1f3b9","1f3ba","1f3bb","1f941","1f4f1","1f4f2","260e","1f4de","1f4df","1f4e0","1f50b","1f50c","1f4bb","1f5a5","1f5a8","2328","1f5b1","1f5b2","1f4bd","1f4be","1f4bf","1f4c0","1f9ee","1f3a5","1f39e","1f4fd","1f3ac","1f4fa","1f4f7","1f4f8","1f4f9","1f4fc",
	// "1f50d","1f50e","1f56f","1f4a1","1f526","1f3ee","1f4d4","1f4d5","1f4d6","1f4d7","1f4d8","1f4d9","1f4da","1f4d3","1f4d2","1f4c3","1f4dc","1f4c4","1f4f0","1f5de","1f4d1","1f516","1f3f7","1f4b0","1f4b4","1f4b5","1f4b6","1f4b7","1f4b8","1f4b3","1f9fe","1f4b9","1f4b1",
	// "1f4b2","2709","1f4e7","1f4e8","1f4e9","1f4e4","1f4e5","1f4e6","1f4eb","1f4ea","1f4ec","1f4ed","1f4ee","1f5f3","270f","2712","1f58b","1f58a","1f58c","1f58d","1f4dd","1f4bc","1f4c1","1f4c2","1f5c2","1f4c5","1f4c6","1f5d2","1f5d3","1f4c7","1f4c8","1f4c9","1f4ca","1f4cb",
	// "1f4cc","1f4cd","1f4ce","1f587","1f4cf","1f4d0","2702","1f5c3","1f5c4","1f5d1","1f512","1f513","1f50f","1f510","1f511","1f5dd","1f528","26cf","2692","1f6e0","1f5e1","2694","1f52b","1f3f9","1f6e1","1f527","1f529","2699","1f5dc","2696","1f517","26d3","1f9f0","1f9f2",
	// "2697","1f9ea","1f9eb","1f9ec","1f52c","1f52d","1f4e1","1f489","1f48a","1f6aa","1f6cf","1f6cb","1f6bd","1f6bf","1f6c1","1f9f4","1f9f7","1f9f9","1f9fa","1f9fb","1f9fc","1f9fd","1f9ef","1f6d2","1f6ac","26b0","26b1","1f5ff","1f3e7","1f6ae","1f6b0","267f","1f6b9","1f6ba",
	// "1f6bb","1f6bc","1f6be","1f6c2","1f6c3","1f6c4","1f6c5","26a0","1f6b8","26d4","1f6ab","1f6b3","1f6ad","1f6af","1f6b1","1f6b7","1f4f5","1f51e","2622","2623","2b06","2197","27a1","2198","2b07","2199","2b05","2196","2195","2194","21a9","21aa","2934","2935","1f503","1f504",
	// "1f519","1f51a","1f51b","1f51c","1f51d","1f6d0","269b","1f549","2721","2638","262f","271d","2626","262a","262e","1f54e","1f52f","2648","2649","264a","264b","264c","264d","264e","264f","2650","2651","2652","2653","26ce","1f500","1f501","1f502","25b6","23e9","23ed","23ef",
	// "25c0","23ea","23ee","1f53c","23eb","1f53d","23ec","23f8","23f9","23fa","23cf","1f3a6","1f505","1f506","1f4f6","1f4f3","1f4f4","2640","2642","2695","267e","267b","269c","1f531","1f4db","1f530","2b55","2705","2611","2714","2716","274c","274e","2795","2796","2797","27b0",
	// "27bf","303d","2733","2734","2747","203c","2049","2753","2754","2755","2757","3030","00a9","00ae","2122","0023","fe0f","20e3","002a","fe0f","20e3","0030","fe0f","20e3","0031","fe0f","20e3","0032","fe0f","20e3","0033","fe0f","20e3","0034","fe0f","20e3","0035","fe0f","20e3","0036","fe0f","20e3","0037","fe0f","20e3",
	// "0038","fe0f","20e3","0039","fe0f","20e3","1f51f","1f520","1f521","1f522","1f523","1f524","1f170","1f18e","1f171","1f191","1f192","1f193","2139","1f194","24c2","1f195","1f196","1f17e","1f197","1f17f","1f198","1f199","1f19a","1f201","1f202","1f237","1f236","1f22f","1f250","1f239",
	// "1f21a","1f232","1f251","1f238","1f234","1f233","3297","3299","1f23a","1f235","1f534","1f535","26aa","26ab","2b1c","2b1b","25fc","25fb","25fd","25fe","25ab","25aa","1f536","1f537","1f538","1f539","1f53a","1f53b","1f4a0","1f518","1f532","1f533","1f3c1","1f6a9","1f38c","1f3f4",
	// "1f3f3","1f3f3","fe0f","200d","1f308","1f3f4","200d","2620","fe0f"
// ];

var person = [
	"1F604","1F603","1F600","1F60A","263A","1F609","1F60D","1F618","1F61A","1F617","1F619","1F61C","1F61D","1F61B","1F633","1F601","1F614","1F60C","1F612","1F61E","1F623","1F622","1F602","1F62D","1F62A","1F625","1F630","1F605","1F613","1F629","1F62B","1F628","1F631",
	"1F620","1F621","1F624","1F616","1F606","1F60B","1F637","1F60E","1F634","1F635","1F632","1F61F","1F626","1F627","1F608","1F47F","1F62E","1F62C","1F610","1F615","1F62F","1F636","1F607","1F60F","1F611","1F472","1F473","1F46E","1F477","1F482","1F476","1F466","1F467",
	"1F468","1F469","1F474","1F475","1F471","1F47C","1F478","1F63A","1F638","1F63B","1F63D","1F63C","1F640","1F63F","1F639","1F63E","1F479","1F47A","1F648","1F649","1F64A","1F480","1F47D","1F4A9","1F525","2728","1F31F","1F4AB","1F4A5","1F4A2","1F4A6","1F4A7","1F4A4",
	"1F4A8","1F442","1F440","1F443","1F445","1F444","1F44D","1F44E","1F44C","1F44A","270A","270C","1F44B","270B","1F450","1F446","1F447","1F449","1F448","1F64C","1F64F","261D","1F44F","1F4AA","1F6B6","1F3C3","1F483","1F46B","1F46A","1F46C","1F46D","1F48F"
]
var nature = [
	"1F436","1F43A","1F431","1F42D","1F439","1F430","1F438","1F42F","1F428","1F43B","1F437","1F43D","1F42E","1F417","1F435","1F412","1F434","1F411","1F418","1F43C","1F427","1F426","1F424","1F425","1F423","1F414","1F40D","1F422","1F41B","1F41D","1F41C","1F41E","1F40C",
	"1F419","1F41A","1F420","1F41F","1F42C","1F433","1F40B","1F404","1F40F","1F400","1F403","1F405","1F407","1F409","1F40E","1F410","1F413","1F415","1F416","1F401","1F402","1F432","1F421","1F40A","1F42B","1F42A","1F406","1F408","1F429","1F43E","1F490","1F338","1F337",
	"1F340","1F339","1F33B","1F33A","1F341","1F343","1F342","1F33F","1F33E","1F344","1F335","1F334","1F332","1F333","1F330","1F331","1F33C","1F310","1F31E","1F31D","1F31A","1F311","1F312","1F313","1F314","1F315","1F316","1F317","1F318","1F31C","1F31B","1F319","1F30D",
	"1F30E","1F30F","1F30B","1F30C","1F320","2B50","2600","26C5","2601","26A1","2614","2744","26C4","1F300","1F301","1F308","1F30A"
]
var objects = [
	"1F38D","1F49D","1F38E","1F392","1F393","1F38F","1F386","1F387","1F390","1F391","1F383","1F47B","1F385","1F384","1F381","1F38B","1F389","1F38A","1F388","1F38C","1F52E","1F3A5","1F4F7","1F4F9","1F4FC","1F4BF","1F4C0","1F4BD","1F4BE","1F4BB","1F4F1","260E","1F4DE",
	"1F4DF","1F4E0","1F4E1","1F4FA","1F4FB","1F50A","1F509","1F508","1F507","1F514","1F515","1F4E2","1F4E3","23F3","231B","23F0","231A","1F513","1F512","1F50F","1F510","1F511","1F50E","1F4A1","1F526","1F506","1F505","1F50C","1F50B","1F50D","1F6C1","1F6C0","1F6BF",
	"1F6BD","1F527","1F529","1F528","1F6AA","1F6AC","1F4A3","1F52B","1F52A","1F48A","1F489","1F4B0","1F4B4","1F4B5","1F4B7","1F4B6","1F4B3","1F4B8","1F4F2","1F4E7","1F4E5","1F4E4","2709","1F4E9","1F4E8","1F4EF","1F4EB","1F4EA","1F4EC","1F4ED","1F4EE","1F4E6","1F4DD",
	"1F4C4","1F4C3","1F4D1","1F4CA","1F4C8","1F4C9","1F4DC","1F4CB","1F4C5","1F4C6","1F4C7","1F4C1","1F4C2","2702","1F4CC","1F4CE","2712","270F","1F4CF","1F4D0","1F4D5","1F4D7","1F4D8","1F4D9","1F4D3","1F4D4","1F4D2","1F4DA","1F4D6","1F516","1F4DB","1F52C","1F52D",
	"1F4F0","1F3A8","1F3AC","1F3A4","1F3A7","1F3BC","1F3B5","1F3B6","1F3B9","1F3BB","1F3BA","1F3B7","1F3B8"
]
var places = [
	"1F3E0","1F3E1","1F3EB","1F3E2","1F3E3","1F3E5","1F3E6","1F3EA","1F3E9","1F3E8","1F492","26EA","1F3EC","1F3E4","1F307","1F306","1F3EF","1F3F0","26FA","1F3ED","1F5FC","1F5FE","1F5FB","1F304","1F305","1F303","1F5FD","1F309","1F3A0","1F3A1","26F2","1F3A2","1F6A2",
	"26F5","1F6A4","1F6A3","2693","1F680","2708","1F4BA","1F681","1F682","1F68A","1F689","1F69E","1F686","1F684","1F685","1F688","1F687","1F69D","1F68B","1F683","1F68E","1F68C","1F68D","1F699","1F698","1F697","1F695","1F696","1F69B","1F69A","1F6A8","1F693","1F694",
	"1F692","1F691","1F690","1F6B2","1F6A1","1F69F","1F6A0","1F69C","1F488","1F68F","1F3AB","1F6A6","1F6A5","26A0","1F6A7","1F530","26FD","1F3EE","1F3B0","2668","1F5FF","1F3AA","1F3AD","1F4CD","1F6A9"
]
var symbols = [
	"2B06","2B07","2B05","27A1","1F520","1F521","1F524","2197","2196","2198","2199","2194","2195","1F504","25C0","25B6","1F53C","1F53D","21A9","21AA","2139","23EA","23E9","23EB","23EC","2935","2934","1F197","1F500","1F501","1F502","1F195","1F199","1F192","1F193",
	"1F196","1F4F6","1F3A6","1F201","1F22F","1F233","1F235","1F234","1F232","1F250","1F239","1F23A","1F236","1F21A","1F6BB","1F6B9","1F6BA","1F6BC","1F6BE","1F6B0","1F6AE","1F17F","267F","1F6AD","1F237","1F238","1F202","24C2","1F6C2","1F6C4","1F6C5","1F6C3","1F251",
	"3299","3297","1F191","1F198","1F194","1F6AB","1F51E","1F4F5","1F6AF","1F6B1","1F6B3","1F6B7","1F6B8","26D4","2733","2747","274E","2705","2734","1F49F","1F19A","1F4F3","1F4F4","1F170","1F171","1F18E","1F17E","1F4A0","27BF","267B","2648","2649","264A","264B","264C",
	"264D","264E","264F","2650","2651","2652","2653","26CE","1F52F","1F3E7","1F4B9","1F4B2","1F4B1"
]


var newElement = document.createElement('div');
	newElement.id = "emojis_by_36_outer"; 
	newElement.innerHTML = "";
	document.body.appendChild(newElement);

var btns = '';
	btns += '<div id="emojis_by_36_inner_btn_person">person</div>';
	btns += '<div id="emojis_by_36_inner_btn_nature">nature</div>';
	btns += '<div id="emojis_by_36_inner_btn_objects">objects</div>';
	btns += '<div id="emojis_by_36_inner_btn_places">places</div>';
	btns += '<div id="emojis_by_36_inner_btn_symbols">symbols</div>';
	btns += '<div id="break" class="emoji_by_36" style="display: block; width: 100%;">linebreak</div>';
newElement.innerHTML = '<div id="emojis_by_36_nav"><div id="emojis_by_36_btn_fontsmaller">🡻</div><div id="emojis_by_36_btn_openclose">▼</div><div id="emojis_by_36_btn_fontbigger">🡹</div></div><div id="emojis_by_36_btns">'+btns+'</div><div id="emojis_by_36_inner"></div>';

var wrapper = document.getElementById("emojis_by_36_outer");
var container = document.getElementById("emojis_by_36_inner");
var nav = document.getElementById("emojis_by_36_nav");
var btns = document.getElementById("emojis_by_36_btns");


document.getElementById("emojis_by_36_btn_openclose").addEventListener("click", function(e){ 	
	if (container.style.height == "0px") {
		container.style.height = "auto";
		btns.style.height = "auto";
		document.getElementById("emojis_by_36_btn_openclose").innerHTML = "▼";
	} else {
		container.style.height = "0px";
		btns.style.height = "0px";
		document.getElementById("emojis_by_36_btn_openclose").innerHTML = "▲";
	}
});

document.getElementById("emojis_by_36_btn_fontbigger").addEventListener("click", function(e){ 	
	let newvalue = parseInt(window.getComputedStyle(container).fontSize)+1;
	container.style.fontSize = newvalue+"px";
});

document.getElementById("emojis_by_36_btn_fontsmaller").addEventListener("click", function(e){ 	
	let newvalue = parseInt(window.getComputedStyle(container).fontSize)-1;
	container.style.fontSize = newvalue+"px";
});

document.getElementById("emojis_by_36_inner_btn_person").addEventListener("click", function(e){ 	
	if ( document.getElementById("emojis_by_36_person").style.display == "none" ) {
		document.getElementById("emojis_by_36_person").style.display = "block";
		document.getElementById("emojis_by_36_nature").style.display = "none";
		document.getElementById("emojis_by_36_objects").style.display = "none";
		document.getElementById("emojis_by_36_places").style.display = "none";
		document.getElementById("emojis_by_36_symbols").style.display = "none";
	}
});

document.getElementById("emojis_by_36_inner_btn_nature").addEventListener("click", function(e){ 	
	if ( document.getElementById("emojis_by_36_nature").style.display == "none" ) {
		document.getElementById("emojis_by_36_person").style.display = "none";
		document.getElementById("emojis_by_36_nature").style.display = "block";
		document.getElementById("emojis_by_36_objects").style.display = "none";
		document.getElementById("emojis_by_36_places").style.display = "none";
		document.getElementById("emojis_by_36_symbols").style.display = "none";
	}
});

document.getElementById("emojis_by_36_inner_btn_objects").addEventListener("click", function(e){ 	
	if ( document.getElementById("emojis_by_36_objects").style.display == "none" ) {
		document.getElementById("emojis_by_36_person").style.display = "none";
		document.getElementById("emojis_by_36_nature").style.display = "none";
		document.getElementById("emojis_by_36_objects").style.display = "block";
		document.getElementById("emojis_by_36_places").style.display = "none";
		document.getElementById("emojis_by_36_symbols").style.display = "none";
	}
});

document.getElementById("emojis_by_36_inner_btn_places").addEventListener("click", function(e){ 	
	if ( document.getElementById("emojis_by_36_places").style.display == "none" ) {
		document.getElementById("emojis_by_36_person").style.display = "none";
		document.getElementById("emojis_by_36_nature").style.display = "none";
		document.getElementById("emojis_by_36_objects").style.display = "none";
		document.getElementById("emojis_by_36_places").style.display = "block";
		document.getElementById("emojis_by_36_symbols").style.display = "none";
	}
});

document.getElementById("emojis_by_36_inner_btn_symbols").addEventListener("click", function(e){ 	
	if ( document.getElementById("emojis_by_36_symbols").style.display == "none" ) {
		document.getElementById("emojis_by_36_person").style.display = "none";
		document.getElementById("emojis_by_36_nature").style.display = "none";
		document.getElementById("emojis_by_36_objects").style.display = "none";
		document.getElementById("emojis_by_36_places").style.display = "none";
		document.getElementById("emojis_by_36_symbols").style.display = "block";
	}
});

var sheet = "";
	sheet += '#emojis_by_36_outer { z-index: 9999; transition: 0.3s; overflow: hidden; position: fixed; width: 100%; bottom: 0; color: white; font-size: 12px;}';
	sheet += '#emojis_by_36_inner { transition: 0.3s; text-align: center; background-color: rgba(0, 0, 0, 0.75); font-size: 20px; }';
	sheet += '';
	sheet += '#emojis_by_36_nav { transition: 0.3s; text-align: center; width: 100%; }';
	sheet += '#emojis_by_36_nav * { display: inline-block; margin: 0 auto; text-align: center; width: 10%; padding: 5px; background-color: rgba(0, 0, 0, 0.75); }';
	sheet += '#emojis_by_36_nav *:hover { cursor: pointer; background-color: grey; }';
	sheet += '';
	sheet += '#emojis_by_36_btns { transition: 0.3s; text-align: center; width: 100%; background-color: rgba(0, 0, 0, 0.75); }';
	sheet += '#emojis_by_36_btns * { display: inline-block; margin: 0 auto; text-align: center; width: 10%; padding: 5px; }';
	sheet += '#emojis_by_36_btns *:hover { cursor: pointer; background-color: grey; }';
	sheet += '';
	sheet += 'div[class="emoji_by_36"] {display: inline-block;}';
	sheet += 'div[class="emoji_by_36"]:hover {cursor: pointer; background-color: grey;}';
	sheet += '';
	sheet += '.hiddens {display:none; min-height: 100px;}';
	sheet += '';
var style = document.createElement('style');
	document.body.appendChild(style);
	style.innerHTML = sheet;


setInterval(function() {
	try {
		target = document.querySelectorAll("textarea")[1];
	} catch(e) {
		
	}
}, 1000)

newElement = '<div id="emojis_by_36_person" class="hiddens">';
person.forEach(function(e) {
	newElement += '<div id="'+e+'" class="emoji_by_36">'+String.fromCodePoint("0x"+e)+'</div>';
})
newElement += '</div>';
container.innerHTML += newElement; 

newElement = '<div id="emojis_by_36_nature" class="hiddens">';
nature.forEach(function(e) {
	newElement += '<div id="'+e+'" class="emoji_by_36">'+String.fromCodePoint("0x"+e)+'</div>';
})
newElement += '</div>';
container.innerHTML += newElement; 

newElement = '<div id="emojis_by_36_objects" class="hiddens">';
objects.forEach(function(e) {
	newElement += '<div id="'+e+'" class="emoji_by_36">'+String.fromCodePoint("0x"+e)+'</div>';
})
newElement += '</div>';
container.innerHTML += newElement; 

newElement = '<div id="emojis_by_36_places" class="hiddens">';
places.forEach(function(e) {
	newElement += '<div id="'+e+'" class="emoji_by_36">'+String.fromCodePoint("0x"+e)+'</div>';
})
newElement += '</div>';
container.innerHTML += newElement; 

newElement = '<div id="emojis_by_36_symbols" class="hiddens">';
symbols.forEach(function(e) {
	newElement += '<div id="'+e+'" class="emoji_by_36">'+String.fromCodePoint("0x"+e)+'</div>';
})
newElement += '</div>';
container.innerHTML += newElement; 

document.getElementById("break").addEventListener("click", function(e){ 
	target.value += "\n";
	target.focus();
});

container.addEventListener("click", function(e){ 
	target.value += String.fromCodePoint("0x"+e.originalTarget.id);
	target.focus();
});

container.style.height = "0px";
btns.style.height = "0px";
document.getElementById("emojis_by_36_btn_openclose").innerHTML = "▲";
document.getElementById("emojis_by_36_person").style.display = "block";
document.getElementById("emojis_by_36_nature").style.display = "none";
document.getElementById("emojis_by_36_objects").style.display = "none";
document.getElementById("emojis_by_36_places").style.display = "none";
document.getElementById("emojis_by_36_symbols").style.display = "none";