// import * as XLSX from 'xlsx';
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const filePath = '../assets/fileData/task.xlsx'



//declare variables
const navTabs = $$('.nav-tab')
const logo = $('#logo')
const slide = $('#slide')
const memberContainer = $('.member-container')
const weekBtns = $$('.week-btn')
const diarySection = $('.diary-section')
const table_body = $('.table-body')
const table = $('table')
const proTabs = $$('.proTab')
const mainContent = $('.main-content')
const designContent = $('.design-content')
const aboutSection = $('.about-section')



const imgInfo = [
    {
        name: "Home",
        link: "../assets/img/home.webp"
    },
    {
        name: "About",
        link: "../assets/img/about.webp"
    },
    {
        name: "Group diary",
        link: "../assets/img/group_diary.webp"
    },
    {
        name: "Project",
        link: "../assets/img/project.webp"
    },
    {
        name: "Home Project",
        link: "../assets/img/home_project.webp"
    },
    {
        name: "Recipes",
        link: "../assets/img/recipes.webp"
    },
    {
        name: "Recipes_01",
        link: "../assets/img/recipes1.webp"
    },
    {
        name: "Recipes_02",
        link: "../assets/img/recipes2.webp"
    },
    {
        name: "Blog",
        link: "../assets/img/blog.webp"
    },
    {
        name: "Contact us",
        link: "../assets/img/contact.webp"
    },
    {
        name: "Login",
        link: "../assets/img/login.webp"
    },
    {
        name: "Register",
        link: "../assets/img/register.webp"
    },
    {
        name: "forgot password",
        link: "../assets/img/forgot_pass.webp"
    }
]


const memberInfo = [
    {
        name: "Nguyễn Thành Phát",
        id: "23130231",
        img: "../assets/imgs/male1.webp",
        position: "Trưởng nhóm",
        info: "Nguyễn Thành Phát là phụ trách phân công và tổng hợp web. Sinh viên khoa công nghệ thông tin (khóa 49) năm 2 Trường Đại học Nông Lâm.",
        result: "https://tinyboy2805.github.io/PersonalResult/",
        result_content: 'My result',
        fb: 'https://www.facebook.com/TinyBoy28',
        github: 'https://github.com/TinyBoy2805'
    },
    {
        name: "Nguyễn Thị Hương Lan",
        id: "23130168",
        img: "../assets/imgs/female1.webp",
        position: "Thiết kế giao diện",
        info: "Nguyễn Thị Hương Lan phụ trách thiết kế giao diện người dùng và tạo ra trải nghiệm tuyệt vời cho người dùng. Sinh viên năm hai khoa công nghệ thông tin (khóa 49) trường đại học Nông Lâm.",
        result: "https://becon1206.github.io/MyProject/",
         result_content: 'My result',
         fb: 'https://www.facebook.com/isuel.lan',
         github: 'https://github.com/Becon1206'
    },
    {
        name: "Trần Lê Phúc An",
        id: "23130004",
        img: "../assets/imgs/female3.webp",
        position: "",
        info: "",
        result: "",
        result_content: '',
        fb: '',
        github: ''
    },
    {
        name: "Châu Thị Thúy Quỳnh",
        id: "23130265",
        img: "../assets/imgs/female2.webp",
        position: "",
        info: "",
        result: "",
        result_content: '',
        fb: '',
        github: ''
    },
    {
        name: "Chu Tấn Tài",
        id: "23130280",
        img: "../assets/imgs/male2.webp",
        position: "",
        info: "",
        result: "",
        result_content: '',
        fb: '',
        github: ''
    },
]



//do code
function backtoHome() {
    window.location.href = `../index.html`
}

function reloadPage() {
    window.location.reload()
}



// fetch(filePath)
// .then(res => res.arrayBuffer())
// .then(data =>
// {
//     const workbook = XLSX.read(data, {type: 'array'})
//     const sheetName = workbook.SheetNames[0]
//     const sheet = workbook.Sheets[sheetName]
//     const jsonData = XLSX.utils.sheet_to_json(sheet)
//     jsonData.forEach(dt => 
//         {
//             console.log(dt.Progress);

//         }
//     )


// }).catch(err =>
// {
//     console.log('Error loading Excel file:', err);
// })




navTabs.forEach((tab, index) => {

    tab.addEventListener('click', function () {
        $('.nav-tab.active').classList.remove('active')

        this.classList.add('active')
    })
})




const renderMember = (name, link, index) => {
    const box = document.createElement('div')
    box.classList.add('box')
    box.style = `--i: ${index}`

    box.innerHTML = `
        <div id="image">
            <img src="${link}" alt="" loading="lazy">
        </div>
        <p>${name}</p>
    `
    return box
}


