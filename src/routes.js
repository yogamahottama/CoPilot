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
import CapaianUnitView from './components/views/CapaianUnit.vue'
import JenisSatkerView from './components/views/JenisSatker.vue'
import PeriodeView from './components/views/Periode.vue'
import MasterIndikatorView from './components/views/MasterIndikator.vue'
import IndikatorPeriodeView from './components/views/IndikatorPeriode.vue'
import SatuanKerjaView from './components/views/SatuanKerja.vue'
import IndikatorSatkerView from './components/views/IndikatorSatker.vue'
import AspekView from './components/views/Aspek.vue'
import DosenView from './components/views/Dosen.vue'
import PenelitianView from './components/views/Penelitian.vue'
import AbmasView from './components/views/Abmas.vue'
import PublikasiView from './components/views/Publikasi.vue'

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
        path: 'datadasar',
        component: DataDasarView,
        name: 'DataDasar',
        meta: {description: ''}
      }, {
        path: 'kategoriunit',
        component: KategoriUnitView,
        name: 'KategoriUnit',
        meta: {description: ''}
      }, {
        path: 'Unit',
        component: UnitView,
        name: 'Unit',
        meta: {description: ''}
      }, {
        path: 'capaianunit',
        component: CapaianUnitView,
        name: 'CapaianUnit',
        meta: {description: ''}
      }, {
        path: 'jenissatker',
        component: JenisSatkerView,
        name: 'JenisSatker',
        meta: {description: 'List of popular javascript repos'}
      }, {
        path: 'periode',
        component: PeriodeView,
        name: 'Periode',
        meta: {description: 'List of popular javascript repos'}
      }, {
        path: 'masterindikator',
        component: MasterIndikatorView,
        name: 'MasterIndikator',
        meta: {description: 'List of popular javascript repos'}
      }, {
        path: 'indikatorperiode',
        component: IndikatorPeriodeView,
        name: 'IndikatorPeriode',
        meta: {description: 'List of popular javascript repos'}
      }, {
        path: 'satuankerja',
        component: SatuanKerjaView,
        name: 'SatuanKerja',
        meta: {description: 'List of popular javascript repos'}
      }, {
        path: 'indikatorsatker',
        component: IndikatorSatkerView,
        name: 'IndikatorSatker',
        meta: {description: 'List of popular javascript repos'}
      }, {
        path: 'aspek',
        component: AspekView,
        name: 'Aspek',
        meta: {description: 'Aspek'}
      }, {
        path: 'Dosen',
        component: DosenView,
        name: 'Dosen',
        meta: {description: 'Simple and advance table in CoPilot'}
      }, {
        path: 'Penelitian',
        component: PenelitianView,
        name: 'Penelitian',
        meta: {description: 'Simple and advance table in CoPilot'}
      }, {
        path: 'Abmas',
        component: AbmasView,
        name: 'Abmas',
        meta: {description: 'Simple and advance table in CoPilot'}
      }, {
        path: 'Publikasi',
        component: PublikasiView,
        name: 'Publikasi',
        meta: {description: 'Simple and advance table in CoPilot'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
