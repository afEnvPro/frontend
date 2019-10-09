<template>
  <div class="about">
    <!-- mian-content -->
    <div class="main-content" id="home">
      <div class="banner-w3pvt-info second">
        <div class="overlay-w3ls second">
        </div>
      </div>
    </div>
    <!-- //banner -->
    <!-- banner-bottom -->
    <section class="about py-5" id="about">
      <div class="container py-md-5">
        <div class="row about-w3pvt-top mt-2">
          <div class="col-lg-6 about-info">
            <h4 class="title-w3ls mb-5">爱芬简介</h4>
            <p>我们是谁？
              上海爱芬环保科技咨询服务中心于2012年8月在静安区科委正式注册成立。爱芬环保致力于推动城市垃圾分类的进程，其核心工作是为社区提供垃圾分类的解决方案，以及培训、咨询和顾问服务。<br>

              我们的使命？
              让人人享有美好环境！<br>

              我们的愿景：
              用3-5年时间，成为社区垃圾分类减量的先锋倡导者和推动者，推进上海乃至中国垃圾分类减量的进程。</p>
          </div>
          <div class="col-lg-6 about-img">
            <img src="images/img2.jpg" class="img-fluid" alt="">
          </div>

        </div>
      </div>
    </section>
    <!-- //banner-bottom-->
    <!-- /skills -->
    <section class="skills-w3pvt py-5" id="skills">
      <div class="container py-md-5">
        <div class="row">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="main-timeline">
                  <div class="timeline" data-heading="2011">
                    <div class="timeline-content">
                      <p class="description">
                        这里是文字介绍部分 这里是文字介绍部分 这里是文字介绍部分 这里是文字介绍部分 这里是文字介绍部分.
                      </p>
                    </div>
                    <span class="year">
                      <span>2008</span>
                    </span>
                  </div>

                  <div class="timeline" data-heading="2009">
                    <div class="timeline-content">
                      <p class="description">
                        这里是文字介绍部分 这里是文字介绍部分 这里是文字介绍部分 这里是文字介绍部分 这里是文字介绍部分.
                      </p>
                    </div>
                    <span class="year">
                      <span>2009</span>
                    </span>
                  </div>
                  <div class="timeline" data-heading="2010">
                    <div class="timeline-content">
                      <p class="description">
                        这里是文字介绍部分 这里是文字介绍部分 这里是文字介绍部分 这里是文字介绍部分 这里是文字介绍部分.
                      </p>
                    </div>
                    <span class="year">
                      <span>20010</span>
                    </span>
                  </div>
                  <div class="timeline" data-heading="2011">
                    <div class="timeline-content">
                      <p class="description">
                        这里是文字介绍部分 这里是文字介绍部分 这里是文字介绍部分 这里是文字介绍部分 这里是文字介绍部分.
                      </p>
                    </div>
                    <span class="year">
                      <span>2011</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /skills -->
    <!--//team -->
    <section class="banner-bottom py-lg-5 py-4">
      <div class="container">
        <div class="row mt-lg-5 mt-4">
          <div class="col-md-4 team-gd text-center">
            <div class="team-img mb-4">
              <img src="images/team1.jpg" class="img-fluid" alt="user-image">
            </div>
            <div class="team-info">
              <h3 class="mt-md-4 mt-3"><span class="sub-tittle-team">理事长</span> 江峰</h3>
              <p>“我不想做一个旁观者，更不想做一个报怨者。环保需要人人参与，更需要各个领域的专业人士参与”</p>

            </div>
          </div>

          <div class="col-md-4 team-gd second text-center">
            <div class="team-img mb-4">
              <img src="images/team2.jpg" class="img-fluid" alt="user-image">
            </div>
            <div class="team-info">
              <h3 class="mt-md-4 mt-3"><span class="sub-tittle-team">执行团队</span> 宋慧 </h3>
              <p>“独乐乐不如众乐乐，大家好才是真的好！”<br><br></p>

            </div>
          </div>
          <div class="col-md-4 team-gd text-center">
            <div class="team-img mb-4">
              <img src="images/team3.jpg" class="img-fluid" alt="user-image">
            </div>
            <div class="team-info">
              <h3 class="mt-md-4 mt-3"><span class="sub-tittle-team">执行团队</span> 郝利琼</h3>
              <p>我所有工作的目的，是希望我的孩子，能如儿时的我一样，享受自然山水的美好，并从中感受到生命的欢愉和尊严！</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
  .demo {
    padding: 2em 0;
  }

  .main-timeline {
    position: relative;
  }

  .main-timeline:before,
  .main-timeline:after {
    content: "";
    display: block;
    width: 100%;
    clear: both;
  }

  .main-timeline:before {
    content: "";
    width: 100%;
    height: 5px;
    background: #40E0D0;
    margin: auto 0;
    position: absolute;
    top: 50%;
    left: 0;
  }

  .main-timeline .timeline {
    width: 22%;
    float: left;
    margin-left: 3%;
    position: relative;
  }

  .main-timeline .timeline:before {
    content: attr(data-heading);
    display: inline-block;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    transform: rotate(-90deg);
    position: absolute;
    top: 30px;
    left: -2px;
    z-index: 2;
  }

  .main-timeline .timeline:after {
    content: "";
    width: 5px;
    height: 60px;
    border-left: 9px dotted #40E0D0;
    position: absolute;
    top: 54%;
    left: 71px;
  }

  .main-timeline .timeline-content {
    padding: 15px 0 40px 50px;
    margin-bottom: 80px;
    border-radius: 15px;
    border: 5px solid #40E0D0;
    text-align: left;
    background: #f67420;
    z-index: 1;
    position: relative;
  }

  .main-timeline .timeline:nth-child(even) .timeline-content {
    background: #43a6ba;
  }

  .main-timeline .timeline-content:before {
    content: "";
    width: 40px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #d66215;
    border-radius: 10px 0 0 10px;
  }

  .main-timeline .timeline:nth-child(even) .timeline-content:before {
    background: #1784ab;
  }

  .main-timeline .timeline-content:after {
    content: "";
    width: 40px;
    height: 40px;
    background: #f67420;
    border-bottom: 5px solid #40E0D0;
    border-right: 5px solid #40E0D0;
    position: absolute;
    bottom: -23px;
    left: 50px;
    transform: rotate(45deg);
    z-index: -1;
  }

  .main-timeline .timeline:nth-child(even) .timeline-content:after {
    background: #43a6ba;
  }

  .main-timeline .description {
    font-size: 14px;
    color: #fff;
  }

  .main-timeline .read-more {
    display: inline-block;
    padding-right: 15px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    text-transform: capitalize;
    position: relative;
  }

  .main-timeline .read-more:before {
    content: "\f0da";
    font-family: 'FontAwesome';
    font-size: 24px;
    position: absolute;
    top: -6px;
    right: 0;
  }

  .main-timeline .year {
    display: inline-block;
    width: 85px;
    height: 85px;
    line-height: 85px;
    background: #f67420;
    border-radius: 5px;
    border: 5px solid #40E0D0;
    text-align: center;
    margin-left: 34px;
    transform: rotate(45deg);
    position: relative;
  }

  .main-timeline .timeline:nth-child(even) .year {
    background: #43a6ba;
  }

  .main-timeline .year span {
    display: block;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    transform: rotate(-45deg);
  }

  .main-timeline .timeline.bottom {
    margin: -7.7% 0 0 7%;
  }

  .main-timeline .timeline.bottom:nth-child(5n+1),
  .main-timeline .timeline.bottom:last-child {
    margin-left: 3%;
  }

  .main-timeline .timeline.bottom:before {
    top: auto;
    bottom: 110px;
  }

  .main-timeline .timeline.bottom:after {
    top: auto;
    left: auto;
    bottom: 54%;
    right: 71px;
    border-color: #fff;
  }

  .main-timeline .timeline.bottom .timeline-content {
    margin: 80px 0 0 0;
    padding: 15px 0 40px 50px;
  }

  .main-timeline .timeline.bottom .timeline-content:after {
    border: none;
    border-top: 5px solid #fff;
    border-left: 5px solid #fff;
    bottom: auto;
    top: -23px;
    left: auto;
    right: 50px;
  }

  .main-timeline .timeline.bottom .year {
    top: 4px;
    margin-left: 132px;
  }

  @media only screen and (max-width: 1199px) {
    .main-timeline:before {
      width: 5px;
      height: 100%;
      top: 0;
      left: 5%;
    }

    .main-timeline .timeline,
    .main-timeline .timeline.bottom,
    .main-timeline .timeline.bottom:nth-child(5n+1),
    .main-timeline .timeline.bottom:last-child {
      width: 85%;
      float: none;
      margin: 0 0 20px 15%;
    }

    .main-timeline .timeline:after,
    .main-timeline .timeline.bottom:after {
      width: 60px;
      height: 5px;
      top: 50px;
      left: -58px;
      border-top: 9px dotted #fff;
    }

    .main-timeline .timeline-content,
    .main-timeline .timeline.bottom .timeline-content {
      margin: 0;
    }

    .main-timeline .year,
    .main-timeline .timeline.bottom .year {
      width: 65px;
      height: 65px;
      line-height: 60px;
      margin: 0;
      position: absolute;
      top: 20px;
      left: -15.5%;
      z-index: 1;
    }

    .main-timeline .timeline .timeline-content:after {
      display: none;
    }

    .main-timeline .timeline.bottom:before {
      bottom: auto;
      top: 30px;
      left: -2px;
    }
  }

  @media only screen and (max-width: 990px) {

    .main-timeline .year,
    .main-timeline .timeline.bottom .year {
      left: -16.8%;
    }
  }

  @media only screen and (max-width: 767px) {

    .main-timeline .timeline:after,
    .main-timeline .timeline.bottom:after {
      display: none;
    }

    .main-timeline .year,
    .main-timeline .timeline.bottom .year {
      width: 30px;
      height: 30px;
      border: 3px solid #fff;
      left: -13.5%;
    }

    .main-timeline .year span {
      display: none;
    }
  }

  @media only screen and (max-width: 480px) {

    .main-timeline .year,
    .main-timeline .timeline.bottom .year {
      left: -15.5%;
    }
  }
</style>