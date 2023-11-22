import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ChangeCategoryDto } from './dto/change-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.categoryService.deleteCategoryById(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.updateCategory(id, updateCategoryDto);
  }

  @Patch()
  changeCategory(@Body() changeCategoryDto: ChangeCategoryDto) {
    return this.categoryService.changeCategory(changeCategoryDto.DataID, changeCategoryDto.nextCID);
  }

  @Post(':userID')
  createCategory(@Param('userID') userID: number, @Body() createCategoryDto: CreateCategoryDto) {
    console.log('controller');
    return this.categoryService.createCategory(userID, createCategoryDto.Department);
  }
}
