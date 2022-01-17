import AboutModal from '@/components/About/AboutModal'
import AppNavigation from '@/components/App/AppNavigation'
import Camera from '@/components/Map/Camera'
import ContentWrapper from '@/components/Content/ContentWrapper'
import Map from '@/components/Map/Map'
import Markers from '@/components/Map/Markers'
import PageContent from '@/components/Page/PageContent'
import PageContext from '@/contexts/PageContext'
import PageSelector from '@/components/Page/PageSelector'
import Routes from '@/components/Map/Routes'
import ScrollContext from '@/contexts/ScrollContext'
import ScrollController from '@/components/Controller/ScrollController'
import Transport from '@/components/Map/Transport'

function App() {
  return (
    <ScrollContext>
      <PageContext>
        <div className="fixed w-full h-full min-h-screen overflow-x-hidden">
          <AppNavigation />
          <div className="absolute inset-y-0 right-0">
            <Map>
              <Markers />
              <Routes />
              <Camera />
              <Transport />
            </Map>
          </div>
          <ContentWrapper>
            <PageContent />
          </ContentWrapper>
          <PageSelector />
        </div>
        <ScrollController />
        <AboutModal />
      </PageContext>
    </ScrollContext>
  )
}

export default App
