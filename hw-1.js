const folders = [
    {
      id: 5,
      name: 'Klasör 1',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 18, name: 'manzara.jpg'},
      ],
    },
    {
      id: 6,
      name: 'Klasör 2',
      files: [
        { id: 21, name: 'foto.png' },
        { id: 22, name: 'dosya.xls' },
      ],
    },
    {
      id: 7,
      name: 'Klasör 3',
    },
  ]

  

  const remove = (folderId) => {
	
	if (!(typeof folderId === 'number'))  throw new Error('Lütfen Sayısal Değer Giriniz!');
	const folderDelete = folders.find((f) => f.id === folderId);

	if (!folderDelete)  throw new Error('Dosya Bulunamadı!');
	const newFolders = folders.filter((folder) => folder.id !== folderId);

	return newFolders;
    
};

console.log(remove(7));


//console.log(folders[0].files[0]);
// console.log(removeFolder("deneme"));