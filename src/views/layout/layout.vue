<template>
  <div class="i-layout">
    <div class="i-layout-wrap">
      <div class="i-layout-header">
        <div class="brand-bar" :class="{ 'is-chinese': locale === 'zh' }">
          <div class="brand-bar__wrapper">

            <div class="info">
              <span class="logo" @click="jumpTo('home')">UCS IBDP</span>
            </div>
            <nav class="menu-gateway-nav">
              <div class="menu-gateway-nav-container">
                <!--                <div class="gateway-nav&#45;&#45;label">Information for:</div>-->
                <ul class="menu">
                  <li class="menu-item" @click="jumpTo('students')">{{ $t("header.student") }}</li>
                  <li class="menu-item">{{ $t("header.faculty") }}</li>
                  <li class="menu-item">{{ $t("header.families") }}</li>
                  <li class="menu-item">{{ $t("header.alumni") }}</li>
                </ul>
                <div class="search-toggle">
                  <el-icon color="#fff">
                    <Search />
                  </el-icon>
                  <span class="search-toggle-inner">
                    {{ $t('header.search') }}
                  </span>
                </div>
                <el-popover trigger="hover" v-model:visible="languageVisible">
                  <template #reference>
                    <div class="switch-logo">
                      <svg data-v-f414ea64="" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                        <path fill="currentColor"
                          d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z">
                        </path>
                      </svg>
                    </div>
                  </template>
                  <div class="language-list">
                    <div class="language-item" v-for="lang in languages" :key="lang.value"
                      @click="switchLanguage(lang)">
                      {{ lang.label }}
                    </div>
                  </div>
                </el-popover>
                <div class="login" @click="jumpTo('login')">
                  <span>{{ $t('header.login') }}</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div class="menu-primary-nav-container">
          <ul class="menu">
            <li class="menu-item" v-for="item in primaryNavs" :key="item.label">{{ item.label }}</li>
          </ul>
        </div>
        <div class="panel-collection">
          <img src="https://niu.xycloud.net.cn/knowledge/123/123/2025-1-22/2C9F81E4-F38C-4C1F-A581-C24D3C7F20EE.png"
            alt="">
          <p class="panel-collection-title">UCS IBDP</p>
        </div>
      </div>
      <div class="i-layout-body">
        <div class="i-layout-body-content">
          <div class="i-layout-body-content__wrap">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, toRefs, onMounted } from "vue";
import { useUser } from "@/hooks/useUser";
import { useI18n } from 'vue-i18n'

import { Search } from "@element-plus/icons-vue";
import { router } from "@/router";

const { locale, t } = useI18n();

const state = reactive({
  languageVisible: false,
  primaryNavs: [
    {
      label: t('primaryNav.news'),
      path: "",
    },
    {
      label: t('primaryNav.events'),
      path: "",
    },
    {
      label: t('primaryNav.academics'),
      path: "",
    },
    {
      label: t('primaryNav.research'),
      path: "",
    },
    {
      label: t('primaryNav.healthCare'),
      path: "",
    },
    {
      label: t('primaryNav.campusLife'),
      path: "",
    },
    {
      label: t('primaryNav.admission'),
      path: "",
    },
    {
      label: t('primaryNav.about'),
      path: "",
    },
  ],
  languages: [
    {
      label: t('language.chinese'),
      value: "zh"
    },
    {
      label: t('language.english'),
      value: "en"
    }
  ]
});
const { primaryNavs, languages, languageVisible } = toRefs(state);

// 切换语言
const switchLanguage = (lang: any) => {
  locale.value = lang.value;
  languageVisible.value = false
  state.languages = [
    {
      label: t('language.chinese'),
      value: "zh"
    },
    {
      label: t('language.english'),
      value: "en"
    }
  ]
  state.primaryNavs = [
    {
      label: t('primaryNav.news'),
      path: "",
    },
    {
      label: t('primaryNav.events'),
      path: "",
    },
    {
      label: t('primaryNav.academics'),
      path: "",
    },
    {
      label: t('primaryNav.research'),
      path: "",
    },
    {
      label: t('primaryNav.healthCare'),
      path: "",
    },
    {
      label: t('primaryNav.campusLife'),
      path: "",
    },
    {
      label: t('primaryNav.admission'),
      path: "",
    },
    {
      label: t('primaryNav.about'),
      path: "",
    },
  ]
}
// 页面跳转
const jumpTo = (type: string) => {
  switch (type) {
    case "home":
      router.push({
        path: "/home",
      });
      break;
    case "login":
      router.push({
        name: "Login",
      });
      break;
    case "students":
      // router.push({
      //   name: "Students",
      // });
      // 或
      router.push({
        path: "/students",
      });
      break;

    default:
      break;
  }
}
</script>
<style lang="scss" scoped>
@import "./layout.scss";
</style>
