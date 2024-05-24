var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/probe2004/cd2024 網站: https://probe2004.github.io/cd2024/ 簡報: https://probe2004.github.io/cd2024/reveal 網誌: https://probe2004.github.io/cd2024/blog","tags":"misc","url":"./pages/about/"},{"title":"W14","text":"2024 Spring 第十三週 分配工作、零件同整 分配零件給各組員，叮嚀組員要趕上進度。 零件檔案都在雲端硬碟[https://drive.google.com/drive/folders/1BFCF1uZ1_37gER7gu4ghxTeTzkzHRQ0X?usp=drive_link] 零件繪製影片都有用LINE傳給各位，依照各自認領的零件做然後傳至群組。","tags":"w14","url":"./2024-Spring-w14-PRB.html"},{"title":"W13","text":"2024 Spring 第十三週 組合模擬 NX繪製零件 零件圖片皆放在靜態網站 1.底座 2.平台 3.Y支架 4.S支架 5.軸 轉STL組合後在Inventor進行組裝後，進行CoppeliaSim模擬。 繪製零件之後發放給各組員組裝拍影片。","tags":"w13","url":"./2024-Spring-w13-PRB.html"},{"title":"W12","text":"2024 Spring 第十二週 NX 內容管理系統 w12 下載SolveSpace開啟檔案，學習使用NX繪圖。 將個人分支建立成子模組同整到老師的倉儲。","tags":"w12","url":"./cd2024-2a-w12-PRB.html"},{"title":"W11","text":"2024 Spring 第十一週 課程心得 內容管理系統 w11 今日作業為課程心得，以及學習如何在主分支建立其他分支，好讓大家可以供同編輯而不會衝突。 心得如下: 對於網站編寫的流程有一點點的了解，經常在滑社群網站也會看到很多關於java或是html的廣告教學，不禁會讓我想到我們使用replit建立的靜態網站，想必這在未來會是一大趨勢。但是在這些作業完成的前提之下，我可能還需要學習如何管理一個群組，像是組員的進度不一致或是大家遇到一樣的問題卡關的時候，常有每個人都不知道怎麼做而愣在一旁，我自己透過詢問老師以及chatGPT有得到相當大的解答。再將資訊給組員參考。除了寫程式以外更了解到這些原理的背後運作方式，有效率的消化多方面不同的改版，最後可以在網路上共同完成。老師提到現今的機械企業在處理眾多改版以及客戶以及工程師溝通上的問題，我們所學習的協同設計就應該要可以融合在CAD上，在零件上的討論修改等等。修這門課可以讓我在未來更有競爭裡且對於我自己想走的路線是頗有幫助的，雖然語言程式真的很難。","tags":"w11","url":"./cd2024-2a-w11-PRB.html"},{"title":"W10","text":"2024 Spring 第十週 論文重點 內容管理系統 w10 閱讀結果: 各篇論文要點摘要： 論文一：Construction and theoretical study of a ball balancing platform 探討自動控制理論在穩定動態系統時的局限性，以球體平衡平台為例。 建立球體平衡平台的理論模型，並與實際搭建的平台進行比較。 分析理論與實際結果之間的差異，探討控制理論與系統實施的挑戰。 結論： 線性控制可以實現球體平衡平台的良好性能，但存在靜態誤差。 理論與實際結果的差異主要來自於物理模型的誤差和電子元件的非理想特性。 穩定動態系統的性能受限於狀態調整的靈活性、控制器設計和輸入數據的準確性。 論文二：A real time control system for balancing a ball on a platform with FPGA parallel implementation 提出基於 PID 控制器的解決方案，以提高球體在平台上的位置調節精度。 使用 FPGA 實現平行計算，以提高系統速度和性能。 開發球體平衡平台的轉移函數，並合成 PID 控制器。 結論： 透過 FPGA 平行計算實現的 PID 控制器能有效提高球體位置調節精度。 該方案可應用於控制具有多個參數的高速物件。 論文三：Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach 設計和比較三種控制結構，用於自動穩定球體在平台上的位置和軌跡追踪：PD 控制器、狀態空間反饋和帶狀態空間回饋的狀態空間觀測器。 使用牛頓法推導球體平衡平台的數學模型，並設計直流電機位置迴路控制。 結論： 三種控制結構均能實現穩定控制，但狀態空間觀測器具有最佳性能。 該研究建立了一個教育平台，用於向非技術人員解釋基本控制系統原理。 論文四：Design and Implementation a Ball Balancing System for Control Theory Course 開發一個球體平衡系統，使用微控制器和控制演算法來調節球體在梁上的平衡。 利用超聲波傳感器獲取球體位置，並使用 PID 控制演算法調整梁的角度。 開發介面程式，將即時位置曲線繪製在 MATLAB 中。 結論： 球體平衡系統是一個低成本的教育工具，可用於教授控制理論的應用。 該系統允許學生將理論知識應用於實踐中，並了解封閉迴路回饋系統和 PID 演算法的原理。 論文五：Ball on the plate balancing control system 設計一個二自由度球體平衡實驗平台，用於測試和驗證平衡控制演算法。 使用電阻式觸摸屏獲取球體位置數據，使用步進電機和位置傳感器控制平台傾斜角度。 設計基於 AVR 微控制器的雙環下屬控制系統，使用 PID 控制器維持球體平衡。 結論： 該系統使用步進電機替代伺服電機，並無需外部電腦進行圖像處理，具有成本效益和易於控制的優勢。 未來計劃改進球體位置回饋信號的濾波，以提高控制系統的速度和品質。 論文六：2D Ball Balancer Control using QUARC 使用 QUARC 軟體設計和實現球體在二維平台上的位置控制。 設計 PD 和 PID 控制器，並探討設定點權重和積分器抗飽和等控制技術。 使用攝像頭讀取球體位置，並進行校準和轉換。 結論： PD 和 PID 控制器均能實現球體位置控制，但 PID 控制器在跟踪斜坡和正弦參考信號時具有更好的性能。 該實驗涵蓋了建模、控制器設計、模擬和實施等多個控制系統的關鍵步驟，為學生提供了寶貴的學習經驗。 接下來, 必須要設法了解, 哪一篇或哪幾篇論文對我們解決下列問題最有參考價值!","tags":"w10","url":"./cd2024-2a-w10-PRB.html"},{"title":"W9","text":"2024 Spring 第九週 期中考週 內容管理系統 w9 期中考週 自評","tags":"w9","url":"./cd2024-2a-w9-PRB.html"},{"title":"W8","text":"2024 Spring 第八週 問題處理 內容管理系統 w8 今日遇到的較難處理的狀況-提交多數中有一則提交檔案過大，但是已經覆蓋很多次的提交。 詢問老師解釋git只能利用\"增加\"來提交檔案，所以之前加入過大的檔案儘管刪掉還是存在，只能透過找到那則提交然後單獨刪除才能解決後續的提交。 查詢chatGPT之後得知要往前推一則提交要輸入git reset --hard HEAD&#94;。 推到自己要的提交之前進行修正。","tags":"w8","url":"./cd2024-2a-w8-PRB.html"},{"title":"W6","text":"2024 Spring 第六週 codespaces 內容管理系統 w6 因群組內的個人倉儲未同步更新，要進入codespaces更改 程式如下。 git submodule update --init。 cd 自己學號 進入到自己的資料夾內。 git pull origin main 把最新版本拉下同步。 cd ..回上頁。 git status 查看分支現在狀況。 git add . 加入。 git commit -m \"更新內容\"。 git push 推送。 到github查看是否更新成功。 內容管理系統","tags":"w6","url":"./cd2024-2a-w6-PRB.html"},{"title":"W5","text":"2024 Spring 第五週 建立群組 內容管理系統 w5 重點整理:組長必須建立一個midag的其中team 利用codespaces來進行同步更新 要啟動codespaces裡要先輸入chmod x+u init_replit把模組安裝 接下來輸入python3 main.py來開啟（類似replit中的Run鍵） 推送的步驟如下 git add . git commit -m \"modify site title\" git push 完成後回到網頁確認更新完畢 網頁給的cpu為二核 8gb的ram跟32gb的內存 內容管理系統","tags":"w5","url":"./cd2024-2a-w5-PRB.html"},{"title":"W4","text":"2024 Spring 第四週 影片上字幕 內容管理系統 w4 1.各組員協助將老師的教學影片上字幕。 2.影片逐字稿產生。 3.組長統整全部影片。 4. 影片位於google雲端硬碟 5. 逐字稿位於google雲端硬碟","tags":"w4","url":"./cd2024-2a-w4-PRB.html"},{"title":"W3","text":"2024 Spring 第三週 翻譯作業 內容管理系統 w3 1.利用工具翻譯MS Teams裡的pdf，組員分工合作統整上傳。 2.頁數分組抽籤如下: 1-20 葉承軒、 21-31 黃育驊、 32-42 樊明睿、 43-53 張晏菖、 54-64 顏崇祐、 65-75 邱崑展、 76-87 段勝吉、 統整 田芸熏。 3.協助各組員加入midga1子模組。","tags":"w3","url":"./cd2024-2a-w3-PRB.html"},{"title":"W2","text":"2024 Spring 第二週 分組 內容管理系統 w2 1.組別:midag1 組員名單: 41123124張晏菖(組長)、 41123101田芸熏、 41123120段勝吉、 41123140葉承軒、 41123146樊明睿、 41123150顏崇祐、 41136113邱崑展、 41136123黃育驊。 2.建立github分組倉儲提供組員加入。 3.製作組別倉儲ssh鑰匙。 4.import進入Replit。 Please enable JavaScript to view the comments powered by Disqus.","tags":"w2","url":"./cd2024-2a-w2-PRB.html"},{"title":"2024 Spring 課程","text":"2024 Spring 第一週 網誌 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2024-Spring-w1-blog-tutorial-PRB.html"}]};