<template>
    <div class="sub-page">
        <section class="pb-20">
            <div class="container mx-auto px-4">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-lg-12">
                        <h1 class="display-5 fw-bold lh-1.5 mb-3">专业微信公众号开发服务</h1>
                        <p class="lead">我们专注于为企业提供深度定制化的微信公众号开发服务，将公众号从“信息窗口”升级为您的 “智能营销助手”、“在线服务门户”和“业务增长引擎”</p>
                    </div>
                </div>
                <p>在拥有十亿级流量的微信生态中，公众号早已不仅是内容发布平台，更是企业连接用户、提供服务、驱动增长的核心阵地。然而，标准化的功能无法满足您独特的业务需求。
                </p>
                <div class="row align-items-stretch g-4 row-cols-1 py-4">
                    <ServiceCard title="为什么需要定制化公众号开发？">
                        <ul class="normal-ul list-unstyled wafter">
                            <li><i class="iconfont icon-wanmei"></i>超越基础发布：摆脱单一图文推送，集成强大交互功能，提升用户活跃度与忠诚度。</li>
                            <li><i class="iconfont icon-wanmei"></i>打通业务闭环：将流量引导至您的商城、服务或线下门店，实现营销-转化-服务一体化。
                            </li>
                            <li><i class="iconfont icon-wanmei"></i>数据驱动决策：通过自定义数据看板，洞察用户行为，让每一次营销动作都有的放矢。
                            </li>
                            <li><i class="iconfont icon-wanmei"></i>提升品牌形象：一个功能丰富、体验流畅的公众号，是您在数字时代专业实力的体现。
                            </li>
                        </ul>
                    </ServiceCard>
                </div>
                <dl>
                    <dt>我们的核心开发服务</dt>
                    <dd>
                        <p>我们致力于将您的需求转化为精准的技术实现，打造智能、互动、高转化的微信生态解决方案</p>
                        <div class="row align-items-stretch g-4 row-cols-1 py-4">
                            <ServiceCard title="个性化功能定制开发">
                                <ul class="normal-ul list-unstyled wafter">
                                    <li><i class="iconfont icon-wanmei"></i>智能会员中心：集成会员注册、积分管理、等级特权与专属客服，提升用户归属感。
                                    </li>
                                    <li><i class="iconfont icon-wanmei"></i>微商城与电商解决方案：无缝对接商品展示、在线下单、支付与订单追踪，打造沉浸式购物体验。
                                    </li>
                                    <li><i class="iconfont icon-wanmei"></i>营销活动工具：开发定制化的抽奖、拼团、分销、预约试驾等互动功能，引爆社交传播。
                                    </li>
                                    <li><i class="iconfont icon-wanmei"></i>智能客服与问答系统：通过关键词自动回复与菜单引导，提供7x24小时高效用户服务。
                                    </li>
                                </ul>
                            </ServiceCard>
                            <ServiceCard title="与企业系统深度集成">
                                <ul class="normal-ul list-unstyled wafter">
                                    <li><i
                                            class="iconfont icon-wanmei"></i>将公众号与您的CRM、ERP或OA系统对接，实现用户数据同步、订单状态查询、内部流程触发等，打破信息孤岛。
                                    </li>
                                </ul>
                            </ServiceCard>
                            <ServiceCard title="接口能力全面应用">
                                <ul class="normal-ul list-unstyled wafter">
                                    <li><i class="iconfont icon-wanmei"></i>成熟运用微信开放的用户管理、消息模板、微信支付、地理位置等接口，解锁公众号的全部潜能。
                                    </li>
                                </ul>
                            </ServiceCard>
                        </div>
                    </dd>
                </dl>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProcessStep from '../../components/ProcessStep.vue';
// 这里可以添加页面的交互逻辑
</script>

<style scoped>
/* 网站重构专题页特定样式 */
.card-hover {
    transition: all 0.3s ease;
}

.card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style>
