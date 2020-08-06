import CMS from 'netlify-cms-app'
import '../assets/sass/styles.sass'
import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ArticlePreview from './preview-templates/ArticlePreview'
import GalleryPagePreview from './preview-templates/GalleryPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import OrderPagePreview from './preview-templates/OrderPagePreview'

CMS.init()
CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('gallery', GalleryPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('order', OrderPagePreview)
CMS.registerPreviewTemplate('blog', ArticlePreview)
