import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import TablesView from './components/views/Tables.vue'
import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'
import ExcelView from './components/views/Excel.vue'
import DataDasarView from './components/views/DataDasar.vue'
import KategoriUnitView from './components/views/KategoriUnit.vue'
import UnitView from './components/views/Unit.vue'
import Capaian_UnitView from './components/views/Capaian_Unit.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'tables',
        component: TablesView,
        name: 'Tables',
        meta: {description: 'Simple and advance table in CoPilot'}
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'Tasks',
        meta: {description: 'Tasks page in the form of a timeline'}
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Settings',
        meta: {description: 'User settings page'}
      }, {
        path: 'access',
        component: AccessView,
        name: 'Access',
        meta: {description: 'Example of using maps'}
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers', requiresAuth: true}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }, {
        path: 'excel',
        component: ExcelView,
        name: 'Excel',
        meta: {description: 'Excel'}
      }, {
        path: 'DataDasar',
        component: DataDasarView,
        name: 'DataDasar',
        meta: {description: 'oi'}
      }, {
        path: 'KategoriUnit',
        component: KategoriUnitView,
        name: 'KategoriUnit',
        meta: {description: 'oi'}
      }, {
        path: 'Unit',
        component: UnitView,
        name: 'Unit',
        meta: {description: 'oi'}
      }, {
        path: 'Capaian_Unit',
        component: Capaian_UnitView,
        name: 'Capaian_Unit',
        meta: {description: 'oi'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
