import { Context, controller, provide, get, post, del, inject } from "midway";
import { IBannerService } from "@services/banner/index";
@provide()
@controller("/banner")
export class BannerController {
  constructor() {}
  @inject()
  bannerService: IBannerService;
  @get("/list")
  async index(ctx: Context) {
    ctx.successHandler(await this.bannerService.list());
  }
  @post("/add")
  async add(ctx: Context) {
    const { body } = ctx.request;
    ctx.successHandler(await this.bannerService.add(body));
  }
  @del("/:id")
  async del(ctx: Context) {
    const { params } = ctx;
    const { id } = params;
    ctx.successHandler(await this.bannerService.del(id));
  }
}
