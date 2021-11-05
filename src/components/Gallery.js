
import ImageList from '@material-ui/core/ImageList'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import ImageListItem from '@material-ui/core/ImageListItem'

export function Gallery({ photos }) {
    return (
        <div>
            <ImageList rowHeight={260} cols={3}>
                {photos.map((photo) => (
                    <ImageListItem key={photo.id} style={{ flexGrow: '1' }} cols={parseInt((photo.width / 1200 / 3).toFixed(2))}>
                        <img
                            src={photo.urls.regular}
                            alt={photo.alt_description} />
                        <ImageListItemBar subtitle={photo.user.name} title={photo.description} />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}
