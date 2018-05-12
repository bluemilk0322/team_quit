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
                        <div id="vader"></div>
                        <div id="luke"></div>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>
<script>
import Menu from '../components/Menu.vue'
import theaterjs from '../../node_modules/theaterjs/dist/theater.min.js'

var theater = theaterJS()
  
  theater
    .on('type:start, erase:start', function () {
      // add a class to actor's dom element when he starts typing/erasing
      var actor = theater.getCurrentActor()
      actor.$element.classList.add('is-typing')
    })
    .on('type:end, erase:end', function () {
      // and then remove it when he's done
      var actor = theater.getCurrentActor()
      actor.$element.classList.remove('is-typing')
    })
  
  theater
    .addActor('vader')
    .addActor('luke')
    
  theater
    .addScene('vader:Luke...', 400)
    .addScene('luke:What?', 400)
    .addScene('vader:I am', 200, '.', 200, '.', 200, '. ')
    .addScene('Your father!')
    .addScene(theater.replay)
    export default {
        components: {
          Menu
        }
    }
</script>