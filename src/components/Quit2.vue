<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
<template>
    <div class="layout">
        <Menu></Menu>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
            <Content :style="{padding: '30px 16px 16px'}">
                <Card>
                    <div style="height: 600px">
                      <h1>test2</h1>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>
<script>
import Menu from '../components/Menu.vue'
    export default {
        components: {
          Menu
        }
    }
</script>