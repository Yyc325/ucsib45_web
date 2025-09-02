<template>
  <div class="admission">
    <div class="admission-container">
      <div class="admission-header">
        <div class="admission-header-title">
          {{ t('primaryNav.admission') }}
        </div>
      </div>
      <div class="admission-body">
        <div class="admission-section preview-video">
          <template v-if="videoUrl">
            <video :src="videoUrl" controls></video>
          </template>
          <template v-else>
            <div class="preview-video__empty">
              <span>Video</span>
            </div>
          </template>
        </div>
        <div class="admission-section">
          <div class="admission-section__title">
            {{ t('admission.applicationguide.title') }}
          </div>
          <div class="admission-section__content">
            <ul class="link-list">
              <li class="link-item" v-for="(link,i) in linkList" :key="i">
                <a :href="link.url">{{ t(link.label) }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="admission-section faq">
          <div class="admission-section__title">
            FAQ
          </div>
          <div class="admission-section__content">
            <ul class="faq-list">
              <li class="faq-item" v-for="(faq,i) in faqList" :key="i">
                <span class="faq-item__role">{{faq.role}}:</span>
                <span class="faq-item__content">{{faq.speak}}</span>
              </li>
            </ul>
            <div class="online-consultation">
              <a href="">Online Consultation</a>
            </div>
          </div>
        </div>
        <div class="admission-section team-member">
          <div class="admission-section__title">
            Admission Team
          </div>
          <div class="admission-section__content">
            <div class="member-cards">
              <div class="member-card" v-for="(member,i) in members" :key="i">
                <div class="member-card__avatar">
                  <img :src="member.avatar" alt="">
                </div>
                <div class="member-card__information">
                  <span>{{ member.information.title }}</span>
                  <span>{{ member.information.content }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive, toRefs, computed} from 'vue'
import {useI18n} from "vue-i18n";

export default defineComponent({
  name: "admission",
  setup(){
    const { t } = useI18n();

    const videoUrl = 'https://website.xycloud.net.cn/video/Ulink27.mp4';

    const linkList = computed(() => [
      { label: 'admission.applicationguide.title', url: '' },
      { label: 'admission.applicationguide.sub1', url: '' },
      { label: 'admission.applicationguide.sub2', url: '' }
    ]);

    const faqList = [
      {
        role:'Q',
        speak:'Which course is the best in IB?'
      },
      {
        role:'W',
        speak:'Psychology.'
      },
      {
        role:'Q',
        speak:'Which dormitory is the best?'
      },
      {
        role:'W',
        speak:'2312.'
      },
    ];

    const members = [
      {
        avatar:'https://website.xycloud.net.cn/images/user-avatar.jpg',
        information:{
          title:'Information',
          content:'xxxxxxxxxxx'
        }
      },
      {
        avatar:'https://website.xycloud.net.cn/images/user-avatar.jpg',
        information:{
          title:'Information',
          content:'xxxxxxxxxxx'
        }
      },
      {
        avatar:'https://website.xycloud.net.cn/images/user-avatar.jpg',
        information:{
          title:'Information',
          content:'xxxxxxxxxxx'
        }
      }
    ];

    return {
      t,
      videoUrl,
      linkList,
      faqList,
      members
    }
  }
})
</script>

<style scoped lang="scss">
@use "admission";
@use "admission_mb";
</style>