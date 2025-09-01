<template>
  <div class="about">
    <div class="about-container">
      <div class="about-header">
        <div class="about-header-title">
          Who We Are
        </div>
      </div>
      <div class="about-body">
        <div class="about-team-member">
          <div class="about-section__title">{{ t('about.teamTitle') }}</div>
          <div class="about-section__content">
            <div class="member-cards">
              <div class="member-card" v-for="(member, i) in members" :key="i">
                <div class="member-card__avatar">
                  <img :src="member.avatar" alt="">
                </div>
                <div class="member-card__info">
                  <div class="member-card__name">{{ member.name }}</div>
                  <div class="member-card__title">{{ member.title }}</div>
                  <div class="member-card__desc">{{ member.desc }}</div>
                </div>
                </div>
              </div>
            </div>
          </div>
        <div class="about-card-list">
          <div class="about-card-item news">
            <p class="about-card-item__info">
              <span class="about-card-item__image">
                <span class="about-card-item__image-show">
                  <img src="https://website.xycloud.net.cn/images/about1.png"/>
                <span class="about-card-item__image-description" @click="$router.push('/news')">
                  Learn More About News
                </span>
                </span>
              </span>
              <span class="about-card-item__title">News</span>
              <span class="about-card-item__desc">Ulink IB News captures the vibrant pulse of our community, sharing stories of innovation, student triumphs, and global engagement. Stay updated on academic milestones, extracurricular achievements, and student-led initiatives that reflect our commitment to holistic education. From IB Diploma successes to sustainability projects, this section highlights how our students and faculty tackle challenges with creativity and a global mindset—always aligned with our mission to nurture future-ready leaders.</span>
            </p>
          </div>
          <div class="about-card-item campus">
            <p class="about-card-item__info">
              <span class="about-card-item__image">
                <span class="about-card-item__image-show">
                  <img src="https://website.xycloud.net.cn/images/about3.png"/>
                <span class="about-card-item__image-description">
                  Learn More About Campus life
                </span>
                </span>
              </span>
              <span class="about-card-item__title">Campus life</span>
              <span class="about-card-item__desc">At Ulink IB, campus life thrives ondiversity and student agency. Over 50 clubs—from robotics teams to debate societies—empower students to lead and innovate. Residential programs build lifelong bonds, while wellness workshops and CAS (Creativity, Activity, Service) projects encourage balanced growth. Traditions like International Day and IB Graduation Gala celebrate our multicultural identity, uniting students under a shared vision of empathy, curiosity, and positive impact.</span>
            </p>
          </div>
          <div class="about-card-item academic">
            <p class="about-card-item__info">
              <span class="about-card-item__image">
                <span class="about-card-item__image-show">
                  <img src="https://website.xycloud.net.cn/images/about2.png"/>
                <span class="about-card-item__image-description">
                  Learn More About Academic
                </span>
                </span>
              </span>
              <span class="about-card-item__title">Academic</span>
              <span class="about-card-item__desc">
                Our IB curriculum challenges students to think critically and act ethically. Through interdisciplinary courses like TOK (Theory of Knowledge) and Extended Essay projects, learners connect classroom theory to real-world issues.Faculty mentors emphasize inquiry-driven learning, fostering skills in research, collaboration, and multilingual communication. Flexible pathways, including STEM-focused tracks and arts electives, ensure every student’s potential aligns with the IB’s mission to educate “the whole person.” </span>
            </p>
          </div>
          <div class="about-card-item resource">
            <p class="about-card-item__info">
              <span class="about-card-item__image">
                <span class="about-card-item__image-show">
                  <img src="https://website.xycloud.net.cn/images/about5.png"/>
                <span class="about-card-item__image-description">
                  Learn More About Resource
                </span>
                </span>
              </span>
              <span class="about-card-item__title">Resource</span>
              <span class="about-card-item__desc">
                Ulink IB empowers students to explore beyond textbooks through hands-on research. From environmental science fieldwork to social entrepreneurship case studies, projects align with the IB’s emphasis on conceptual understanding and global relevance. Partnerships with local universities and NGOs provide mentorship, while annual Research Symposiums showcase student discoveries—whether in AI ethics, cultural anthropology, or sustainable design—proving that young minds can drive meaningful change.
              </span>
            </p>
          </div>
          <div class="about-card-item admission">
            <p class="about-card-item__info">
              <span class="about-card-item__image">
                <span class="about-card-item__image-show">
                  <img src="https://website.xycloud.net.cn/images/about4.png"/>
                <span class="about-card-item__image-description">
                  Learn More About Admission
                </span>
                </span>
              </span>
              <span class="about-card-item__title">Admission</span>
              <span class="about-card-item__desc">
                Ulink IB seeks passionate learners eager to thrive in our globally minded community. Our holistic admissions process values intellectual curiosity, multilingual abilities, and a commitment to the IB’s learner profile traits—thinkers, risk-takers, and caring individuals. Scholarships and financial aid ensure accessibility, while personalized campus tours and student ambassador programs help families envision life at UCSIB. Together, we build a community where every voice contributes to shaping a better world.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from "vue-i18n"
const { t } = useI18n()

const members = computed(() => [
  {
    avatar: 'https://website.xycloud.net.cn/images/user-avatar.jpg',
    name: t('about.member1.name'),
    title: t('about.member1.title'),
    desc: t('about.member1.desc')
  },
  {
    avatar: 'https://website.xycloud.net.cn/images/Selfie1.jpg',
    name: t('about.member2.name'),
    title: t('about.member2.title'),
    desc: t('about.member2.desc')
  },
  {
    avatar: 'https://website.xycloud.net.cn/images/user-avatar.jpg',
    name: t('about.member3.name'),
    title: t('about.member3.title'),
    desc: t('about.member3.desc')
  }
])
</script>

<style scoped lang="scss">
@forward "about";
@forward "about_mb";
</style>