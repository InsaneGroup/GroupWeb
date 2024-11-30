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
        name: "about",
        link: "../assets/img/about.webp"
    },
    {
        name: "home",
        link: "../assets/img/home.webp"
    },
    {
        name: "practice",
        link: "../assets/img/practice.webp"
    },
    {
        name: "profile",
        link: "../assets/img/profile.webp"
    },
    {
        name: "login",
        link: "../assets/img/login.webp"
    },
    {
        name: "login",
        link: "../assets/img/login_1.webp"
    },
    {
        name: "register",
        link: "../assets/img/register.webp"
    },
    {
        name: "register",
        link: "../assets/img/register1.webp"
    },
    {
        name: "course",
        link: "../assets/img/courses_1.webp"
    },
    {
        name: "course",
        link: "../assets/img/courses_2.webp"
    },
    {
        name: "home project",
        link: "../assets/img/home_project.webp"
    },
    {
        name: "stuff",
        link: "../assets/img/stuff.webp"
    },
    {
        name: "video",
        link: "../assets/img/video.webp"
    },
    {
        name: "group diary",
        link: "../assets/img/group_diary.webp"
    },
    {
        name: "forgot password",
        link: "../assets/img/forgot_pass_1.webp"
    },
    {
        name: "forgot password",
        link: "../assets/img/forgot_pass_2.webp"
    },
    {
        name: "progress",
        link: "../assets/img/progress.webp"
    },
    {
        name: "project",
        link: "../assets/img/project.webp"
    },
]


const memberInfo = [
    {
        name: "Nguyễn Thành Phát",
        id: "23130231",
        img: "../assets/imgs/male1.webp",
        position: "Trưởng nhóm",
        info: "Nguyễn Thành Phát là phụ trách phân công và tổng hợp web. Sinh viên khoa công nghệ thông tin (khóa 49) năm 2 Trường Đại học Nông Lâm."
    },
    {
        name: "Nguyễn Thị Hương Lan",
        id: "23130168",
        img: "../assets/imgs/female1.webp",
        position: "Thiết kế giao diện",
        info: "Nguyễn Thị Hương Lan phụ trách thiết kế giao diện người dùng và tạo ra trải nghiệm tuyệt vời cho người dùng. Sinh viên năm hai khoa công nghệ thông tin (khóa 49) trường đại học Nông Lâm."
    },
    {
        name: "Trần Lê Phúc An",
        id: "23130004",
        img: "../assets/imgs/female3.webp",
        position: "Phân tích dữ liệu",
        info: "Trần Lê Phúc An phụ trách phân tích dữ liệu công việc, thiết thiết kế giới thiệu nhóm. Sinh viên năm hai khoa công nghệ thông tin (khóa 49) trường đại học Nông Lâm."
    },
    {
        name: "Châu Thị Thúy Quỳnh",
        id: "23130265",
        img: "../assets/imgs/female2.webp",
        position: "Lập trình viên",
        info: "Châu Thị Thúy Quỳnh phụ trách thiết kế đăng nhập, đăng ký người dùng. Sinh viên năm hai khoa công nghệ thông tin (khóa 49) trường đại học Nông Lâm."
    },
    {
        name: "Chu Tấn Tài",
        id: "23130280",
        img: "../assets/imgs/male2.webp",
        position: "Lập trình viên",
        info: "Chu Tấn Tài phụ trách thiết kế nội dung học toán cho người dùng. Sinh viên năm hai khoa công nghệ thông tin (khóa 49) trường đại học Nông Lâm."
    },
]



//do code
function backtoHome()
{
    window.location.href = `../index.html`
}