const renderDetails = (name, link, id, pos, info, result, result_content, fb, github) => {
    const bigInfo = document.createElement('div')
    bigInfo.classList.add('bigInfo')

    bigInfo.innerHTML = `
        <div class="info-container">
            <button>X</button>
            <div class="left-container">
                <div id="img">
                    <img src="${link}" alt="" loading="lazy">
                </div>
                <div id="contact">
                    <a href="${fb}"><i class='bx bxl-facebook'></i></a>
                    <a href="${github}"><i class='bx bxl-github'></i></a>
                    <a href="https://google.com"><i class='bx bxl-google'></i></a>
                </div>
            </div>
            
            <div class="right-container">
                <p><i class='bx bx-briefcase'></i> ${pos}</p>
                <p><i class='bx bx-user'></i> ${name}</p>
                <p><i class='bx bx-barcode'></i> ${id}</p>
                <p><i class='bx bx-envelope'></i> ${id}@st.hcmuaf.edu.vn</p>
                <p><i class='bx bx-info-circle'></i> ${info}</p>
                <p><i class='bx bxs-balloon'></i> <a href=${result}>${result_content}</a></p>
                
            </div>
        </div>
    `
    return bigInfo
}


const renderSideMember = () => {
    const sideMem = document.createElement('div')
    sideMem.classList.add('side-member')
    sideMem.innerHTML = `
    <div class="img-mem active" style="--i:1">
        <img src="../assets/imgs/male1.webp" alt="" loading="lazy">
    </div>
    <div class="img-mem" style="--i:2">
      <img src="../assets/imgs/female1.webp" alt="" loading="lazy">
    </div>
    <div class="img-mem" style="--i:3">
      <img src="../assets/imgs/female3.webp" alt="" loading="lazy">
    </div>
    <div class="img-mem" style="--i:4">
      <img src="../assets/imgs/female2.webp" alt="" loading="lazy">
    </div>
    <div class="img-mem" style="--i:5">
      <img src="../assets/imgs/male2.webp" alt="" loading="lazy">
    </div>
    `
    return sideMem
}


const showMembers = () => {
    if (memberContainer) {
        memberContainer.replaceChildren()
    }
    memberInfo.forEach((member, index) => {
        if (memberContainer) {
            memberContainer.appendChild(renderMember(member.name, member.img, index + 1))
        }
    })
    repeatShow()
}

const showSideMember = () => {
    if (aboutSection) {
        aboutSection.appendChild(renderSideMember())
    }
}

showSideMember()
if ($('.side-member')) {
    $('.side-member').style.display = `none`
}
const imgMebers = $$('.img-mem')

imgMebers.forEach((member, index) => {
    const mem = memberInfo[index]
    member.addEventListener('click', function () {
        $('.img-mem.active').classList.remove('active')
        this.classList.add('active')
        memberContainer.replaceChildren()

       
       
        const bigInfo = renderDetails(mem?.name || '', mem?.img || '', mem?.id || '',
             mem?.position || '', mem?.info || '', mem?.result || '', mem?.result_content, mem?.fb, mem?.github)
        const button = bigInfo.querySelector('button')
        button.addEventListener('click', () => {
            memberContainer.replaceChildren()
            $('.side-member').style.display = `none`
            showMembers()
        })

        memberContainer.appendChild(bigInfo)
    })
})


const repeatShow = () => {
    const boxes = $$('.box')
    boxes.forEach((box, index) => {
        const mem = memberInfo[index]
        const imgMem = imgMebers[index]
        box.addEventListener('click', function () {
            memberContainer.replaceChildren()

            $('.side-member').style.display = `flex`
            $('.img-mem.active').classList.remove('active')
            imgMem.classList.add('active')

           

            const bigInfo = renderDetails(mem?.name || '', mem?.img || '', mem?.id || '',
                mem?.position || '', mem?.info || '', mem?.result || '', mem?.result_content, mem?.fb, mem?.github)
            const button = bigInfo.querySelector('button')
            button.addEventListener('click', () => {
                memberContainer.replaceChildren()
                $('.side-member').style.display = `none`
                showMembers()
            })

            memberContainer.appendChild(bigInfo)

        })
    })
}
showMembers()
repeatShow()




const renderTable = (stt, mssv, name, task, result, progress) => {
    const tableRow = document.createElement('tr')
    tableRow.classList.add('t-row')
    tableRow.innerHTML = `
            <td>${stt}</td>
            <td>${mssv}</td>
            <td>${name}</td>
            <td>${task}</td>    
            <td>${result}</td>
            <td>${progress}%</td>
    `
    return tableRow
}


