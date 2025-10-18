<template>
    <div class="home-page">
        <!-- Hero Banner 区域 -->
        <section class="text-white">
            <HomeBanner />
        </section>

        <!-- 服务总览区域 -->
        <section class="py-20 bg-body-secondary">
            <div class="container mx-auto px-4">
                <div class="section-title">
                    <h2>我们做什么</h2>
                    <h6>专业的数字化转型与软件开发服务</h6>
                </div>
                <div class="row align-items-stretch g-4 row-cols-1 row-cols-lg-3">
                    <ServiceCard icon="icon-WebDevelopmentLineart_Layout" title="网站开发重构"
                        description="为传统网站提供现代化重构服务，提升用户体验和系统性能。" />
                    <ServiceCard icon="icon-gongzhonghao" title="微信公众号开发"
                        description="深度定制微信公众号，赋能品牌增长，打通获客、服务与变现的全链路。" />
                    <ServiceCard icon="icon-ziyuan" title="小程序开发" description="定制化小程序应用，提升用户互动和业务效率。" />
                    <ServiceCard icon="icon-WebDevelopmentLineart_Layout" title="网站开发重构"
                        description="为传统网站提供现代化重构服务，提升用户体验和系统性能。" />
                    <ServiceCard icon="icon-gongzhonghao" title="微信公众号开发"
                        description="深度定制微信公众号，赋能品牌增长，打通获客、服务与变现的全链路。" />
                    <ServiceCard icon="icon-ziyuan" title="小程序开发" description="定制化小程序应用，提升用户互动和业务效率。" />
                    <ServiceCard icon="icon-WebDevelopmentLineart_Layout" title="网站开发重构"
                        description="为传统网站提供现代化重构服务，提升用户体验和系统性能。" />
                    <ServiceCard icon="icon-gongzhonghao" title="微信公众号开发"
                        description="深度定制微信公众号，赋能品牌增长，打通获客、服务与变现的全链路。" />
                    <ServiceCard icon="icon-ziyuan" title="小程序开发" description="定制化小程序应用，提升用户互动和业务效率。" />
                </div>
            </div>
        </section>

        <!-- 我们是谁 -->
        <section class="py-20">
            <div class="container mx-auto px-4">
                <div class="clearfix">
                    <img src="@/assets/images/team1.jpg" alt="团队成员1"
                        class="col-md-12 col-lg-4 float-lg-start mb-4 mb-md-4 mb-lg-0 me-lg-4">
                    <div class="section-title">
                        <h2>我们是谁</h2>
                        <h6>我们是谁我们是谁我们是谁我们是谁</h6>
                    </div>
                    <p class="text-lg mx-auto">
                        我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁
                    </p>
                    <p class="text-lg mx-auto">
                        我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁我们是谁
                    </p>
                </div>
            </div>
        </section>

        <!-- 服务流程/方法论 -->
        <section class="py-20 bg-body-secondary">
            <div class="container mx-auto px-4">
                <div class="section-title">
                    <h2>极简的服务流程</h2>
                    <h6>极简的服务流程，极简的服务流程</h6>
                </div>
                <div class="relative">
                    <div class="row align-items-stretch">
                        <ProcessStep :stepNumber="1" title="需求分析" description="需求分析需求分析需求分析需求分析需求分析需求分析" />
                        <ProcessStep :stepNumber="2" title="设计开发" description="设计开发设计开发设计开发设计开发设计开发" />
                        <ProcessStep :stepNumber="3" title="需求分析" description="需求分析需求分析需求分析需求分析需求分析需求分析" />
                        <ProcessStep :stepNumber="4" title="设计开发" description="设计开发设计开发设计开发设计开发设计开发" />
                    </div>
                </div>
            </div>
        </section>

        <!-- 解决方案推荐区域 -->
        <section class="py-20">
            <div class="container mx-auto px-4">
                <div class="section-title">
                    <h2>精选解决方案</h2>
                    <h6>为您的业务提供定制化的解决方案，助力业务增长和成功</h6>
                </div>
                <div class="row">
                    <SolutionCard :imageUrl="eshopImg" title="跨境电商全渠道营销与私域运营"
                        description="为健品跨境电商品牌构建多渠道销售、合规仓储配送、私域用户运营、社交裂变分销于一体的综合性解决方案" link="/case/ecommerce" />
                    <SolutionCard :imageUrl="eduImg" title="教培机构线上线下融合教育平台"
                        description="全渠道、多业态的在线教育平台，业务从线下延伸至线上，实现“线下培训+线上学习+数字化运营”的深度融合" link="/case/edu" />
                    <!-- <SolutionCard :imageUrl="oaImg" title="SaaS/Crm系统" description="开发灵活可扩展的SaaS/Crm平台，帮助企业快速构建和部署应用服务"
                        link="/case/saas-crm" /> -->
                    <SolutionCard :imageUrl="insuranceImg" title="保险代理公司全渠道数字化运营"
                        description="传统保险代理公司通过数字化转型，构建集产品管理、全渠道销售、客户自助服务与业务员绩效管理于一体的综合性数字化平台" link="/case/insurance" />
                </div>
            </div>
        </section>

        <!-- 数据/成果展示 -->
        <section class="py-20 bg-body-secondary">
            <div class="container mx-auto px-4">
                <div class="section-title">
                    <h2>为什么选我们</h2>
                    <h6>我们的技术实力、客户服务和行业经验，为您的业务保驾护航</h6>
                </div>
                <div class="row">
                    <StatCard value="100+" label="成功项目案例" />
                    <StatCard value="90%" label="客户满意度" />
                    <StatCard value="50+" label="专业技术团队" />
                    <StatCard value="10年+" label="行业经验" />
                </div>
            </div>
        </section>

        <!-- 合作伙伴Logo -->
        <section class="py-20">
            <div class="container mx-auto px-4">
                <div class="section-title">
                    <h2>合作伙伴</h2>
                </div>
                <div class="row">
                    <PartnerLogo partnerName="友情链接" :logoUrl="logo" />
                    <PartnerLogo partnerName="友情链接" :logoUrl="logo" />
                    <PartnerLogo partnerName="友情链接" :logoUrl="logo" />
                    <PartnerLogo partnerName="友情链接" :logoUrl="logo" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import HomeBanner from '../components/HomeBanner.vue';
import ServiceCard from '../components/ServiceCard.vue';
import SolutionCard from '../components/SolutionCard.vue';
import PartnerLogo from '../components/PartnerLogo.vue';
import StatCard from '../components/StatCard.vue';
import ProcessStep from '../components/ProcessStep.vue';

import eshopImg from '@/assets/images/eshop.jpg';
import eduImg from '@/assets/images/edu-online.jpg';
import insuranceImg from '@/assets/images/insurance.jpg';
import logo from '../../public/favicon.png';

// 这里可以添加首页的交互逻辑
</script>

<style lang="scss" scoped></style>
