<template>
  <div class="academics">
    <div class="academics-container">
      <div class="academics-header">
        <div class="academics-header-title">
          {{ t('primaryNav.academics') }}
        </div>
      </div>
      <div class="academics-body">
        <section class="academics-section swapper">
          <div class="swapper-inner">
            <img src="https://www.ulink.cn/wp-content/uploads/2024/12/ib-profile-scaled.jpg" alt="">
          </div>
        </section>
        <section class="academics-section theme-tabs">
          <div class="theme-tabs__inner">
            <div class="theme-tab" v-for="tab in themeTabs" :key="tab.name">
              <div class="theme-tab__label">{{tab.label}}</div>
            </div>
          </div>
        </section>
        <section class="academics-section pre-ib">
          <div class="academics-section__title">{{t('foreground.academics.course.preIb')}}</div>
          <div class="academics-section__body">
            <div class="section-card">
              <div class="section-card__content">
                <article class="section-card__inner">
                  <div class="section-card__title">Pre-IB Education:</div>
                  <div class="section-card__desc">Pre-IB education is a preparatory program designed to help students build the academic skills, study habits, and international mindset needed to succeed in the IB Diploma Programme. It typically focuses on strengthening core subjects such as mathematics, sciences, languages, and humanities, while introducing IB-style learning approaches like inquiry, critical thinking, and independent research.</div>
                  <div class="section-card__title">Courses:</div>
                  <div class="section-card__desc">A Pre-IB course prepares students for the academic demands of the IB Diploma Programme by developing foundational skills in key subjects, encouraging independent learning, and introducing IB approaches to teaching and assessment such as critical thinking, research, and global perspectives.</div>
                  <div class="section-card__link">
                    <span>Explore Courses</span>
                  </div>
                </article>
              </div>
              <div class="section-card__preview1">
                <img src="https://website.xycloud.net.cn/images/preib.png" alt="">
              </div>
            </div>
          </div>
        </section>
        <section class="academics-section ibdp">
          <div class="academics-section__title">{{t('foreground.academics.course.ibdp')}}</div>
          <div class="academics-section__body">
            <div class="section-card">
              <div class="section-card__content">
                <article class="section-card__inner">
                  <div class="section-card__title">IBDP Education:</div>
                  <div class="section-card__desc">The International Baccalaureate Diploma Programme (IBDP) is a rigorous two-year pre-university program for students aged 16–19 that fosters critical thinking, global awareness, and academic excellence. It includes six subject groups and three core components—Theory of Knowledge (TOK), the Extended Essay (EE), and Creativity, Activity, Service (CAS)—designed to develop well-rounded, independent learners prepared for success at university and beyond</div>
                  <div class="section-card__title">Courses:</div>
                  <div class="section-card__desc">Students can choose from a wide range of IB courses across languages, mathematics, sciences, individuals and societies, and the arts to suit their academic interests and future goals.</div>
                  <div class="section-card__link">
                    <span>Explore Courses</span>
                  </div>
                </article>
              </div>
              <div class="section-card__preview">
                <img src="https://img1.baidu.com/it/u=1739952125,2841880388&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500" alt="">
              </div>
            </div>
          </div>
        </section>
        <section class="academics-section ibdp-core">
          <div class="academics-section__title">{{t('foreground.academics.course.ibdpCore')}}</div>
          <div class="academics-section__body">
            <div class="ibdp-core-box">
              <div class="ibdp-core-node">CAS</div>
              <p class="ibdp-core-text">CAS (Creativity, Activity, Service) is a core component of the IBDP that encourages students to engage in personal growth through creative pursuits, physical activity, and community service over 18 months.</p>
              <div class="ibdp-core-node items-end">TOK</div>
              <p class="ibdp-core-text">Theory of Knowledge (TOK) is a core component of the IBDP that explores the nature of knowledge across disciplines, encouraging students to reflect on how they know what they claim to know.</p>
              <div class="ibdp-core-node">EE</div>
              <p class="ibdp-core-text">The Extended Essay (EE) is a 4,000-word independent research project that allows IBDP students to investigate a topic of interest, fostering critical thinking and academic writing skills.</p>
            </div>
          </div>
        </section>
        <section class="academics-section pre-ib">
          <div class="academics-section__title">{{t('foreground.academics.course.preIb')}}</div>
          <div class="academics-section__body">
            <div class="academics-section__article">
              <p class="article-content">
                Brief description of this pageBrief description of this page<br />
                Brief description of this pageBrief description of this page<br />
                Brief description of this pageBrief description of this page<br />
                Brief description of this pageBrief description of this page<br />
              </p>
              <div class="image-cards">
                <div class="image-card">
                  <img src="https://website.xycloud.net.cn/images/empty-image.webp" alt="">
                </div>
                <div class="image-card">
                  <img src="https://website.xycloud.net.cn/images/empty-image.webp" alt="">
                </div>
                <div class="image-card">
                  <img src="https://website.xycloud.net.cn/images/empty-image.webp" alt="">
                </div>
                <div class="image-card">
                  <img src="https://website.xycloud.net.cn/images/empty-image.webp" alt="">
                </div>
                <div class="image-card">
                  <img src="https://website.xycloud.net.cn/images/empty-image.webp" alt="">
                </div>
                <div class="image-card">
                  <img src="https://website.xycloud.net.cn/images/empty-image.webp" alt="">
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name:'Academics',
  setup(){
    const { t } = useI18n();
    const themeTabs = computed(() => [
      { label: t('academics.themeTabs.facultyMembers'), name: "1" },
      { label: t('academics.themeTabs.facultyRatio'), name: "2" },
      { label: t('academics.themeTabs.courses'), name: "3" }
    ]);
    return {
      t,
      themeTabs
    }
  }
})
</script>
<style scoped lang="scss">
@use "academics";
@use "academics_media";
</style>