function reloadPage()
{
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




navTabs.forEach((tab, index)=>
{
   
    tab.addEventListener('click', function()
    {
        $('.nav-tab.active').classList.remove('active')

        this.classList.add('active')
    })
})




const renderMember = (name, link, index)=>
{
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


const renderDetails = (name, link, id, pos, info)=>
{
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
                    <a href="https://facebook.com"><i class='bx bxl-facebook'></i></a>
                    <a href="https://github.com"><i class='bx bxl-github'></i></a>
                    <a href="https://google.com"><i class='bx bxl-google'></i></a>
                </div>
            </div>
            
            <div class="right-container">
                <p><i class='bx bx-briefcase'></i> ${pos}</p>
                <p><i class='bx bx-user'></i> ${name}</p>
                <p><i class='bx bx-barcode'></i> ${id}</p>
                <p><i class='bx bx-envelope'></i> ${id}@st.hcmuaf.edu.vn</p>
                <p><i class='bx bx-info-circle'></i> ${info}</p>
            </div>
        </div>
    `
    return bigInfo
}


const renderSideMember = ()=>
{
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


const showMembers = ()=>
{
       if(memberContainer)  
       {
            memberContainer.replaceChildren()
       }
        memberInfo.forEach((member, index)=>
        {
            if(memberContainer)
            {
                memberContainer.appendChild(renderMember(member.name, member.img, index+1))
            }
        })
        repeatShow()
}

const showSideMember = ()=>
{
    if(aboutSection)
    {
        aboutSection.appendChild(renderSideMember())
    }
}

showSideMember()
if($('.side-member'))
{
    $('.side-member').style.display = `none`
}
const imgMebers = $$('.img-mem')

imgMebers.forEach((member, index)=>
{
    const mem = memberInfo[index]
    member.addEventListener('click', function()
    {
        $('.img-mem.active').classList.remove('active')
        this.classList.add('active')
        memberContainer.replaceChildren()

        const bigInfo = renderDetails(mem.name, mem.img, mem.id, mem.position, mem.info)
        const button = bigInfo.querySelector('button')
        button.addEventListener('click', ()=>
            {
                memberContainer.replaceChildren()
                $('.side-member').style.display = `none` 
                showMembers()
            })
        
        memberContainer.appendChild(bigInfo)
    })
})


const repeatShow = ()=>
{
    const boxes = $$('.box')
    boxes.forEach((box, index)=>
    {
        const mem = memberInfo[index]
        const imgMem = imgMebers[index]
        box.addEventListener('click', function()
        {
            memberContainer.replaceChildren()

            $('.side-member').style.display = `flex`  
            $('.img-mem.active').classList.remove('active') 
            imgMem.classList.add('active')

            const bigInfo = renderDetails(mem.name, mem.img, mem.id, mem.position, mem.info)
            const button = bigInfo.querySelector('button')
            button.addEventListener('click', ()=>
                {
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




const renderTable = (stt, mssv, name, task, result, progress)=>
{
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
.then(data =>
{
    const workbook = XLSX.read(data, {type: 'array', raw: true})
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]
    const jsonData = XLSX.utils.sheet_to_json(sheet)
    jsonData.forEach(dt => 
        {
            if(table_body)
            {
                table_body.appendChild(renderTable(dt.No, dt.StudentID, dt.FullName, dt.AssignedTask, dt.Result, dt.Progress))
            }
        }
    )
}).catch(err =>
{
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





const renderRequirement = ()=>
{
    const reqireContent = document.createElement('div')
    reqireContent.classList.add('requirement-content')
    reqireContent.innerHTML =  `
                <h2>Chức năng chính</h2>
                <ul>
                  <li>
                    <strong>Tìm kiếm bài học:</strong> Người dùng có thể tìm kiếm nội dung
                    bài học thông qua từ khóa, giúp tiết kiệm thời gian và nâng cao trải
                    nghiệm học tập.
                  </li>
                  <li>
                    <strong>Quản lý người dùng:</strong> Chức năng dành cho admin, cho
                    phép quản lý thông tin người dùng như xem danh sách, chỉnh sửa hoặc
                    xoá tài khoản không còn hoạt động.
                  </li>
                  <li>
                    <strong>Quản lý bài học:</strong> Admin có thể thêm, sửa, xoá và cập
                    nhật nội dung các bài học, đảm bảo rằng thông tin luôn được cập nhật
                    và chính xác.
                  </li>
                  <li>
                    <strong>Thống kê và Báo cáo:</strong> Cung cấp thông tin thống kê về
                    hoạt động của người dùng và các bài học, giúp admin theo dõi hiệu quả
                    hoạt động của nền tảng.
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
                        Phân công công việc, quản lí tiến độ.Tạo cấu trúc menu Group Diary
                        và các phần mục.
                      </td>
                    </tr>
                    <tr>
                    <td>Nguyễn Thị Hương Lan</td>
                    <td>
                    Quản lý chức năng Design: Xây dựng phần Quản lý người dùng và Quản
                    lý bài học
                    </td>
                    </tr>
                    <tr>
                    <td>Trần Lê Phúc An</td>
                    <td>
                    Quản lý chức năng: Liệt kê các chức năng của website và phân công
                    người thực hiện từng chức năng.
                    </td>
                    </tr>
                    <tr>
                      <td>Châu Thị Thúy Quỳnh</td>
                      <td>Hoàn thiện chức năng Login / Register / Forgot Pass</td>
                    </tr>
                    <tr>
                      <td>Chu Tấn Tài</td>
                      <td>
                        Quản lý chức năng: Tạo phần HTML cho các chức năng của website như
                        đăng ký, đăng nhập, tìm kiếm bài học, v.v...
                      </td>
                    </tr>
                  </tbody>
                </table>
    `

    return reqireContent
}

const renderImage = (name, link)=>
{
    const img = document.createElement('div')
    img.classList.add('image-box')
    img.innerHTML = `
            <img src="${link}" loading="lazy">
            <div class="caption">${name}</div>
        `
    return img
}



const renderImageBox = ()=>
{
    const imgBox = document.createElement('div')
    imgBox.classList.add('design-content')

    imgInfo.forEach(inf =>
    {
        imgBox.appendChild(renderImage(inf.name, inf.link))
    }
    )
    return imgBox
}


const renderImplementation = ()=>
{
    const impleContent = document.createElement('div')
    impleContent.classList.add('implementation-content')
    impleContent.innerHTML = `

        <button class="funcBtn">Login</button>
        <button class="funcBtn">Register</button>
        <button class="funcBtn">Forgot password</button>
    `
    return impleContent
}


// const imgBox = renderImageBox()


const showRequire = ()=>
{
    if(mainContent) mainContent.appendChild(renderRequirement())
}

const showDesign = ()=>
{
    if(mainContent) mainContent.appendChild(renderImageBox())
}

const showImplementation = ()=>
{
    if(mainContent) mainContent.appendChild(renderImplementation())
}



showRequire()
// showDesign()
// showImplementation()
const projectTabs = [()=> showRequire(), ()=>showDesign(), ()=>showImplementation()]


proTabs.forEach((tab, index)=>
    {
        
        tab.addEventListener('click', function()
        {
            $('.proTab.active').classList.remove('active')
            this.classList.add('active')  
            mainContent.replaceChildren()
            projectTabs[index]()
            if(index === 2)
            {
                const funcBtn = $$('.funcBtn')
                const webProjectFunction = [
                    ()=>renderLogin(),
                    ()=>renderRegister(),
                    ()=>renderForgotPassword()
                ]
                
                if(funcBtn)
                {
                    funcBtn.forEach((btn, index) =>
                        {
                            btn.addEventListener('click', ()=>
                            {
                                mainContent.replaceChildren()
                                mainContent.appendChild(webProjectFunction[index]())
                            })
                        }
                        )
                }
            }
            
        })
    })





// <---------------------------------------THIS IS LOGIN------------------------------------>


const renderLogin = ()=>
{
    const containerLogin = document.createElement('div')
    containerLogin.classList.add('container')
    containerLogin.innerHTML = 
    `
        <button class="back-btn" onclick="toggleForms()"> < Back</button>
        <h1>LOG IN</h1>
        <p class="login-text">Don't have an account? <a href="#" onclick="toggleForms()">Register</a></p>
        <form>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Enter your password" required>
            <a href="#" class="forgot-password" onclick="showForgotPasswordForm()">Forgot password?</a>
            <button type="submit" class="btn">Log in</button>
            <div class="divider">Or login with</div>
            <div class="social-buttons">
                <button type="button" class="social-btn">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google"> Google
                </button>
                <button type="button" class="social-btn">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="Facebook"> Facebook
                </button>
            </div>
        </form>
    `
    return containerLogin
}


const renderRegister = ()=>
{
    const containerRegister = document.createElement('div')
    containerRegister.classList.add('container')
    containerRegister.innerHTML = `
        <button class="back-btn" onclick="toggleForms()"> < Back</button>
        <h1>Create an account</h1>
        <p class="login-text">Already have an account? <a href="#" onclick="toggleForms()">Log in</a></p>
        <form>
            <div class="input-group">
                <input type="text" placeholder="Name" required>
                <input type="text" placeholder="Last Name" required>
            </div>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Enter your password" required>
            <div class="checkbox-group">
                <input type="checkbox" id="agree" required>
                <label for="agree">I agree to the terms and conditions</label>
            </div>
            <button type="submit" class="btn">Create account</button>
            <div class="divider">Or register with</div>
            <div class="social-buttons">
                <button type="button" class="social-btn">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google"> Google
                </button>
                <button type="button" class="social-btn">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="Facebook"> Facebook
                </button>
            </div>
        </form>
    `
    return containerRegister
}

const renderForgotPassword = ()=>
{
    const containerPass = document.createElement('div')
    containerPass.classList.add('container')
    containerPass.innerHTML = `
        <button class="back-btn" onclick="toggleForms()"> < Back</button>
        <h1>Forgot password?</h1>
        <p class="message">No worries, we'll send you reset instructions.</p>
        <form onsubmit="handleForgotPassword(event)">
            <label for="resetEmail" class="label">Email</label>
            <input type="email" id="resetEmail" placeholder="Enter your email" required>
            <button type="submit" class="btn">Reset password</button>
            
            <div class="success-message hidden" id="successMessage">
                Password reset instructions have been sent to your email!
            </div>
            <div class="error-message hidden" id="errorMessage">
                Email not found. Please try again.
            </div>
        </form>
    `
    return containerPass
}




