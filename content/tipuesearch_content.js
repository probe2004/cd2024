var tipuesearch = {"pages": [{'title': 'About', 'text': '姓名:張晏菖 學號:41123124 班級:四設二甲 \n 網頁:  https://probe2004.github.io/cd2024/ \xa0 \n 網誌:\xa0 https://probe2004.github.io/cd2024/blog \n 簡報:  https://probe2004.github.io/cd2024/reveal \n 倉儲:  https://github.com/probe2004/cd2024 \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'W17', 'text': 'YT影片繪製零件連結: \n YT影片python建立零件連結: \n 足球零件檔: https://drive.google.com/drive/folders/1O4HyKlf-hLNW45VXv58zLS72wdOPljq0?usp=sharing \n python檔: https://drive.google.com/drive/folders/1tyzc5V65GULadznkhCspiIcfM7aFodyF?usp=sharing \n', 'tags': '', 'url': 'W17.html'}, {'title': '問題串', 'text': '在要推送到github的時候有出現檔案過大無法傳送的問題，詢問老師之後得知:如果前幾次推送無法傳送，後續的推送也無完成。因為git只能做增加不能刪除，所以必須要找到前面版本的檔案進行刪除。 \n \n 詢問如何將提交往前推的對話。 \n \n 組員有遇到分支問題，推測是因為出現其他分支沒有合併到主分支的原因，git不知道要推送到哪裡。 \n \n 以下詢問GPT得到的回答，解釋true以及false的差異。 \n \n 因上次使用NX內的python record沒有成功，所以先繪製零件，但是目前遇到一個問題，就是畫好的零件已經是一個結果，沒辦法讓程式去了解到繪製過程，沒辦法產生繪製過程的程式碼。 \n 詢問老師過後，得知雖然不能更改，但擁有"參數式"的概念，要的不是結果的零件檔案，而是從中取得參數可以做更改，在不同形狀幾何中，會有固定的變數參數，可以透過這些參數在程式中進行修改，這才是設計中最重要的部分。 \n \n', 'tags': '', 'url': '問題串.html'}, {'title': '作業區', 'text': '\n 影片作業 \n \n 因雲端硬碟時常有授權問題進不去，故將影片都上傳至YT。以下為影片連結 \n \n 字幕影片: https://www.youtube.com/watch?v=xhZdHNDl9Hg \n 逐字稿檔案: https://drive.google.com/file/d/1OjQuykRh6XyPw4alpTfiIKIFZN1f1mso/view?usp=sharing \n 重點整理: \n \n 組長必須建立一個midag的其中team。 \n 利用codespaces來進行同步更新。 \n 要啟動codespaces裡要先輸入chmod x+u init_replit把模組安裝。 \n 接下來輸入python3 main.py來開啟（類似replit中的Run鍵）。 \n 推送的步驟如下: git add . git commit -m "modify site title" git push 完成後回到網頁確認更新完畢。 \n 網頁給的cpu為二核 8gb的ram跟32gb的內存。 \n 自評分數為65分。 \n \n 平台作業 \n \n 摸索並學習如何使用NX繪製零件，繪製以下零件。 \n 零件檔案位置: https://drive.google.com/drive/folders/1BFCF1uZ1_37gER7gu4ghxTeTzkzHRQ0X?usp=drive_link \n 零件python檔案位置: https://drive.google.com/drive/folders/1OiN3QfTITiABzdNes4Dqcw1CNLlJcbt1?usp=drive_link \n 底座 \n 平台 \n \n Y支架 \n \n S支架 \n \n 連結軸 \n \n Inventor組裝 \n \n CoppeliaSim模擬 \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n  editor2 結束  \n \n \n', 'tags': '', 'url': '作業區.html'}]};