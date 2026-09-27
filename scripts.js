/* =========================================
   P2 - THE LIFE OF A T-SHIRT
   ========================================= */

const timelineItems =
    document.querySelectorAll(".timeline-item");


if (timelineItems.length > 0) {

    const stepNumber =
        document.getElementById("step-number");

    const stepTitle =
        document.getElementById("step-title");

    const stepDescription =
        document.getElementById("step-description");

    const stepImpact =
        document.getElementById("step-impact");

    const timelineContent =
        document.querySelector(".timeline-content");

    const progressBar =
        document.getElementById("progress-bar");


    const steps = [

        {
            number: "GIAI ĐOẠN 01",
            title: "Nguyên liệu",

            description:
                "Để tạo ra quần áo, ngành dệt may cần sử dụng nhiều loại nguyên liệu khác nhau như cotton, polyester và các loại sợi tổng hợp.",

            impact:
                "Tiêu thụ tài nguyên"
        },


        {
            number: "GIAI ĐOẠN 02",
            title: "Sản xuất",

            description:
                "Nguyên liệu được xử lý, kéo sợi, dệt, nhuộm và may thành sản phẩm. Đây là quá trình tiêu thụ nhiều nước, năng lượng và hóa chất.",

            impact:
                "Nước thải và phát thải"
        },


        {
            number: "GIAI ĐOẠN 03",
            title: "Vận chuyển",

            description:
                "Sau khi sản xuất, quần áo được vận chuyển qua nhiều địa điểm trước khi đến cửa hàng hoặc tay người tiêu dùng.",

            impact:
                "Phát thải từ giao thông"
        },


        {
            number: "GIAI ĐOẠN 04",
            title: "Tiêu dùng",

            description:
                "Các xu hướng thời trang thay đổi nhanh chóng có thể khiến người tiêu dùng mua quần áo thường xuyên và sử dụng sản phẩm trong thời gian ngắn.",

            impact:
                "Gia tăng tiêu dùng"
        },


        {
            number: "GIAI ĐOẠN 05",
            title: "Thải bỏ",

            description:
                "Khi không còn được sử dụng, quần áo có thể được tái sử dụng, tái chế hoặc trở thành chất thải nếu không được xử lý phù hợp.",

            impact:
                "Gia tăng chất thải dệt may"
        }

    ];


    timelineItems.forEach(function(item) {

        item.addEventListener("click", function() {

            const step =
                Number(item.dataset.step);

            const data =
                steps[step];


            stepNumber.textContent =
                data.number;

            stepTitle.textContent =
                data.title;

            stepDescription.textContent =
                data.description;

            stepImpact.textContent =
                data.impact;


            timelineItems.forEach(function(button) {

                button.classList.remove("active");

            });


            item.classList.add("active");


            timelineContent.classList.remove("change");

            void timelineContent.offsetWidth;

            timelineContent.classList.add("change");


            progressBar.style.width =
                ((step + 1) / steps.length) * 100 + "%";

        });

    });

}


/* =========================================
   P3 - GIẢI PHÁP
   ========================================= */

const solutionTabs =
    document.querySelectorAll(".solution-tab");


