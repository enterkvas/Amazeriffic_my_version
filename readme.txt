12.08.19

																	reset.css - Редактирование:

		Закомментировал:
		
			1) строка 23: правило: font: inherit; (наследование радительского шрифта);
			2) строка 38-40: body {line-height: 1;} 
			3) строка 42-44: ol, ul {list-style: none;} (обнуление стилей списков, т.к. уберет маркеры для ul, а мне как раз и нужны именно СТАНДАРТНЫЕ)
			
		В некоторых селекторах добавил для пояснения себе свои комментарии, начинающиеся со слов: "мое пояснение:...".

18.09.19

												Раздел: Добавление интерактивности Amazeriffic
												
!!!!	Напомним ЦЕЛЬ приложения Amazeriffic: выполнять ф-ции СПИСКА ЗАДАЧ.
		
		Для достижения этой задачи построим интерфейс, состоящий из 3-х вкладок:
		-первая("Новые") будет отображать список задач, начиная с самых новых(от новых к старым);
		-вторая("Старые") - соответственно: от старых к новым;
		-третья("Добавить") - поле ввода для новых задач.
			
!!!		Берем за основу проект: C:\projects\project_book\Amazeriffic_my_1\(из моей папки).
		Присваиваю проекту название: C:\projects\project_book\Amazeriffic_my_1_list\
		Добавляю в корень проекта каталог scripts(как рекомендовано в книге: добавить еще каталог stylesheets - я его добавлять не буду, т.к. файл со стилями
	(style_list.css) - создам в имеющемся каталоге css, а т.ж. создам новый файл list.html.
		(Отсебятина:)чтобы сохранить ВСЕ страницы проекта, на главной стр(index.html) дописываю внизу блока main ссылку: "Перейти в список задач". Для ее создания прописываю
	в index.html в блоке main абзац p.list и стилизую его в style.css.