package com.springrest.springrest.service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseServiceImpl implements CourseService{
@Autowired
private CourseDao courseDao;


//    List<Course> list;
    public CourseServiceImpl(){
//        list=new ArrayList<>();
//        list.add(new Course(145,"Java Core Course","this course contains basic of java"));
//        list.add(new Course(146,"Python Course","this course contains basic of python"));
//        list.add(new Course(147,"Spring boot Course","this course contains all springboot course"));
//
//









    }

    @Override
    public List<Course> getCourses() {
        return courseDao.findAll();
    }
    @Override
    public Course getCourse(long courseId) {
//        Course c=null;
//        for(Course course:list){
//            if(course.getId()==courseId){
//                c=course;
//                break;
//            }
//        }
//        return c;
        return courseDao.getOne(courseId);



    }

    @Override
    public Course addCourse(Course course) {
//        list.add(course);
//        return course;

        courseDao.save(course);
        return course;

    }

    @Override
    public Course updateCourse(Course course) {
//        list.forEach(e->{
//            if (e.getId()==course.getId()) {
//                e.setTitle(course.getTitle());
//                e.setDescription(course.getDescription());
//            }
//        });
//        return course;

        courseDao.save(course);
        return course;
    }

    @Override
    public void deleteCourse(long courseId) {
//        list=this.list.stream().filter(e->e.getId()!=courseId).collect(Collectors.toList());


        Course course=courseDao.getOne(courseId);
        courseDao.delete(course);
    }
}
