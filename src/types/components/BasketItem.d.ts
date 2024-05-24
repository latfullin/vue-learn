export {}

declare global {
  namespace Component {
    type AdminCoursePostAddData = Pick<
      ApiAdminCoursePostShowResource,
      'thumbnail' | 'name' | 'excerpt'
    > & {
      category_id: number | null
    }

    type AdminCoursePostEditData = Omit<Api.AdminCoursePostShowResource, 'lectures'> & {
      curator_id: number | null
      category_id: number | null
      lectures: Component.AdminCoursePostLectureData[]
    }

    type AdminCoursePostLectureData = Api.AdminLectureIndexResource & {
      loading: boolean
      modified: boolean
    }
  }
}