fetch(filePath)
    .then(res => res.arrayBuffer())
    .then(data => {
        const workbook = XLSX.read(data, { type: 'array', raw: true })
        const sheetName = workbook.SheetNames[0]
        const sheet = workbook.Sheets[sheetName]
        const jsonData = XLSX.utils.sheet_to_json(sheet)
        jsonData.forEach(dt => {
            if (table_body) {
                table_body.appendChild(renderTable(dt.No, dt.StudentID, dt.FullName, dt.AssignedTask, dt.Result, dt.Progress))
            }
        }
        )
    }).catch(err => {
        console.log('Error loading Excel file:', err);
    })




let sheetDataCache = [];
fetch(filePath)
    .then(res => res.arrayBuffer())
    .then(data => {
        const workbook = XLSX.read(data, { type: 'array', raw: true });
        sheetDataCache = workbook.SheetNames.map(sheetName =>
            XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
        );
    })
    .catch(err => {
        console.log('Error loading Excel file:', err);
    });

weekBtns.forEach((btn, index) => {
    btn.addEventListener('click', function () {
        $('.week-btn.active').classList.remove('active');
        table_body.replaceChildren();

        const jsonData = sheetDataCache[index] || [];
        jsonData.forEach(dt => {
            if (table_body) {
                table_body.appendChild(
                    renderTable(dt.No, dt.StudentID, dt.FullName, dt.AssignedTask, dt.Result, dt.Progress)
                );
            }
        });
        this.classList.add('active');
    });
});