if (solutionTabs.length > 0) {

    const solutionNumber =
        document.getElementById("solution-number");

    const solutionTitle =
        document.getElementById("solution-title");

    const solutionSubtitle =
        document.getElementById("solution-subtitle");

    const solutionDescription =
        document.getElementById("solution-description");


    const mainImage =
        document.getElementById("main-image");

    const mainImageLabel =
        document.getElementById("main-image-label");


    const galleryThumbnails =
        document.getElementById("gallery-thumbnails");

    const galleryCounter =
        document.getElementById("gallery-counter");


    const galleryPrev =
        document.getElementById("gallery-prev");

    const galleryNext =
        document.getElementById("gallery-next");


    const highlightTitle1 =
        document.getElementById("highlight-title-1");

    const highlightText1 =
        document.getElementById("highlight-text-1");

    const highlightTitle2 =
        document.getElementById("highlight-title-2");

    const highlightText2 =
        document.getElementById("highlight-text-2");

    const highlightTitle3 =
        document.getElementById("highlight-title-3");

    const highlightText3 =
        document.getElementById("highlight-text-3");


    const detailTitle =
        document.getElementById("detail-title");

    const detailGrid =
        document.getElementById("detail-grid");


    const summaryTitle =
        document.getElementById("summary-title");

    const summaryText =
        document.getElementById("summary-text");


    const solutionDisplay =
        document.querySelector(".solution-display");


    /* =====================================
       DỮ LIỆU 3 GIẢI PHÁP
       ===================================== */

    const solutions = [

        /* ================================
           GIẢI PHÁP 01
           ================================ */

        {

            number: "GIẢI PHÁP 01",

            title: "Ngày hội Đổi đồ",

            subtitle: "Clothing Swap Party",


            description:
                "Sự kiện giao lưu cộng đồng, nơi người tham gia mang trang phục hoặc phụ kiện cũ nhưng còn tốt đến để đổi lấy những món đồ khác mà không sử dụng tiền mặt.",


            images: [

                {
                    src: "images/swap-party.png",
                    label: "Ảnh tổng quan Clothing Swap Party"
                },

                {
                    src: "images/swap-party-2.png",
                    label: "Ảnh khu vực trưng bày quần áo"
                },

                {
                    src: "images/swap-party-3.png",
                    label: "Ảnh hoạt động trao đổi quần áo"
                }

            ],


            highlights: [

                {
                    title: "Giảm rác thải dệt may",

                    text:
                        "Mỗi món đồ được trao đổi là một sản phẩm tiếp tục được sử dụng thay vì nhanh chóng trở thành chất thải."
                },

                {
                    title: "Tiết kiệm tài chính",

                    text:
                        "Người tham gia có thể làm mới tủ đồ mà không cần sử dụng tiền mặt."
                },

                {
                    title: "Kết nối cộng đồng",

                    text:
                        "Tạo không gian gặp gỡ cho những người có chung lối sống xanh."
                }

            ],


            detailTitle:
                "4 bước của một Swap Party",


            details: [

                [
                    "01",
                    "Thu gom & Phân loại",
                    "Kiểm tra chất lượng, độ sạch sẽ và tình trạng của quần áo trước khi đưa vào sự kiện."
                ],

                [
                    "02",
                    "Quy đổi điểm",
                    "Mỗi món đồ đạt chuẩn được quy đổi thành điểm hoặc phiếu để sử dụng trong sự kiện."
                ],

                [
                    "03",
                    "Trưng bày & Lựa chọn",
                    "Quần áo được phân loại và trưng bày để người tham gia lựa chọn."
                ],

                [
                    "04",
                    "Xử lý đồ thừa",
                    "Đồ còn lại có thể được gửi tặng tổ chức từ thiện hoặc đơn vị tái chế."
                ]

            ],


            summaryTitle:
                "Một món đồ cũ vẫn có thể bắt đầu một vòng đời mới.",

            summaryText:
                "Swap Party biến việc trao đổi quần áo thành một hoạt động cộng đồng, vừa giảm lượng đồ bị thải bỏ vừa tạo ra trải nghiệm mua sắm không cần tiền mặt."

        },


        /* ================================
           GIẢI PHÁP 02
           ================================ */

        {

            number: "GIẢI PHÁP 02",

            title: "Trạm Refill Xanh",

            subtitle:
                "Bài học từ ngành mỹ phẩm",


            description:
                "Mô hình Trạm Refill Xanh của Cỏ Cây Hoa Lá cho thấy cách một sản phẩm có thể được sử dụng nhiều lần thay vì nhanh chóng trở thành rác thải.",


            images: [

                {
                    src: "images/GRS.png",
                    label: "Ảnh Trạm Refill Xanh"
                },

                {
                    src: "images/GRS-2.png",
                    label: "Ảnh khách hàng refill sản phẩm"
                },

                {
                    src: "images/GRS-3.png",
                    label: "Ảnh chai HDPE tái sử dụng"
                }

            ],


            highlights: [

                {
                    title: "Reuse & Refill",

                    text:
                        "Chuyển đổi tư duy từ dùng rồi vứt sang tái sử dụng nhiều lần."
                },

                {
                    title: "Thiết kế bền vững",

                    text:
                        "Bao bì được thiết kế để có thể vệ sinh và tái sử dụng nhiều lần."
                },

                {
                    title: "Trải nghiệm cộng đồng",

                    text:
                        "Mô hình refill biến hành động sống xanh thành một trải nghiệm gần gũi."
                }

            ],


            detailTitle:
                "Các bước của Trạm Refill",


            details: [

                [
                    "01",
                    "Chuẩn bị",
                    "Khách hàng mang vỏ chai cũ đã được vệ sinh đến trạm."
                ],

                [
                    "02",
                    "Refill & Dán nhãn",
                    "Chọn sản phẩm, bơm lượng cần dùng và dán nhãn hạn sử dụng mới."
                ],

                [
                    "03",
                    "Thanh toán & Tích điểm",
                    "Thanh toán theo lượng thực dùng và tích điểm cho những lần refill."
                ],

                [
                    "04",
                    "Refill lưu động",
                    "Mô hình có thể được đưa đến các sự kiện và không gian cộng đồng."
                ]

            ],


            summaryTitle:
                "Fast Fashion cũng có thể học cách kéo dài vòng đời.",

            summaryText:
                "Từ mô hình refill, ngành thời trang có thể phát triển các trạm sửa chữa, thu hồi quần áo, đổi đồ và chương trình tích điểm cho hành vi tiêu dùng bền vững."

        },


        /* ================================
           GIẢI PHÁP 03
           ================================ */

        {

            number: "GIẢI PHÁP 03",

            title: "Tắt Đèn Bật Ý Tưởng",

            subtitle:
                "Circular Fashion & CSR",


            description:
                "Chiến dịch của BOO kết hợp thu gom đồ cũ, tái chế, hoạt động cộng đồng và gây quỹ trồng rừng để biến thời trang cũ thành nguồn lực cho những giá trị mới.",


            images: [

                {
                    src: "images/tdbyt.png",
                    label: "Ảnh chiến dịch Tắt Đèn Bật Ý Tưởng"
                },

                {
                    src: "images/tdbyt-2.png",
                    label: "Ảnh Green Garage Sale & đổi đồ"
                },

                {
                    src: "images/tdbyt-3.png",
                    label: "Ảnh workshop Upcycling"
                }

            ],


            highlights: [

                {
                    title: "Thu gom & Tái chế",

                    text:
                        "Đồ cũ được thu gom và đưa vào các hoạt động tái sử dụng hoặc tái chế."
                },

                {
                    title: "Upcycling",

                    text:
                        "Workshop hướng dẫn biến quần áo cũ thành những sản phẩm mới như túi hoặc phụ kiện."
                },

                {
                    title: "Tạo giá trị cho thiên nhiên",

                    text:
                        "Nguồn lực từ hoạt động cộng đồng được chuyển hóa thành các hoạt động phủ xanh."
                }

            ],


            detailTitle:
                "Chuỗi trải nghiệm vòng tuần hoàn",


            details: [

                [
                    "01",
                    "Garage Sale & Đổi đồ",
                    "Khách hàng mang đồ cũ đến quyên góp hoặc đổi lấy voucher."
                ],

                [
                    "02",
                    "Gian hàng KOLs",
                    "Đồ quyên góp từ người nổi tiếng được bán lại để gây quỹ."
                ],

                [
                    "03",
                    "Workshop Upcycling",
                    "Cộng đồng tự tay biến đồ cũ thành sản phẩm mới."
                ],

                [
                    "04",
                    "Phủ xanh",
                    "Nguồn quỹ được chuyển hóa thành hoạt động trồng cây và phục hồi rừng."
                ]

            ],


            summaryTitle:
                "Từ rác thải dệt may đến giá trị mới.",

            summaryText:
                "Mô hình cho thấy thời trang bền vững có thể kết hợp giữa kinh doanh, hoạt động cộng đồng và trách nhiệm xã hội để tạo ra tác động rộng hơn."

        }

    ];


    /* =====================================
       BIẾN THEO DÕI
       ===================================== */

    let currentSolution = 0;

    let currentImage = 0;


    /* =====================================
       HIỂN THỊ GALLERY
       ===================================== */

    function updateGallery() {

        const solution =
            solutions[currentSolution];

        const image =
            solution.images[currentImage];


        mainImage.innerHTML = `
            <img
                src="${image.src}"
                alt="${image.label}"
            >
        `;


        galleryCounter.textContent =
            (currentImage + 1)
            + " / "
            + solution.images.length;


        galleryThumbnails.innerHTML = "";


        solution.images.forEach(
            function(image, index) {

                const button =
                    document.createElement("button");

                button.classList.add("thumbnail");


                if (index === currentImage) {

                    button.classList.add("active");

                }


                button.innerHTML = `
                    <img
                        src="${image.src}"
                        alt="${image.label}"
                    >
                `;


                button.addEventListener(
                    "click",
                    function() {

                        currentImage = index;

                        updateGallery();

                    }
                );


                galleryThumbnails.appendChild(button);

            }
        );

    }


    /* =====================================
       HIỂN THỊ GIẢI PHÁP
       ===================================== */

    function updateSolution(index) {

        const solution =
            solutions[index];


        currentSolution = index;

        currentImage = 0;


        solutionNumber.textContent =
            solution.number;

        solutionTitle.textContent =
            solution.title;

        solutionSubtitle.textContent =
            solution.subtitle;

        solutionDescription.textContent =
            solution.description;


        /* HIGHLIGHTS */

        highlightTitle1.textContent =
            solution.highlights[0].title;

        highlightText1.textContent =
            solution.highlights[0].text;


        highlightTitle2.textContent =
            solution.highlights[1].title;

        highlightText2.textContent =
            solution.highlights[1].text;


        highlightTitle3.textContent =
            solution.highlights[2].title;

        highlightText3.textContent =
            solution.highlights[2].text;


        /* DETAIL */

        detailTitle.textContent =
            solution.detailTitle;


        detailGrid.innerHTML = "";


        solution.details.forEach(
            function(detail) {

                const card =
                    document.createElement("div");

                card.classList.add(
                    "detail-card"
                );


                card.innerHTML = `

                    <span>
                        ${detail[0]}
                    </span>

                    <h3>
                        ${detail[1]}
                    </h3>

                    <p>
                        ${detail[2]}
                    </p>

                `;


                detailGrid.appendChild(card);

            }
        );


        /* SUMMARY */

        summaryTitle.textContent =
            solution.summaryTitle;

        summaryText.textContent =
            solution.summaryText;


        /* ACTIVE TAB */

        solutionTabs.forEach(
            function(tab) {

                tab.classList.remove(
                    "active"
                );

            }
        );


        solutionTabs[index].classList.add(
            "active"
        );


        /* GALLERY */

        updateGallery();


        /* ANIMATION */

        solutionDisplay.classList.remove(
            "change"
        );

        void solutionDisplay.offsetWidth;

        solutionDisplay.classList.add(
            "change"
        );

    }


    /* =====================================
       CLICK TAB
       ===================================== */

    solutionTabs.forEach(
        function(tab) {

            tab.addEventListener(
                "click",
                function() {

                    const index =
                        Number(
                            tab.dataset.solution
                        );

                    updateSolution(index);

                }
            );

        }
    );


    /* =====================================
       NÚT PREVIOUS
       ===================================== */

    galleryPrev.addEventListener(
        "click",
        function() {

            const total =
                solutions[currentSolution]
                .images.length;


            currentImage--;

            if (currentImage < 0) {

                currentImage =
                    total - 1;

            }


            updateGallery();

        }
    );


    /* =====================================
       NÚT NEXT
       ===================================== */

    galleryNext.addEventListener(
        "click",
        function() {

            const total =
                solutions[currentSolution]
                .images.length;


            currentImage++;

            if (currentImage >= total) {

                currentImage = 0;

            }


            updateGallery();

        }
    );


    /* =====================================
       KHỞI ĐỘNG P3
       ===================================== */

    updateSolution(0);

}