package com.dao;

import com.entity.ChengjixinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.ChengjixinxiVO;
import com.entity.view.ChengjixinxiView;


/**
 * 成绩信息
 * 
 * @author 
 * @email 
 * @date 2021-01-07 20:08:00
 */
public interface ChengjixinxiDao extends BaseMapper<ChengjixinxiEntity> {
	
	List<ChengjixinxiVO> selectListVO(@Param("ew") Wrapper<ChengjixinxiEntity> wrapper);
	
	ChengjixinxiVO selectVO(@Param("ew") Wrapper<ChengjixinxiEntity> wrapper);
	
	List<ChengjixinxiView> selectListView(@Param("ew") Wrapper<ChengjixinxiEntity> wrapper);

	List<ChengjixinxiView> selectListView(Pagination page,@Param("ew") Wrapper<ChengjixinxiEntity> wrapper);
	
	ChengjixinxiView selectView(@Param("ew") Wrapper<ChengjixinxiEntity> wrapper);
	
}