const renderRequirement = () => {
    const reqireContent = document.createElement('div')
    reqireContent.classList.add('requirement-content')
    reqireContent.innerHTML = `
                <h2>Chức năng chính</h2>
                <ul>
                  <li>
                    <strong>Tìm kiếm các công thức món ăn :</strong> Cho phép người dùng tìm kiếm các công thức nấu ăn qua từ khóa, nguyên liệu, thời gian chuẩn bị, hoặc loại món ăn (món chính, món tráng miệng, món ăn nhẹ, v.v.).
                  </li>
                  <li>
                    <strong>Chia sẻ công thức :</strong> Người dùng có thể đăng tải công thức của mình, chia sẻ những món ăn tự nấu, đồng thời có thể kèm theo hình ảnh hoặc video hướng dẫn chi tiết.
                  </li>
                  <li>
                    <strong>Lưu và tạo bộ sưu tập công thức :</strong> Cho phép người dùng lưu lại những công thức yêu thích và tạo bộ sưu tập riêng để dễ dàng tham khảo lại.
                    và chính xác.
                  </li>
                  <li>
                    <strong>Hướng dẫn từng bước :</strong> Công thức sẽ được trình bày rõ ràng, thường kèm theo các bước hướng dẫn chi tiết, hình ảnh hoặc video minh họa để người dùng dễ dàng thực hiện.
                  </li>
                  <li>
                    <strong>Thông tin dinh dưỡng :</strong> Cung cấp thông tin về giá trị dinh dưỡng của các món ăn, giúp người dùng chọn lựa món ăn phù hợp với nhu cầu sức khỏe của mình.
                  </li>
                  <li>
                    <strong>Kết nối cộng đồng :</strong> Tạo không gian để người dùng giao lưu, học hỏi lẫn nhau, thảo luận về các công thức, nguyên liệu và kỹ thuật nấu ăn.
                  </li>
                  <li>
                    <strong>Tính năng tương tác và cá nhân hóa :</strong> Đề xuất công thức dựa trên sở thích, thói quen ăn uống, hoặc các món ăn đã thử trước đây, giúp cá nhân hóa trải nghiệm của người dùng.
                  </li>
                </ul>
          
                <h2>Phân công nhiệm vụ</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Tên thành viên</th>
                      <th>Nhiệm vụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nguyễn Thành Phát</td>
                      <td>
                          Quản lý, tổng hợp code, hoàn thiện project.

                      </td>
                    </tr>
                    <tr>
                    <td>Nguyễn Thị Hương Lan</td>
                    <td>
                        Design, tối ưu ảnh, hoàn thiện project.
                    </td>
                    </tr>
                    <tr>
                    <td>Trần Lê Phúc An</td>
                    <td></td>
                    </tr>
                    <tr>
                      <td>Châu Thị Thúy Quỳnh</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Chu Tấn Tài</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <h2>Style Guide</h2>
                <h3>webProject</h3>
                <ul>
                  <li>
                    <strong>Layout:</strong>
                    <div>Header</div>
                    <div>Content</div>
                    <div>Footer</div>
                  </li>
                  <li>
                    <strong>Typography:</strong> 
                     <div>Font: Lato, sans serif</div>
                      <div>Header font-size: 30-35</div>
                      <div>Paragraph  font-size: 14-20</div>
                      <div>Button/Text nhỏ font-size: 16-20</div>
                     
                  </li>
                  <li>
                    <strong>Color Pallet</strong> 
                        <div>--c1: #151419;</div>
                        <div>--c2: #f87313;</div>
                        <div>--c3: #1b1b1e;</div>
                        <div>--c4: #262626;</div>
                        <div>--c5: #878787;</div>
                        <div>--c6: #fbfbfb;</div>
                  </li>
                   <li>
                    <strong>Images</strong> 
                        <div>Kích thước linh hoạt tùy phần</div>
                  </li>
                   <li>
                    <strong>File và Directory Structure</strong> 
                         <div>RecipeWeb/</div>
                         <div>│</div>
                         <div>├── assets/             </div>
                         <div>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── API/         </div>
                         <div>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── images/         </div>
                         <div>│</div>
                         <div>├── src/              </div>
                         <div>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── HTML</div>
                         <div>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── CSS</div>
                         <div>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── JS</div>
                         <div>│</div>
                         <div>└── index.html           </div>
                  </li>
                </ul>
                <h3>webGroup</h3>
                <ul>
                  <li>
                    <strong>Layout:</strong>
                    <div>Header</div>
                    <div>Content</div>
                    <div>Footer</div>
                  </li>
                  <li>
                    <strong>Typography:</strong> 
                     <div>Font: Quicksand, sans serif</div>
                      <div>Header font-size: 30-35</div>
                      <div>Paragraph  font-size: 14-20</div>
                      <div>Button/Text nhỏ font-size: 16-20</div>
                     
                  </li>
                  <li>
                    <strong>Color Pallet</strong> 
                        <div>--bright-gray: #e9efec;</div>
                        <div>--snow: #fafafa;</div>
                        <div>--white1: #FBFBFB;</div>
                        <div>--white2: #FCFAEE;</div>
                        <div>--darka: #2b2b2b;</div>
                        <div>--c1: #0b0b0b;</div>
                        <div>--c3: #2d2d2d;</div>
                        <div>--draw2: #ffffff;</div>
                        <div>--draw3: #d3d3d3;</div>
                        <div>--draw4: #4f4f4f;</div>
                        <div>--draw5: #D2B48C;</div>
                        <div>--draw6: #2C3E50;</div>
                        <div>--draw7: #F5F5DC;</div>
                        <div>--draw8: #808080;</div>

                  </li>
                   <li>
                    <strong>Images</strong> 
                        <div>Kích thước linh hoạt tùy phần</div>
                  </li>
                   <li>
                    <strong>File và Directory Structure</strong> 
                         <div>Group11/</div>
                         <div>│</div>
                         <div>├── assets/</div>
                         <div>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── fileData/  </div>
                         <div>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── img/ </div>
                         <div>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── imgs/ </div>
                         <div>│</div>
                         <div>├── HTML/</div>
                         <div>├── CSS/</div>
                         <div>└── JS/</div>
                         <div>│</div>
                         <div>└── index.html           </div>
                  </li>
                </ul>
    `

    return reqireContent
}

const renderImage = (name, link) => {
    const img = document.createElement('div')
    img.classList.add('image-box')
    img.innerHTML = `
            <img src="${link}" loading="lazy">
            <div class="caption">${name}</div>
        `
    return img
}



const renderImageBox = () => {
    const imgBox = document.createElement('div')
    imgBox.classList.add('design-content')

    imgInfo.forEach(inf => {
        imgBox.appendChild(renderImage(inf.name, inf.link))
    }
    )
    return imgBox
}


const renderImplementation = () => {
    const impleContent = document.createElement('div')
    impleContent.classList.add('implementation-content')
    impleContent.innerHTML = `

        <button class="funcBtn">Login</button>
        <button class="funcBtn">Register</button>
        <button class="funcBtn">Forgot password</button>
        <button class="funcBtn">Home</button>
        <button class="funcBtn">Recipes</button>
        <button class="funcBtn">Categories</button>
        <button class="funcBtn">Blog</button>
        <button class="funcBtn">Contact us</button>
    `
    return impleContent
}


// const imgBox = renderImageBox()


const showRequire = () => {
    if (mainContent) mainContent.appendChild(renderRequirement())
}

const showDesign = () => {
    if (mainContent) mainContent.appendChild(renderImageBox())
}

const showImplementation = () => {
    if (mainContent) mainContent.appendChild(renderImplementation())
}



