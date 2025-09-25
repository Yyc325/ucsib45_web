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
                  <div class="section-card__title">{{t('academics.preIbCourses.subtitle1')}}</div>
                  <div class="section-card__desc">{{t('academics.preIbCourses.description1')}}</div>
                  <div class="section-card__title">{{t('academics.preIbCourses.subtitle2')}}</div>
                  <div class="section-card__desc">{{t('academics.preIbCourses.description2')}}</div>
                  <div class="section-card__link">
                    <span>{{t('academics.preIbCourses.Explore')}}</span>
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
                  <div class="section-card__title">{{t('academics.IBDPcourses.subtitle1')}}</div>
                  <div class="section-card__desc">{{t('academics.IBDPcourses.description1')}}</div>
                  <div class="section-card__title">{{t('academics.IBDPcourses.subtitle2')}}</div>
                  <div class="section-card__desc">{{t('academics.IBDPcourses.description2')}}</div>
                  <div class="section-card__link">
                    <span>{{t('academics.IBDPcourses.Explore')}}</span>
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
              <p class="ibdp-core-text">{{t('academics.IBDPcoreTopics.CASdescription')}}</p>
              <div class="ibdp-core-node items-end">TOK</div>
              <p class="ibdp-core-text">{{t('academics.IBDPcoreTopics.TOKdescription')}}</p>
              <div class="ibdp-core-node">EE</div>
              <p class="ibdp-core-text">{{t('academics.IBDPcoreTopics.EEdescription')}}</p>
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