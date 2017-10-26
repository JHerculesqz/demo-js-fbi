import Vue from 'vue'
import Router from 'vue-router'
import ImportEx from '@/components/1.importex/ImportEx'
import Topo from '@/components/2.topo/2.1.main/Topo'
import Plan from '@/components/3.buPlan/Plan'
import SolutionMgr from '@/components/4.buDesign/4.1.solutionMgr/SolutionMgr'
import SolutionDetails from '@/components/4.buDesign/4.2.solutionDetails/4.2.2.nodeInsert/SolutionDetails'
import SolutionDetails4Single from '@/components/4.buDesign/4.2.solutionDetails/4.2.1.singleInsert/SolutionDetails4Single'
import SolutionDetails4LinkInsert from '@/components/4.buDesign/4.2.solutionDetails/4.2.3.linkInsert/SolutionDetails4LinkInsert'
import SolutionDetails4E2EInsert from '@/components/4.buDesign/4.2.solutionDetails/4.2.4.e2eInsert/SolutionDetails4E2EInsert'
import Analysis from '@/components/5.analysis/Analysis'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'ImportEx',
    component: ImportEx
  }, {
    path: '/Topo',
    name: 'Topo',
    component: Topo
  }, {
    path: '/Analysis',
    name: 'Analysis',
    component: Analysis
  }, {
    path: '/Plan',
    name: 'Plan',
    component: Plan
  }, {
    path: '/SolutionMgr',
    name: 'SolutionMgr',
    component: SolutionMgr
  }, {
    path: '/SolutionDetails',
    name: 'SolutionDetails',
    component: SolutionDetails
  }, {
    path: '/SolutionDetails4Single',
    name: 'SolutionDetails4Single',
    component: SolutionDetails4Single
  }, {
    path: '/SolutionDetails4LinkInsert',
    name: 'SolutionDetails4LinkInsert',
    component: SolutionDetails4LinkInsert
  }, {
    path: '/SolutionDetails4E2EInsert',
    name: 'SolutionDetails4E2EInsert',
    component: SolutionDetails4E2EInsert
  }]
})