showRequire()
// showDesign()
// showImplementation()
const projectTabs = [() => showRequire(), () => showDesign(), () => showImplementation()]


proTabs.forEach((tab, index) => {

    tab.addEventListener('click', function () {
        $('.proTab.active').classList.remove('active')
        this.classList.add('active')
        mainContent.replaceChildren()
        projectTabs[index]()

        if(index === 1)
            {
                if($('.design-content')) 
                {
                    
                    const img_box = $$('.image-box')
                     
                    img_box.forEach(box =>
                    {
                        box.addEventListener('click', ()=>
                        {
                            const imgLink = box.querySelector('img').src
                            const dwn_img = renderDownloadImg(imgLink)
                            mainContent.appendChild(dwn_img)

                            const closeBtn = dwn_img.querySelector('.closeBtn')
                            closeBtn.addEventListener('click', ()=>
                            {
                                mainContent.removeChild(dwn_img)
                            })
                            
                        }
                    )
                    }
                    )
                     
                }
                
                     
                 
            }

        if (index === 2) {
            
           if($$('.implementation-content'))
           {
                const funcBtn = $$('.funcBtn')
                
                funcBtn.forEach((btn, index) =>
                {
                    btn.addEventListener('click', ()=>
                    {
                        webProjectFunction[index]()
                    })
                    
                })
                
            
           }

           


        }

    })
})



const renderDownloadImg = (imglink)=>
{
    const show = document.createElement('div')
    show.classList.add('show-img')
    show.innerHTML = `
        <div class="closeBtn">X</div>
        <div class="img-item">
            <img src="${imglink}" alt="" loading="lazy">
        </div>
        <a href="${imglink}" download>Download</a>
          
    `
    return show
}


const Iframe = ()=>
{
    const iframe = document.createElement('div')
    iframe.classList.add('iframe')
    iframe.innerHTML = 
            `
                <iframe src="" frameborder="0"></iframe>
            `

    return iframe
    

}




const webProjectFunction = [
    () => renderLogin(),
    () => renderRegister(),
    () => renderForgotPassword(),
    () => renderHome(),
    () => renderRecipes(),
    () => renderCatergories(),
    () => renderBlog(),
    () => renderContact(),
]




function renderLogin()
{
    mainContent.replaceChildren()
    const iframe_container = Iframe()
    const iframe = iframe_container.querySelector('iframe')
    iframe.src = 'https://insanegroup.github.io/WebProject/src/html/login.html'
    mainContent.appendChild(iframe_container)
    
}
function renderRegister()
{
    mainContent.replaceChildren()
    const iframe_container = Iframe()
    const iframe = iframe_container.querySelector('iframe')
    iframe.src = 'https://insanegroup.github.io/WebProject/src/html/login.html'
    mainContent.appendChild(iframe_container)
}
function renderForgotPassword()
{
    mainContent.replaceChildren()
    const iframe_container = Iframe()
    const iframe = iframe_container.querySelector('iframe')
    iframe.src = 'https://insanegroup.github.io/WebProject/src/html/forgot.html'
    mainContent.appendChild(iframe_container)
}
function renderHome()
{
    mainContent.replaceChildren()
    const iframe_container = Iframe()
    const iframe = iframe_container.querySelector('iframe')
    iframe.src = 'https://insanegroup.github.io/WebProject/index.html'
    mainContent.appendChild(iframe_container)
}
function renderRecipes()
{
    mainContent.replaceChildren()
    const iframe_container = Iframe()
    const iframe = iframe_container.querySelector('iframe')
    iframe.src = 'https://insanegroup.github.io/WebProject/src/html/recipes.html'
    mainContent.appendChild(iframe_container)
}
function renderCatergories()
{
    mainContent.replaceChildren()
    const iframe_container = Iframe()
    const iframe = iframe_container.querySelector('iframe')
    iframe.src = 'https://insanegroup.github.io/WebProject/src/html/catagories.html'
    mainContent.appendChild(iframe_container)
}

function renderBlog()
{
    mainContent.replaceChildren()
    const iframe_container = Iframe()
    const iframe = iframe_container.querySelector('iframe')
    iframe.src = 'https://insanegroup.github.io/WebProject/src/html/blog.html'
    mainContent.appendChild(iframe_container)
}
function renderContact()
{
    mainContent.replaceChildren()
    const iframe_container = Iframe()
    const iframe = iframe_container.querySelector('iframe')
    iframe.src = 'https://insanegroup.github.io/WebProject/src/html/contact.html'
    mainContent.appendChild(iframe_container)
}





// <---------------------------------------THIS IS LOGIN------------------------------------>






